import "./App.css";
import Counter from "./Components/Counter";
import Foter from "./Components/Foter";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
    <Navbar/>
      <Counter />
      <Foter/>
    </div>
  );
}

export default App;
