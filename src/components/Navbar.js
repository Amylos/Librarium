import { useState,useEffect } from "react";
import '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône de croix


const NavBar = (props) => {
    const setComponentToDisplay = props.setComponentToDisplay;
    const triggerPopUp = props.triggerPopUp;

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
                                <ConfigMenu setShowConfigMenu = {setShowConfigMenu} setComponentToDisplay={setComponentToDisplay} userData = {props.userData} setUserData = {props.setUserData} triggerPopUp ={triggerPopUp}/>
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





const ConfigMenu = (props) => {
    const setComponentToDisplay = props.setComponentToDisplay;
    const setShowConfigMenu = props.setShowConfigMenu;
    const triggerPopUp = props.triggerPopUp;

    const setUserData = props.setUserData;
    const userData= props.userData;
    console.log(props.userData);

    async function HandleLogOut(){
        console.log('HandleLogOut');
        try {
            const response = await fetch(`http://localhost:3001/users/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userData.token}`,  // Envoie le token dans le header
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Logout request failed!');
            }

            const data = await response.json();
            console.log('User disconnected successfully:', data);

            setUserData({
                pseudo: null,
                mail: "",
                password: "",
                authToken: null,
                id: null,
                isConnected: false,
            });

            setShowConfigMenu(false);
            setComponentToDisplay('main');
            triggerPopUp("User disconnected", '#28A745');

        } catch (error) {
            console.error('Error during log out:', error);
            triggerPopUp('',);
            triggerPopUp('Failed to disconnect','#D9534F');
        }
    }

    return (
        <div className="config-menu">
            <button className="config-item" onClick={() => {setComponentToDisplay('Settings')}}>Settings</button>
            <button className="config-item logout-button" onClick={() => {HandleLogOut()}}>Logout</button>
        </div>
    );
};
    
