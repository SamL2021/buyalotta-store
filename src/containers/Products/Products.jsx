import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCollection } from "../../Assets/services/firesbase-utils";
import styles from "./Products.module.scss";

//
const useQuery = () => {
    // console.log(useLocation());
    return new URLSearchParams(useLocation().search);
    //The useLocation hook returns the location object that represents the current URL. Like a useState that returns a new location whenever the URL changes.
};

export const Products = () => {
    // setting products and query variables to push to, setProducts to set value of products.
    const [products, setProducts] = useState([]);

    const query = useQuery();
    // const [count, setCount] = useState(start);

    const getData = async () => {
        const rawLimit = query.get("limit");
        const limit = rawLimit ? parseInt(rawLimit) : undefined;

        const data = await getCollection(limit);
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
