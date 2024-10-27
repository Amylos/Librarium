import React from "react";
import "../styles/OneList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import UnitDisplay from "../components/UnitDisplay"

const OneList = (props) => {
    const HandleBack = props.HandleBack;
    const selectedList = props.selectedList;
    console.log("Onelist", props);

    const [selectedUnit,setSelectedUnit] = useState(null);

    function HandleSelectUnit(unit){
        if(unit)
        setSelectedUnit(unit);
    }

    function HandleUnSelectUnit(){
        setSelectedUnit(null);
    }

    return (
        <div className="OneList">
            {
                !selectedUnit ?
                <>
                <div className="ListInfos">
                    <button className="BackButton" onClick={HandleBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <h3 className="ListName">ListName</h3>
                </div>
                <div className="ListActions">
                    <button className="ListRules">Rules</button>
                    <p className="ListPoints">Points</p>
                    <button className="AddUnit">Add</button>
                </div>
                <div className="ListUnits">
                    <section className="PersonnageSection">
                        <h3 className="TitleSection">Personnage</h3>
                        <div className="Unit" onClick={() => HandleSelectUnit(1)}>
                            <div className="LeftUnit">
                                <p className="Itération">1</p>
                                <p className="UnitName">Nom</p>
                            </div>
                            <p className="UnitPoints">Points</p>
                        </div>
                    </section>
                    <section className="LigneSection">
                    <h3 className="TitleSection">Ligne</h3>
                    <div className="Unit">
                        <div className="LeftUnit">
                            <p className="Itération">1</p>
                            <p className="UnitName">Nom</p>
                        </div>
                        <p className="UnitPoints">Points</p>
                    </div>
                    </section>
                    <section className="InfantrySection">
                        <h3 className="TitleSection">Infantrie</h3>
                        <div className="Unit">
                            <div className="LeftUnit">
                                <p className="Itération">1</p>
                                <p className="UnitName">Nom</p>
                            </div>
                            <p className="UnitPoints">Points</p>
                        </div>

                    </section>
                    <section className="VehiculesSection">
                    <h3 className="TitleSection">Véhicule</h3>
                    <div className="Unit">
                        <div className="LeftUnit">
                            <p className="Itération">1</p>
                            <p className="UnitName">Nom</p>
                        </div>
                        <p className="UnitPoints">Points</p>
                    </div>

                    </section>
                    <section className="MonstresSection">
                    <h3 className="TitleSection">Monstre</h3>
                    <div className="Unit">
                        <div className="LeftUnit">
                            <p className="Itération">1</p>
                            <p className="UnitName">Nom</p>
                        </div>
                        <p className="UnitPoints">Points</p>
                    </div>
                    </section>
                </div>
                </>
                :
                <UnitDisplay HandleUnSelectUnit={HandleUnSelectUnit} unit = {selectedUnit}/>
            }
        </div>
    );
};

export default OneList;
