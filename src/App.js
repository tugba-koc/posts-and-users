import "./App.css";
import Navbar from "./components/Navbar/Index";
import { ResultProvider } from "./context/ResultContext";

function App() {
  return (
    <div>
      <ResultProvider>
        <Navbar />
      </ResultProvider>
    </div>
  );
}

export default App;
