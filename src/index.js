import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import App from './App';

function Tbl({ incell, id, getinfo, ref, arr }) {
  // const [arr, setArr] = useState(Array(12).fill(Array(3).fill(null)));
  let i = 0;
  // React.useEffect(() => {
  //   console.log("change");
  // });
  console.log(arr);
  // document.querySelector("#a3").innerText
  // console.log(ref);
  return (
    <table id={id}>
      <tbody>
        {console.log(arr)}
        {arr.map((e) => (
          <Roww arr2={arr[0]} i={(i += 3)} incell={incell} />
        ))}
      </tbody>
    </table>
  );
}
function Roww({ arr2, i, incell, getinfo, ref }) {
  // console.log(arr[0].length)
  return (
    <tr>
      {arr2.map((e) => (
        <Cell incell={incell} i={i++} />
      ))}
    </tr>
  );
}
function Cell({ i, incell, getinfo, ref }) {
  return (
    <td id={"a" + String(i++)}>
      {/* {document.querySelector("#tbl1 #a3 input").value ?
      document.querySelector("#tbl1 #a3 input").value : null} */}
      {"sdf"}
      {incell}
      {i++}
    </td>
  );
}
function Temp() {
  const [arr, setArr] = useState(Array(12).fill(Array(3).fill(0)));
  const cellRef = useRef();
  return (
    <>
      <h1>Hello World</h1>
      <Tbl id={"tbl" + String(0)} incell={"asd"} getinfo={null} arr={arr} />
      <Tbl
        id={"tbl" + String(1)}
        incell={<input type="number" ref={cellRef} />}
        arr={arr}
      />
      />
    </>
  );
}
ReactDOM.render(<Temp />, document.getElementById("root"));
