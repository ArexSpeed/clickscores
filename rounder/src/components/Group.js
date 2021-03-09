import {useState} from 'react'

const Group = ({kind, setKind}) => {
  const [start, setStart] = useState(false)
  const [pooling, setPooling] = useState(true)
  return (
    <main className="main">
    <h3 className="title">Create your fixtures</h3>
    <div className="button-group">
    <div className="selector">
        <button className={`${kind === 'Group' ? "selector-button active" : "selector-button"}`} onClick={() => setKind('Group')}>GROUP</button>
        <button className={`${kind === 'League' ? "selector-button active" : "selector-button"}`} onClick={() => setKind('League')}>LEAGUE</button>
      </div>
    </div>
    <h3 className="title">Teams quantity</h3>
    <div className="button-group">
    <button className="button">1</button>
    <button className="button">2</button>
    <button className="button">3</button>
    <button className="button">4</button>
    <button className="button">5</button>
    <button className="button">5</button>
    </div>

    <h3 className="title">Groups quantity</h3>
    <div className="button-group">
    <button className="button-gr">1</button>
    <button className="button-gr">2</button>
    <button className="button-gr">3</button>
    <button className="button-gr">4</button>
    <button className="button-gr">5</button>
    <button className="button-gr">5</button>
    </div>

    <h3 className="title">With pooling?</h3>
    <div className="selector selector-pooling">
      <button className={`${pooling ? 'selector-button active' : 'selector-button'}`} onClick={() => setPooling(true)}>YES</button>
      <button className={`${pooling ? 'selector-button' : 'selector-button active'}`} onClick={() => setPooling(false)}>NO</button>
    </div>

    <div className="button-group">
      <button className="button-accept" onClick={() => setStart(true)}>START</button>
    </div>

    {start && (
      <section className="tables">
        <div className="table">
        <div className="table-title">POOL 1</div>
        <input type="text" className="table-input" placeholder="Team 1"/>
        <input type="text" className="table-input" placeholder="Team 2"/>
        <input type="text" className="table-input" placeholder="Team 3"/>
        <input type="text" className="table-input last" placeholder="Team 4"/>
        </div>

        <div className="table">
        <div className="table-title">POOL 1</div>
        <input type="text" className="table-input light" placeholder="Team 1"/>
        <input type="text" className="table-input light" placeholder="Team 2"/>
        <input type="text" className="table-input light" placeholder="Team 3"/>
        <input type="text" className="table-input light last" placeholder="Team 4"/>
        </div>

        <div className="button-group">
        <button className="button-accept">RAND</button>
      </div>
      </section>
      
    )}
   
  </main>
  )
}

export default Group
