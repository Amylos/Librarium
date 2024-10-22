import { useState,useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../styles/Main.css'


const Main = (props) => {

const factions = ['Nécron', 'Space Marines', 'Tyranides', 'Orks', 'Eldar', 'Tau'];
const armyNames = ['BLIsef du ciel', 'Iron Fist', 'Deathwing', 'Green Tide', 'Shadowstrike', 'Firestorm'];
const authors = ['Andrew', 'Michael', 'Sarah', 'John', 'Emma', 'Lucas'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lists = Array.from({ length: 6 }, () => ({
  'faction': factions[getRandomInt(0, factions.length - 1)],
  'points': getRandomInt(1000, 3000),
  'ArmyName': armyNames[getRandomInt(0, armyNames.length - 1)],
  'Author': authors[getRandomInt(0, authors.length - 1)],
}));

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