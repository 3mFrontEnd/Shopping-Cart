import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// context
import { CartContext } from '../../context/CartContextProvider';

// icons
import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
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