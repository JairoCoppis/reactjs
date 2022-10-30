import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {ItemListContainer1} from './components/ItemListContainer1';
import {ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<ItemListContainer1/>}
      />
      <Route path="detail" element={<ItemDetailContainer/>}
      />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
