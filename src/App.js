import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./components/page/Product";
import Basket from "./components/page/Basket";
import Favorites from "./components/page/Favorites";
import ProductDetail from "./components/page/ProductDetail";

function App() {

  return (
      <div className='App'>
          <Header/>
          <Routes>
              <Route path={'/'} element={<Product/>}/>
              <Route path={'/:id'} element={<ProductDetail/>}/>
              <Route path={'/basket'} element={<Basket/>}/>
              <Route path={'/favorites'} element={<Favorites/>}/>
          </Routes>
      </div>
  );
}

export default App;
