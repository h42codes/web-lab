import "./App.css";
import BaristaForm from "./components/BaristaForm";

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <div className="title">Oh My Grind</div>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  );
}

export default App;
