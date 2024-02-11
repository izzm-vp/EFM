import {Link} from 'react-router-dom'


export default function Nav(){
    return <div>

        <ul>
            <li>
                <Link to="/list">
                 Liste Stagiaires
                
                </Link>
            </li>
            <li>
                <Link to="/aj">
                 Ajouter Stagiaires
                
                </Link>
            </li>
            <li>
                <Link to="/supp">
                 supprimer Stagiaires
                
                </Link>
            </li>
            <li>
                <Link to="/rech">
                 rechercher Stagiaires
                
                </Link>
            </li>
        </ul>
    </div>
}