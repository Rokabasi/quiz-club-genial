import { useState } from "react"
import "../style/App.css"
import Accueil from "../component/Accueil/Accueil"

export default function Result (props){
    const [replayGame, setReplayGame] = useState(true)
    const replay = ()=>( setReplayGame(!replayGame) )
    const [topScore,setMyTopScore]  = useState()
    
    console.log(topScore);

    return (
        replayGame ? 
        <div className="main-contain">
            <h1>Tu es arrivé à la fin du jeu</h1>
            <h2 className="result-name">{props.name}</h2>
            <h2 className="result-score">SCORE : {props.score} </h2>
            <button className="btn-replay" onClick={replay}>JOUER ENCORE</button>
        </div> :
        <Accueil topScore={topScore}/>
    )
}