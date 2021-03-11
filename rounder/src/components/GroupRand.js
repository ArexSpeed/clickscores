import React, {useState} from 'react'

const GroupRand = ({teamsInPot, groups, pots}) => {
  const [groupA, setGroupA] = useState([])
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

  const showGroups = groups.map((group,i) => 
    {
      let rand1 = Math.floor(Math.random()*pot1.length);
      let rand2 = Math.floor(Math.random()*pot2.length);
      let rand3 = Math.floor(Math.random()*pot3.length);
      let rand4 = Math.floor(Math.random()*pot4.length);
      let rand5 = Math.floor(Math.random()*pot5.length);
      let rand6 = Math.floor(Math.random()*pot6.length);
      let rand7 = Math.floor(Math.random()*pot7.length);
      let rand8 = Math.floor(Math.random()*pot8.length);
      let team1,team2,team3,team4,team5,team6,team7,team8;
       team1 = pot1[rand1].name;
       team2 = pot2[rand2].name;
       team3 = pot3[rand3].name;
      if(pots.length>= 4) team4 = pot4[rand4].name;
      if(pots.length>= 5){
        team5 = pot5[rand5].name;
        team6 = pot6[rand6].name;
      }
      if(pots.length>= 7){
       team7 = pot7[rand7].name;
       team8 = pot8[rand8].name;
      }
      pot1.splice(rand1,1);
      pot2.splice(rand2,1);
      pot3.splice(rand3,1);
      pot4.splice(rand4,1);
      pot5.splice(rand5,1);
      pot6.splice(rand6,1);
      pot7.splice(rand7,1);
      pot8.splice(rand8,1);
      return(
        <div className="table" key={i}>
              <div className="table-title">GROUP {i+1}</div>
              <div className="table-input" >{team1}</div>
              <div className="table-input" >{team2}</div>
              <div className="table-input" >{team3}</div>
              {pots.length >=4 && 
              <div className="table-input" >{team4}</div>
              }
              {pots.length >=5 && 
              <>
              <div className="table-input" >{team5}</div>
              <div className="table-input" >{team6}</div>
              </>
              }
              {pots.length >=7 && 
              <>
              <div className="table-input" >{team7}</div>
              <div className="table-input" >{team8}</div> 
              </>
              }
          </div>
      )
    }
  )
  return (
    <div>
      {showGroups}
    </div>
  )
}

export default GroupRand
