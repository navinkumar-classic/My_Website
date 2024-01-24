import React from "react";
import Card from "./card";

function Project(){
    return(
        <div className="project-container">
            <h1 className="heading" style={{"textAlign":"center","color":"#c2a78e","paddingTop":"1.5%","paddingBottom":"1.5%","fontSize":"2.5vw"}}>Project</h1>
            <Card left = "10%" img = "https://simplecodetips.com/wp-content/uploads/2017/01/Linux-Terminal-icon.png" name = "Custom_Terminal"
            pl = "9%" link = "https://github.com/navinkumar-classic/Custom_Terminal"/>
            <Card left = "40.5%" img = "https://cdn.iconscout.com/icon/premium/png-256-thumb/slot-machine-2037938-1719813.png?f=webp" name = "Slot_Machine"
            pl = "17%" link = "https://github.com/navinkumar-classic/Slot-Machine"/>
            <Card left = "70%" img = "https://icon-library.com/images/website-icon-square/website-icon-square-12.jpg" name = "My_Website"
            pl = "23%" link = "/"/>
        </div>
    );
}

export default Project;