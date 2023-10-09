import "./App.css";
import GetItems from "./components/items/GetItems";
import Navbar from "./components/navbar/Navbar";
import NavBelow from "./components/navbelow/NavBelow";
import Rider from "./components/rider/Rider";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div>
      <Navbar />
      <NavBelow />
      <Welcome />
      <GetItems />
      <Rider />
    </div>
  );
}

export default App;
