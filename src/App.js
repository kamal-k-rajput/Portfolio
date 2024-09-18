import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TopGap } from "./FactoryComponent/TopGap";
import { About } from "./components/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Songlist } from "./components/Music/Songlist";

function App() {
  return (
    <div
      className="App"
      style={{
        background:
          "radial-gradient(600px at 576px 3314px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <BrowserRouter>
        <TopGap />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/music" element={<Songlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
