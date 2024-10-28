import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ArmyList = (props) =>{

    const list = props.list;
    const listsPoints = list.units.reduce((total, unit) => {
        // Vérifier si une figurine est sélectionnée
        const selectedFigurines = unit.figurines.filter(figurine => figurine.selected);
    
        // Calculer les points basés sur la figurine sélectionnée
        selectedFigurines.forEach(figurine => {
            const figurineCount = figurine; // Supposons que figurine contient la valeur (10 ou 20)
            
            // Trouver l'index correspondant à cette figurine pour récupérer les points
            const index = unit.figurines.indexOf(figurineCount);
            if (index !== -1) {
                total += unit.points[index]; // Ajouter les points correspondants
            }
        });

        return total; // Retourner le total accumulé
    }, 0);

    const HandleClick = props.HandleClick;

    return(
        <div className="ArmyList" onClick={() => HandleClick(list)}>
            <div className="Left">
                <div className="Faction">
                    {list.faction}
                </div>
                <div className="Points">
                    {listsPoints} points
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