import { Component } from "react";

class CardList extends Component{
   render()
   {
    console.log("inside card component");
  // console.log(this.props.newMonList); // Why it is rendering 2 times?
    const {newMonList} = this.props;
    return(
        <div>
            {newMonList.map((monster)=>{
                 return <h1 key={monster.id}>{monster.name}</h1>
            })}
        </div>
    );
   }
}
export default CardList;