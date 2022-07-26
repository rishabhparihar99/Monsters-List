//import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

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
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (eventName) => {
    const searchFeild = eventName.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFeild };
    });
  };

  render() {
    const { monsters, searchFeild } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((newName) => {
      return newName.name.toLocaleLowerCase().includes(searchFeild);
    });
    console.log({ monsters: filterMonsters }); //verification for CardList Props
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search-monsters"
          onChange={onSearchChange}
        />
        {/*     {filterMonsters.map((element) => {
          return (
            <div key={element.id}>
              <h1>{element.name}</h1>
            </div>
          );
        })}    */}
        <CardList newMonList={filterMonsters} />
        {/* See console */}
      </div>
    );
  }
}
export default App;
