import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Roha",
        },
        {
          name: "Rhino",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((element) => {
          return <h1>{element.name}</h1>;
        })}
      </div>
    );
  }
}
export default App;
