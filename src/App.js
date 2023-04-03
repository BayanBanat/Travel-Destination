// import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home.js';
// import Tours from './component/Tours/Tours';
const toursData = require("./data/data.json");




function App() {
  return (
    <div class="app">
    <Home id="home" data={toursData} />
    </div>

  )
}

export default App;
