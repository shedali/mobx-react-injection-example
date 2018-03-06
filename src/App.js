import React, { Component } from "react";
import "./App.css";
import { observable, computed } from "mobx";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    debugger;
    return <Item timer={this.props.store.timer} />;
  }
}

const Item = inject("store")(
  observer(({ timer }) => {
    return <h1>{JSON.stringify(timer, null, 2)}</h1>;
  })
);
