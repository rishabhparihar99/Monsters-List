import { Component } from "react";

class CardList extends Component{
   render()
   {
    console.log('render'); // Why it is rendering 2 times?
    const {monsters} = this.props;
    return(
        <div>
            {monsters.map((monster)=>{
                 return <h1 key={monster.id}>{monster.name}</h1>
            })}
        </div>
    );
   }
}
export default CardList;