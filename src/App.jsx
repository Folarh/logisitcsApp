import "./App.css";
import GetItems from "./components/items/GetItems";
import Navbar from "./components/navbar/Navbar";
import NavBelow from "./components/navbelow/NavBelow";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div>
      <Navbar />
      <NavBelow />
      <Welcome />
      <GetItems />
    </div>
  );
}

export default App;
