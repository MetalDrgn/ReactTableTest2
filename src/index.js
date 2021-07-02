import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';

const setup = Array(12).fill(Array(3).fill(null));
function Tbl({ setup, incell, id, getinfo }) {
  // React.useEffect(() => {
  //   console.log("change");
  // });
  let i = 0;
  // console.log(setup.length);
  // document.querySelector("#a3").innerText
  return (
    <table id={id}>
      {setup.map((e) => (
        <Roww setup={setup[0]} i={(i += 3)} incell={incell} />
      ))}
    </table>
  );
}
function Roww({ setup, i, incell, getinfo }) {
  // console.log(setup[0].length)
  return (
    <tr>
      {setup.map((e) => (
        <Cell incell={incell} i={i++} />
      ))}
    </tr>
  );
}
function Cell({ i, incell, getinfo }) {
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
ReactDOM.render(
  <>
    <h1>Hello World</h1>
    <Tbl id={"tbl" + String(0)} setup={setup} incell={"asd"} getinfo={null} />
    <Tbl
      id={"tbl" + String(1)}
      setup={setup}
      incell={<input type="number" onChange={e => console.log(e.target)} />}
    />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
