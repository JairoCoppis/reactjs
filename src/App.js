import './App.css'; // Es una libreria o extension
import {Header} from './components/Header';
import {Footer} from './components/Footer'; //EJ Footer export nombrado (si hubiera mas de uno se usa la coma)
import {Main} from './components/Main';

function App() {
  return (
    <>
    <Header/>
    <Main saludo="Bienvenido" nombre="29"/>
    <Footer/>
    </>
  );
}

export default App;
