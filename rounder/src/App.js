
import { useState } from 'react';
import './App.css';
import Group from './components/Group';
import Header from './components/Header';
import League from './components/League';

function App() {
  const [kind, setKind] = useState('League')
  return (
    <div className="App">
      <div className="container">
        <Header />
        {kind === 'League' ?
        (<League kind={kind} setKind={setKind} />)
        : (<Group kind={kind} setKind={setKind} />)
        }

        </div>
    </div>
  );
}

export default App;
