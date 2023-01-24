import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./page/Product";
import Basket from "./page/Basket";
import Favorites from "./page/Favorites";

function App() {

  return (
      <div className='App'>
          <Header/>
          <Routes>
              <Route path={'/'} element={<Product/>}/>
              <Route path={'/basket'} element={<Basket/>}/>
              <Route path={'/favorites'} element={<Favorites/>}/>
          </Routes>
      </div>
  );
}

export default App;
