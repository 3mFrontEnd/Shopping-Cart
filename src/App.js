import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Component
import Store from './component/Store';
import ProductDetails from './component/ProductDetails';
import Navbar from './component/shared/Navbar';
import ShopCart from './component/ShopCart';

// context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar / >
        <Switch>
          <Route path= "/products/:id" component={ProductDetails} />
          <Route path= "/products" component={Store} />
          <Route path= "/Cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
