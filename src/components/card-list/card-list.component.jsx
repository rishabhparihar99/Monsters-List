import { Component } from "react";

class CardList extends Component{
   render()
   {
    console.log(this.props);
    return(
        <div>
            <p>Hello, I am the Card List</p>
        </div>
    )
   }
}
export default CardList