import React, {useState, useEffect, useRef} from 'react'
import { getGroupFixtures } from './fixtures/getGroupFixtures'

const GroupFillDraw = ({teamsInGroup, numberOfGroups, numberOfTeams}) => {
  const tablesRef = useRef('')
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
  
  const teams = numberOfTeams/numberOfGroups
  function copy() {
    var elm = tablesRef.current;
    // for Internet Explorer
  
    if(document.body.createTextRange) {
     let range = document.body.createTextRange();
      range.moveToElementText(elm);
      range.select();
      document.execCommand("Copy");
      alert("Skopiowałeś terminiarz");
    }
    else if(window.getSelection) {
      // other browsers
  
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      alert("Skopiowałeś terminiarz");
    }
  }
//console.log(teamsInGroupA[1].name, 'in Ga')
  return (
    <>
    {teamsInGroupA.length>1 && 
    <section ref={tablesRef} className="tables">{
       //teamsInGroupA[1].name
    getGroupFixtures(teams, numberOfGroups, teamsInGroupA, teamsInGroupB, teamsInGroupC, teamsInGroupD, teamsInGroupE, teamsInGroupF, teamsInGroupG, teamsInGroupH)
    }
    </section>
    }
    <button className="button-accept" onClick={copy}>COPY</button>
    </>
  )
}

export default GroupFillDraw;