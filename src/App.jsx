import "./App.css";
import { AiFillCalculator } from "react-icons/ai";
import { BsFillArrowUpLeftSquareFill } from "react-icons/bs";
import { BiArea } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <ul className="list">
        <li className="item">
          <AiFillCalculator className="icon" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique?
          </span>
        </li>
        <li className="item">
          <BsFillArrowUpLeftSquareFill className="icon" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique?
          </span>
        </li>
        <li className="item">
          <BiArea className="icon" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique?
          </span>
        </li>
      </ul>
    </div>
  );
}

export default App;
