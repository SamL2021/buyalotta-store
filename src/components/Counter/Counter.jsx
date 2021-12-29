import styles from "./Counter.module.scss";
import {
    getCartProducts,
    getProducts,
    updateCartProduct,
    addCartProduct,
} from "../../Assets/services/firesbase-utils";

// import { getData } from "../Products/Products";

export const Counter = () => {
    //     const handleIncrement = async (event) => {
    //         const data = await getCartProducts();
    //         const currentProduct = data.find((a) => a.id === event);
    //         console.log("current product is ", currentProduct);
    //         if (!currentProduct) {
    //             addCartProduct(event);
    //         } else {
    //             currentProduct.count++;
    //             updateCartProduct(currentProduct);
    //         }
    //         getData();
    //     };

    //     const handleDecrement = async (event) => {
    //         const data = await getCartProducts();
    //         const currentProduct = data.find((a) => a.id === event);
    //         console.log("current product is ", currentProduct);
    //         if (!currentProduct) {
    //             addCartProduct(event);
    //         } else if (currentProduct.count === 0) {
    //             return;
    //         } else {
    //             currentProduct.count--;
    //             updateCartProduct(currentProduct);
    //         }
    //         getData();
    //     };

    return (
        <div>
            <div>
                <p>Select to add to cart</p>
                <h2>0</h2>
                <button>+</button>
                <button>-</button>
                {/* <button onClick={() => handleDecrement(products.id)}>-</button>
                <div>{products.count}</div>
                <button onClick={() => handleIncrement(products.id)}>+</button> */}
            </div>
        </div>
    );
};
