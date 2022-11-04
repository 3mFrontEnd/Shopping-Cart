import './App.css';

// context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <p>hello</p>
    </ProductContextProvider>
  );
}

export default App;
