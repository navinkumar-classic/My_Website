import React from 'react';

function Custom_navigation(props){
    return(
        <div className='custom_navig' style={{"left": props.left}}>
            <a href = {props.link} className = 'custom_a' style={{"left": props.a_l,"top": props.a_t}}>{props.name}</a>
        </div>
    );
}

export default Custom_navigation