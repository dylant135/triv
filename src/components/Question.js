import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <h2 className="theQuestion">{props.title}</h2>
        </div>
    )
}