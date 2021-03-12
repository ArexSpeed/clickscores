import React, {useState, useEffect} from 'react'

const GroupFillDraw = ({teamsInGroup}) => {
  const [teamsInGroupA, setTeamsInGroupA] = useState([])
  const [teamsInGroupB, setTeamsInGroupB] = useState([])
  const [teamsInGroupC, setTeamsInGroupC] = useState([])
  const [teamsInGroupD, setTeamsInGroupD] = useState([])
  const [teamsInGroupE, setTeamsInGroupE] = useState([])
  const [teamsInGroupF, setTeamsInGroupF] = useState([])
  const [teamsInGroupG, setTeamsInGroupG] = useState([])
  const [teamsInGroupH, setTeamsInGroupH] = useState([])

  useEffect(() => {
    teamsInGroup.filter(team => team.group === 1 && setTeamsInGroupA(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
    teamsInGroup.filter(team => team.group === 2 && setTeamsInGroupB(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
    teamsInGroup.filter(team => team.group === 3 && setTeamsInGroupC(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
    teamsInGroup.filter(team => team.group === 4 && setTeamsInGroupD(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
    teamsInGroup.filter(team => team.group === 5 && setTeamsInGroupE(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
    teamsInGroup.filter(team => team.group === 6 && setTeamsInGroupF(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
    teamsInGroup.filter(team => team.group === 7 && setTeamsInGroupG(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
    teamsInGroup.filter(team => team.group === 8 && setTeamsInGroupH(prev => [
      ...prev,
      {
        name: team.name
      }
    ]))
  }, [teamsInGroup])
  

  return (
    <div>
      {teamsInGroupA.map(team => <p>{team.name}</p>)}
      {teamsInGroupB.map(team => <p>{team.name}</p>)}
      {teamsInGroupC.map(team => <p>{team.name}</p>)}
      {teamsInGroupD.map(team => <p>{team.name}</p>)}
      {/* {teamsInGroupE.map(team => <p>{team.name}</p>)}
      {teamsInGroupF.map(team => <p>{team.name}</p>)}
      {teamsInGroupG.map(team => <p>{team.name}</p>)} */}
    </div>
  )
}

export default GroupFillDraw;