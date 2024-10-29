import { useState,useEffect } from "react";
import '../styles/addUnits.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AddUnits = (props) => {

    const HandleAddUnit = props.HandleAddUnit;
    const selectedList = props.selectedList;
    const [units, setUnits] = useState(null);

    console.log(selectedList);

    async function fetchUnits(){
        try {
            const response = await fetch('http://localhost:3001/units');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setUnits(data);
            return data;
        }
        catch (err) {
            console.error("Fetch error: ", err);
        }
    }

    async function AddUnitsToUserList(unit) {
        try {
            const { _id } = selectedList; // Récupérer uniquement l'_id de la liste
            selectedList.units.push(unit);

            // Faire une requête PUT pour mettre à jour la liste avec l'unité
            const response = await fetch(`http://localhost:3001/lists/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({selectedList}) // Envoyer l'unité et l'ID de la liste
            });

            if (!response.ok) {
                throw new Error('Échec de la mise à jour de la liste');
            }

            const data = await response.json();
            console.log("Liste mise à jour:", data);
        } catch (err) {
            console.error("Erreur:", err);
        }
    }



    useEffect(()=>{
        fetchUnits();
    },[]);

    return (
        <div className="AddUnits">
            <div className="HeadInfos">
                <button className="BackButton" onClick={() =>{HandleAddUnit()}}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <div className="Points">ADD UNITS</div>
                <div className="UnitsNumber"></div>

            </div>
            <div className="ListUnits">
                    {
                        units && units.some(unit => unit.type === "Caracter") ? (
                            <section className="PersonnageSection">
                                <h3 className="TitleSection">Caracter</h3>
                                {
                                    units.map((unit) => (
                                        unit.type === "Caracter" &&
                                        <div className="Unit" onClick={() => AddUnitsToUserList(unit)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[0]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>

                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[1]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>
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
                                        <div className="Unit" onClick={() => AddUnitsToUserList(unit)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[0]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[1]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>
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
                                        <div className="Unit" onClick={() => AddUnitsToUserList(unit)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[0]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>

                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[1]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>

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
                                        <div className="Unit" onClick={() => AddUnitsToUserList(unit)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[0]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>

                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[1]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>

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
                                        <div className="Unit" onClick={() => AddUnitsToUserList(unit)}>
                                            {
                                                unit.figurines[0].selected === true ?
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[0].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[0]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="LeftUnit">
                                                        <p className="Itération">{unit.figurines[1].count}</p>
                                                        <p className="UnitName">{unit.unite}</p>
                                                    </div>
                                                    <div className="DivPointsAdd">
                                                        <p className="UnitPoints">{unit.points[1]} points</p>
                                                        <button className="AddUnitButton">+</button>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                            </section>
                        ) : null
                    }
                </div>
        </div>
      );
}

export default AddUnits;