import sussy from "./assets/sussy.png";
import { IsOdd } from "./components/IsOdd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://www.youtube.com/watch?v=grd-K33tOSM">
          <img src={sussy} className="logo" alt="Sussy" />
        </a>
      </div>
      <h1>Is it odd?</h1>
      <IsOdd />
    </div>
  );
}

export default App;
