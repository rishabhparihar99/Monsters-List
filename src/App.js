import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => console.log(response) //fetch promise //see console after run
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((element) => {
          return (
            <div key={element.key}>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
