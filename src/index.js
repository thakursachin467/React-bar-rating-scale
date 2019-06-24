import React from "react";
import ReactDOM from "react-dom";
import { BarRating } from "./Bar-rating";
import "./styles.css";
import "./Bar-rating.css";
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {
  return (
    <div className="box">
      <p>How will you rate our service</p>
      <div className="rating">
        {a.slice(0).reverse().map(n => {
          return <BarRating key={n} id={n} />;
        })}
      </div>
      <div className="heading">
        <p className="left">Unsatisfied</p>
        <p className="right">satisfied</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
