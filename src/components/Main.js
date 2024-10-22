import { useState,useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../styles/Main.css'


const Main = (props) => {
    const triggerPopUp = props.triggerPopUp;


const lists = [
  {
    'faction' : 'Nécron',
    'points' : 2000,
    'ArmyName' : 'BLIsef du ciel',
    'Author' : 'Andrew'
  },
  {
    'faction' : 'Nécron',
    'points' : 2000,
    'ArmyName' : 'BLIsef du ciel',
    'Author' : 'Andrew'
  },
  {
    'faction' : 'Nécron',
    'points' : 2000,
    'ArmyName' : 'BLIsef du ciel',
    'Author' : 'Andrew'
  },
  {
    'faction' : 'Nécron',
    'points' : 2000,
    'ArmyName' : 'BLIsef du ciel',
    'Author' : 'Andrew'
  },
  {
    'faction' : 'Nécron',
    'points' : 2000,
    'ArmyName' : 'BLIsef du ciel',
    'Author' : 'Andrew'
  },
  {
    'faction' : 'Nécron',
    'points' : 2000,
    'ArmyName' : 'BLIsef du ciel',
    'Author' : 'Andrew'
  },

]

    return (
        <div className="Main">
            <div className="Header">
                <h2>Players lists</h2>
                <div className="Filter">
                </div>
            </div>
        <div className="Section">
            {
            lists.map((list, index)=>{
                return(
                  <ArmyList key ={index}/>
                    )
                })
            }
            </div>
            <div className="Footer"></div>
        </div>
    );
}

export default Main;




const ArmyList = () =>{
    return(
        <div className="ArmyList">
            <div className="Left">
                <div className="Faction">
                    Faction
                </div>
                <div className="Points">
                    2000 points
                </div>
            </div>
            <div className="Center">
                <div className="ArmyName">
                    Army Name
                </div>
                <div className="Author">
                    Author
                </div>
            </div>
            <div className="Right">
                <button className="Favoris">
                <FontAwesomeIcon className="Icon" icon={faStar} />
                </button>
            </div>
        </div>
    )
}