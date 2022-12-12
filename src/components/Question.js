import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <h2 className="theQuestion">{props.title}</h2>
            <div className="choices">
                <div className="choice">{props.choice1}</div>
                <div className="choice">{props.choice2}</div>
                <div className="choice">{props.choice3}</div>
                <div className="choice">{props.choice4}</div>
            </div>
        </div>
    )
}