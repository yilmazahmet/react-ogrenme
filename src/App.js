import logo from './logo.svg';
import './App.css';
import './style.css';
import Test from "./test.js"
import { Title } from "./components.js";
import Bootstrap from "./Bootstrap";

function App() {
  return (
    <div className="App">
      <Title>Deneme</Title>
      <img src='logo192.png' alt='Logo'></img>
      <img src={logo} alt='Logo'></img>
      <Bootstrap />
      <Test />
    </div>
  );
}

export default App;
 