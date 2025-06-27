import React, { useState } from "react";

function Calculator() {
  const [data, setData] = useState("");

  const getValue = (e) => {
    console.log(e.target.value);
    setData(data.concat(e.target.value));
  };
  const calculation = () => {
    setData(eval(data).toString());
  };
  const back = () => {
    setData(data.slice(0, -1));
  };
  const clear = () => {
    setData("");
  };
  return (
    <div>
      <div className="container">
        <div>
          <input placeholder="0" value={data} />
        </div>
        <br />

        <button onClick={getValue} value="(">
          (
        </button>
        <button onClick={getValue} value=")">
          )
        </button>
        <button onClick={getValue} value="%">
          %
        </button>
        <button onClick={clear}>AC</button>

        <button onClick={getValue} value="7">
          7
        </button>
        <button onClick={getValue} value="8">
          8
        </button>
        <button onClick={getValue} value="9">
          9
        </button>
        <button onClick={getValue} value="*">
          x
        </button>

        <button onClick={getValue} value="4">
          4
        </button>
        <button onClick={getValue} value="5">
          5
        </button>
        <button onClick={getValue} value="6">
          6
        </button>
        <button onClick={getValue} value="-">
          -
        </button>

        <button onClick={getValue} value="1">
          1
        </button>
        <button onClick={getValue} value="2">
          2
        </button>
        <button onClick={getValue} value="3">
          3
        </button>
        <button onClick={getValue} value="+">
          +
        </button>

        <button onClick={getValue} value="0">
          0
        </button>
        <button onClick={back}>Back</button>
        <button onClick={calculation}>=</button>
        <button onClick={getValue} value="/">
          /
        </button>
      </div>
    </div>
  );
}

export default Calculator;
