import React from "react";
import Question from "./Question";

export default function Questions(props) {
    const [qArr, setQArray] = React.useState(makeQuestions())

    function makeQuestions() {
        const arr = []
        for(let i = 0; i < props.questions.length; i++) {
            const theQ = props.questions[i]
            //sorting the 4 multipule choice answers
            const answers = []
            answers.push(theQ.incorrect_answers[0])
            answers.push(theQ.incorrect_answers[1])
            answers.push(theQ.incorrect_answers[2])
            answers.push(theQ.correct_answer)
            answers.sort(() => Math.random() - 0.5)

            arr.push({
                question: theQ.question,
                corrrectAnswer: theQ.correct_answer,
                choices: [
                    {
                        choice: answers[0],
                        isSelected: false
                    },
                    {
                        choice: answers[1],
                        isSelected: false
                    },
                    {
                        choice: answers[2],
                        isSelected: false
                    },
                    {
                        choice: answers[3],
                        isSelected: false
                    }
                ]
            })
        }
        return arr
    }

    let count = 0
    const x = qArr.map(a => {
        count++
        return (
            <Question
                key={a.corrrectAnswer}
                id={count}
                question={a.question}
                corrrectAnswer={a.correct_answer}
                choice1={a.choices[0]}
                choice2={a.choices[1]}
                choice3={a.choices[2]}
                choice4={a.choices[3]}
                setQArray={setQArray}
                choose={choose}
            />
        )
    })

    function choose(id) {
        const targ = id
        /*for(let i = 0; i < 4; i++) {
            if(qArr.choice[i + 1].isSelected) {
                setQArray(prevState => {
                    const current = prevState[i]
                    return {...current}
                })
            }
        }*/
        console.log(targ)
    }
    /*
        array of object
        each object corrisponds to a question
        {
            question: 'how many cards in a deck',
            correct_answer: '52'
            choices: {
                choice1: {
                    choice: '50',
                    isSelected: false
                },
                choice2: {
                    choice: '52',
                    isSelected: false
                },
            }
        }
    )*/

    function sub() {
        for(let i = 0; i < props.questions.length; i++) {
            
        }
    }

    return (
        <div className="questions">
            <h1>Questions</h1>
            {x}
            <div className="buttContainer">
                <button className="submit" onClick={sub}>Submit</button>
            </div>
        </div>
    )
}