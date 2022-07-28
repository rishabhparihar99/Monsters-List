import { Component } from "react";
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component{
   render()
   {
    const {newMonList} = this.props;
    return(
        <div className="card-list">

            {newMonList.map((monster)=>{
            return(
                <Card monster={monster}/>
            );
            })}
        </div>
    );
   }
}
export default CardList;