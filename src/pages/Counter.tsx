import { useState } from "react";
import "../pages/counterstyle.css";

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div className="nopadding">
      <h1 className="ch1">My counter</h1>
      <div className="mid">
        <p className="tmid">
          Counter value:
          <h3>{value}</h3>
        </p>
        <div>
          <button
            className="lbt"
            onClick={() => {
              setValue(value + 1);
            }}
          >
            +
          </button>
          <button
            className="rbt"
            onClick={() => {
              setValue(value - 1);
            }}
          >
            -
          </button>
        </div>
        <br />
        <br />
        <div>
          <button
            className="lbt"
            onClick={() => {
              setValue(value + 1);
            }}
          >
            +
          </button>
          <button
            className="rbt"
            onClick={() => {
              setValue(value - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
