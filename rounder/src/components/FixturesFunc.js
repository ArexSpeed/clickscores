export const getFixtures = (n, teams) => (
  n === 4 ? 
  (
    <>
    <table className="table">
    <tr className="table-title">ROUND 1</tr>
    <tr className="table-vs"><td className="table-host">{teams[0].name} </td> <td className="table-guest">{teams[1].name}</td></tr> 
    <tr className="table-vs"><td className="table-host last">{teams[2].name} </td> <td className="table-guest last">{teams[3].name}</td> </tr>
    </table>
    <table className="table">
    <tr className="table-title">ROUND 2</tr>
    <tr className="table-vs"><td className="table-host">{teams[1].name} </td> <td className="table-guest">{teams[2].name}</td></tr> 
    <tr className="table-vs"><td className="table-host last">{teams[3].name} </td> <td className="table-guest last">{teams[0].name}</td></tr>
    </table>
    <table className="table"> 
    <tr className="table-title">ROUND 3</tr>
    <tr className="table-vs"><td className="table-host">{teams[0].name} </td> <td className="table-guest">{teams[2].name}</td></tr> 
    <tr className="table-vs"><td className="table-host last">{teams[1].name} </td> <td className="table-guest last">{teams[3].name}</td></tr> 
    </table>
    <table className="table">
    <tr className="table-title">ROUND 4</tr>
    <tr className="table-vs"><td className="table-host">{teams[1].name} </td> <td className="table-guest">{teams[0].name}</td></tr> 
    <tr className="table-vs"><td className="table-host last">{teams[3].name} </td> <td className="table-guest last">{teams[2].name}</td></tr>
    </table>
    <table className="table">
    <tr className="table-title">ROUND 5</tr>
    <tr className="table-vs"><td className="table-host">{teams[2].name} </td> <td className="table-guest">{teams[1].name}</td></tr> 
    <tr className="table-vs"><td className="table-host last">{teams[0].name} </td> <td className="table-guest last">{teams[3].name}</td></tr>
    </table>
    <table className="table"> 
    <tr className="table-title">ROUND 6</tr> 
    <tr className="table-vs"><td className="table-host">{teams[2].name} </td> <td className="table-guest">{teams[0].name}</td></tr> 
    <tr className="table-vs"><td className="table-host last">{teams[3].name} </td> <td className="table-guest last">{teams[1].name}</td></tr> 
    </table>
    </>
  )
  : (
    ""
  )
)