import { useState,useEffect } from "react";
import './styles/App.css';


import NavBar from './components/Navbar';
import Main from './components/Main';
import ListMaker from "./components/ListMaker";
import UserLists from "./components/UserLists";
import Login from "./components/Login";
import Register from './components/Register';




function App() {

/******/
    const [userData, setUserData] = useState({
        pseudo: null,
        mail: "",
        password: "",
        authToken: null,
        id: null,
        isConnected: true,
    });

    // console.log('App',userData);
/******/

    const [componentToDisplay, setComponentToDisplay] = useState("main");

    const components = {
        main: <Main setComponentToDisplay = {setComponentToDisplay}/>,
        UserLists: <UserLists setComponentToDisplay = {setComponentToDisplay}/>,
        ListMaker: <ListMaker setComponentToDisplay = {setComponentToDisplay}/>,
        Login: <Login setComponentToDisplay = {setComponentToDisplay} userData = {userData} setUserData = {setUserData}/>,
        Register : <Register setComponentToDisplay = {setComponentToDisplay}/>
    };

  return (
    <div className="App">
        {
            componentToDisplay === "Login" || componentToDisplay  === "Register" ?
            <>
                {components[componentToDisplay] || null}
            </>
            :
            <>
                <NavBar setComponentToDisplay = {setComponentToDisplay} userData = {userData} setUserData = {setUserData}/>
                {components[componentToDisplay] || null}
            </>
        }
    </div>
  );
}

export default App;


