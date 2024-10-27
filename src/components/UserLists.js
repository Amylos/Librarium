import { useState,useEffect } from "react";
import ArmyList from "./ArmyList";
import OneList from "./OneList";

import '../styles/UserLists.css';

const UserLists = (props) => {

    const [selectedList, setSelectedList] = useState(null);
    
    const lists = [
        {
            "author":"Andrew",
            "points":1000,
            "faction":"Tyranides"
        },
        {
            "author":"Andrew",
            "points":1000,
            "faction":"Tyranides"
        },
        {
            "author":"Andrew",
            "points":1000,
            "faction":"Tyranides"
        }
    ]

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
                                lists.map((list)=>(
                                    <ArmyList HandleClick={HandleClick} list = {list}/>
                                ))
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
