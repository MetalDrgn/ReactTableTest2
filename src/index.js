import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import App from './App';

function Tbl({ setup, incell, id, getinfo, row, func }) {
  // console.log(row);
  // React.useEffect(() => {
  //   console.log("change");
  // });
  let i = Array(12).fill(null);
  let cnt = 0;
  // console.log(setup.length);
  // document.querySelector("#a3").innerText

  // const [setupb, setSetupb] = React.useState(Array(12).fill(null));
  // function arr2(arr) {
  //   const newt = arr.map((e, r, all) => (r === 0 ? 2.5 : all[r - 1] + 2.5));
  //   console.log(newt);
  //   return newt;
  // }
  // setSetupb(arr2(setupb))

  // console.log(1);

  return (
    <>
    <table id={id}>
      {i.map((e, r) => {
        return <Roww setup={setup} cnt={cnt++} incell={incell} func={func} />;
      })}
    </table></>
  );
}
function Roww({ cnt, incell, setup, func }) {
  // console.log(i);
  let c = 0;
  return (
    <tr>
      <Cell incell={incell} cnt={cnt} c={c++} func={func} />
      <Cell incell={incell} cnt={cnt} c={c++} func={func} />
      <Cell incell={incell} cnt={cnt} c={c++} func={func} />
    </tr>
  );
}
function Cell({ incell, cnt, c, func }) {
  if (incell) {func(cnt, c, 0)} 
  // incell ? func(1, 2, 3) : null;
  return <td>{incell ? "r" + cnt + "c" + c : <Boxes row={cnt} col={c} />}</td>;
}
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

function Tables() {
  const [objj, setObj] = React.useState([]);
  const [setup, setSetup] = React.useState(arrsetup());
  console.log(objj);
  function arrsetup() {
    let arr = Array(10 * 3).fill(null);
    // console.log(arr)
    // let arr = Array(12).fill(null);
    let x = 1;
    for (let i in arr) {
      arr[i] = x++;
      // arr[i] = [];
      // for (let j = 0; j < 3; j++) {
      //   arr[i].push(x++);
      // }
    }
    return arr;
  }
  function chg2(r) {
    console.log(r);
  }
  function chg(r, c, v) {
    // const newTodos = [...setup];
    // const todo = newTodos.find((todo) => todo.id === id);
    // todo.complete = !todo.complete;
    // newTodos[r] = 1;
    // colsole.log(objj);

    setObj((prev) => [...prev, { row: r, col: c, val: v }]);
  }
  // console.log(arrsetup());
  return (
    <>
      <h1>Hello World</h1>
      <Tbl
        id={"tbl" + String(0)}
        setup={setup}
        incell={true}
        getinfo={null}
        func={chg}
      />
      <Tbl id={"tbl" + String(1)} setup={setup} incell={null} />
    </>
  );
}
// -------------- Render
ReactDOM.render(<Tables />, document.getElementById("root"));
