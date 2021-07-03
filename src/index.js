import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import App from './App';

function Tbl({ incell, id, getinfo, ref }) {
  const [arr, setArr] = useState(Array(12).fill(Array(3).fill(null)));

  let i = 0;
  // React.useEffect(() => {
  //   console.log("change");
  // });
  // console.log(arr.length);
  // document.querySelector("#a3").innerText
  console.log(ref);
  return (
    <table id={id}>
      <tbody>
        {arr.map((e) => (
          <Roww arr={arr[0]} i={(i += 3)} incell={incell} />
        ))}
      </tbody>
    </table>
  );
}
function Roww({ arr, i, incell, getinfo, ref }) {
  // console.log(arr[0].length)
  return (
    <tr>
      {arr.map((e) => (
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
  const cellRef = useRef();
  return (
    <>
      <h1>Hello World</h1>
      <Tbl id={"tbl" + String(0)} incell={"asd"} getinfo={null} />
      <Tbl
        id={"tbl" + String(1)}
        incell={<input type="number" ref={cellRef} />}
      />
    </>
  );
}
ReactDOM.render(<Temp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
