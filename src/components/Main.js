import { useState,useEffect } from "react";

import '../styles/Main.css'


const Main = (props) => {


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
            lists.map((list)=>{
                return(
                    <div className="ArmyList">
                        <div className="Left">
                            <div className="Faction">
                                Nécron
                            </div>
                            <div className="Points">
                                2000 points
                            </div>
                        </div>
                        <div className="Center">
                            <div className="ArmyName">
                                Les clodos de bégon
                            </div>
                            <div className="Author">
                                Andrew la chips
                            </div>
                        </div>
                        <div className="Right">
                            <button className="Favoris">X</button>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            <div className="Footer"></div>
        </div>
    );
}

export default Main;