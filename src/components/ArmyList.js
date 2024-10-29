import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const ArmyList = (props) =>{

    const list = props.list;
    const [listPoints,setListPoints] = useState(0);


    const HandleClick = props.HandleClick;

    return(
        <div className="ArmyList" onClick={() => HandleClick(list)}>
            <div className="Left">
                <div className="Faction">
                    {list.army}
                </div>
                <div className="Points">
                    {listPoints} pts
                </div>
            </div>
            <div className="Center">
                <div className="ArmyName">
                    {list.name}
                </div>
                <div className="Author">
                    {list.author}
                </div>
            </div>
            <div className="Right">
                <button className="Favoris">
                <FontAwesomeIcon className="Icon" icon={faStar} />
                </button>
            </div>
        </div>
    )
}


export default ArmyList;