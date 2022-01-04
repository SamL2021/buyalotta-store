import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollection } from "../../Assets/services/firesbase-utils";
import styles from "./Products.module.scss";

export const Products = () => {
    // setting products and query variables to push to, setProducts to set value of products.
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getCollection();
        setProducts(data);
    };

    useEffect(() => {
        //call getData once
        getData();
    }, []);

    // Displays items as grid

    return (
        <div className={styles.container}>
            <ul className={styles.contents}>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={"/product/" + product.id}>
                            <img
                                className={styles.img}
                                src={product.image}
                                alt={product.name}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
