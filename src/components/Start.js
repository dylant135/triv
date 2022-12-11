import React from "react";

export default function Start(props) {
    function startGame() {
        props.setStart(true)
    }
    return (
        <div className="start">
            <h1>Quizical</h1>
            <button className="startbtn" onClick={startGame}>Start</button>
        </div>
    )
}