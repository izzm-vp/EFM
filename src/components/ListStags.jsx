

export default function ListStags({lsStags,supp}){

   const cardstyles={
        border:"solid,black,1px",
        borderRadius:"5px",
       padding:"10px",
       
   }

    const ls=lsStags.map((res,i)=>{
        return <div className="card" style={cardstyles} key={i}>

            <img src={res.photo} alt="imgstg" />
            <ul>
                <li>Nom : {res.nom}</li>
                <li>preom : {res.prenom}</li>
                <li>ville : {res.ville}</li>
                <li>filiere : {res.fil}</li>
            </ul>

            <button onClick={()=>{supp(res.nom)}}>Supprimer</button>
        </div>
    })
    return <div >
        <h1>Liste Des Stagiaires</h1>

        <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>{ls}</div>
      
    </div>
}