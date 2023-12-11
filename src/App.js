import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { TopGap } from "./FactoryComponent/TopGap";
import { About } from "./components/About";
import { Navbaar } from "./components/Navbaar";

function App() {
  return (
    <div className="App">
      <TopGap />
      <Navbaar />
      <About />
    </div>
  );
}

export default App;
