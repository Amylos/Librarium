import { useState,useEffect } from "react";

import '../styles/ListMaker.css'




const ListMaker = (props) =>{

    const userData = props.userData;
    const setComponentToDisplay = props.setComponentToDisplay;
    const triggerPopUp = props.triggerPopUp;

    const factions = [
        { name: "Space Marine" },
        { name: "Imperium" },
        { name: "Xenos" },
        { name: "Chaos" }
    ];
    

    const [armies,setArmies] = useState(null);
    const [detachments,setDetachments] = useState(null);

    
    useEffect(()=>{

        GetArmies();
        GetDetachments();

    },[]);

    async function GetArmies() {
        try {
            const response = await fetch('http://localhost:3001/armies', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }
            const armies = await response.json();
            console.log('Armées récupérées:', armies);
            setArmies(armies);
            return armies;
        } catch (error) {
            console.error('Erreur lors de la récupération des armées:', error);
            return null;
        }
    }

    async function GetDetachments() {
        try {
            const response = await fetch('http://localhost:3001/detachments', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            const detachments = await response.json();
            console.log('Détachements récupérées:', detachments);
            setDetachments(detachments);
            return detachments;

        } catch (error) {
            console.error('Erreur lors de la récupération des armées:', error);
            return null;
        }
    }

    async function CreateList() {
        try {
            const response = await fetch('http://localhost:3001/lists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    author: userData.pseudo,
                    userId:userData.id,
                    name:name,
                    faction:selectedFaction,
                    army:selectedRace,
                    points:format,
                    unitsNumber:0,
                    figurinesNumber:0,
                    detachments:selectedDetachement
                })
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }
            const newArmy = await response.json();
            console.log('Armée créée avec succès:', newArmy);
            triggerPopUp("List created successfuly.", '#28A745');
            setComponentToDisplay('UserLists');
            return newArmy;
        } catch (error) {
            console.error('Erreur lors de la création de l\'armée:', error);
            triggerPopUp(`Failed to create new list`, '#D9534F');
            return null;
        }
    }

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
        console.log("Résumé de la sélction :");
        console.log("Name",name);
        console.log("Format",format);
        console.log("Faction : ",selectedFaction);
        console.log("Army : ", selectedRace );
        console.log("Detachment : ",detachment);

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
                    {selectedDetachement  && <div  className="ArmyIdentity">{selectedDetachement.name.charAt(0).toUpperCase() + selectedDetachement.name.replace('_', ' ').slice(1)}</div>}

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
                            factions.map((faction) => (
                            <li key={faction.name} onClick={() => {handleFactionChange(faction.name)}}>
                                {faction.name}
                            </li>
                            ))
                        }
                    </ul>
                    <ul className="RaceList" style={{ display: sectionToShow === "RaceList" && format ? 'flex' : 'none'}}>
                        {selectedFaction && armies && armies.map((army,index) => (
                            selectedFaction === army.faction ? (
                                <li key={index} value={army.name} role='button' onClick={() => {handleRaceChange(army.name)}}>
                                    {army.name}
                                </li>
                            ) : null
                        ))}
                    </ul>
                    <ul className="DetachementList" style={{ display: sectionToShow === "DetachementList" && format ? 'flex' : 'none' }}>
                        {selectedFaction && selectedRace && detachments && detachments.map((detachment, index) => (
                            selectedRace === detachment.army ? (
                                <li key={index} role="button" onClick={() => handleDetachmentChange(detachment)}>
                                    {detachment.name}
                                </li>
                            ) : null
                        ))}
                    </ul>
                    <div className="ValidateSection">
                        <button className="CreateButton" style={{ display: sectionToShow === "Validate" ? 'flex' : 'none' }} onClick={() => CreateList()}>Create</button>
                    </div>
            </div>
        </div>
    )
}

export default ListMaker;
