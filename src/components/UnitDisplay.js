import React from 'react';
import '../styles/unitDisplay.css';



const unit = {
    "faction": "Space Marines",
    "army": "Imperium",
    "unite": "Intercessor",
    "type": "Infantry",
    "points": [18],
    "figurines": [1, 5],
    "stats": {
        "mouvement": 6,
        "endurance": 4,
        "sauvegarde": ["3+"],
        "points_de_vie": 2,
        "commandement": 7,
        "controle_objectif": 1
    },
    "armes": {
        "Bolter": {
            "selected": true,
            "portee": 24,
            "attaque": 1,
            "force": 4,
            "C_T": 3,
            "PA": 0,
            "degats": 1,
            "capacites": []
        },
        "Plasma Rifle": {
            "selected": false,
            "portee": 24,
            "attaque": 1,
            "force": 7,
            "C_T": 3,
            "PA": -3,
            "degats": 1,
            "capacites": ["D6"]
        }
    },
    "aptidudes": {
        "Tactical": true,
        "Combat": false
    },
    "aptidudes_base": {
        "And They Shall Know No Fear": true
    },
    "mots_cles": ["Space Marine", "Troop"],
    "optimisations": ["Rapid Fire", "Double Tap"]
};


const UnitDisplay = () => {
    return (
        <div className="unit-container">
            <h2 className="unit-title">{unit.unite}</h2>
            <p className="unit-subtitle">{unit.faction} - {unit.army}</p>

            <section className="unit-section">
                <h3>Statistiques</h3>
                <ul>
                    <li>Mouvement: {unit.stats.mouvement}"</li>
                    <li>Endurance: {unit.stats.endurance}</li>
                    <li>Sauvegarde: {unit.stats.sauvegarde.join(", ")}</li>
                    <li>Points de vie: {unit.stats.points_de_vie}</li>
                    <li>Commandement: {unit.stats.commandement}</li>
                    <li>Contrôle objectif: {unit.stats.controle_objectif}</li>
                </ul>
            </section>

            <section className="unit-section">
                <h3>Armes</h3>
                <ul>
                    {Object.entries(unit.armes).map(([armeName, arme]) => (
                        <li key={armeName} className={arme.selected ? "arme-selected" : ""}>
                            <strong>{armeName}</strong>: Portée {arme.portee}", Attaque {arme.attaque}, 
                            Force {arme.force}, CT {arme.C_T}, PA {arme.PA}, Dégâts {arme.degats}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="unit-section">
                <h3>Aptitudes</h3>
                <ul>
                    {Object.entries(unit.aptidudes).map(([aptName, isActive]) => (
                        <li key={aptName}>
                            <strong>{aptName}</strong>: {isActive ? "Oui" : "Non"}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="unit-section">
                <h3>Aptitudes de Base</h3>
                <ul>
                    {Object.entries(unit.aptidudes_base).map(([aptName, isActive]) => (
                        <li key={aptName}>
                            <strong>{aptName}</strong>: {isActive ? "Oui" : "Non"}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="unit-section">
                <h3>Mots-clés</h3>
                <p>{unit.mots_cles.join(", ")}</p>
            </section>

            <section className="unit-section">
                <h3>Optimisations</h3>
                <p>{unit.optimisations.join(", ")}</p>
            </section>
        </div>
    );
};

export default UnitDisplay;
