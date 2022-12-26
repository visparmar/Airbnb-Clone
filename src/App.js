import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Filter from './components/Filter/index.js'
import Cards from './components/Cards/index.js'
function App() {
  return (
    <div className="App">
   <Header/>
   <Filter/>
   <Cards />
    </div>
  );
}

export default App;
