import React from "react";
import "../styles/OneList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import UnitDisplay from "../components/UnitDisplay"

const OneList = (props) => {

    const HandleBack = props.HandleBack;
    const selectedList = props.list;
    const units = props.list.units;
    const listsPoints = selectedList.units.reduce((total, unit) => {
        // Vérifier si une figurine est sélectionnée
        const selectedFigurines = unit.figurines.filter(figurine => figurine.selected);
        // Calculer les points basés sur la figurine sélectionnée
        selectedFigurines.forEach(figurine => {
            const figurineCount = figurine; // Supposons que figurine contient la valeur (10 ou 20)
            // Trouver l'index correspondant à cette figurine pour récupérer les points
            const index = unit.figurines.indexOf(figurineCount);
            if (index !== -1) {
                total += unit.points[index]; // Ajouter les points correspondants
            }
        });

        return total; // Retourner le total accumulé
    }, 0);

    const [selectedUnit,setSelectedUnit] = useState(null);
    const [showRules, setShowRules] = useState(null);


    function HandleSelectUnit(unit){
        if(unit)
        setSelectedUnit(unit);
    }

    function HandleUnSelectUnit(){
        setSelectedUnit(null);
    }

    function HandleShowRules(rules){
        setShowRules(rules);
    }

    return (
        <div className="OneList">
            {
                showRules ?
                <Rules HandleShowRules={HandleShowRules} selectedList = {selectedList}/>
                :
                <>
                                {
                !selectedUnit ?
                <>
                <div className="ListInfos">
                    <button className="BackButton" onClick={HandleBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <h3 className="ListName">{selectedList.name}</h3>
                    <button className="BackButtonH">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <div className="ListActions">
                    <button className="ListRules" onClick={()=>{HandleShowRules("rules")}}>Rules</button>
                    <p className="ListPoints">{listsPoints} points</p>
                    <button className="AddUnit">Add</button>
                </div>
                <div className="ListUnits">
                    {
                        units && units.some(unit => unit.type === "Caracter") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Caracter</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Caracter" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(1)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[0]} points</p>
                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[1]} points</p>
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                            </section>
                        ) : null
                    }

                    {
                        units && units.some(unit => unit.type === "Line") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Line</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Line" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(1)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[0]}</p>
                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[1]} points</p>
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                            </section>
                        ) : null
                    }

                    {
                        units && units.some(unit => unit.type === "Infantry") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Infantry</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Infantry" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(1)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[0]} points</p>
                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[1]} points</p>
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                            </section>
                        ) : null
                    }

                    {
                        units && units.some(unit => unit.type === "Vehicule") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Caracter</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Vehicule" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(1)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[0]}</p>
                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[1]} points</p>
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                            </section>
                        ) : null
                    }

                    {
                        units && units.some(unit => unit.type === "Monster") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Monster</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Monster" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(1)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[0]}</p>
                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <p className="UnitPoints">{unit.points[1]} points</p>
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                            </section>
                        ) : null
                    }
                </div>
                </>
                :
                    <UnitDisplay HandleUnSelectUnit={HandleUnSelectUnit} unit = {selectedUnit}/>
                }
                </>
            }
        </div>
    );
};

export default OneList;



const Rules = (props) => {

    const HandleShowRules = props.HandleShowRules;
    const selectedList = props.selectedList;

    console.log('Rules',selectedList.detachments[0].rules);

    return (
        <div className="Rules">
            <button className="BackButton" onClick={()=>HandleShowRules(null)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="ArmyRules">
                <h2 className="ArmyRulesTitle">ArmyRules</h2>
                <p>{selectedList.armyRules}</p>
            </div>
            <div className="DetachmentRules">
                <h2 className="DetachmentsRulesTitle">{selectedList.detachments[0].name}</h2>
                <p>{selectedList.detachments[0].rules}</p>
            </div>
            <div className="Stratagèmes">

            </div>
            <div className="Optimisations">

            </div>
        </div>
    )
}
