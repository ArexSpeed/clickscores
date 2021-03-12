import {useState, useEffect} from 'react'
import GroupFixture from './GroupFixture'

const GroupFill = ({numberOfTeams, numberOfGroups}) => {
  const [start, setStart] = useState(false)
  const [teamsInGroup, setTeamsInGroup] = useState([])

  useEffect(() => {
    setTeamsInGroup([])
    for(let i = 1; i<=numberOfTeams; i++){
      setTeamsInGroup(prev => [...prev,
        {
        teamId: i,
        group: Math.ceil(i/(numberOfTeams/numberOfGroups)),
        name: ''
      }] 
      )  
   }
  }, [numberOfTeams])


  let groups = []
  for (let i = 1; i<= numberOfGroups; i++) groups.push(i)
  const handleChangeInput = (i, e) => {
    const values = [...teamsInGroup];
    values[i][e.target.name] = e.target.value;
    setTeamsInGroup(values);
  };

  return (
    <>
    <section className="tables">
      {
        groups.map((group,i) => (
          <div className="table" key={i}>
              <div className="table-title">GROUP {group}</div>
              {teamsInGroup.map((team, j) => (
                 team.group === group &&
                 <input 
                  key={j} 
                  type="text" 
                  className="table-input" 
                  name="name"
                  placeholder={`Team ${team.teamId}`} 
                  onChange={e => handleChangeInput(j, e)}
                  />
              ))}
          </div>
        ))
      }

    <div className="button-group">
      <button className="button-accept" onClick={() => setStart(true)}>START</button>
      </div>
      </section>
      {/* {start && <GroupFixture teamsInPot={teamsIn} groups={groups} pots={pots}/>} */}
    </>
  )
}

export default GroupFill
