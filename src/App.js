import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Component
import Store from './component/Store';
import ProductDetails from './component/ProductDetails';

// context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path= "/products/:id" component={ProductDetails} />
        <Route path= "/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
