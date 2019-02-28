import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { AnimatedText } from "./AnimatedText";

function App() {
  return (
    <div className="App">
      <AnimatedText
        textColor="#cd122d"
        overlayColor="#fdc52c"
      >
        HEADER TITLE EXAMPLE
      </AnimatedText>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
