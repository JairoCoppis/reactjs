import './App.css';
import {Footer} from './components/Footer';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Cart} from './components/Cart';
import {CartProvider} from './context/CartContext'
import {Form} from './components/Form'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
            <Route path="/item/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Form/>}/>
            </Routes>  
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;