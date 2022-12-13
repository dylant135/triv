import React from "react";

export default function Question(props) {

    function choose(event) {
        const targ = event.target
        for(let i = 0; i < 4; i++) {
            if(props.choice[i + 1].isSelected) {
                props.setQArr(prevState => prevState.map(q => {
                    return {...q, isSelected: false}
                }))
            } else {

            }
        }
        console.log(targ.innerHTML)
    }

    return (
        <div className="question">
            <h2 className="theQuestion">{props.question}</h2>
            <div className="choices">
                <div className="choice" onClick={choose}>{props.choice1.choice}</div>
                <div className="choice" onClick={choose}>{props.choice2.choice}</div>
                <div className="choice" onClick={choose}>{props.choice3.choice}</div>
                <div className="choice" onClick={choose}>{props.choice4.choice}</div>
            </div>
        </div>
    )
}