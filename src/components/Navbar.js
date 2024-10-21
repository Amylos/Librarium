import { useState,useEffect } from "react";
import '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône de croix


const NavBar = (props) => {
    // console.log('props',props.userData.);
    const setComponentToDisplay = props.setComponentToDisplay;
    const isConnected = props.userData.isConnected;
    const pseudo = props.userData.pseudo;
    const [showConfigMenu, setShowConfigMenu] = useState(false);

    const handleConfigClick = () => {
      setShowConfigMenu(!showConfigMenu); // Toggle du menu
    };

    function HandleChangeComponent(comp){
        if(isConnected){
            setComponentToDisplay(comp);
        }
        else{
            setComponentToDisplay("Login");
        }
    }



    return (
        <div className="NavBar">
            <div className="LeftComponent">
                <h1 className="AppTitle" onClick={() => setComponentToDisplay('main')}>LIBRARIUM</h1>
                <div className="UserComponent">
                    {pseudo ? (
                        <>
                            <button className="ConfigButton" onClick={handleConfigClick}>
                                {
                                    showConfigMenu ?
                                    <FontAwesomeIcon className="Icon" icon={faTimes} />

                                    :
                                    <FontAwesomeIcon className="Icon" icon={faGears} />
                                }
                            </button>
                        <p className="UserName">{pseudo}</p>
                        <div className="config-button-container">
                        {showConfigMenu && (
                                <ConfigMenu setShowConfigMenu={setShowConfigMenu}/>
                            )}
                        </div>
                        </>
                    ) : (
                        <button className="LoginButton" onClick={() => setComponentToDisplay('Login')}>
                            Connexion
                        </button>
                    )}
                </div>
            </div>
            <div className="RightComponent">
                <button className="MyListsButton" onClick={() => HandleChangeComponent('UserLists')}>
                    My Lists
                </button>
                <button className="NewListButton" onClick={() => HandleChangeComponent('ListMaker')}>
                    New List
                </button>
            </div>
        </div>
    );
}

export default NavBar;



// ConfigMenu.js


const ConfigMenu = (props) => {
    const setShowConfigMenu = props.setShowConfigMenu;

    return (
        <div className="config-menu">
           
            <button className="config-item" onClick={() => {}}>Settings</button>
            <button className="config-item logout-button" onClick={() => {}}>Logout</button>
        </div>
    );
};


