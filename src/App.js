import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Component
import Store from './component/Store';
import ProductDetails from './component/ProductDetails';

// context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Switch>
          <Route path= "/products/:id" component={ProductDetails} />
          <Route path= "/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
