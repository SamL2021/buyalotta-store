import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    getCartProducts,
    getProducts,
    updateCartProduct,
    addCartProduct,
} from "../../Assets/services/firesbase-utils";
import styles from "./Products.module.scss";

//
const useQuery = () => {
    // console.log(useLocation());
    return new URLSearchParams(useLocation().search);
};

const Products = () => {
    // setting products and query variables to push to, setProducts to set value of products.
    const [products, setProducts] = useState([]);
    const query = useQuery();
    // const [count, setCount] = useState(start);

    const getData = async () => {
        const rawLimit = query.get("limit");
        const limit = rawLimit ? parseInt(rawLimit) : undefined;

        const data = await getProducts(limit);
        const cartData = await getCartProducts();
        console.log("data ", data);
        if (cartData.length > 0) {
            cartData.map((cartProduct) => {
                let product = data.find((d) => d.id === cartProduct.id);
                product.count = cartProduct.count;
            });
        }
        // console.log(data);
        setProducts(data);
    };

    useEffect(() => {
        //call getData
        getData();
    }, []);

    // const handleIncrement = async (event) => {
    //     const data = await getCartProducts();
    //     const currentProduct = data.find((a) => a.id === event);
    //     console.log("current product is ", currentProduct);
    //     if (!currentProduct) {
    //         addCartProduct(event);
    //     } else {
    //         currentProduct.count++;
    //         updateCartProduct(currentProduct);
    //     }
    //     getData();
    // };

    // const handleDecrement = async (event) => {
    //     const data = await getCartProducts();
    //     const currentProduct = data.find((a) => a.id === event);
    //     console.log("current product is ", currentProduct);
    //     if (!currentProduct) {
    //         addCartProduct(event);
    //     } else if (currentProduct.count === 0) {
    //         return;
    //     } else {
    //         currentProduct.count--;
    //         updateCartProduct(currentProduct);
    //     }
    //     getData();
    // };

    return (
        <>
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
            {/* <Count onchange={}/> */}
            {/* <div className={style.counter}>
                <p className={style.counter__title}>Add to cart </p>
                <button
                    className={style.counter__button}
                    onClick={() => handleDecrement(products.id)}
                >
                    {" "}
                    -{" "}
                </button>
                <div className={style.counter__value}>{products.count}</div>
                <button
                    className={style.counter__button}
                    onClick={() => handleIncrement(products.id)}
                >
                    {" "}
                    +{" "}
                </button>
            </div> */}
        </>
    );
};

export default Products;
