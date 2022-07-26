//import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search-monsters"
          className="search-box"
        />
        <CardList newMonList={filterMonsters} />
      </div>
    );
  }
}
export default App;
