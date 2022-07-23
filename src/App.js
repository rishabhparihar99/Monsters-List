import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Rishabh",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              this.state.name = "Andrei";
              console.log(this.state);
            }}
          >
            {" "}
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
