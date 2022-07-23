import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Rishabh",
      company: "JBM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name} works at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: "Andrei" });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
