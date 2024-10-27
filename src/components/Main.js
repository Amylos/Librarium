import { useState,useEffect } from "react";
import ArmyList from "./ArmyList";
import OneList from "./OneList";
import '../styles/Main.css'


const Main = (props) => {

        
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

    const [selectedList, setSelectedList] = useState(null);
    const HandleClick = (list) => {
        setSelectedList(list);
    };

    const HandleBack = () => {
        setSelectedList(null);
    };


    return (
        <div className="Main">
            {/* {
                  !selectedList ?

                <>
                 <div className="Header">
                    <h2>Players lists</h2>
                    <div className="Filter">
                </div>
                    <div className="Section">
                    {
                lists.map((list)=>(
                    <ArmyList HandleClick={HandleClick} list = {list}/>
                ))
            }                        </div>
                        <div className="Footer"></div>
                    </div>
                </>

                  :
                  <OneList HandleBack = {HandleBack} list={selectedList}/>
            } */}
           </div>
    );
}

export default Main;
