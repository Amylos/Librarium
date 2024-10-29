import React from "react";
import "../styles/OneList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

import UnitDisplay from "../components/UnitDisplay"
import AddUnits from "./AddUnits";

const OneList = (props) => {

    const HandleBack = props.HandleBack;
    const selectedList = props.list;
    const units = props.list.units;

    const [listPoints, setListPoints] = useState(0);
    const [selectedUnit,setSelectedUnit] = useState(null);
    const [showRules, setShowRules] = useState(null);
    const [addUnits, setAddUnits] = useState(null);

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


    function HandleAddUnit(){
        setAddUnits(!addUnits);
    }

    return (
        <div className="OneList">
           {
            addUnits ?
                <AddUnits HandleAddUnit={HandleAddUnit} selectedList = {selectedList}/>
            :
            <>
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
                    <p className="ListPoints">{listPoints} pts</p>
                    <button className="AddUnit" onClick={()=>{HandleAddUnit()}}>Add</button>
                </div>
                <div className="ListUnits">
                    {
                        units && units.some(unit => unit.type === "Caracter") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Caracter</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Caracter" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(unit)}>
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
                                        <div className="Unit" onClick={() => HandleSelectUnit(unit)}>
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
                        units && units.some(unit => unit.type === "Infantry") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Infantry</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Infantry" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(unit)}>
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
                                        <div className="Unit" onClick={() => HandleSelectUnit(unit)}>
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
                        units && units.some(unit => unit.type === "Monster") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Monster</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Monster" &&
                                        <div className="Unit" onClick={() => HandleSelectUnit(unit)}>
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
                </div>
                </>
                :
                    <UnitDisplay HandleUnSelectUnit={HandleUnSelectUnit} unit = {selectedUnit}/>
                }
                </>
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

    const DetachmentRulesName =  props.selectedList.detachments.rules.rule_name;
    const DetachmentRulesDescription = props.selectedList.detachments.rules.description;

    console.log('Rules',selectedList.detachments.rules);

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
                <h2 className="DetachmentsRulesTitle">{DetachmentRulesName}</h2>
                <p>{DetachmentRulesDescription}</p>
            </div>
            <div className="Stratagèmes">

            </div>
            <div className="Optimisations">

            </div>
        </div>
    )
}
