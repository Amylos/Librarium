import React from 'react';
import '../styles/unitDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';


const UnitDisplay = (props) => {
    const HandleUnSelectUnit = props.HandleUnSelectUnit;
    const unit = props.unit;

    return (
        <div className="UnitDisplay">
            <div className='Unitsheader'>
                <button className='BackButton' onClick={() => {HandleUnSelectUnit()}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h3 className='UnitNames'>Terminator</h3>
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
                            6"
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            T
                        </div>
                        <div className='StatsCheck'>
                            12
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            SV
                        </div>
                        <div className='StatsCheck'>
                            3+/4+
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            W
                        </div>
                        <div className='StatsCheck'>
                            3
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            LD
                        </div>
                        <div className='StatsCheck'>
                            6
                        </div>
                    </div>
                    <div className='StatsColumn'>
                        <div className='StatsName'>
                            OC
                        </div>
                        <div className='StatsCheck'>
                            2
                        </div>
                    </div>
                </div>
                <h3 className='UnitNames'>Weapons</h3>
                <Weapons/>
                <h3 className='UnitNames'>Abilities</h3>
                <Abilities/>
                <KeyWords/>
        </div>
    );
};

export default UnitDisplay;




const Weapons = () =>{
    return(
        <div className='Weapons'>
            <div className='OneWeapon'>
                <h4 className='WeaponName'>Cannon d'assaut</h4>
                <div className='WeaponStatsContainer'>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            Range
                        </div>
                        <div className='WeaponStatsCheck'>
                            16"
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            A
                        </div>
                        <div className='WeaponStatsCheck'>
                            1
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            CT
                        </div>
                        <div className='WeaponStatsCheck'>
                            3+
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            S
                        </div>
                        <div className='WeaponStatsCheck'>
                            3
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            AP
                        </div>
                        <div className='WeaponStatsCheck'>
                            -3
                        </div>
                    </div>
                    <div className='WeaponStatsColumn'>
                        <div className='WeaponStatsName'>
                            D
                        </div>
                        <div className='WeaponStatsCheck'>
                            1
                        </div>
                    </div>
                </div>
                <ul className='WeaponAbilities'>
                    <li className='WeaponAbility'>Torrent</li>
                    <li className='WeaponAbility'>Torrent</li>
                    <li className='WeaponAbility'>Torrent</li>
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