import React, {Component} from 'react'



export default class Ajouterstg extends Component{
   state={novostg:{
    nom:"",
    prenom:"",
    ville:"",
    fil:"",
    photo:""
   }}


    render(){

       const handleChange=(e)=>{
        const {name,value}=e.target

        this.setState((prevState)=>({
            novostg:{...prevState.novostg,[name]:value}
        }))
       }
        const Ajouter=(e)=>{

            e.preventDefault();
           

            this.props.aj(this.state.novostg)

        }
        return ( <div>

<form onSubmit={Ajouter}>
      Nom: <input type="text" name="nom"  onChange={handleChange} /> <br />
      Prenom: <input type="text" name="prenom" onChange={handleChange} /> <br />
      Ville:
      <select name="ville"  onChange={handleChange}>
        <option value="RABAT">Rabat</option>
        <option value="FES">Fes</option>
        <option value="Casa">Casa</option>
      </select>{' '}
      <br />
      Filiere: <input type="text" name="filiere"  onChange={handleChange} /> <br />
      Photo: <input type="file" name="photo" onChange={handleChange} /> <br />
      <button type="submit">Ajouter</button>
    </form>
        </div> )
    }
}