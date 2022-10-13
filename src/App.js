import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

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
