// import { useEffect, useState } from "react";
import styles from "./Counter.module.scss";
// import {
//     getCartProducts,
//     getCollection,
//     updateCartProduct,
//     addCartProduct,
//     deleteCartProduct,
// } from "../../Assets/services/firesbase-utils";

const Counter = () => {
    return (
        <>
            <div className={styles.container}>
                <p>
                    <strong>Add to cart</strong>
                </p>
                <p className={styles.count}>0</p>
                <div className={styles.counter}>
                    <button className={styles.counter__button}>+</button>
                    <br />
                    <button className={styles.counter__button}>-</button>
                </div>
            </div>
        </>
    );
};

export default Counter;
