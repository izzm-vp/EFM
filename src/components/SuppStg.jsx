import { useState } from "react"


export default function Supprimerstg({supp1}){
const [supp,setSupp]=useState()


const supprimer=(x)=>{
    x.preventDefault();


    supp1(supp)

}

    return <div>

      <form action="" onSubmit={supprimer}>

        Supprimer : <input type="text" onChange={(e)=>{setSupp(e.target.value)}}/> <br />

        <button>Supprimer</button>
      </form>
    </div>
}