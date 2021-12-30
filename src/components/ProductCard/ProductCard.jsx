import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Assets/services/firesbase-utils";
import styles from "./ProductCard.module.scss";
import Counter from "../../containers/Counter/Counter";

const ProductCard = ({ results }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const data = await getProduct(id);
            setProduct(data);
        };
        getData();
    }, []);

    // Displays individual product pages

    return (
        <>
            {product ? (
                <div className={styles.container}>
                    <img
                        src={product.image}
                        alt="product"
                        className={styles.img}
                    />
                    <div className={styles.content}>
                        <h2>{product.brand}</h2>
                        <h3>{product.name}</h3>
                        <p>Product No: 00{product.id}</p>
                        <br />
                        <p>
                            <strong>${product.price}</strong>
                        </p>
                        <br />
                        <p>{product.description}</p>
                        <br />
                        <p>
                            <em>Dimensions: </em> {product.dimensions}
                        </p>
                        <p>
                            <em>Weight: </em> {product.weight} kgs
                        </p>
                        <br />
                        <div className={styles["color-container"]}>
                            <h4>Color Choices:</h4>
                            <div className={styles.radio_item}>
                                <input
                                    id={product.value}
                                    type="radio"
                                    value={product.variants[0]}
                                    name={product}
                                    defaultChecked
                                />
                                <label className={styles["label"]}>
                                    {product.variants[0]}
                                </label>
                            </div>
                            <div className={styles.radio_item}>
                                <input
                                    id={product.value}
                                    type="radio"
                                    value={product.variants[1]}
                                    name={product}
                                />
                                <label className={styles["label"]}>
                                    {product.variants[1]}
                                </label>
                            </div>
                        </div>
                        <div>
                            <Counter />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default ProductCard;
