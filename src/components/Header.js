import React, {Component} from "react";

export default class Header extends Component {
  render() {
    return (
      <div className= "header">
        <h1>Employee Directory</h1>
        <p>Click header column to sort alphabetically</p>
      </div>
    )
  }
};