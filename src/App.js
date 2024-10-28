import { useState,useEffect } from "react";
import './styles/App.css';


import NavBar from './components/Navbar';
import Main from './components/Main';
import ListMaker from "./components/ListMaker";
import UserLists from "./components/UserLists";
import Login from "./components/Login";
import Register from './components/Register';
import Settings from "./components/Settings";

function App() {

/**POP UP***/
    const [popUp, setPopUp] = useState({
        isVisible: false,
        message: 'Un message dans la pop up !',
        color: '#FFFFFF',
    });

    useEffect(() => {
        if (popUp.isVisible) {
        const timer = setTimeout(() => {
            setPopUp((prev) => ({ ...prev, isVisible: false }));
        }, 4000);

        return () => clearTimeout(timer);
        }
    }, [popUp.isVisible]);

    const triggerPopUp = (message, color) => {
        setPopUp({ message, color, isVisible: true });
    };

/***********/

/****USER****/
    const [userData, setUserData] = useState({
        pseudo: null,
        mail: "",
        password: "",
        authToken: null,
        id: null,
        isConnected: false,
    });

/***********/

/***COMP****/

    const [componentToDisplay, setComponentToDisplay] = useState("main");

    const components = {
        main: <Main setComponentToDisplay = {setComponentToDisplay} triggerPopUp={triggerPopUp}/>,
        UserLists: <UserLists setComponentToDisplay = {setComponentToDisplay} triggerPopUp={triggerPopUp}  userData = {userData}/>,
        ListMaker: <ListMaker setComponentToDisplay = {setComponentToDisplay} triggerPopUp={triggerPopUp} userData={userData}/>,
        Login: <Login setComponentToDisplay = {setComponentToDisplay} userData = {userData} setUserData = {setUserData} triggerPopUp={triggerPopUp}/>,
        Register : <Register setComponentToDisplay = {setComponentToDisplay} triggerPopUp={triggerPopUp}/>,
        Settings: <Settings setComponentToDisplay = {setComponentToDisplay} userData = {userData} setUserData={setUserData} triggerPopUp={triggerPopUp} />
    };

/***********/



    return (
        <div className="App">
            {
                componentToDisplay === "Login" || componentToDisplay  === "Register" || componentToDisplay  === "Settings" ?
                <>
                    {components[componentToDisplay] || null}
                </>
                :
                <>
                    <NavBar setComponentToDisplay = {setComponentToDisplay} userData = {userData} setUserData = {setUserData} triggerPopUp={triggerPopUp}/>
                    {components[componentToDisplay] || null}
                </>
            }
            {
                <div className={`pop-up ${!popUp.isVisible ? 'hide' : 'show'}`} style={{color:popUp.color}}>
                    {popUp.message}
                </div>
            }
        </div>
    );
}

export default App;


