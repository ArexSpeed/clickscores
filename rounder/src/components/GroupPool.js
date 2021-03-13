import {useState, useEffect, useRef} from 'react'
import GroupDraw from './GroupDraw'

const GroupPool = ({numberOfTeams, numberOfGroups}) => {
  const [start, setStart] = useState(false)
  const [teamsInPot, setTeamsInPot] = useState([])
  const groupRef = useRef('')

  //reset teamsName on change teamsValue
  useEffect(() => {
    setTeamsInPot([])
    for(let i = 1; i<=numberOfTeams; i++){
      setTeamsInPot(prev => [...prev,
        {
        teamId: i,
        pot: Math.ceil(i/numberOfGroups),
        name: ''
      }] 
      )  
   }
  }, [numberOfTeams])

  let pots = []
  let groups = []

  for (let i = 1; i<= numberOfTeams/numberOfGroups; i++) pots.push(i)
  for (let i = 1; i<= numberOfGroups; i++) groups.push(i)


  const handleChangeInput = (i, e) => {
    const values = [...teamsInPot];
    values[i][e.target.name] = e.target.value;
    setTeamsInPot(values);
  };

    //scrolling
    const scrollInto = () => {
      setTimeout(() => {
        groupRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 100
      ) 
    }


  return (
    <>
    <section className="tables">
      {
        pots.map((pot,i) => (
          <div className="table" key={i}>
              <div className="table-title">POT {pot}</div>
              {teamsInPot.map((team, j) => (
                 team.pot === pot &&
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
          <button className="button-accept" 
            onClick={() => {
              setStart(true)
              scrollInto()
              }}>
              START
          </button>
        </div>
      </section>
      <section ref={groupRef}>
      {start && <GroupDraw teamsInPot={teamsInPot} groups={groups} pots={pots}/>}
      </section>
    </>
  )
}

export default GroupPool
