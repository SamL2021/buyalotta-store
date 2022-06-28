import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    getItem,
    getCartProducts,
    addCartProducts,
} from "../../Assets/services/firesbase-utils";
import styles from "./ProductCard.module.scss";
import Counter from "../../containers/Counter/Counter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = () => {
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const data = await getItem(id);
            setProduct(data);
        };
        getData();
    }, []);

    const handleCreate = async (newCartProduct) => {
        newCartProduct.quantity = count;
        const { id, ...newRecord } = newCartProduct;
        await addCartProducts(newRecord);
        getCartProducts();
    };

    const cartActions = () => {
        handleCreate(product);
        notify();
    };

    const notify = () => toast("Added to cart!");

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
                        <div className={styles.content__sml}>
                            <p>
                                <strong>Dimensions:</strong>
                                {product.dimensions}
                            </p>
                            <p>
                                <strong>Weight: </strong> {product.weight} kgs
                            </p>
                        </div>
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
                            <Counter count={count} setCount={setCount} />
                            <button
                                className={styles.button_add}
                                onClick={() => {
                                    cartActions();
                                }}
                            >
                                Add to cart
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Coming soon...</p>
            )}
        </>
    );
};

export default ProductCard;
