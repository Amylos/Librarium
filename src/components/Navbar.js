import { useState,useEffect } from "react";
import '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons';


const NavBar = (props) => {

/**
 * ToDo
 */

    return (
        <div className="NavBar">
            <div className="LeftComponent">
                <h1 className="AppTitle">LIBRARIUM</h1>
                <div className="UserComponent">
                    <button className="ConfigButton">
                        <FontAwesomeIcon className="Icon" icon={faGears} />
                    </button>
                    <p className="UserName"> Amylos</p>
                </div>
            </div>
            <div className="RightComponent">
                <button className="MyListsButton">
                    My Lists
                </button>
                <button className="NewListButton">
                    New List
                </button>
            </div>
        </div>
      );
}

export default NavBar;