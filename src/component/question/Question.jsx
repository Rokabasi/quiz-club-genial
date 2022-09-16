import { useState } from "react";
import "../../style/App.css";
import { Question } from "./Questionnaire";
import Result from "../../result/Result";

export default function QuestionContain (props){
    const [number,setNumber] = useState(0)
    const [score,setScore] = useState(0)
    // const giveScore = false
    const name = props.name

    const changeState = ()=> ( number <10 ? setNumber(number+1) : null )

    const checkAnswer = (responsesState)=>( responsesState ? setScore(score+1): setScore(score))

    return (

        number < 10 ? 
        <div  className="main-contain">
            <h1>{Question[number].questionText}</h1>
            {
                Question[number].answers.map(question => (
                    <button key={question.answer} onClick={ function(){changeState() ;checkAnswer(question.corrrectAnswer) }} className="btn-answer">{question.answer}</button>
                ))
            }
            <div className="question-footer">
                <h3>SCORE : {score}</h3>
                <h3>QUESTION {number+1}/10</h3>
            </div>
        </div> :
        <div>
            <Result name={name} score={score} />
        </div>
        )

}