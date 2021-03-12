import React, {useState, useEffect} from 'react'

const GroupDraw = ({teamsInPot, groups, pots}) => {
  const [teamsInGroupA, setTeamsInGroupA] = useState([])
  const [teamsInGroupB, setTeamsInGroupB] = useState([])
  const [teamsInGroupC, setTeamsInGroupC] = useState([])
  const [teamsInGroupD, setTeamsInGroupD] = useState([])
  const [teamsInGroupE, setTeamsInGroupE] = useState([])
  const [teamsInGroupF, setTeamsInGroupF] = useState([])
  const [teamsInGroupG, setTeamsInGroupG] = useState([])
  const [teamsInGroupH, setTeamsInGroupH] = useState([])
  let pot1 = []
  let pot2 = []
  let pot3 = []
  let pot4 = []
  let pot5 = []
  let pot6 = []
  let pot7 = []
  let pot8 = []

  teamsInPot.filter(team => team.pot === 1).map(team => pot1.push(team))
  teamsInPot.filter(team => team.pot === 2).map(team => pot2.push(team))
  teamsInPot.filter(team => team.pot === 3).map(team => pot3.push(team))
  teamsInPot.filter(team => team.pot === 4).map(team => pot4.push(team))
  teamsInPot.filter(team => team.pot === 5).map(team => pot5.push(team))
  teamsInPot.filter(team => team.pot === 6).map(team => pot6.push(team))
  teamsInPot.filter(team => team.pot === 7).map(team => pot7.push(team))
  teamsInPot.filter(team => team.pot === 8).map(team => pot8.push(team))

let team1,team2,team3,team4,team5,team6,team7,team8;
useEffect(() => {
  groups.map((group,i) => 
  {
    let rand1 = Math.floor(Math.random()*pot1.length);
    let rand2 = Math.floor(Math.random()*pot2.length);
    let rand3 = Math.floor(Math.random()*pot3.length);
    let rand4 = Math.floor(Math.random()*pot4.length);
    let rand5 = Math.floor(Math.random()*pot5.length);
    let rand6 = Math.floor(Math.random()*pot6.length);
    let rand7 = Math.floor(Math.random()*pot7.length);
    let rand8 = Math.floor(Math.random()*pot8.length);
    
    //Get randoms teams from pots
     team1 = pot1[rand1];
     team2 = pot2[rand2];
     team3 = pot3[rand3];
    if(pots.length>= 4) {
      team4 = pot4[rand4];
    }
    if(pots.length>= 5){
      team5 = pot5[rand5];
      team6 = pot6[rand6];
    }
    if(pots.length>= 7){
     team7 = pot7[rand7];
     team8 = pot8[rand8];
    }
    //set Teams to groups
    // GR A
    if(i === 0){
      if(pots.length === 2){
        setTeamsInGroupA([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupA([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupA([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupA([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupA([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }
    // GR B
    if(i === 1){
      if(pots.length === 2){
        setTeamsInGroupB([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupB([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupB([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupB([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupB([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }
    // GR C
    if(i === 2){
      if(pots.length === 2){
        setTeamsInGroupC([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupC([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupC([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupC([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupC([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }
    //GR D
    if(i === 3){
      if(pots.length === 2){
        setTeamsInGroupD([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupD([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupD([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupD([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupD([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }
    //GR E
    if(i === 4){
      if(pots.length === 2){
        setTeamsInGroupE([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupE([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupE([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupE([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupE([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }
    //GR F
    if(i === 5){
      if(pots.length === 2){
        setTeamsInGroupF([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupF([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupF([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupF([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupF([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }
    //GR G
    if(i === 6){
      if(pots.length === 2){
        setTeamsInGroupG([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupG([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupG([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupG([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupG([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }
    //GR H
    if(i === 7){
      if(pots.length === 2){
        setTeamsInGroupH([
          { name: team1.name,},
          {  name: team2.name,}
        ]);
      }else if(pots.length===3){
        setTeamsInGroupH([
          { name: team1.name,},
          {name: team2.name,},
          {name: team3.name,}
        ]);
      }
      else if(pots.length === 4){
        setTeamsInGroupH([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,}
        ]);
      }else if(pots.length === 6){
        setTeamsInGroupH([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,}
        ]);
      }else if(pots.length === 8){
        setTeamsInGroupH([
          {name: team1.name,},
          {name: team2.name,},
          {name: team3.name,},
          {name: team4.name,},
          {name: team5.name,},
          {name: team6.name,},
          {name: team7.name,},
          {name: team8.name,}
        ]);
      }
    }

  //Remove selected teams from pot
    pot1.splice(rand1,1);
    pot2.splice(rand2,1);
    pot3.splice(rand3,1);
    pot4.splice(rand4,1);
    pot5.splice(rand5,1);
    pot6.splice(rand6,1);
    pot7.splice(rand7,1);
    pot8.splice(rand8,1);
  }
)
}, [pots])


  return (
    <div>
          <table className="table">
            <tr className="table-title">GROUP A</tr>
              {teamsInGroupA.map((team,i) => (
               <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
              ))}
          </table>
          <table className="table">
            <tr className="table-title">GROUP B</tr>
              {teamsInGroupB.map((team,i) => (
               <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
              ))}
          </table>
          {groups.length >= 3 && (
            <table className="table">
            <tr className="table-title">GROUP C</tr>
              {teamsInGroupC.map((team,i) => (
               <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
              ))}
          </table>
          )}
          {groups.length >= 4 && (
            <table className="table">
            <tr className="table-title">GROUP D</tr>
              {teamsInGroupD.map((team,i) => (
               <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
              ))}
          </table>
          )}
          {groups.length >= 6 && (
            <>
            <table className="table">
            <tr className="table-title">GROUP E</tr>
              {teamsInGroupE.map((team,i) => (
               <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
              ))}
          </table>
          <table className="table">
          <tr className="table-title">GROUP F</tr>
            {teamsInGroupF.map((team,i) => (
             <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
            ))}
        </table>
        </>
        )}
        {groups.length >= 7 && (
            <>
            <table className="table">
            <tr className="table-title">GROUP G</tr>
              {teamsInGroupG.map((team,i) => (
               <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
              ))}
          </table>
          <table className="table">
          <tr className="table-title">GROUP H</tr>
            {teamsInGroupH.map((team,i) => (
             <tr className={`${i === pots.length-1 ? "table-input last" : 'table-input'}`} key={i}>{team.name}</tr>
            ))}
        </table>
        </>
        )}
    </div>
  )
}

export default GroupDraw
