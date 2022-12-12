import React from 'react';
import './App.css';
import Questions from './components/Questions';
import Start from './components/Start';

function App() {
  const [start, setStart] = React.useState(false)
  const [questions, setQuestions] = React.useState()

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    .then(res => res.json())
    .then(data => setQuestions(data.results))
  }, [])

  console.log(questions)
  return (
    <div className="App">
      {!start && <Start setStart={setStart} />}
      {start && <Questions questions={questions} />}
    </div>
  );
}

export default App;
