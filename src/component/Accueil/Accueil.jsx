import "../../style/App.css";
import {  useState } from "react";
import QuestionContain from "../question/Question";

export default function Accueil (props){
   
    const [name, setName] = useState("")
    const [checkInput, setCheckInput] = useState(true) 
    function validate(e){
        e.preventDefault()
        name.length > 2 ? setCheckInput(false) : setCheckInput(true)  
    }

    return(
    
    (checkInput) ? (

        <div className="main-contain">
            <h1>Bienvenu dans DEVENIR INTELLIGENT</h1>
            <form onSubmit={validate}>
                <label>Inserez votre nom</label><br/>
                <input  value={name} onChange={(e) => setName(e.target.value)} className="player-name" placeholder="nom du joueur"/><br/>
                <button type="submit" className="btn-jouer">Jouer</button>
            </form>
            <h3>{props.topScore}</h3>
        </div>
    ) : <QuestionContain name={name}/>
    )
}