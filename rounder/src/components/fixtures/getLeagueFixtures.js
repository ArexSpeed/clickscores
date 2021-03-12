export const getLeagueFixtures = (n, teams) => (
  n === 4 ? 
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1</tr>
    <tr className="table-row"><td className="table-host">{teams[0].name} </td> <td className="table-guest">{teams[1].name.name.name}</td></tr> 
    <tr className="table-row"><td className="table-host last">{teams[2].name} </td> <td className="table-guest last">{teams[3].name.name.name}</td> </tr>
    </table>
    <table className="table">
    <tr className="table-title">ROUND 2</tr>
    <tr className="table-row"><td className="table-host">{teams[1].name} </td> <td className="table-guest">{teams[2].name}</td></tr> 
    <tr className="table-row"><td className="table-host last">{teams[3].name} </td> <td className="table-guest last">{teams[0].name}</td></tr>
    </table>
    <table className="table"> 
    <tr className="table-title">ROUND 3</tr>
    <tr className="table-row"><td className="table-host">{teams[0].name} </td> <td className="table-guest">{teams[2].name}</td></tr> 
    <tr className="table-row"><td className="table-host last">{teams[1].name} </td> <td className="table-guest last">{teams[3].name}</td></tr> 
    </table>
    <table className="table">
    <tr className="table-title">ROUND 4</tr>
    <tr className="table-row"><td className="table-host">{teams[1].name} </td> <td className="table-guest">{teams[0].name}</td></tr> 
    <tr className="table-row"><td className="table-host last">{teams[3].name} </td> <td className="table-guest last">{teams[2].name}</td></tr>
    </table>
    <table className="table">
    <tr className="table-title">ROUND 5</tr>
    <tr className="table-row"><td className="table-host">{teams[2].name} </td> <td className="table-guest">{teams[1].name}</td></tr> 
    <tr className="table-row"><td className="table-host last">{teams[0].name} </td> <td className="table-guest last">{teams[3].name}</td></tr>
    </table>
    <table className="table"> 
    <tr className="table-title">ROUND 6</tr> 
    <tr className="table-row"><td className="table-host">{teams[2].name} </td> <td className="table-guest">{teams[0].name}</td></tr> 
    <tr className="table-row"><td className="table-host last">{teams[3].name} </td> <td className="table-guest last">{teams[1].name}</td></tr> 
    </table>
    </>
  )
  : n === 6 ?
  (
    <>
        <table className="table"> 
          <tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[3].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
        </table>
        <table className="table"> 
          <tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[1].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[5].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[2].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[1].name} </td><td className="table-guest last"> {teams[4].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[3].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[1].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[5].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[2].name} </td></tr>
          </table>
        <table className="table"> 
          <tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[4].name} </td><td className="table-guest last"> {teams[1].name} </td></tr>
        </table>
    </>
  )
  : n === 8 ?
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[4].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[5].name} </td><td className="table-guest last"> {teams[4].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[4].name} </td><td className="table-guest last"> {teams[6].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[4].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[7].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[4].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[4].name} </td><td className="table-guest last"> {teams[5].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[4].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 11: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[4].name} </td><td className="table-guest last"> {teams[7].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 12: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[7].name} </td></tr>
          </table>
        <table className="table">
          <tr className="table-title">ROUND 13: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[6].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 14: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[6].name} </td></tr>
        </table>
    </>
  )
  : n === 10 ?
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[5].name} </td><td className="table-guest last"> {teams[6].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[5].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[9].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[8].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[7].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[5].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 11: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[5].name} </td><td className="table-guest last"> {teams[0].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 12: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[9].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 13: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[8].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 14: </tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[8].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 15: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[7].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 16: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[7].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 17: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[6].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 18: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[6].name}</td></tr>
    </table>
    </>
  )
  : n === 12 ?
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[9].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[7].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[4].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[6].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[7].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[4].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[11].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[5].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[4].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[10].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[7].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[11].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[9].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[6].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[10].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[8].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 11: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[5].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 12: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[6].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 13: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[8].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[0].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 14: </tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[11].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 15: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[6].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[10].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 16: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host"> {teams[9].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[0].name} </td><td className="table-guest last"> {teams[10].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 17: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[0].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[9].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 18: </tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[7].name} </td><td className="table-guest"> {teams[11].name}</td></tr>            
          <tr className="table-row"><td className="table-host"> {teams[8].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[9].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 19: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[6].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[8].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 20: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[5].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[10].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[8].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 21: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[5].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[7].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 22: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[3].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[4].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[9].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[7].name}</td></tr>
    </table>
    </>
  )
  : n === 14 ?
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[11].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[8].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[4].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[7].name} </td></tr>
           </table>
        <table className="table">
       <tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[9].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[4].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[13].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[7].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[4].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[12].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[5].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[4].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[11].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[7].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[13].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[10].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 11: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[6].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 12: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[12].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[9].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 13: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[5].name} </td></tr>            
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 14: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[8].name} </td><td className="table-guest last"> {teams[7].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 15: </tr>
          <tr className="table-row"><td className="table-host"> {teams[1].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[2].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[3].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[4].name} </td><td className="table-guest"> {teams[10].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[7].name} </td><td className="table-guest last"> {teams[0].name}</td></tr>
           </table>
        <table className="table">
       <tr className="table-title">ROUND 16: </tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[0].name} </td><td className="table-guest last"> {teams[13].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 17: </tr>
          <tr className="table-row"><td className="table-host"> {teams[1].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[2].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[8].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[13].name} </td><td className="table-guest last"> {teams[12].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 18: </tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[11].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[0].name} </td><td className="table-guest last"> {teams[12].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 19: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[13].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[12].name} </td><td className="table-guest last"> {teams[11].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 20: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[4].name}</td></tr>            
          <tr className="table-row"><td className="table-host"> {teams[9].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[10].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[0].name} </td><td className="table-guest last"> {teams[11].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 21: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[0].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[11].name} </td><td className="table-guest last"> {teams[10].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 22: </tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[7].name} </td><td className="table-guest"> {teams[13].name}</td></tr>            
          <tr className="table-row"><td className="table-host"> {teams[8].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[9].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[0].name} </td><td className="table-guest last"> {teams[10].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 23: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[6].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[9].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 24: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[5].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[6].name} </td><td className="table-guest"> {teams[12].name}</td></tr>            
          <tr className="table-row"><td className="table-host"> {teams[7].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[8].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[9].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 25: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[5].name}</td></tr>            
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[8].name}</td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 26: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[3].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[4].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[5].name} </td><td className="table-guest"> {teams[11].name}</td></tr>            
          <tr className="table-row"><td className="table-host"> {teams[6].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[8].name}</td></tr>
    </table>
    </>
  )
  : n === 16 ?
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[8].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[12].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[14].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[12].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[8].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[8].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[1].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[2].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 11: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[3].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 12: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[4].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 13: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[5].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 14: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[6].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 15: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[7].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 16: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[14].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[15].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[8].name} </td><td className="table-guest last"> {teams[12].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 17: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[9].name} </td><td className="table-guest"> {teams[14].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[10].name} </td><td className="table-guest"> {teams[15].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[12].name} </td><td className="table-guest last"> {teams[13].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 18: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[8].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[13].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[14].name} </td><td className="table-guest last"> {teams[12].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 19: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[10].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[11].name} </td><td className="table-guest"> {teams[14].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[12].name} </td><td className="table-guest last"> {teams[15].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 20: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[12].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[14].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[8].name} </td><td className="table-guest last"> {teams[15].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 21: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[9].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[11].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[15].name} </td><td className="table-guest last"> {teams[14].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 22: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[12].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[15].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[8].name} </td><td className="table-guest last"> {teams[14].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 23: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[0].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 24: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[4].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[5].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[6].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[7].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[0].name} </td><td className="table-guest"> {teams[14].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[1].name} </td><td className="table-guest last"> {teams[15].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 25: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[2].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 26: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[6].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[7].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[0].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[1].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[2].name} </td><td className="table-guest"> {teams[14].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[3].name} </td><td className="table-guest last"> {teams[15].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 27: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[6].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[4].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 28: </tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[0].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[1].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[2].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[3].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[4].name} </td><td className="table-guest"> {teams[14].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[5].name} </td><td className="table-guest last"> {teams[15].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 29: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[7].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[0].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[1].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[2].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[3].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[4].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[5].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[6].name}</td></tr>
           </table>
        <table className="table">
          <tr className="table-title">ROUND 30: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[2].name} </td><td className="table-guest"> {teams[10].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[3].name} </td><td className="table-guest"> {teams[11].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[4].name} </td><td className="table-guest"> {teams[12].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[5].name} </td><td className="table-guest"> {teams[13].name}</td></tr>
          <tr className="table-row"><td className="table-host"> {teams[6].name} </td><td className="table-guest"> {teams[14].name}</td></tr>
          <tr className="table-row"><td className="table-host last"> {teams[7].name} </td><td className="table-guest last"> {teams[15].name}</td></tr>
    </table>
    </>
  )
  : n === 18 ?
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[9].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[8].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[17].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[17].name} </td><td className="table-guest last"> {teams[16].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[16].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[16].name} </td><td className="table-guest last"> {teams[15].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[14].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[14].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[13].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 11 </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[13].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 12: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[12].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 13: </tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[12].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 14: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[11].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 15: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[11].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 16: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[10].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 17: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[10].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 18: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[9].name} </td><td className="table-guest last"> {teams[10].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 19: </tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[9].name} </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 20: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[9].name}</td></tr>
          <tr className="table-row"><td className="table-host last">{teams[17].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 21: </tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[16].name} </td><td className="table-guest last"> {teams[17].name}   </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 22: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[15].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[16].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 23: </tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[17].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[16].name}   </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 24: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[13].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[14].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 25: </tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[17].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[16].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[15].name}   </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 26: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[11].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[12].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[13].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 27: </tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[17].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[16].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[15].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[14].name}   </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 28 </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[10].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[11].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[12].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 29: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[15].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[14].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[13].name}   </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 30: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[10].name}   </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[11].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 31: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[13].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[12].name}   </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 32: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[10].name}   </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 33: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[11].name}   </td></tr>
           </table>
        <table className="table">
