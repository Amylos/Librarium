import { useState,useEffect } from "react";
import ArmyList from "./ArmyList";
import OneList from "./OneList";

import '../styles/UserLists.css';

const UserLists = (props) => {

    const [selectedList, setSelectedList] = useState(null);

    const HandleClick = (list) => {
        setSelectedList(1);
        console.log(selectedList);
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
                            <button className="BtnArmy"  onClick={() => HandleClick("data")}>
                                <ArmyList/>
                            </button>
                        </div>
                        <div className="Footer"></div>
                    </>
                    :
                    <>
                        <OneList HandleBack = {HandleBack}/>
                    </>
                }
            </div>
        );
    }

export default UserLists;
