import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: "",
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

  onSearchChange = (eventName) => {
    const searchFeild = eventName.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFeild };
    });
  };

  render() {
    console.log("render");

    const { monsters, searchFeild } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((newName) => {
      return newName.name.toLocaleLowerCase().includes(searchFeild);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search-monsters"
          onChange={onSearchChange}
        />
        {filterMonsters.map((element) => {
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
