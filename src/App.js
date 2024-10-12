import { useState,useEffect } from "react";

import NavBar from './components/Navbar';
import Main from './components/Main';
import ListMaker from "./components/ListMaker";
import UserLists from "./components/UserLists";

import './styles/App.css';


function App() {

  const [componentToDisplay, setComponentToDisplay] = useState("main");

  const components = {
    main: <Main />,
    UserLists: <UserLists />,
    ListMaker: <ListMaker />
  };

  return (
    <div className="App">
      <NavBar setComponentToDisplay = {setComponentToDisplay} />
      {components[componentToDisplay] || null}
    </div>
  );
}

export default App;


