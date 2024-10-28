import React from 'react';
import '../styles/unitDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';


const UnitDisplay = (props) => {
    const HandleUnSelectUnit = props.HandleUnSelectUnit;
    const unit = props.unit;

    console.log(unit);
    return (
        <div className="UnitDisplay">
            <div className='Unitsheader'>
                <button className='BackButton' onClick={() => {HandleUnSelectUnit()}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h3 className='UnitNames'>{unit.unite}</h3>
                <button className='UnitConfig'>
                    <FontAwesomeIcon icon={faGears} />
                </button>
            </div>
            <div className='StatsContainer'>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            M
                        </div>
                        <div className='StatsCheck'>
                            {unit.stats.mouvement}
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            T
                        </div>
                        <div className='StatsCheck'>
                        {unit.stats.mouvement}
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            SV
                        </div>
                        <div className='StatsCheck'>
                        {
                            unit.stats.sauvegarde.length > 2 ?
                            <>
                                {unit.stats.sauvegarde[0]} / {unit.stats.sauvegarde[1]}
                            </>
                            :
                            <>
                                {unit.stats.sauvegarde[0]}
                            </>
                        }
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            W
                        </div>
                        <div className='StatsCheck'>
                            {unit.stats.points_de_vie}
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            LD
                        </div>
                        <div className='StatsCheck'>
                            {unit.stats.commandement}
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            OC
                        </div>
                        <div className='StatsCheck'>
                            {unit.stats.controle_objectif}
                        </div>
                    </div>
                </div>
                <h3 className='UnitNames'>Weapons</h3>
                        {
                            unit.armes.map((weapon) =>(
                                <Weapons weapon = {weapon}/>

                            ))
                        }

                <h3 className='UnitNames'>Abilities</h3>
                <Abilities aptitudes = {unit.aptitudes} aptitudesBase = {unit.aptitudesBase}/>
                <KeyWords/>
        </div>
    );
};

export default UnitDisplay;




const Weapons = (props) =>{

    const weapon = props.weapon;
    console.log('weapon',weapon);

    return(
        <div className='Weapons'>
            <div className='OneWeapon'>
                <h4 className='WeaponName'>{weapon.name}</h4>
                <div className='WeaponStatsContainer'>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            Range
                        </div>
                        <div className='WeaponStatsCheck'>
                        {weapon.portee}
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            A
                        </div>
                        <div className='WeaponStatsCheck'>
                        {weapon.attaque}
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            CT
                        </div>
                        <div className='WeaponStatsCheck'>
                            {weapon.C_T}
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            S
                        </div>
                        <div className='WeaponStatsCheck'>
                        {weapon.force}
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            AP
                        </div>
                        <div className='WeaponStatsCheck'>
                        {weapon.PA}
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            D
                        </div>
                        <div className='WeaponStatsCheck'>
                        {weapon.degats}
                        </div>
                    </div>
                </div>
                <ul className='WeaponAbilities'>
                    {
                        weapon.capacites.map((capacity)=>(
                            <li className='WeaponAbility'>capacity</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}




const Abilities = () =>{
    return(
        <div className='Abilities'>
            <div className='Ability'>
                    <h5 className='AbilityName'>Torrent</h5>
                    <p className='AbilityDescription'>nfsdjknsmjkfn fnsdlmfn flsdnflsdnf slfnsf nslfnmfnsfnsfknsdkl fnsdlkfn slfnsflsnfdlsfndslkfnsdlkfns klfnflksn flksdf</p>
            </div>
        </div>
    )
}


const KeyWords = () =>{
    return(
        <div className='KeyWords'>
            <ul>
                <li>Space marine</li>
                <li>Space marine</li>
                <li>Space marine</li>
            </ul>
        </div>
    )
}