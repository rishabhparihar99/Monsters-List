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
          key: "1233445ee",
        },
        {
          name: "Roha",
          key: "5d6w7tgd9",
        },
        {
          name: "Rhino",
          key: "vgds6737d63",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((element) => {
          return <h1 key={element.key}>{element.name}</h1>;
        })}
      </div>
    );
  }
}
export default App;
