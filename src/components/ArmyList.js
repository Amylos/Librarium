import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ArmyList = (props) =>{

    const points = props.points;
    const army = props.army;
    const name = props.name;
    const author = props.author;

    const list = props.list;
    const HandleClick = props.HandleClick;

    return(
        <div className="ArmyList" onClick={() => HandleClick(list)}>
            <div className="Left">
                <div className="Faction">
                    Faction
                </div>
                <div className="Points">
                    2000 points
                </div>
            </div>
            <div className="Center">
                <div className="ArmyName">
                    Army Name
                </div>
                <div className="Author">
                    Author
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