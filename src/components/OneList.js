import React from "react";
import "../styles/oneList.css"; // Import du fichier CSS pour le style

const OneList = ({ HandleBack }) => {
    // Valeurs d'exemple pour la liste et les unités
    const exampleList = {
        ArmyName: "Deathwing Detachment", // Nom fictif de la liste
        units: {
            Personnage: [
                { unite: "Captain", points: [100], type: "Character" },
                { unite: "Chaplain", points: [85], type: "Character" },
            ],
            Infanterie: [
                { unite: "Intercessor Squad", points: [90], type: "Infantry" },
                { unite: "Tactical Squad", points: [75], type: "Infantry" },
            ],
            Véhicule: [
                { unite: "Predator Tank", points: [150], type: "Vehicle" },
                { unite: "Land Raider", points: [250], type: "Vehicle" },
            ],
        },
    };

    return (
        <div className="OneList">
            {/* En-tête avec le bouton de retour, nom de la liste, et bouton pour les règles */}
            <div className="Header">
                <button className="BackButton" onClick={HandleBack}>Retour</button>
                <h2 className="ArmyName">{exampleList.ArmyName}</h2>
                <button className="RulesButton">Afficher les règles</button>
            </div>

            {/* Section des unités par type */}
            <div className="UnitsSection">
                {Object.entries(exampleList.units).map(([type, unitsByType]) => (
                    <div key={type} className="UnitTypeGroup">
                        <h3 className="UnitTypeTitle">{type}</h3>
                        <div className="UnitList">
                            {unitsByType.map((unit, index) => (
                                <div key={index} className="UnitCard">
                                    <h4>{unit.unite}</h4>
                                    <p>Points: {unit.points.join(", ")}</p>
                                    <p>Type: {unit.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OneList;
