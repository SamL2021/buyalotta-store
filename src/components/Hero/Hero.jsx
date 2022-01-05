import styles from "./Hero.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "../../containers/ProductPage";
import Cart from "../../containers/Cart";
import Home from "../Home/Home";
import Products from "../../containers/Products";
import Footer from "../Footer/Footer";

// Images for navbar
import cart from "../../Assets/img/cart.png";
import home from "../../Assets/img/home-icon.png";
import logo from "../../Assets/img/store-logo.jpg";

const Hero = () => {
    return (
        <div>
            <Router>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.nav__bar}>
                        <li>
                            <Link to="/">
                                <img
                                    className={styles.img}
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
                                    className={styles.img}
                                    src={cart}
                                    alt="cart"
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/product/:id">
                        <ProductPage />
                    </Route>
                    <Route exact path="/product">
                        <Products />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
};

export default Hero;
