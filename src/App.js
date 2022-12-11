import React from 'react';
import './App.css';
import Questions from './components/Questions';
import Start from './components/Start';

function App() {
  const [start, setStart] = React.useState(false)
  return (
    <div className="App">
      {!start && <Start setStart={setStart} />}
      {start && <Questions />}
    </div>
  );
}

export default App;
