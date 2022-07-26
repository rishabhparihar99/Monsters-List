import { Component } from "react";

class CardList extends Component{
   render()
   {
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