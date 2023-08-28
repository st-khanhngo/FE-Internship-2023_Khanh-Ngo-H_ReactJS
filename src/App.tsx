import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './stylesheets/style.scss';
import Home from './app/pages/home/Home';
import Cart from './app/pages/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/cart'
          element={<Cart />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
