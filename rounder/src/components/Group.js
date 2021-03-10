import {useState} from 'react'
import GroupFixture from './GroupFixture'

const Group = ({kind, setKind}) => {
  const [start, setStart] = useState(false)
  const [pooling, setPooling] = useState(true)
  const [rand, setRand] = useState(false)
  const [teamsValue, setTeamsValue] = useState('')
  const [groupsValue, setGroupsValue] = useState('')
  let teamsQty = [12,16,24,32]
  let groupsQty12 = [2,3,4]
  let groupsQty16 = [2,4]
  let groupsQty24 = [3,4,6]
  let groupsQty32 = [4,8]

  const showTeamQty = teamsQty.map((number,i) => (
    <button key={i} className={`${teamsValue === number ? "button active" : "button"}`} onClick={() => {setTeamsValue(number); setGroupsValue('')}} >{number}</button>
  ))

  const showGroupQty = teamsValue === 12 ? 
  (
    groupsQty12.map((number,i) => <button className={`${groupsValue === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setGroupsValue(number)}>{number}</button>)
  ) : teamsValue === 16 ?
  (
    groupsQty16.map((number,i) => <button className={`${groupsValue === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setGroupsValue(number)}>{number}</button>)
  ) : teamsValue === 24 ?
  (
    groupsQty24.map((number,i) => <button className={`${groupsValue === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setGroupsValue(number)}>{number}</button>)
  ) : teamsValue === 32 ?
  (
    groupsQty32.map((number,i) => <button className={`${groupsValue === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setGroupsValue(number)}>{number}</button>)
  ) : ''

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
    {showTeamQty}
    </div>

    <h3 className="title">Groups quantity</h3>
    <div className="button-group">
    {showGroupQty}
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
        <button className="button-accept" onClick={() => {setRand(true); setStart(false)}}>START</button>
      </div>
      </section>
      
    )}

    {rand && (
      <>
      <section className="tables">
      <table className="table">
      <tr className="table-title">GROUP A</tr>
      <tr className="table-input">
        Unia
      </tr>
      <tr className="table-input">
        Unia
      </tr>
      <tr className="table-input">
        Unia
      </tr>
      <tr className="table-input last">
        Unia
      </tr>
      
      
      </table>

      <table className="table">
      <tr className="table-title">GROUP B</tr>
      <tr className="table-input light">
        Unia
      </tr>
      <tr className="table-input light">
        Unia
      </tr>
      <tr className="table-input light">
        Unia
      </tr>
      <tr className="table-input light last">
        Unia
      </tr>
      
      
      </table>

      <div className="button-group">
      <button className="button-accept">COPY</button>
      <button className="button-accept cancel">RESET</button>
    </div>
    </section>

    <GroupFixture />
    </>
    )}
   
  </main>
  )
}

export default Group
