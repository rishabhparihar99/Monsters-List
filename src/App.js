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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search-monsters"
          onChange={(eventName) => {
            console.log({ startingArray: this.state.monsters }); // Starting Array
            console.log(eventName.target.value);
            const stringName = eventName.target.value.toLocaleLowerCase();
            const filterArr = this.state.monsters.filter((newName) => {
              return newName.name.toLocaleLowerCase().includes(stringName);
            });
            this.setState(
              () => {
                return { monsters: filterArr };
              },
              () => {
                console.log({ endArray: this.state.monsters }); //EndArray
              }
            );
          }}
        />
        {this.state.monsters.map((element) => {
          return (
            <div key={element.id}>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
