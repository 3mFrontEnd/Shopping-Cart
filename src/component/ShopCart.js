import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

// component
import Cart from './shared/Cart';

// style
import styles from "./ShopCart.module.css";

// context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payment:</span> {state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={()=> dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button className={styles.checkout} onClick={()=> dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                    <h3>Want To Buy?</h3>
                    <Link to="/products">Back to Shop</Link>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;