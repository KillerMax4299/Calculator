import "./App.css";UIElements
import UIElements from "./components/UIElements";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="m-2 h-screen flex justify-center items-center ">
      <span>
          <Heading/>
          <UIElements/>
      </span>
    </div>
  );
}

export default App;
