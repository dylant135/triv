import React from "react";
import Question from "./Question";

export default function Questions(props) {
    /*for(let i = 0; i < props.questions.length; i++) {
        const q = props.questions[i]
        console.log(q)
    }*/

    const x = props.questions.map(a => {
        <Question title={a.question} />
    })


    return (
        <div className="questions">
            <h1>Questions</h1>
            {x}
        </div>
    )
}