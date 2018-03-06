import React, { Component } from "react";
import "./App.css";
import { observable, computed } from "mobx";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class App extends Component {
  @observable timer = 0;
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <h1>{JSON.stringify(this.props, null, 2)}</h1>
      </div>
    );
  }
}
