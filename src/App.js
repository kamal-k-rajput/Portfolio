import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TopGap } from "./FactoryComponent/TopGap";
import { About } from "./components/About";

function App() {
  return (
    <div
      className="App"
      style={{
        background:
          "radial-gradient(600px at 576px 3314px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
      onMouseMove={(e) => {
        console.log("xy", e.clientX, e.clientY);
      }}
    >
      <TopGap />
      <About />
    </div>
  );
}

export default App;
