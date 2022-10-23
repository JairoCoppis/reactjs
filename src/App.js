import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {ItemListContainer1} from './components/ItemListContainer1';
import {Contador} from './components/Contador';


function App() {
  return (
    <>
    <Header/>
    <ItemListContainer1/>
    <Contador stock={10}/>
    <Footer/>
    </>
  );
}

export default App;
