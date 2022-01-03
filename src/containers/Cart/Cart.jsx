import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import {
    getCartProducts,
    getCollection,
} from "../../Assets/services/firesbase-utils";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const getData = async () => {
        const cartData = await getCartProducts();
        const data = await getCollection();
        // console.log("cart data ", cartData);

        if (cartData.length > 0) {
            cartData.map((cartProduct) => {
                let product = data.find((d) => d.id === cartProduct.id);
                cartProduct.name = product.name;
                cartProduct.price = product.price * cartProduct.count;
            });
        }
        setCartProducts(cartData);
    };

    useEffect(() => {
        let cartTotal = cartProducts.reduce((acc, cartItem) => {
            return acc + cartItem.price;
        }, 0);
        setTotal(cartTotal);
    }, [cartProducts]);

    useEffect(() => {
        //call getData
        getData();
    }, []);

    return (
        <>
            <div className={styles.cart__container}>
                {/* need to filter products */}
                <div className={styles.cart}>
                    <div className={styles.cart__product}>
                        <h3>Quantity</h3>
                        <h3>Product</h3>
                        <h3>Price</h3>
                    </div>

                    {cartProducts.map((product) => (
                        <div key={product.id} className={styles.cart__product}>
                            <p className={styles.cart__count}>
                                {product.count}
                            </p>
                            <p>{product.name}</p>

                            <p className={styles.cart__price}>
                                ${product.price}
                            </p>
                        </div>
                    ))}
                    <p className={styles.cart__total}>Total: ${total}</p>
                </div>
            </div>
        </>
    );
};

export default Cart;
