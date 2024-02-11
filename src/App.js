import { useState } from 'react';
import './App.css';
import ListStags from './components/ListStags';
import Ajouterstg from './components/Ajouter';
import Supprimerstg from './components/SuppStg';
import Rech from './components/Rechercher';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Nav from './components/nav';
function App() {

  const [listStags,setListStags]=useState([{
    nom:"chadi",prenom:"chakir",ville:"tanger",fil:"webofws",photo:"photo.png"
  }])

  const Supprimer=(nom)=>{

     const newls=listStags.filter(res=>res.nom!==nom)

     setListStags(newls)
  }

  const Ajouter=(nStag)=>{

    const newls=[...listStags,nStag]

    setListStags(newls)
 }
  return (
    <div className="App">

      <BrowserRouter>

      <Nav/>
         <Routes>
          <Route path='/list' element={ <ListStags lsStags={listStags} supp={Supprimer}/>}/>
          <Route path='/aj' element={  <Ajouterstg aj={Ajouter}/> }/>
          <Route path='/supp' element={  <Supprimerstg supp1={Supprimer}/>}/>
          <Route path='/rech' element={  <Rech lstg={listStags}/>}/>

         </Routes>
      
      </BrowserRouter>
     
     
     
     
    </div>
  );
}

export default App;
