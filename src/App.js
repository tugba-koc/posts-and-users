import "./App.css";
import Navbar from "./components/Navbar/Index";
import { ResultProvider } from "./context/ResultContext";

function App() {
  return (
    <div className="main">
      <ResultProvider>
        <Navbar />
      </ResultProvider>
    </div>
  );
}

export default App;
