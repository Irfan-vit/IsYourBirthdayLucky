import React, { useState } from "react";
import "./styles.css";
import bd from "./bd.png";
import sad from "./sad.gif";
import happy from "./hppy.gif";
import think from "./think.gif";

var dateInput = "";
let luckyNo = 0;
const happyImgDiv = (
  <img alt="happyImage" src={happy} width="200px" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={sad} width="200px" height="200px" />
);
const ThinkingImgDiv = (
  <img alt="unhappyImage" src={think} width="200px" height="200px" />
);
export default function App() {
  const [displayResult, setDisplayResult] = useState(["", ""]);
  const [displayAlert, setDisplayAlert] = useState(
    "Privacy Notice! We are not storing your data ❌"
  );
  function checkBtnHandler(e) {
    e.preventDefault();
    setDisplayResult(["Are You Lucky ??", ThinkingImgDiv]);
    setTimeout(() => {
      const dateArray = dateInput.split("-");
      let sum = 0;
      dateArray.map((string) => {
        for (let i = 0; i < string.length; i++) {
          sum = sum + Number(string[i]);
        }
      });
      console.log(sum);
      if (sum % Number(luckyNo) === 0) {
        setDisplayResult(["Hurray!!You are a lucky person!", happyImgDiv]);
      } else {
        setDisplayResult([
          "Oops!!Your birthday is not a lucky number!",
          unhappyImgDiv
        ]);
      }
    }, 3000);
  }
  return (
    <div className="App">
      <div
        className="main"
        style={{
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundImage: `url("${bd}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div id="topSection" className="title">
          <h1>Is Your Birthday Lucky ?</h1>
          <a href="#foot">
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
      <div className="head">
        <section id="mainSection" className="section">
          <div
            id="privacyBox"
            onClick={() => {
              setDisplayAlert("");
            }}
            className="alert"
            style={{ cursor: "pointer" }}
          >
            {displayAlert}
          </div>
          <h2>Enter Your Birthdate and lucky number to continue...</h2>
          <form onSubmit={checkBtnHandler}>
            <label className="label" for="selectDate">
              Select your Birth date:
            </label>
            <input
              onChange={(e) => {
                dateInput = e.target.value;
              }}
              id="select-date"
              type="date"
              required
            ></input>
            <label className="label" for="luckyNo">
              Enter your Lucky Number:
            </label>
            <input
              id="luckyNo"
              required
              onChange={(e) => {
                luckyNo = e.target.value;
              }}
              type="number"
              min="1"
            />
            <button type="submit">check</button>
            <button
              onClick={(e) => {
                setDisplayResult(["", ""]);
              }}
              type="reset"
            >
              Reset
            </button>
          </form>
          <div className="output">
            <div className="label">{displayResult[1]}</div>
            {displayResult[0]}
          </div>
        </section>
        {/* footer section */}
        <footer id="foot">
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Irfan-vit">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/in/irfan-nawaz/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://shaik-irfan.netlify.app/">
                <i class="fas fa-laptop-code"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://car-failure-analysis.netlify.app/index.html">
                <i class="fas fa-blog"></i>
              </a>
            </li>
          </ul>

          <a href="#topSection">
            <i class="fas fa-chevron-up"></i>
          </a>

          <div className="legacyText">
            made with ❤️ by |{" "}
            <a
              href="https://shaik-irfan.netlify.app/about.html"
              style={{ cursor: "pointer", color: "Black" }}
            >
              Irfan Nawaz
            </a>{" "}
            |{" "}
            <a
              href="#privacyBox"
              onClick={() => {
                setDisplayAlert(
                  "Privacy Notice! We are not storing your data ❌"
                );
              }}
              style={{ cursor: "pointer", color: "Black" }}
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
