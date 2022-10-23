import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {ItemListContainer} from './components/ItemListContainer';
import {Contador} from './components/Contador';

import ItemList from './components/ItemList';

function App() {
  return (
    <>
    <Header/>
    <ItemListContainer />
    <ItemList/>
    <Contador stock={10}/>
    <Footer/>
    </>
  );
}

export default App;
