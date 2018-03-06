import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "mobx-react";
import { observable } from "mobx";

class State {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }
}

const store = observable(new State());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