<tr className="table-title">ROUND 34: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
    </table>
    </>
  )
  : n === 20 ?
  (
    <>
    <table className="table">
<tr className="table-title">ROUND 1: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[11].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 2: </tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[10].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 3: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[19].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 4: </tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[18].name} </td><td className="table-guest last"> {teams[19].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 5: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[18].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 6: </tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[17].name} </td><td className="table-guest last"> {teams[18].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 7: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[17].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 8: </tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[16].name} </td><td className="table-guest last"> {teams[17].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 9: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[16].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 10: </tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[16].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 11: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 12: </tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 13: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 14: </tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[14].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 15: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 16: </tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[13].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 17: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 18: </tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[12].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 19: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[0].name} </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 20: </tr>
          <tr className="table-row"><td className="table-host">{teams[0].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[11].name} </td><td className="table-guest last"> {teams[10].name}  </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 21: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[10].name} </td><td className="table-guest last"> {teams[0].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 22: </tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[19].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 23: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[19].name} </td><td className="table-guest last"> {teams[18].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 24: </tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[19].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[18].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 25: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[18].name} </td><td className="table-guest last"> {teams[17].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 26: </tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[19].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[18].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[17].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 27: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[12].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[17].name} </td><td className="table-guest last"> {teams[16].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 28: </tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[2].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[3].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[19].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[18].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[16].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 29: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[11].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[10].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[16].name} </td><td className="table-guest last"> {teams[15].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 30: </tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[1].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[19].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[18].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[15].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 31: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[9].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[8].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[15].name} </td><td className="table-guest last"> {teams[14].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 32: </tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[18].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[17].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[14].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 33: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[7].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[6].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[14].name} </td><td className="table-guest last"> {teams[13].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 34: </tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[16].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[15].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[12].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[13].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 35: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[5].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[4].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[11].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[13].name} </td><td className="table-guest last"> {teams[12].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 36: </tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[2].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[14].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[11].name} </td><td className="table-guest"> {teams[13].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[12].name} </td></tr>
          </table>
    <table className="table">
          <tr className="table-title">ROUND 37: </tr>
          <tr className="table-row"><td className="table-host">{teams[1].name} </td><td className="table-guest"> {teams[3].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[0].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[19].name} </td><td className="table-guest"> {teams[4].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[18].name} </td><td className="table-guest"> {teams[5].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[17].name} </td><td className="table-guest"> {teams[6].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[16].name} </td><td className="table-guest"> {teams[7].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[15].name} </td><td className="table-guest"> {teams[8].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[14].name} </td><td className="table-guest"> {teams[9].name}  </td></tr>
          <tr className="table-row"><td className="table-host">{teams[13].name} </td><td className="table-guest"> {teams[10].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[12].name} </td><td className="table-guest last"> {teams[11].name}  </td></tr>
          </table>
    <table className="table">
<tr className="table-title">ROUND 38: </tr>
          <tr className="table-row"><td className="table-host">{teams[2].name} </td><td className="table-guest"> {teams[1].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[3].name} </td><td className="table-guest"> {teams[19].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[4].name} </td><td className="table-guest"> {teams[18].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[5].name} </td><td className="table-guest"> {teams[17].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[6].name} </td><td className="table-guest"> {teams[16].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[7].name} </td><td className="table-guest"> {teams[15].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[8].name} </td><td className="table-guest"> {teams[14].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[9].name} </td><td className="table-guest"> {teams[13].name} </td></tr>
          <tr className="table-row"><td className="table-host">{teams[10].name} </td><td className="table-guest"> {teams[12].name}  </td></tr>
          <tr className="table-row"><td className="table-host last">{teams[0].name} </td><td className="table-guest last"> {teams[11].name} </td></tr>
    </table>
    </>
  )
  : ""
  
)