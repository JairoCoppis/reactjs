import './App.css'; // Es una libreria o extension
import {Header} from './components/Header';
import {Footer} from './components/Footer'; //EJ Footer export nombrado (si hubiera mas de uno se usa la coma)
import {ItemListContainer} from './components/ItemListContainer';

function App() {
  return (
    <>
    <Header/>
    <ItemListContainer greeting="Bienvenid@" edad="29"/>
    <Footer/>
    </>
  );
}

export default App;
