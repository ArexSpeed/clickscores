import {useState, useRef} from 'react'
import GroupFill from './GroupFill'
import GroupPool from './GroupPool'

const Group = ({kind, setKind}) => {
  const [start, setStart] = useState(false)
  const [pooling, setPooling] = useState(true)
  const [rand, setRand] = useState(false)
  const [numberOfTeams, setNumberOfTeams] = useState('')
  const [numberOfGroups, setNumberOfGroups] = useState('')
  const fillRef = useRef('')
  let teamsQty = [12,16,24,32]
  let groupsQty12 = [2,3]
  let groupsQty16 = [2,4]
  let groupsQty24 = [4,6]
  let groupsQty32 = [4,8]

  const showTeamQty = teamsQty.map((number,i) => (
    <button key={i} className={`${numberOfTeams === number ? "button active" : "button"}`} onClick={() => {setNumberOfTeams(number); setNumberOfGroups('')}} >{number}</button>
  ))

  const showGroupQty = numberOfTeams === 12 ? 
  (
    groupsQty12.map((number,i) => <button className={`${numberOfGroups === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setNumberOfGroups(number)}>{number}</button>)
  ) : numberOfTeams === 16 ?
  (
    groupsQty16.map((number,i) => <button className={`${numberOfGroups === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setNumberOfGroups(number)}>{number}</button>)
  ) : numberOfTeams === 24 ?
  (
    groupsQty24.map((number,i) => <button className={`${numberOfGroups === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setNumberOfGroups(number)}>{number}</button>)
  ) : numberOfTeams === 32 ?
  (
    groupsQty32.map((number,i) => <button className={`${numberOfGroups === number ? "button-gr active" : "button-gr"}`} key={i} onClick={() => setNumberOfGroups(number)}>{number}</button>)
  ) : ''

    //scrolling
    const scrollInto = () => {
      setTimeout(() => {
        fillRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 100
      ) 
    }

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

    <h3 className="title">With a draw?</h3>
    <div className="selector selector-pooling">
      <button className={`${pooling ? 'selector-button active' : 'selector-button'}`} onClick={() => setPooling(true)}>YES</button>
      <button className={`${pooling ? 'selector-button' : 'selector-button active'}`} onClick={() => setPooling(false)}>NO</button>
    </div>

    <div className="button-group">
          <button className="button-accept" 
            onClick={() => {
              setStart(true)
              scrollInto()
              }}>
              START
          </button>
        </div>

    {(start && pooling) && (
      <section ref={fillRef}>
      <GroupPool numberOfTeams={numberOfTeams} numberOfGroups={numberOfGroups} />
      <div className="button-group">
      <button className="button-accept cancel" 
        onClick={() => {
          setNumberOfGroups('')
          setNumberOfTeams('')
          setStart(false)
        }}>RESET</button>
      </div>
      </section>
    )}

    {(start && !pooling) && (
      <section ref={fillRef}>
      <GroupFill numberOfTeams={numberOfTeams} numberOfGroups={numberOfGroups} />
      <div className="button-group">
      <button className="button-accept cancel" 
        onClick={() => {
          setNumberOfGroups('')
          setNumberOfTeams('')
          setStart(false)
        }}>RESET</button>
    </div>
      </section>
    )}



    {/* {rand && (
      <>
      <div className="button-group">
      <button className="button-accept">COPY</button>
      <button className="button-accept cancel" 
        onClick={() => {
          setNumberOfGroups('')
          setNumberOfTeams('')
          setStart(false)
        }}>RESET</button>
    </div>

    <GroupFixture />
    </>
    )} */}
   
  </main>
  )
}

export default Group
