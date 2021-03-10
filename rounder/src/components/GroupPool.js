import {useState, useRef} from 'react'

const GroupPool = ({teamsValue, groupsValue}) => {
  const [start, setStart] = useState(false)
  const [rand, setRand] = useState(false)
  const [teams, setTeams] = useState([])
  const itemEl = useRef({})

  let pools = []
  let teamsInGroup = []

  for (let i = 1; i<= groupsValue; i++) pools.push(i)
  for (let i = 1; i<= teamsValue/groupsValue; i++) teamsInGroup.push(i)

  return (
    <section className="tables">
      {
        pools.map((pool,i) => (
          <div className="table" key={i}>
              <div className="table-title">POOL {pool}</div>
              {teamsInGroup.map((team, j) => (
                 <input 
                  key={j} 
                  type="text" 
                  className="table-input" 
                  placeholder={`Team ${teamsInGroup.length*(pool-1)+team}`} 
                  id={`team${teamsInGroup.length*(pool-1)+team}`}
                  ref={(el) => itemEl.current[teamsInGroup.length*(pool-1)+team] = el}
                  onChange={(e) => setTeams({pool: pool,teamId: teamsInGroup.length*(pool-1)+team, teamName: e.target.value})}/>
              ))}
          </div>
        ))
      }

        <div className="button-group">
        <button className="button-accept" onClick={() => {setRand(true); setStart(false); console.log(itemEl.value, 'ref')}}>START</button>
      </div>
      </section>
  )
}

export default GroupPool
