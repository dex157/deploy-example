import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  throwError = () => {
    throw new Error("some error is happense");
  };

  throwPromiseError = () => {
    new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject("some promise error");
      }, 1000);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Этот пример написан для 12ого занятия курса react.js loftschool.</p>
        <button onClick={this.throwError}>Throw error</button>
        <button onClick={this.throwPromiseError}>Throw promise error</button>
      </div>
    );
  }
}

export default App;
