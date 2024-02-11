import { useState } from "react"


export default function Rech({lstg}){
const [rech,setRech]=useState()
const [stgs,setStgs]=useState()



   const Rechercher=(e)=>{
          e.preventDefault();
       const wantedstg=lstg.find(res=>res.nom===rech)

       setStgs(wantedstg)
   }


    return <div>

      <form action="" onSubmit={Rechercher} >

        Rechercher : <input type="text" onChange={(e)=>{setRech(e.target.value)}}/> <br />

        <button>rechercher</button>
      </form>

      <div>
         {stgs && ( <h1>{stgs.nom}</h1> )}
      </div>
    </div>
}