import React from "react";
import styles from "./Header.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductGrid from "../../containers/ProductGrid";
import Product from "../Product";
import Cart from "../../containers/Cart";
import Home from "../../Home/Home";

import cart from "../../Assets/img/cart.png";
import home from "../../Assets/img/home-icon.png";
import logo from "../../Assets/img/store-logo.jpg";

const Header = () => {
    return (
        <div>
            <Router>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles["logo"]} />
                </Link>

                <nav className={styles["nav"]}>
                    <ul className={styles["nav-bar"]}>
                        <li>
                            <Link to="/">
                                <img
                                    className={styles["img"]}
                                    src={home}
                                    alt="home"
                                />
                            </Link>
                        </li>

                        <li>
                            <Link to="/product">
                                <strong>Our Luggage</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <img
                                    className={styles["img"]}
                                    src={cart}
                                    alt="cart"
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    {/* <Route exact path="/about">
                            <About />
                        </Route> */}
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                    <Route exact path="/product">
                        <ProductGrid />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Header;
