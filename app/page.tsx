"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import Footer from "../components/Footer/page";

export default function Page() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression.toString());
        setResult(evalResult);
        setExpression("");
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  }

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <>
      <header>
        <title>It's just a calculator</title>
      </header>
      <main>
        <div className={styles.resultContainer}>
          <h1>online calculator</h1>
          <input
            className={styles.resultInput}
            type="text"
            value={expression}
            readOnly
          />
          <input
            className={styles.resultInput}
            type="text"
            value={result}
            readOnly
          />
          <div className={styles.buttonContainer}>
            {buttons.map((buttonItem) => (
              <button
                className={styles.button}
                key={buttonItem}
                onClick={() => handleButtonClick(buttonItem)}
              >
                {buttonItem}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}