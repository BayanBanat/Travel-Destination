
import './App.css';
import Home from './component/Home/Home.js';
const toursData = require("./data/data.json");




function App() {
  return (
    <div class="app">
    <Home id="home" data={toursData} />
    </div>

  )
}

export default App;
