export const getGroupFixtures = (teams,groups, teams_grA,teams_grB,teams_grC,teams_grD,teams_grE,teams_grF,teams_grG,teams_grH) =>(
  teams === 4 ?
  (
    <>
    <div className="input groupName">Group A</div>
    <table className="table">
    <tr className="table-title">ROUND 1</tr>
      <tr className="table-row"><td className="table-host">{teams_grA[0].name} </td> <td className="table-guest"> {teams_grA[1].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grA[2].name} </td> <td className="table-guest last"> {teams_grA[3].name}</td> </tr>
    </table>
    <table className="table">
    <tr className="table-title">ROUND 2</tr>
      <tr className="table-row"><td className="table-host">{teams_grA[1].name} </td> <td className="table-guest"> {teams_grA[2].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grA[3].name} </td> <td className="table-guest last"> {teams_grA[0].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 3</tr>
      <tr className="table-row"><td className="table-host">{teams_grA[0].name} </td> <td className="table-guest"> {teams_grA[2].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grA[1].name} </td> <td className="table-guest last"> {teams_grA[3].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 4</tr>
      <tr className="table-row"><td className="table-host">{teams_grA[1].name} </td> <td className="table-guest"> {teams_grA[0].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grA[3].name} </td> <td className="table-guest last"> {teams_grA[2].name}</td></tr>
      </table>
    <table className="table">
    <tr className="table-title">ROUND 5</tr>
      <tr className="table-row"><td className="table-host">{teams_grA[2].name} </td> <td className="table-guest"> {teams_grA[1].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grA[0].name} </td> <td className="table-guest last"> {teams_grA[3].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 6</tr>
      <tr className="table-row"><td className="table-host">{teams_grA[2].name} </td> <td className="table-guest"> {teams_grA[0].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grA[3].name} </td> <td className="table-guest last"> {teams_grA[1].name}</td></tr> 
    </table>

    <div className="input groupName">Group B</div>
    <table className="table">
    <tr className="table-title">ROUND 1</tr>
      <tr className="table-row"><td className="table-host">{teams_grB[0].name} </td> <td className="table-guest"> {teams_grB[1].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grB[2].name} </td> <td className="table-guest last"> {teams_grB[3].name}</td> </tr>
    </table>
    <table className="table">
    <tr className="table-title">ROUND 2</tr>
      <tr className="table-row"><td className="table-host">{teams_grB[1].name} </td> <td className="table-guest"> {teams_grB[2].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grB[3].name} </td> <td className="table-guest last"> {teams_grB[0].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 3</tr>
      <tr className="table-row"><td className="table-host">{teams_grB[0].name} </td> <td className="table-guest"> {teams_grB[2].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grB[1].name} </td> <td className="table-guest last"> {teams_grB[3].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 4</tr>
      <tr className="table-row"><td className="table-host">{teams_grB[1].name} </td> <td className="table-guest"> {teams_grB[0].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grB[3].name} </td> <td className="table-guest last"> {teams_grB[2].name}</td></tr>
      </table>
    <table className="table">
    <tr className="table-title">ROUND 5</tr>
      <tr className="table-row"><td className="table-host">{teams_grB[2].name} </td> <td className="table-guest"> {teams_grB[1].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grB[0].name} </td> <td className="table-guest last"> {teams_grB[3].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 6</tr>
      <tr className="table-row"><td className="table-host">{teams_grB[2].name} </td> <td className="table-guest"> {teams_grB[0].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grB[3].name} </td> <td className="table-guest last"> {teams_grB[1].name}</td></tr> 
    </table>

    <div className="input groupName">Group C</div>
    <table className="table">
    <tr className="table-title">ROUND 1</tr>
      <tr className="table-row"><td className="table-host">{teams_grC[0].name} </td> <td className="table-guest"> {teams_grC[1].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grC[2].name} </td> <td className="table-guest last"> {teams_grC[3].name}</td> </tr>
    </table>
    <table className="table">
    <tr className="table-title">ROUND 2</tr>
      <tr className="table-row"><td className="table-host">{teams_grC[1].name} </td> <td className="table-guest"> {teams_grC[2].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grC[3].name} </td> <td className="table-guest last"> {teams_grC[0].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 3</tr>
      <tr className="table-row"><td className="table-host">{teams_grC[0].name} </td> <td className="table-guest"> {teams_grC[2].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grC[1].name} </td> <td className="table-guest last"> {teams_grC[3].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 4</tr>
      <tr className="table-row"><td className="table-host">{teams_grC[1].name} </td> <td className="table-guest"> {teams_grC[0].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grC[3].name} </td> <td className="table-guest last"> {teams_grC[2].name}</td></tr>
      </table>
    <table className="table">
    <tr className="table-title">ROUND 5</tr>
      <tr className="table-row"><td className="table-host">{teams_grC[2].name} </td> <td className="table-guest"> {teams_grC[1].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grC[0].name} </td> <td className="table-guest last"> {teams_grC[3].name}</td></tr> 
      </table>
    <table className="table">
    <tr className="table-title">ROUND 6</tr>
      <tr className="table-row"><td className="table-host">{teams_grC[2].name} </td> <td className="table-guest"> {teams_grC[0].name}</td></tr> 
      <tr className="table-row"><td className="table-host last">{teams_grC[3].name} </td> <td className="table-guest last"> {teams_grC[1].name}</td></tr> 
    </table>

    {groups >= 4 && (
      <>
      <div className="input groupName">Group D</div>
      <table className="table">
      <tr className="table-title">ROUND 1</tr>
        <tr className="table-row"><td className="table-host">{teams_grD[0].name} </td> <td className="table-guest"> {teams_grD[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grD[2].name} </td> <td className="table-guest last"> {teams_grD[3].name}</td> </tr>
      </table>
      <table className="table">
      <tr className="table-title">ROUND 2</tr>
        <tr className="table-row"><td className="table-host">{teams_grD[1].name} </td> <td className="table-guest"> {teams_grD[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grD[3].name} </td> <td className="table-guest last"> {teams_grD[0].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 3</tr>
        <tr className="table-row"><td className="table-host">{teams_grD[0].name} </td> <td className="table-guest"> {teams_grD[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grD[1].name} </td> <td className="table-guest last"> {teams_grD[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 4</tr>
        <tr className="table-row"><td className="table-host">{teams_grD[1].name} </td> <td className="table-guest"> {teams_grD[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grD[3].name} </td> <td className="table-guest last"> {teams_grD[2].name}</td></tr>
        </table>
      <table className="table">
      <tr className="table-title">ROUND 5</tr>
        <tr className="table-row"><td className="table-host">{teams_grD[2].name} </td> <td className="table-guest"> {teams_grD[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grD[0].name} </td> <td className="table-guest last"> {teams_grD[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 6</tr>
        <tr className="table-row"><td className="table-host">{teams_grD[2].name} </td> <td className="table-guest"> {teams_grD[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grD[3].name} </td> <td className="table-guest last"> {teams_grD[1].name}</td></tr> 
      </table>
      </>
    )}

{groups >= 5 && (
      <>
      <div className="input groupName">Group E</div>
      <table className="table">
      <tr className="table-title">ROUND 1</tr>
        <tr className="table-row"><td className="table-host">{teams_grE[0].name} </td> <td className="table-guest"> {teams_grE[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grE[2].name} </td> <td className="table-guest last"> {teams_grE[3].name}</td> </tr>
      </table>
      <table className="table">
      <tr className="table-title">ROUND 2</tr>
        <tr className="table-row"><td className="table-host">{teams_grE[1].name} </td> <td className="table-guest"> {teams_grE[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grE[3].name} </td> <td className="table-guest last"> {teams_grE[0].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 3</tr>
        <tr className="table-row"><td className="table-host">{teams_grE[0].name} </td> <td className="table-guest"> {teams_grE[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grE[1].name} </td> <td className="table-guest last"> {teams_grE[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 4</tr>
        <tr className="table-row"><td className="table-host">{teams_grE[1].name} </td> <td className="table-guest"> {teams_grE[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grE[3].name} </td> <td className="table-guest last"> {teams_grE[2].name}</td></tr>
        </table>
      <table className="table">
      <tr className="table-title">ROUND 5</tr>
        <tr className="table-row"><td className="table-host">{teams_grE[2].name} </td> <td className="table-guest"> {teams_grE[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grE[0].name} </td> <td className="table-guest last"> {teams_grE[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 6</tr>
        <tr className="table-row"><td className="table-host">{teams_grE[2].name} </td> <td className="table-guest"> {teams_grE[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grE[3].name} </td> <td className="table-guest last"> {teams_grE[1].name}</td></tr> 
      </table>

      <div className="input groupName">Group F</div>
      <table className="table">
      <tr className="table-title">ROUND 1</tr>
        <tr className="table-row"><td className="table-host">{teams_grF[0].name} </td> <td className="table-guest"> {teams_grF[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grF[2].name} </td> <td className="table-guest last"> {teams_grF[3].name}</td> </tr>
      </table>
      <table className="table">
      <tr className="table-title">ROUND 2</tr>
        <tr className="table-row"><td className="table-host">{teams_grF[1].name} </td> <td className="table-guest"> {teams_grF[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grF[3].name} </td> <td className="table-guest last"> {teams_grF[0].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 3</tr>
        <tr className="table-row"><td className="table-host">{teams_grF[0].name} </td> <td className="table-guest"> {teams_grF[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grF[1].name} </td> <td className="table-guest last"> {teams_grF[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 4</tr>
        <tr className="table-row"><td className="table-host">{teams_grF[1].name} </td> <td className="table-guest"> {teams_grF[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grF[3].name} </td> <td className="table-guest last"> {teams_grF[2].name}</td></tr>
        </table>
      <table className="table">
      <tr className="table-title">ROUND 5</tr>
        <tr className="table-row"><td className="table-host">{teams_grF[2].name} </td> <td className="table-guest"> {teams_grF[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grF[0].name} </td> <td className="table-guest last"> {teams_grF[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 6</tr>
        <tr className="table-row"><td className="table-host">{teams_grF[2].name} </td> <td className="table-guest"> {teams_grF[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grF[3].name} </td> <td className="table-guest last"> {teams_grF[1].name}</td></tr> 
      </table>
      </>
    )}

{groups >= 7 && (
      <>
      <div className="input groupName">Group G</div>
      <table className="table">
      <tr className="table-title">ROUND 1</tr>
        <tr className="table-row"><td className="table-host">{teams_grG[0].name} </td> <td className="table-guest"> {teams_grG[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grG[2].name} </td> <td className="table-guest last"> {teams_grG[3].name}</td> </tr>
      </table>
      <table className="table">
      <tr className="table-title">ROUND 2</tr>
        <tr className="table-row"><td className="table-host">{teams_grG[1].name} </td> <td className="table-guest"> {teams_grG[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grG[3].name} </td> <td className="table-guest last"> {teams_grG[0].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 3</tr>
        <tr className="table-row"><td className="table-host">{teams_grG[0].name} </td> <td className="table-guest"> {teams_grG[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grG[1].name} </td> <td className="table-guest last"> {teams_grG[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 4</tr>
        <tr className="table-row"><td className="table-host">{teams_grG[1].name} </td> <td className="table-guest"> {teams_grG[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grG[3].name} </td> <td className="table-guest last"> {teams_grG[2].name}</td></tr>
        </table>
      <table className="table">
      <tr className="table-title">ROUND 5</tr>
        <tr className="table-row"><td className="table-host">{teams_grG[2].name} </td> <td className="table-guest"> {teams_grG[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grG[0].name} </td> <td className="table-guest last"> {teams_grG[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 6</tr>
        <tr className="table-row"><td className="table-host">{teams_grG[2].name} </td> <td className="table-guest"> {teams_grG[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grG[3].name} </td> <td className="table-guest last"> {teams_grG[1].name}</td></tr> 
      </table>

      <div className="input groupName">Group H</div>
      <table className="table">
      <tr className="table-title">ROUND 1</tr>
        <tr className="table-row"><td className="table-host">{teams_grH[0].name} </td> <td className="table-guest"> {teams_grH[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grH[2].name} </td> <td className="table-guest last"> {teams_grH[3].name}</td> </tr>
      </table>
      <table className="table">
      <tr className="table-title">ROUND 2</tr>
        <tr className="table-row"><td className="table-host">{teams_grH[1].name} </td> <td className="table-guest"> {teams_grH[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grH[3].name} </td> <td className="table-guest last"> {teams_grH[0].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 3</tr>
        <tr className="table-row"><td className="table-host">{teams_grH[0].name} </td> <td className="table-guest"> {teams_grH[2].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grH[1].name} </td> <td className="table-guest last"> {teams_grH[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 4</tr>
        <tr className="table-row"><td className="table-host">{teams_grH[1].name} </td> <td className="table-guest"> {teams_grH[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grH[3].name} </td> <td className="table-guest last"> {teams_grH[2].name}</td></tr>
        </table>
      <table className="table">
      <tr className="table-title">ROUND 5</tr>
        <tr className="table-row"><td className="table-host">{teams_grH[2].name} </td> <td className="table-guest"> {teams_grH[1].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grH[0].name} </td> <td className="table-guest last"> {teams_grH[3].name}</td></tr> 
        </table>
      <table className="table">
      <tr className="table-title">ROUND 6</tr>
        <tr className="table-row"><td className="table-host">{teams_grH[2].name} </td> <td className="table-guest"> {teams_grH[0].name}</td></tr> 
        <tr className="table-row"><td className="table-host last">{teams_grH[3].name} </td> <td className="table-guest last"> {teams_grH[1].name}</td></tr> 
      </table>
      </>
    )}

    </>
  )
  :
  (
    <div>Noy</div>
  )
)