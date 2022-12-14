import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// style
import styles from "./Navbar.module.css";

// context
import { CartContext } from '../../context/CartContextProvider';

// icons
import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/Cart">
                        <img src={shopIcon} alt="shopping cart icon" />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;