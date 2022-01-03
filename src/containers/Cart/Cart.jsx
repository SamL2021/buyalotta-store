import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import {
    getCartProducts,
    deleteCartProduct,
} from "../../Assets/services/firesbase-utils";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    const getCart = async () => {
        const data = Array.from(await getCartProducts());
        setCartProducts(data);
    };

    useEffect(() => {
        getCart();
    }, []);

    const handleCartRemoval = async (id) => {
        await deleteCartProduct(id);
        getCart();
    };

    return (
        <>
            <div className={styles.cart__container}>
                <div className={styles.cart}>
                    <div className={styles.cart__product}>
                        <h3>Quantity</h3>
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Remove</h3>
                    </div>

                    {cartProducts.map((product) => (
                        <div key={product.id} className={styles.cart__product}>
                            <p className={styles.cart__count}>
                                {product.quantity}
                            </p>
                            <p>{product.name}</p>

                            <p>${product.price * product.quantity}</p>
                            <button
                                className={styles.cart__total__button}
                                onClick={() => handleCartRemoval(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cart;
