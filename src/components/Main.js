import { useState,useEffect } from "react";
import ArmyList from "./ArmyList";

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




