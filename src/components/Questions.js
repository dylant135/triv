import React from "react";
import Question from "./Question";

export default function Questions(props) {

    const x = props.questions.map(a => {
        const choiceArr = []
        choiceArr.push(a.correct_answer)
        choiceArr.push(a.incorrect_answers[0])
        choiceArr.push(a.incorrect_answers[1])
        choiceArr.push(a.incorrect_answers[2])
        choiceArr.sort(() => Math.random() - 0.5)
        return (
        <Question 
            title={a.question}
            choice1={choiceArr[0]}
            choice2={choiceArr[1]}
            choice3={choiceArr[2]}
            choice4={choiceArr[3]}
         />)
    })


    return (
        <div className="questions">
            <h1>Questions</h1>
            {x}
        </div>
    )
}