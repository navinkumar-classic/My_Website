import React from "react";

function Skillbar(){
    return(
        <div className="skill-container">
            <h1 className="heading" style={{"textAlign":"center","color":"#c2a78e","paddingTop":"1.8%","paddingBottom":"1.8%","fontSize":"2.2vw"}}>Skill_level</h1>

            <p className="skill-cat" style={{"top": "22%"}}><b>Python::</b></p>
            <div className="pro-bar" style={{"top": "28.5%"}}><div className="pro-lvl" style={{"width": "80%"}}></div></div>

            <p className="skill-cat" style={{"top": "37%"}}><b>DSA::</b></p>
            <div className="pro-bar" style={{"top": "43.5%"}}><div className="pro-lvl" style={{"width": "70%"}}></div></div>

            <p className="skill-cat" style={{"top": "52%"}}><b>Web_Dev::</b></p>
            <div className="pro-bar" style={{"top": "58.5%"}}><div className="pro-lvl" style={{"width": "90%"}}></div></div>

            <p className="skill-cat" style={{"top": "67%"}}><b>AIML::</b></p>
            <div className="pro-bar" style={{"top": "73.5%"}}><div className="pro-lvl" style={{"width": "60%"}}></div></div>


        </div>
    );
}

export default Skillbar;