import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PLAYERS from "./App";
// you need to import constants too!

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App players={PLAYERS} />, document.getElementById("root"));
// renders virtual DOM, on actual DOM
registerServiceWorker();
