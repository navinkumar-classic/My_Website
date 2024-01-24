import React from "react";

function Card(props){
    return(
        <div className="card-container" style={{"left":props.left}}>
            <img src = {props.img} className="card-img"></img>
            <a className = "project-name" href={props.link} style={{"left":props.pl}}><b>{props.name}</b></a>
        </div>
    );
}

export default Card;