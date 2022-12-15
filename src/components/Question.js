import React from "react";

export default function Question(props) {

    return (
        <div className="question" onClick={(event) => {
            const targ = event.target
            const content = targ.textContent
            for(let i = 0; i < 4; i++) {
                
            }
            if(targ.className === 'choice') {
                props.setQArray(prevState => {
                    return ([
                        [...prevState]
                    ])
                })
            }
            }}>

            <h2 className="theQuestion">{props.question}</h2>
            <div className="choices">
                <div className="choice" >{props.choice1.choice}</div>
                <div className="choice" >{props.choice2.choice}</div>
                <div className="choice" >{props.choice3.choice}</div>
                <div className="choice" >{props.choice4.choice}</div>
            </div>
        </div>
    )
}