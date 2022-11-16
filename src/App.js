import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {ItemListContainer1} from './components/ItemListContainer1';
import {ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Cart} from './components/Cart';
import {CartProvider} from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <Header/>
    <Routes>
      <Route path="/" element={<ItemListContainer1/>}
      />
      <Route path="/category/:categoryName" element={<ItemListContainer1/>}
      />
      <Route path="/item/:idProducto" element={<ItemDetailContainer/>}
      />
      <Route path="/cart" element={<Cart/>} 
      />
      </Routes> 
    <Footer/>
    </CartProvider>
    </BrowserRouter>
  );
}
export default App;