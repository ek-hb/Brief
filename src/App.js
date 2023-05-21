import "./App.css";
import Component1 from "./Component/ComponentOne/Component1";
import Component2 from "./Component/ComponentTwo/Component2";
import MainOne from "./main/mainOne/mainOne";
import MainTwo from "./main/mainTwo/mainTwo";
import Sidebar from "./sidebar/sidebar";

function App() {
  return (
    <div>
      <div className="sidebar">
        <Component1 />
        <Component2 />
      </div>
      <div className="main">
        <MainOne />
        <MainTwo />
      </div>
      <div className="sidebarOne">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
