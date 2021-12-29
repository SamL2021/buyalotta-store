import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Assets/services/firesbase-utils";
import styles from "./Product.module.scss";
import { Counter } from "../Counter/Counter";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const data = await getProduct(id);
            setProduct(data);
        };
        getData();
    }, []);

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
                            <strong>{product.price}</strong>
                        </p>
                        <br />
                        <p>{product.description}</p>
                        <br />
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

export default Product;
