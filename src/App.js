import './App.css';

// Component
import Store from './component/Store';

// context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
