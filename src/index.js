import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import App from './App';

// ------------------- Tbl: Creates the rows in the tables => Roww
function Tbl({ incell, id, getinfo, objj, func }) {
  let i = Array(12).fill(null);
  let cnt = 0;

  return (
    <>
      <table id={id}>
        {i.map((e, r) => {
          return <Roww cnt={cnt++} incell={incell} objj={objj} func={func} />;
        })}
      </table>
    </>
  );
}

// -------------------  Roww: Creates the 3 columns in each row => Cell
function Roww({ cnt, incell, func, objj }) {
  // console.log(i);
  let c = 0;
  return (
    <tr>
      <Cell incell={incell} cnt={cnt} c={c++} objj={objj} func={func} />
      <Cell incell={incell} cnt={cnt} c={c++} objj={objj} func={func} />
      <Cell incell={incell} cnt={cnt} c={c++} objj={objj} func={func} />
    </tr>
  );
}

// ------------------- Cell: for each cell of first table it runs func and appends
// -------------------------the rc of the cell to a useRef. Otherwise => Boxes
function Cell({ incell, cnt, c, func, objj }) {
  if (incell) {
    func(cnt, c, 0);
  }
  return (
    <td>
      {incell ? (
        "r" + cnt + "c" + c + objj.current[objj.current.length - 1].val
      ) : (
        <Boxes row={cnt} col={c} />
      )}
    </td>
  );
}

// ------------------- Boxes: creates input boxes for second table.
function Boxes({ row, col }) {
  return (
    <input
      row={row}
      col={col}
      type="number"
      id={Math.floor(Math.random() * 1000)}
      onChange={(e) => console.log(e.target, e.target.value)}
    />
  );
}

// ------------------- Tables: Creates the 2 main tables => Tbl
function Tables() {
  const objj = React.useRef([]);
  function chg(r, c, v) {
    objj.current.push({ row: r, col: c, val: v });
  }
  return (
    <>
      <h1>Hello World</h1>
      <Tbl
        id={"tbl" + String(0)}
        incell={true}
        getinfo={null}
        objj={objj}
        func={chg}
      />
      <Tbl id={"tbl" + String(1)} incell={null} />
    </>
  );
}
// -------------- Render
ReactDOM.render(<Tables />, document.getElementById("root"));
