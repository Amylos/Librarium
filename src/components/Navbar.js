import { useState,useEffect } from "react";
import '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons';


const NavBar = (props) => {

    const setComponentToDisplay = props.setComponentToDisplay;

    return (
        <div className="NavBar">
            <div className="LeftComponent">
                <h1 className="AppTitle" onClick={() =>{setComponentToDisplay('main')}}>LIBRARIUM</h1>
                <div className="UserComponent">
                    <button className="ConfigButton">
                        <FontAwesomeIcon className="Icon" icon={faGears} />
                    </button>
                    <p className="UserName"> Amylos</p>
                </div>
            </div>
            <div className="RightComponent">
                <button className="MyListsButton" onClick={() =>{setComponentToDisplay('UserLists')}}>
                    My Lists
                </button>
                <button className="NewListButton" onClick={() =>{setComponentToDisplay('ListMaker')}}>
                    New List
                </button>
            </div>
        </div>
      );
}

export default NavBar;