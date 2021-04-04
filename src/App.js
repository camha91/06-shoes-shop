import './App.css';
import ProductList from './component/ProductList';
import dataShoes from './Data/data.json';

function App() {
  return (
    <div className="app">
      <ProductList arrProduct={dataShoes}/>
    </div>
  );
}

export default App;
