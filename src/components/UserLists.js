import { useState,useEffect } from "react";
import ArmyList from "./ArmyList";
import OneList from "./OneList";

import '../styles/UserLists.css';

const UserLists = (props) => {
    const userData = props.userData;

    const [selectedList, setSelectedList] = useState(null);
    const [userLists, setUserLists] = useState(null);

    const GetUserLists = async () => {
        try {
          const response = await fetch(`http://localhost:3001/lists/${userData.id}`); // Remplacez l'URL par celle de votre API
          const json = await response.json();
          setUserLists(json);
          console.log("Fecth lists : ",json);
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(()=>{
        GetUserLists();
    },[]);


    const HandleClick = (list) => {
        setSelectedList(list);
    };

    const HandleBack = () => {
        setSelectedList(null);
    };

        return (
            <div className="UserLists">
                {
                    !selectedList ?
                    <>
                        <div className="Header">
                            <h2>My Lists</h2>
                            <div className="Filter">
                            </div>
                        </div>
                        <div className="Section">
                            {
                                userLists ?
                                userLists.map((list)=>(
                                    <ArmyList HandleClick={HandleClick} list = {list}/>
                                ))
                                : null
                            }
                        </div>
                        <div className="Footer"></div>
                    </>
                    :
                    <>
                        <OneList HandleBack = {HandleBack} list={selectedList}/>
                    </>
                }
            </div>
        );
    }

export default UserLists;
