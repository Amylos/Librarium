import { useState,useEffect } from "react";

import '../styles/ListMaker.css'


const factions = {

    imperium: [
      { name: 'Adeptus Mechanicus', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Astra Militarum', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Sisters of Battle', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Inquisition', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Imperial Knights', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
    ],
    space_marines: [
      { name: 'Ultramarines', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Blood Angels', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Dark Angels', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Space Wolves', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Black Templars', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Grey Knights', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
    ],
    chaos: [
      { name: 'Chaos Space Marines', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Death Guard', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Thousand Sons', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'World Eaters', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
      { name: 'Chaos Daemons', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3'] },
    ],
    xenos: [
        { name: 'Aeldari', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3','undétachement 1', 'undétachement 2', 'undétachement 3'] },
        { name: 'Drukhari', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3','undétachement 1', 'undétachement 2', 'undétachement 3'] },
        { name: 'Orks', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3','undétachement 1', 'undétachement 2', 'undétachement 3'] },
        { name: 'Necrons', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3','undétachement 1', 'undétachement 2', 'undétachement 3'] },
        { name: 'T\'au', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3','undétachement 1', 'undétachement 2', 'undétachement 3'] },
        { name: 'Tyranids', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3','undétachement 1', 'undétachement 2', 'undétachement 3'] },
        { name: 'Genestealer Cults', detachments: ['undétachement 1', 'undétachement 2', 'undétachement 3','undétachement 1', 'undétachement 2', 'undétachement 3'] },
      ]
  };


const ListMaker = () =>{


    const [sectionToShow,setSectionToShow] = useState("FactionList");



    const [name, setName] = useState('');
    const [format, setFormat] =useState(null);
    const [previousFormat, setPreviousFormat] =useState(null);


    const [selectedFaction, setSelectedFaction] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedDetachement, setSelectedDetachement] = useState('');

    const HandleChangeFormat = () =>{
        if(format){
            setFormat(null);
        }
        else{
            setFormat(previousFormat);
        }
    }
    const handleFactionChange = (race) => {
        setSelectedFaction(race);
        setSelectedRace(''); // Réinitialiser la race lorsque la faction change
        setSectionToShow('RaceList'); // Aller à la sélection des races
    };

    const handleRaceChange = (raceName) => {
        setSelectedRace(raceName);
        setSectionToShow('DetachementList'); // Aller à la sélection des détachements après avoir sélectionné la race
    };

    const handleDetachmentChange = (detachment) => {
        setSelectedDetachement(detachment);
        setSectionToShow('Validate'); // Aller à la validation
    };

    const ChangeFaction = () =>{
        setSectionToShow('FactionList');
        setSelectedFaction('');
        setSelectedRace('');
        setSelectedDetachement('');
    }

    const ChangeArmy = () =>{
        setSectionToShow('RaceList');
        setSelectedRace('');
        setSelectedDetachement('');
    }


    return (
        <div className="ListMaker">
            <div className="Header">
                <h2>New List</h2>
                <div className="Filter">
                </div>
            </div>
            <div className="Section">

                <input className="ListName" type="text" placeholder="List Name" onChange={(e) =>{setName(e.target.value)}} value={name}></input>

                    <button className="Format" onClick={() =>{HandleChangeFormat()}}>{format !== null ? format + " points" : "Format"}</button>
                    {
                        format === null ?
                        <ul className="FormatList" style={{ visibility: format === null ? 'visible' : 'hidden' }}>
                            <li role='button' onClick={() =>{setFormat(500); setPreviousFormat(500)}}>500</li>
                            <li role='button' onClick={() =>{setFormat(1000); setPreviousFormat(1000)}}>1000</li>
                            <li role='button' onClick={() =>{setFormat(2000); setPreviousFormat(2000)}}>2000</li>
                            <li role='button' onClick={() =>{setFormat(3000); setPreviousFormat(3000)}}>3000</li>
                        </ul>
                    : null
                    }

                    {selectedFaction && format && <div  onClick={()=>ChangeFaction()} className="ArmyIdentity">{selectedFaction.charAt(0).toUpperCase() + selectedFaction.replace('_', ' ').slice(1)}</div>}
                    {selectedRace && format && <div onClick={()=>ChangeArmy()}  className="ArmyIdentity">{selectedRace.charAt(0).toUpperCase() + selectedRace.replace('_', ' ').slice(1)}</div>}
                    {selectedDetachement  && <div  className="ArmyIdentity">{selectedDetachement.charAt(0).toUpperCase() + selectedDetachement.replace('_', ' ').slice(1)}</div>}

                    {
                        !selectedFaction && format ?
                            <button className="Faction">Factions</button>
                        :
                        selectedFaction && !selectedRace && !selectedDetachement && format ?
                            <button className="Faction">Armies</button>
                        :
                        selectedFaction && selectedRace && !selectedDetachement && format ?
                            <button className="Faction">Detachments</button>
                        : null
                    }

                    <ul className="FactionList" style={{ display: sectionToShow === "FactionList" && format ? 'flex' : 'none' }}>
                        {
                            Object.keys(factions).map((factionKey) => (
                            <li key={factionKey} onClick={() => {handleFactionChange(factionKey)}}>
                                {factionKey.replace('_', ' ').charAt(0).toUpperCase() + factionKey.replace('_', ' ').slice(1)}
                            </li>
                            ))
                        }
                    </ul>

                    <ul className="RaceList" style={{ display: sectionToShow === "RaceList" && format ? 'flex' : 'none'}}>
                        {
                            factions[selectedFaction] ? (
                                factions[selectedFaction].map((faction) => (
                                <li key={faction.name} value={faction.name} role='button' onClick={() => {handleRaceChange(faction.name)}}>
                                    {faction.name}
                                </li>
                                ))
                            )
                            :
                            null
                        }
                    </ul>

                    <ul className="DetachementList" style={{ display: sectionToShow === "DetachementList" && format ? 'flex' : 'none' }}>
                        {
                            factions[selectedFaction] && selectedRace ? (
                                factions[selectedFaction].find(faction => faction.name === selectedRace).detachments.map((detachment, index) => (
                                    <li key={index} role="button" onClick={() => handleDetachmentChange(detachment)}>
                                        {detachment}
                                    </li>
                                ))
                            )
                            : null
                        }
                    </ul>
                    <div className="ValidateSection">
                        <button className="CreateButton" style={{ display: sectionToShow === "Validate" ? 'flex' : 'none' }}>Create</button>
                    </div>


            </div>
        </div>
    )
}

export default ListMaker;
