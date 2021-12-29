import React from "react";
import styles from "./ProductGrid.module.scss";
import Products from "../../components/Products";

const ProductGrid = () => {
    return (
        <>
            <div className={styles.container}></div>
            <Products />
        </>
    );
};

export default ProductGrid;
