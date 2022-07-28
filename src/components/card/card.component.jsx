import { Component } from "react";
import './card.styles.css';

class Card extends Component{
    render(){
        
       const {email,id,name} = this.props.monster;
       return(
        <div classname = "card-container" key={id}>
                    <img alt={`monster ${name}`} 
                    src={`https://robohash.org/${id}?set=set2`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
        </div>
       )
    }
}
export default Card;