

        const select = document.querySelector('#select'); //jaka liga byla wybrana
        const showTeam = document.querySelector('.showTeam'); //do pokazania wybranych druzyn
        const button = document.querySelector('.button') //Button do wyswietlania round
        const schedule = document.querySelector('.schedule'); //pokazuje mecze
        const tableSort = document.querySelector('.tablesort'); //posortowana tabela
        const addTeams = document.querySelector('.addteams'); //main div
        const game = document.querySelector('.game'); //main div
        const selectLeague = document.querySelector('.selectLeague');

        function reload(){
  location.reload();
  return false;
}
        //baza tworzona
        const teams = [];
        const teams_cup = [];
        //for groups
        const teamsA = [];
        const teamsB = [];
        const teamsC = [];
        const teamsD = [];
        const teamsE = [];
        const teamsF = [];
        const teamsG = [];
        const teamsH = [];

        //wyswietlanie dostepnych lig
        select.addEventListener('change', () => {
            showTeam.innerHTML = '';
            if (select.value == 'wc') {
              teams_cup.splice(0, teams_cup.length);
              const team_qty = 321;
              showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
              <input type="number" placeholder="Att" readonly>
              <input type="number" placeholder="Def" readonly>
              <input type="number" placeholder="TW" readonly>
              <br>
              <input type="text" value="" placeholder="Skills: Attack, Defense, TeamWork" readonly><br>
              `
              for (let i = 0; i < 32; i++) {

                  showTeam.innerHTML += `<tr>
             <td> <input type="text" value="${wc[i].name}" id="team${i}_name"> </td>
             <td><input type="number" value="${wc[i].att}" id="team${i}_att" max="99" min="1"> </td>
              <td><input type="number" value="${wc[i].def}" id="team${i}_def" max="99" min="1"> </td>
                  <td><input type="number" value="${wc[i].tw}" id="team${i}_tw" max="99" min="1"></td>
              </tr><br>
          `;
              }
              showTeam.innerHTML += `<button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
          };
            if (select.value == 'pol') {
              teams.splice(0, teams.length);
                const team_qty = poland.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Att" readonly>
                <input type="number" placeholder="Def" readonly>
                <input type="number" placeholder="TW" readonly><br>
                <input type="text" value="" placeholder="Skills: Attack, Defense, TeamWork" readonly><br>`
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `
                <input type="text" value="${poland[i].name}" id="team${i}_name"> 
                <input type="number" value="${poland[i].att}" id="team${i}_att" max="99" min="1"> 
                <input type="number" value="${poland[i].def}" id="team${i}_def" max="99" min="1"> 
                <input type="number" value="${poland[i].tw}" id="team${i}_tw" max="99" min="1">
                <br>`;
                }
                showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            }
            if (select.value == 'polW') {
                teams.splice(0, teams.length);
                const team_qty = polandW.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Att" readonly>
                <input type="number" placeholder="Def" readonly>
                <input type="number" placeholder="TW" readonly><br>
                <input type="text" value="" placeholder="Skills: Attack, Defense, TeamWork" readonly><br>`
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `
                <input type="text" value="${polandW[i].name}" id="team${i}_name" > 
                <input type="number" value="${polandW[i].att}" id="team${i}_att" max="99" min="1"> 
                <input type="number" value="${polandW[i].def}" id="team${i}_def" max="99" min="1"> 
                <input type="number" value="${polandW[i].tw}" id="team${i}_tw" max="99" min="1">
                <br>`;
                }
               showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            }
            if (select.value == 'spa') {
                teams.splice(0, teams.length);
                const team_qty = spain.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Att" readonly>
                <input type="number" placeholder="Def" readonly>
                <input type="number" placeholder="TW" readonly><br>
                <input type="text" value="" placeholder="Skills: Attack, Defense, TeamWork" readonly><br>`
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `
                <input type="text" value="${spain[i].name}" id="team${i}_name" > 
                <input type="number" value="${spain[i].att}" id="team${i}_att" max="99" min="1"> 
                <input type="number" value="${spain[i].def}" id="team${i}_def" max="99" min="1"> 
                <input type="number" value="${spain[i].tw}" id="team${i}_tw" max="99" min="1">
                <br>`;
                }
               showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            }

            if (select.value == 'self') {
                showTeam.innerHTML = `Teams quantity: <select id="number_teams" class="select_input">
        <option>--</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
        <option>10</option>
        <option>12</option>
        <option>14</option>
        <option>16</option>
        <option>20</option>
        <option value="161">CUP16 - 4 groups</option>
        <option value="321">CUP32 - 8 groups</option>
      </select> <button onclick="selfTeamFunc()" class="btn_effect">OK</button>`

            }
        })
        
        function selfTeamFunc() {
            const teams_qty = document.querySelector('#number_teams');
            
            //console.log(selfTeam);
            let numberTeams = teams_qty.value;
            // const team_qty = selfTeam.value;
            showTeam.innerHTML = '';
            showTeam.innerHTML += `<input type="button" value="${numberTeams}" id="team_qty">
            <input type="number" placeholder="Att" readonly>
            <input type="number" placeholder="Def" readonly>
            <input type="number" placeholder="TW" readonly><br>
            <input type="text" value="" placeholder="Skills: Attack, Defense, TeamWork" readonly><br>`
            if(numberTeams > 100){
              if(numberTeams == 321){
                teams.splice(0, teams.length);
                  showTeam.innerHTML += 'Group A: ';
                  for (let i = 0; i < 4; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group B: ';
                  for (let i = 4; i < 8; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group C: ';
                  for (let i = 8; i < 12; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group D: ';
                  for (let i = 12; i < 16; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group E: ';
                  for (let i = 16; i < 20; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group F: ';
                  for (let i = 20; i < 24; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group G: ';
                  for (let i = 24; i < 28; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_dtw>
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group H: ';
                  for (let i = 28; i < 32; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
              }
              else if(numberTeams == 161){
                teams.splice(0, teams.length);
                  showTeam.innerHTML += 'Group A: ';
                  for (let i = 0; i < 4; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group B: ';
                  for (let i = 4; i < 8; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group C: ';
                  for (let i = 8; i < 12; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
                  showTeam.innerHTML += 'Group D: ';
                  for (let i = 12; i < 16; i++) {
                      showTeam.innerHTML += `<br>
                      
                      Team ${i + 1}: <input type="text" id="team${i}_name"> 
                      <input type="number" id="team${i}_att"> 
                      <input type="number" id="team${i}_def"> 
                      <input type="number" id="team${i}_tw">
                      <br>`;
                  }
              }
              
          }
            else{

              console.log(team_qty);
              for (let i = 0; i < numberTeams; i++) {
                  showTeam.innerHTML += `<br>
  
                  Team ${i + 1}: <input type="text" id="team${i}_name"> 
                  <input type="number" id="team${i}_att"> 
                  <input type="number" id="team${i}_def"> 
                  <input type="number" id="team${i}_tw">
                  <br>`;
  
              }
            }
           
           showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
        }

        function accept() {

          const teams_qty = document.querySelector('#team_qty').value;
          console.log(teams_qty);
          if(teams_qty >  100){
              if(teams_qty ==  321){
                  for(let j = 0; j<32; j++){
                      let new_name = document.querySelector(`#team${j}_name`).value;
                      teams_cup.push({
                          name: new_name,
                      })
                  }
              for (let i = 0; i < 4; i++) {
                  let new_name = document.querySelector(`#team${i}_name`).value;
                  let new_att = document.querySelector(`#team${i}_att`).value;
                  let new_tw = document.querySelector(`#team${i}_tw`).value;
                  let new_def = document.querySelector(`#team${i}_def`).value;
                  new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                  new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                  new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                  teamsA.push({
                      name: new_name,
                      att: Number(new_att),
                      tw: Number(new_tw),
                      def: Number(new_def),
                      win: [],
                      draw: [],
                      lose: [],
                      goal_plus: [],
                      goal_minus: [],
                      points: [],
                      goal_plus_sum: 0,
                      goal_minus_sum: 0,
                      points_sum: 0
                  })
              }
              for (let i = 4; i < 8; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsB.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 8; i < 12; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsC.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 12; i < 16; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsD.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              
              for (let i = 16; i < 20; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsE.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 20; i < 24; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsF.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 24; i < 28; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsG.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 28; i < 32; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsH.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }   
          }
           //end if 32 Group
          if(teams_qty ==  161){
              for(let j = 0; j<16; j++){
                  let new_name = document.querySelector(`#team${j}_name`).value;
                  teams_cup.push({
                      name: new_name,
                  })
              }
              for (let i = 0; i < 4; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsA.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 4; i < 8; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsB.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 8; i < 12; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsC.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
              for (let i = 12; i < 16; i++) {
                let new_name = document.querySelector(`#team${i}_name`).value;
                let new_att = document.querySelector(`#team${i}_att`).value;
                let new_tw = document.querySelector(`#team${i}_tw`).value;
                let new_def = document.querySelector(`#team${i}_def`).value;
                new_att > 99 ? new_att = 99 : new_att; new_att < 1 ? new_att = 1 : new_att;
                new_tw > 99 ? new_tw = 99 : new_tw; new_tw < 1 ? new_tw = 1 : new_tw;
                new_def > 99 ? new_def = 99 : new_def; new_def < 1 ? new_def = 1 : new_def;
                teamsD.push({
                    name: new_name,
                    att: Number(new_att),
                    tw: Number(new_tw),
                    def: Number(new_def),
                    win: [],
                    draw: [],
                    lose: [],
                    goal_plus: [],
                    goal_minus: [],
                    points: [],
                    goal_plus_sum: 0,
                    goal_minus_sum: 0,
                    points_sum: 0
                })
              }
          }
          //end if 16 Group

      }
          else{
              for (let i = 0; i < teams_qty; i++) {
                  let new_name = document.querySelector(`#team${i}_name`).value;
                  let new_att = document.querySelector(`#team${i}_att`).value;
                  let new_tw = document.querySelector(`#team${i}_tw`).value;
                  let new_def = document.querySelector(`#team${i}_def`).value;
                  new_att>99 ? new_att=99 : new_att; new_att<1 ? new_att=1 : new_att;
                  new_tw>99 ? new_tw=99 : new_tw; new_tw<1 ? new_tw=1 : new_tw;
                  new_def>99 ? new_def=99 : new_def; new_def<1 ? new_def=1 : new_def;
                  teams.push({
                      name: new_name,
                      att: Number(new_att),
                      tw: Number(new_tw),
                      def: Number(new_def),
                      win: [],
                      draw: [],
                      lose: [],
                      goal_plus: [],
                      goal_minus: [],
                      points: [],
                      goal_plus_sum: 0,
                      goal_minus_sum: 0,
                      points_sum: 0
                  })
          }
  
          }

          

          addTeams.innerHTML = '';
          // showTeam.innerHTML = ' Your Teams: <br>';
          // for (let i = 0; i < teams_qty; i++) {
          //     showTeam.innerHTML += `${teams[i].name} <br>`
          // }
          //console.log(teams);
          selectLeague.innerHTML = '';
          button.innerHTML += `<button onclick="start()" id="round1" class="btn_start btn_effect">START</button>`
          //button.innerHTML += `<br><button onclick="teamtable()" class="btn_effect">Group</button>`
          //pokaz();

          //toggle divs to see
          game.classList.toggle('toggle');
          addTeams.classList.toggle('toggle');
          
          
          teamtable();
      }
        



        function play(host, guest, m_id,r_id) {


let match_tr = document.getElementById(m_id);

console.log(m_id);

let hc = 0.01;
let point = 0;


let h_a = host.att + (host.att * hc) + Math.floor(Math.random() * 10);
let h_tw = host.tw + (host.tw * hc) + Math.floor(Math.random() * 10);
let h_d = host.def + (host.def * hc) + Math.floor(Math.random() * 10);
let g_a = guest.att + Math.floor(Math.random() * 10);
let g_tw = guest.tw + Math.floor(Math.random() * 10);
let g_d = guest.def + Math.floor(Math.random() * 10);
let shot = (h_a + h_tw) / 4;
let saves = (g_tw + g_d) / 10;
let score1 = Math.floor(shot - saves) + Math.floor(Math.random() * 2);
let shot2 = (g_a + g_tw) / 4;
let saves2 = (h_tw + h_d) / 10;
let score2 = Math.floor(shot2 - saves2) + Math.floor(Math.random() * 2);

if (score1 < 10) { score1 = 0 + Math.floor(Math.random() * (10-5))+5 };
if (score2 < 10) { score2 = 0 + Math.floor(Math.random() * (10-5))+5 };


//Dodawanie bramek
for (let i = 0; i < teams.length; i++) {

  if (host === teams[i]) {
    teams[i].goal_plus.push(score1);
    teams[i].goal_minus.push(score2);
  } else if (guest === teams[i]) {
    teams[i].goal_plus.push(score2);
    teams[i].goal_minus.push(score1);
  }

}

//Dodawanie punktów
if (score1 > score2) {
  host.points.push(3);
  guest.points.push(0);
  host.win.push(1);
  guest.lose.push(1);
} else if (score1 < score2) {
  guest.points.push(3);
  host.points.push(0);
  guest.win.push(1);
  host.lose.push(1);
} else if (score1 == score2) {
  host.points.push(1);
  guest.points.push(1);
  guest.draw.push(1);
  host.draw.push(1);
}

if(teams.length>0){
  //Sumowanie bramek i punktów
  teams.forEach(x => {
      x.points_sum = x.points.reduce((a, b) => a + b, 0)
    })
    
    teams.forEach(x => {
      x.goal_plus_sum = x.goal_plus.reduce((a, b) => a + b, 0)
    })
    
    teams.forEach(x => {
      x.goal_minus_sum = x.goal_minus.reduce((a, b) => a + b, 0)
    })
  }
  else{
      if (score1 > score2) {
          host.points_sum += 3;
        } if (score1 < score2) {
          guest.points_sum += 3;
        } if (score1 == score2) {
          host.points_sum += 1;
          guest.points_sum += 1;
        }
  
        host.goal_plus_sum += score1;
        host.goal_minus_sum += score2;
        guest.goal_plus_sum += score2;
        guest.goal_minus_sum += score1;
  }
if(r_id){
    r_id.innerHTML = `
           
           `;
}

m_id.innerHTML = `
      <td class="host">${host.name}</td>
      <td class="guest">${guest.name}</td>
      <td class="host host_score">${score1}</td>
     <td class="guest guest_score">${score2}</td>
       `

teamtable();
}



function teamtable(){
  if(teams.length>2){
let new_teams = [];
for(i=0;i<teams.length;i++){
  new_teams.push({
    name: teams[i].name,
    match: teams[i].points.length,
    win: teams[i].win.length,
    draw: teams[i].draw.length,
    lose: teams[i].lose.length,
    goals_plus: teams[i].goal_plus_sum,
    goals_minus: teams[i].goal_minus_sum,
    points: teams[i].points_sum
  }
  )
}
//console.log(new_teams);
let lt = new_teams.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))//live table

if(new_teams.length == 4){
     tableSort.innerHTML = `<table>
                    <tr>
                        <th colspan="9">Table</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                    </tr>
      </table>   `
}
    if(new_teams.length == 6){
     tableSort.innerHTML = `<table>
                    <tr>
                        <th colspan="9">Table</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                    </tr>
                    <tr>
                    <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                    </tr>
                    <tr>
                    <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                    </tr>
      </table>   `
}
if(new_teams.length == 8){
    tableSort.innerHTML = `<table>
                   <tr>
                       <th colspan="9">Table</th>
                   </tr>
                   <tr>
                       <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                   </tr>
                   <tr>  
                   <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                   </tr>
                   <tr>
                   <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                   </tr>
                   <tr>
                    <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                   </tr>
                   <tr>
                   <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                   </tr>
                   <tr>
                   <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                   </tr>
                   <tr>
                   <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                   </tr>
                   <tr>  
                   <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].goals_plus}</td><td>${lt[6].goals_minus}</td><td>${lt[6].points}</td>
                   </tr>
                   <tr>
                   <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].goals_plus}</td><td>${lt[7].goals_minus}</td><td>${lt[7].points}</td>
                   </tr>
     </table>   `
}
if(new_teams.length == 10){
    tableSort.innerHTML = `<table>
                   <tr>
                       <th colspan="9">Table</th>
                   </tr>
                   <tr>
                       <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                   </tr>
                   <tr>  
                   <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                   </tr>
                   <tr>
                   <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                   </tr>
                   <tr>
                    <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                   </tr>
                   <tr>
                   <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                   </tr>
                   <tr>
                   <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                   </tr>
                   <tr>
                   <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                   </tr>
                   <tr>  
                   <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].goals_plus}</td><td>${lt[6].goals_minus}</td><td>${lt[6].points}</td>
                   </tr>
                   <tr>
                   <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].goals_plus}</td><td>${lt[7].goals_minus}</td><td>${lt[7].points}</td>
                   </tr>
                   <tr>
                    <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].goals_plus}</td><td>${lt[8].goals_minus}</td><td>${lt[8].points}</td>
                   </tr>
                   <tr>
                   <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].goals_plus}</td><td>${lt[9].goals_minus}</td><td>${lt[9].points}</td>
                   </tr>
                   <td>
     </table>   `
}
if(new_teams.length == 12){
    tableSort.innerHTML = `<table>
                   <tr>
                       <th colspan="9">Table</th>
                   </tr>
                   <tr>
                       <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                   </tr>
                   <tr>  
                   <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                   </tr>
                   <tr>
                   <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                   </tr>
                   <tr>
                    <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                   </tr>
                   <tr>
                   <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                   </tr>
                   <tr>
                   <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                   </tr>
                   <tr>
                   <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                   </tr>
                   <tr>  
                   <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].goals_plus}</td><td>${lt[6].goals_minus}</td><td>${lt[6].points}</td>
                   </tr>
                   <tr>
                   <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].goals_plus}</td><td>${lt[7].goals_minus}</td><td>${lt[7].points}</td>
                   </tr>
                   <tr>
                    <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].goals_plus}</td><td>${lt[8].goals_minus}</td><td>${lt[8].points}</td>
                   </tr>
                   <tr>
                   <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].goals_plus}</td><td>${lt[9].goals_minus}</td><td>${lt[9].points}</td>
                   </tr>
                   <tr>
                   <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].goals_plus}</td><td>${lt[10].goals_minus}</td><td>${lt[10].points}</td>
                   </tr>
                   <tr>
                   <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].goals_plus}</td><td>${lt[11].goals_minus}</td><td>${lt[11].points}</td>
                   </tr>
                   <td>  
     </table>   `
}
if(new_teams.length == 14){
    tableSort.innerHTML = `<table>
                   <tr>
                       <th colspan="9">Table</th>
                   </tr>
                   <tr>
                       <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                   </tr>
                   <tr>  
                   <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                   </tr>
                   <tr>
                   <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                   </tr>
                   <tr>
                    <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                   </tr>
                   <tr>
                   <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                   </tr>
                   <tr>
                   <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                   </tr>
                   <tr>
                   <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                   </tr>
                   <tr>  
                   <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].goals_plus}</td><td>${lt[6].goals_minus}</td><td>${lt[6].points}</td>
                   </tr>
                   <tr>
                   <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].goals_plus}</td><td>${lt[7].goals_minus}</td><td>${lt[7].points}</td>
                   </tr>
                   <tr>
                    <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].goals_plus}</td><td>${lt[8].goals_minus}</td><td>${lt[8].points}</td>
                   </tr>
                   <tr>
                   <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].goals_plus}</td><td>${lt[9].goals_minus}</td><td>${lt[9].points}</td>
                   </tr>
                   <tr>
                   <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].goals_plus}</td><td>${lt[10].goals_minus}</td><td>${lt[10].points}</td>
                   </tr>
                   <tr>
                   <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].goals_plus}</td><td>${lt[11].goals_minus}</td><td>${lt[11].points}</td>
                   </tr>
                   <tr>  
                   <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td>${lt[12].draw}</td><td>${lt[12].lose}</td><td>${lt[12].goals_plus}</td><td>${lt[12].goals_minus}</td><td>${lt[12].points}</td>
                   </tr>
                   <tr>
                   <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td>${lt[13].draw}</td><td>${lt[13].lose}</td><td>${lt[13].goals_plus}</td><td>${lt[13].goals_minus}</td><td>${lt[13].points}</td>
                   </tr>
     </table>   `
}
if(new_teams.length == 16){
    tableSort.innerHTML = `<table>
                   <tr>
                       <th colspan="9">Table</th>
                   </tr>
                   <tr>
                       <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                   </tr>
                   <tr>  
                   <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                   </tr>
                   <tr>
                   <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                   </tr>
                   <tr>
                    <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                   </tr>
                   <tr>
                   <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                   </tr>
                   <tr>
                   <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                   </tr>
                   <tr>
                   <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                   </tr>
                   <tr>  
                   <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].goals_plus}</td><td>${lt[6].goals_minus}</td><td>${lt[6].points}</td>
                   </tr>
                   <tr>
                   <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].goals_plus}</td><td>${lt[7].goals_minus}</td><td>${lt[7].points}</td>
                   </tr>
                   <tr>
                    <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].goals_plus}</td><td>${lt[8].goals_minus}</td><td>${lt[8].points}</td>
                   </tr>
                   <tr>
                   <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].goals_plus}</td><td>${lt[9].goals_minus}</td><td>${lt[9].points}</td>
                   </tr>
                   <tr>
                   <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].goals_plus}</td><td>${lt[10].goals_minus}</td><td>${lt[10].points}</td>
                   </tr>
                   <tr>
                   <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].goals_plus}</td><td>${lt[11].goals_minus}</td><td>${lt[11].points}</td>
                   </tr>
                   <tr>  
                   <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td>${lt[12].draw}</td><td>${lt[12].lose}</td><td>${lt[12].goals_plus}</td><td>${lt[12].goals_minus}</td><td>${lt[12].points}</td>
                   </tr>
                   <tr>
                   <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td>${lt[13].draw}</td><td>${lt[13].lose}</td><td>${lt[13].goals_plus}</td><td>${lt[13].goals_minus}</td><td>${lt[13].points}</td>
                   </tr>
                   <tr>
                    <td>15</td><td>${lt[14].name}</td><td>${lt[14].match}</td><td>${lt[14].win}</td><td>${lt[14].draw}</td><td>${lt[14].lose}</td><td>${lt[14].goals_plus}</td><td>${lt[14].goals_minus}</td><td>${lt[14].points}</td>
                   </tr>
                   <tr>
                   <td>16</td><td>${lt[15].name}</td><td>${lt[15].match}</td><td>${lt[15].win}</td><td>${lt[15].draw}</td><td>${lt[15].lose}</td><td>${lt[15].goals_plus}</td><td>${lt[15].goals_minus}</td><td>${lt[15].points}</td>
                   </tr>
     </table>   `
}
if(new_teams.length == 18){
    tableSort.innerHTML = `<table>
                   <tr>
                       <th colspan="9">Table</th>
                   </tr>
                   <tr>
                       <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                   </tr>
                   <tr>  
                   <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                   </tr>
                   <tr>
                   <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                   </tr>
                   <tr>
                    <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                   </tr>
                   <tr>
                   <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                   </tr>
                   <tr>
                   <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                   </tr>
                   <tr>
                   <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                   </tr>
                   <tr>  
                   <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].goals_plus}</td><td>${lt[6].goals_minus}</td><td>${lt[6].points}</td>
                   </tr>
                   <tr>
                   <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].goals_plus}</td><td>${lt[7].goals_minus}</td><td>${lt[7].points}</td>
                   </tr>
                   <tr>
                    <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].goals_plus}</td><td>${lt[8].goals_minus}</td><td>${lt[8].points}</td>
                   </tr>
                   <tr>
                   <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].goals_plus}</td><td>${lt[9].goals_minus}</td><td>${lt[9].points}</td>
                   </tr>
                   <tr>
                   <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].goals_plus}</td><td>${lt[10].goals_minus}</td><td>${lt[10].points}</td>
                   </tr>
                   <tr>
                   <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].goals_plus}</td><td>${lt[11].goals_minus}</td><td>${lt[11].points}</td>
                   </tr>
                   <tr>  
                   <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td>${lt[12].draw}</td><td>${lt[12].lose}</td><td>${lt[12].goals_plus}</td><td>${lt[12].goals_minus}</td><td>${lt[12].points}</td>
                   </tr>
                   <tr>
                   <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td>${lt[13].draw}</td><td>${lt[13].lose}</td><td>${lt[13].goals_plus}</td><td>${lt[13].goals_minus}</td><td>${lt[13].points}</td>
                   </tr>
                   <tr>
                    <td>15</td><td>${lt[14].name}</td><td>${lt[14].match}</td><td>${lt[14].win}</td><td>${lt[14].draw}</td><td>${lt[14].lose}</td><td>${lt[14].goals_plus}</td><td>${lt[14].goals_minus}</td><td>${lt[14].points}</td>
                   </tr>
                   <tr>
                   <td>16</td><td>${lt[15].name}</td><td>${lt[15].match}</td><td>${lt[15].win}</td><td>${lt[15].draw}</td><td>${lt[15].lose}</td><td>${lt[15].goals_plus}</td><td>${lt[15].goals_minus}</td><td>${lt[15].points}</td>
                   </tr>
                   <tr>
                   <td>17</td><td>${lt[16].name}</td><td>${lt[16].match}</td><td>${lt[16].win}</td><td>${lt[16].draw}</td><td>${lt[16].lose}</td><td>${lt[16].goals_plus}</td><td>${lt[16].goals_minus}</td><td>${lt[16].points}</td>
                   </tr>
                   <tr>
                   <td>18</td><td>${lt[17].name}</td><td>${lt[17].match}</td><td>${lt[17].win}</td><td>${lt[17].draw}</td><td>${lt[17].lose}</td><td>${lt[17].goals_plus}</td><td>${lt[17].goals_minus}</td><td>${lt[17].points}</td>
                   </tr>

     </table>   `
}

    if(new_teams.length == 20){
     tableSort.innerHTML = `<table>
                    <tr>
                        <th colspan="9">Table</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].goals_plus}</td><td>${lt[0].goals_minus}</td><td>${lt[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].goals_plus}</td><td>${lt[1].goals_minus}</td><td>${lt[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].goals_plus}</td><td>${lt[2].goals_minus}</td><td>${lt[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].goals_plus}</td><td>${lt[3].goals_minus}</td><td>${lt[3].points}</td>
                    </tr>
                    <tr>
                    <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].goals_plus}</td><td>${lt[4].goals_minus}</td><td>${lt[4].points}</td>
                    </tr>
                    <tr>
                    <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].goals_plus}</td><td>${lt[5].goals_minus}</td><td>${lt[5].points}</td>
                    </tr>
                    <tr>  
                    <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].goals_plus}</td><td>${lt[6].goals_minus}</td><td>${lt[6].points}</td>
                    </tr>
                    <tr>
                    <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].goals_plus}</td><td>${lt[7].goals_minus}</td><td>${lt[7].points}</td>
                    </tr>
                    <tr>
                     <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].goals_plus}</td><td>${lt[8].goals_minus}</td><td>${lt[8].points}</td>
                    </tr>
                    <tr>
                    <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].goals_plus}</td><td>${lt[9].goals_minus}</td><td>${lt[9].points}</td>
                    </tr>
                    <tr>
                    <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].goals_plus}</td><td>${lt[10].goals_minus}</td><td>${lt[10].points}</td>
                    </tr>
                    <tr>
                    <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].goals_plus}</td><td>${lt[11].goals_minus}</td><td>${lt[11].points}</td>
                    </tr>
                    <tr>  
                    <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td>${lt[12].draw}</td><td>${lt[12].lose}</td><td>${lt[12].goals_plus}</td><td>${lt[12].goals_minus}</td><td>${lt[12].points}</td>
                    </tr>
                    <tr>
                    <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td>${lt[13].draw}</td><td>${lt[13].lose}</td><td>${lt[13].goals_plus}</td><td>${lt[13].goals_minus}</td><td>${lt[13].points}</td>
                    </tr>
                    <tr>
                     <td>15</td><td>${lt[14].name}</td><td>${lt[14].match}</td><td>${lt[14].win}</td><td>${lt[14].draw}</td><td>${lt[14].lose}</td><td>${lt[14].goals_plus}</td><td>${lt[14].goals_minus}</td><td>${lt[14].points}</td>
                    </tr>
                    <tr>
                    <td>16</td><td>${lt[15].name}</td><td>${lt[15].match}</td><td>${lt[15].win}</td><td>${lt[15].draw}</td><td>${lt[15].lose}</td><td>${lt[15].goals_plus}</td><td>${lt[15].goals_minus}</td><td>${lt[15].points}</td>
                    </tr>
                    <tr>
                    <td>17</td><td>${lt[16].name}</td><td>${lt[16].match}</td><td>${lt[16].win}</td><td>${lt[16].draw}</td><td>${lt[16].lose}</td><td>${lt[16].goals_plus}</td><td>${lt[16].goals_minus}</td><td>${lt[16].points}</td>
                    </tr>
                    <tr>
                    <td>18</td><td>${lt[17].name}</td><td>${lt[17].match}</td><td>${lt[17].win}</td><td>${lt[17].draw}</td><td>${lt[17].lose}</td><td>${lt[17].goals_plus}</td><td>${lt[17].goals_minus}</td><td>${lt[17].points}</td>
                    </tr>
                    <tr>
                    <td>19</td><td>${lt[18].name}</td><td>${lt[18].match}</td><td>${lt[18].win}</td><td>${lt[18].draw}</td><td>${lt[18].lose}</td><td>${lt[18].goals_plus}</td><td>${lt[18].goals_minus}</td><td>${lt[18].points}</td>
                    </tr>
                    <tr>
                    <td>20</td><td>${lt[19].name}</td><td>${lt[19].match}</td><td>${lt[19].win}</td><td>${lt[19].draw}</td><td>${lt[19].lose}</td><td>${lt[19].goals_plus}</td><td>${lt[19].goals_minus}</td><td>${lt[19].points}</td>
                    </tr>
      </table>   `
}
  //console.log(lt);
  //console.log(teams);
  }

  else{
    console.log("Grupowe");
    let new_teamsA = [];
    let new_teamsB = [];
    let new_teamsC = [];
    let new_teamsD = [];
    let new_teamsE = [];
    let new_teamsF = [];
    let new_teamsG = [];
    let new_teamsH = [];

    if(teams_cup.length > 25){

for(i=0;i<teamsA.length;i++){
  new_teamsA.push({
    name: teamsA[i].name,
    match: teamsA[i].points.length,
    win: teamsA[i].win.length,
    lose: teamsA[i].lose.length,
    draw: teamsA[i].draw.length,
    goals_plus: teamsA[i].goal_plus_sum,
    goals_minus: teamsA[i].goal_minus_sum,
    points: teamsA[i].points_sum
  }
  )
}
for(i=0;i<teamsB.length;i++){
    new_teamsB.push({
      name: teamsB[i].name,
      match: teamsB[i].points.length,
      win: teamsB[i].win.length,
      lose: teamsB[i].lose.length,
      draw: teamsB[i].draw.length,
      goals_plus: teamsB[i].goal_plus_sum,
      goals_minus: teamsB[i].goal_minus_sum,
      points: teamsB[i].points_sum
    }
    )
  }
  for(i=0;i<teamsC.length;i++){
    new_teamsC.push({
      name: teamsC[i].name,
      match: teamsC[i].points.length,
      win: teamsC[i].win.length,
      lose: teamsC[i].lose.length,
      draw: teamsC[i].draw.length,
      goals_plus: teamsC[i].goal_plus_sum,
      goals_minus: teamsC[i].goal_minus_sum,
      points: teamsC[i].points_sum
    }
    )
  }
  for(i=0;i<teamsD.length;i++){
    new_teamsD.push({
      name: teamsD[i].name,
      match: teamsD[i].points.length,
      win: teamsD[i].win.length,
      lose: teamsD[i].lose.length,
      draw: teamsD[i].draw.length,
      goals_plus: teamsD[i].goal_plus_sum,
      goals_minus: teamsD[i].goal_minus_sum,
      points: teamsD[i].points_sum
    }
    )
  }
  for(i=0;i<teamsE.length;i++){
    new_teamsE.push({
      name: teamsE[i].name,
      match: teamsE[i].points.length,
      win: teamsE[i].win.length,
      lose: teamsE[i].lose.length,
      draw: teamsE[i].draw.length,
      goals_plus: teamsE[i].goal_plus_sum,
      goals_minus: teamsE[i].goal_minus_sum,
      points: teamsE[i].points_sum
    }
    )
  }
  for(i=0;i<teamsF.length;i++){
      new_teamsF.push({
        name: teamsF[i].name,
        match: teamsF[i].points.length,
        win: teamsF[i].win.length,
        lose: teamsF[i].lose.length,
        draw: teamsF[i].draw.length,
        goals_plus: teamsF[i].goal_plus_sum,
        goals_minus: teamsF[i].goal_minus_sum,
        points: teamsF[i].points_sum
      }
      )
    }
    for(i=0;i<teamsG.length;i++){
      new_teamsG.push({
        name: teamsG[i].name,
        match: teamsG[i].points.length,
        win: teamsG[i].win.length,
        lose: teamsG[i].lose.length,
        draw: teamsG[i].draw.length,
        goals_plus: teamsG[i].goal_plus_sum,
        goals_minus: teamsG[i].goal_minus_sum,
        points: teamsG[i].points_sum
      }
      )
    }
    for(i=0;i<teamsH.length;i++){
      new_teamsH.push({
        name: teamsH[i].name,
        match: teamsH[i].points.length,
        win: teamsH[i].win.length,
        lose: teamsH[i].lose.length,
        draw: teamsH[i].draw.length,
        goals_plus: teamsH[i].goal_plus_sum,
        goals_minus: teamsH[i].goal_minus_sum,
        points: teamsH[i].points_sum
      }
      )
    }
//console.log(new_teams);
let ltA = new_teamsA.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))//live table
let ltB = new_teamsB.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
let ltC = new_teamsC.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
let ltD = new_teamsD.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
let ltE = new_teamsE.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
let ltF = new_teamsF.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
let ltG = new_teamsG.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
let ltH = new_teamsH.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))

if(new_teamsA.length == 4){
     tableSort.innerHTML = `<table>
                    <tr>
                        <th colspan="9" class="group">GROUP A</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltA[0].name}</td><td>${ltA[0].match}</td><td>${ltA[0].win}</td><td>${ltA[0].draw}</td><td>${ltA[0].lose}</td><td>${ltA[0].goals_plus}</td><td>${ltA[0].goals_minus}</td><td>${ltA[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltA[1].name}</td><td>${ltA[1].match}</td><td>${ltA[1].win}</td><td>${ltA[1].draw}</td><td>${ltA[1].lose}</td><td>${ltA[1].goals_plus}</td><td>${ltA[1].goals_minus}</td><td>${ltA[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltA[2].name}</td><td>${ltA[2].match}</td><td>${ltA[2].win}</td><td>${ltA[2].draw}</td><td>${ltA[2].lose}</td><td>${ltA[2].goals_plus}</td><td>${ltA[2].goals_minus}</td><td>${ltA[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltA[3].name}</td><td>${ltA[3].match}</td><td>${ltA[3].win}</td><td>${ltA[3].draw}</td><td>${ltA[3].lose}</td><td>${ltA[3].goals_plus}</td><td>${ltA[3].goals_minus}</td><td>${ltA[3].points}</td>
                    </tr>
      </table>  
      <table>
                    <tr>
                        <th colspan="9" class="group">GROUP B</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltB[0].name}</td><td>${ltB[0].match}</td><td>${ltB[0].win}</td><td>${ltB[0].draw}</td><td>${ltB[0].lose}</td><td>${ltB[0].goals_plus}</td><td>${ltB[0].goals_minus}</td><td>${ltB[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltB[1].name}</td><td>${ltB[1].match}</td><td>${ltB[1].win}</td><td>${ltB[1].draw}</td><td>${ltB[1].lose}</td><td>${ltB[1].goals_plus}</td><td>${ltB[1].goals_minus}</td><td>${ltB[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltB[2].name}</td><td>${ltB[2].match}</td><td>${ltB[2].win}</td><td>${ltB[2].draw}</td><td>${ltB[2].lose}</td><td>${ltB[2].goals_plus}</td><td>${ltB[2].goals_minus}</td><td>${ltB[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltB[3].name}</td><td>${ltB[3].match}</td><td>${ltB[3].win}</td><td>${ltB[3].draw}</td><td>${ltB[3].lose}</td><td>${ltB[3].goals_plus}</td><td>${ltB[3].goals_minus}</td><td>${ltB[3].points}</td>
                    </tr>
      </table> 
      <table>
                    <tr>
                        <th colspan="9" class="group">GROUP C</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltC[0].name}</td><td>${ltC[0].match}</td><td>${ltC[0].win}</td><td>${ltC[0].draw}</td><td>${ltC[0].lose}</td><td>${ltC[0].goals_plus}</td><td>${ltC[0].goals_minus}</td><td>${ltC[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltC[1].name}</td><td>${ltC[1].match}</td><td>${ltC[1].win}</td><td>${ltC[1].draw}</td><td>${ltC[1].lose}</td><td>${ltC[1].goals_plus}</td><td>${ltC[1].goals_minus}</td><td>${ltC[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltC[2].name}</td><td>${ltC[2].match}</td><td>${ltC[2].win}</td><td>${ltC[2].draw}</td><td>${ltC[2].lose}</td><td>${ltC[2].goals_plus}</td><td>${ltC[2].goals_minus}</td><td>${ltC[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltC[3].name}</td><td>${ltC[3].match}</td><td>${ltC[3].win}</td><td>${ltC[3].draw}</td><td>${ltC[3].lose}</td><td>${ltC[3].goals_plus}</td><td>${ltC[3].goals_minus}</td><td>${ltC[3].points}</td>
                    </tr>
      </table> 
      <table>
                    <tr>
                        <th colspan="9" class="group">GROUP D</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltD[0].name}</td><td>${ltD[0].match}</td><td>${ltD[0].win}</td><td>${ltD[0].draw}</td><td>${ltD[0].lose}</td><td>${ltD[0].goals_plus}</td><td>${ltD[0].goals_minus}</td><td>${ltD[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltD[1].name}</td><td>${ltD[1].match}</td><td>${ltD[1].win}</td><td>${ltD[1].draw}</td><td>${ltD[1].lose}</td><td>${ltD[1].goals_plus}</td><td>${ltD[1].goals_minus}</td><td>${ltD[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltD[2].name}</td><td>${ltD[2].match}</td><td>${ltD[2].win}</td><td>${ltD[2].draw}</td><td>${ltD[2].lose}</td><td>${ltD[2].goals_plus}</td><td>${ltD[2].goals_minus}</td><td>${ltD[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltD[3].name}</td><td>${ltD[3].match}</td><td>${ltD[3].win}</td><td>${ltD[3].draw}</td><td>${ltD[3].lose}</td><td>${ltD[3].goals_plus}</td><td>${ltD[3].goals_minus}</td><td>${ltD[3].points}</td>
                    </tr>
      </table>  
      <table>
                    <tr>
                        <th colspan="9" class="group">GROUP E</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltE[0].name}</td><td>${ltE[0].match}</td><td>${ltE[0].win}</td><td>${ltE[0].draw}</td><td>${ltE[0].lose}</td><td>${ltE[0].goals_plus}</td><td>${ltE[0].goals_minus}</td><td>${ltE[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltE[1].name}</td><td>${ltE[1].match}</td><td>${ltE[1].win}</td><td>${ltE[1].draw}</td><td>${ltE[1].lose}</td><td>${ltE[1].goals_plus}</td><td>${ltE[1].goals_minus}</td><td>${ltE[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltE[2].name}</td><td>${ltE[2].match}</td><td>${ltE[2].win}</td><td>${ltE[2].draw}</td><td>${ltE[2].lose}</td><td>${ltE[2].goals_plus}</td><td>${ltE[2].goals_minus}</td><td>${ltE[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltE[3].name}</td><td>${ltE[3].match}</td><td>${ltE[3].win}</td><td>${ltE[3].draw}</td><td>${ltE[3].lose}</td><td>${ltE[3].goals_plus}</td><td>${ltE[3].goals_minus}</td><td>${ltE[3].points}</td>
                    </tr>
      </table>  
      <table>
                    <tr>
                        <th colspan="9" class="group">GROUP F</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltF[0].name}</td><td>${ltF[0].match}</td><td>${ltF[0].win}</td><td>${ltF[0].draw}</td><td>${ltF[0].lose}</td><td>${ltF[0].goals_plus}</td><td>${ltF[0].goals_minus}</td><td>${ltF[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltF[1].name}</td><td>${ltF[1].match}</td><td>${ltF[1].win}</td><td>${ltF[1].draw}</td><td>${ltF[1].lose}</td><td>${ltF[1].goals_plus}</td><td>${ltF[1].goals_minus}</td><td>${ltF[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltF[2].name}</td><td>${ltF[2].match}</td><td>${ltF[2].win}</td><td>${ltF[2].draw}</td><td>${ltF[2].lose}</td><td>${ltF[2].goals_plus}</td><td>${ltF[2].goals_minus}</td><td>${ltF[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltF[3].name}</td><td>${ltF[3].match}</td><td>${ltF[3].win}</td><td>${ltF[3].draw}</td><td>${ltF[3].lose}</td><td>${ltF[3].goals_plus}</td><td>${ltF[3].goals_minus}</td><td>${ltF[3].points}</td>
                    </tr>
      </table> 
      <table>
                    <tr>
                        <th colspan="9" class="group">GROUP G</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltG[0].name}</td><td>${ltG[0].match}</td><td>${ltG[0].win}</td><td>${ltG[0].draw}</td><td>${ltG[0].lose}</td><td>${ltG[0].goals_plus}</td><td>${ltG[0].goals_minus}</td><td>${ltG[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltG[1].name}</td><td>${ltG[1].match}</td><td>${ltG[1].win}</td><td>${ltG[1].draw}</td><td>${ltG[1].lose}</td><td>${ltG[1].goals_plus}</td><td>${ltG[1].goals_minus}</td><td>${ltG[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltG[2].name}</td><td>${ltG[2].match}</td><td>${ltG[2].win}</td><td>${ltG[2].draw}</td><td>${ltG[2].lose}</td><td>${ltG[2].goals_plus}</td><td>${ltG[2].goals_minus}</td><td>${ltG[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltG[3].name}</td><td>${ltG[3].match}</td><td>${ltG[3].win}</td><td>${ltG[3].draw}</td><td>${ltG[3].lose}</td><td>${ltG[3].goals_plus}</td><td>${ltG[3].goals_minus}</td><td>${ltG[3].points}</td>
                    </tr>
      </table> 
      <table>
                    <tr>
                        <th colspan="9" class="group">GROUP H</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${ltH[0].name}</td><td>${ltH[0].match}</td><td>${ltH[0].win}</td><td>${ltH[0].draw}</td><td>${ltH[0].lose}</td><td>${ltH[0].goals_plus}</td><td>${ltH[0].goals_minus}</td><td>${ltH[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${ltH[1].name}</td><td>${ltH[1].match}</td><td>${ltH[1].win}</td><td>${ltH[1].draw}</td><td>${ltH[1].lose}</td><td>${ltH[1].goals_plus}</td><td>${ltH[1].goals_minus}</td><td>${ltH[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${ltH[2].name}</td><td>${ltH[2].match}</td><td>${ltH[2].win}</td><td>${ltH[2].draw}</td><td>${ltH[2].lose}</td><td>${ltH[2].goals_plus}</td><td>${ltH[2].goals_minus}</td><td>${ltH[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${ltH[3].name}</td><td>${ltH[3].match}</td><td>${ltH[3].win}</td><td>${ltH[3].draw}</td><td>${ltH[3].lose}</td><td>${ltH[3].goals_plus}</td><td>${ltH[3].goals_minus}</td><td>${ltH[3].points}</td>
                    </tr>
      </table>  `
}
}
else{

    for(i=0;i<teamsA.length;i++){
      new_teamsA.push({
        name: teamsA[i].name,
        match: teamsA[i].points.length,
        win: teamsA[i].win.length,
        lose: teamsA[i].lose.length,
        draw: teamsA[i].draw.length,
        goals_plus: teamsA[i].goal_plus_sum,
        goals_minus: teamsA[i].goal_minus_sum,
        points: teamsA[i].points_sum
      }
      )
    }
    for(i=0;i<teamsB.length;i++){
        new_teamsB.push({
          name: teamsB[i].name,
          match: teamsB[i].points.length,
          win: teamsB[i].win.length,
          lose: teamsB[i].lose.length,
          draw: teamsB[i].draw.length,
          goals_plus: teamsB[i].goal_plus_sum,
          goals_minus: teamsB[i].goal_minus_sum,
          points: teamsB[i].points_sum
        }
        )
      }
      for(i=0;i<teamsC.length;i++){
        new_teamsC.push({
          name: teamsC[i].name,
          match: teamsC[i].points.length,
          win: teamsC[i].win.length,
          lose: teamsC[i].lose.length,
          draw: teamsC[i].draw.length,
          goals_plus: teamsC[i].goal_plus_sum,
          goals_minus: teamsC[i].goal_minus_sum,
          points: teamsC[i].points_sum
        }
        )
      }
      for(i=0;i<teamsD.length;i++){
        new_teamsD.push({
          name: teamsD[i].name,
          match: teamsD[i].points.length,
          win: teamsD[i].win.length,
          lose: teamsD[i].lose.length,
          draw: teamsD[i].draw.length,
          goals_plus: teamsD[i].goal_plus_sum,
          goals_minus: teamsD[i].goal_minus_sum,
          points: teamsD[i].points_sum
        }
        )
      }
    //console.log(new_teams);
    let ltA = new_teamsA.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))//live table
    let ltB = new_teamsB.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ltC = new_teamsC.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ltD = new_teamsD.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    
    if(new_teamsA.length == 4){
         tableSort.innerHTML = `<table>
                        <tr>
                            <th colspan="9" class="group">GROUP A</th>
                        </tr>
                        <tr>
                            <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                        </tr>
                        <tr>  
                        <td>1</td><td>${ltA[0].name}</td><td>${ltA[0].match}</td><td>${ltA[0].win}</td><td>${ltA[0].draw}</td><td>${ltA[0].lose}</td><td>${ltA[0].goals_plus}</td><td>${ltA[0].goals_minus}</td><td>${ltA[0].points}</td>
                        </tr>
                        <tr>
                        <td>2</td><td>${ltA[1].name}</td><td>${ltA[1].match}</td><td>${ltA[1].win}</td><td>${ltA[1].draw}</td><td>${ltA[1].lose}</td><td>${ltA[1].goals_plus}</td><td>${ltA[1].goals_minus}</td><td>${ltA[1].points}</td>
                        </tr>
                        <tr>
                         <td>3</td><td>${ltA[2].name}</td><td>${ltA[2].match}</td><td>${ltA[2].win}</td><td>${ltA[2].draw}</td><td>${ltA[2].lose}</td><td>${ltA[2].goals_plus}</td><td>${ltA[2].goals_minus}</td><td>${ltA[2].points}</td>
                        </tr>
                        <tr>
                        <td>4</td><td>${ltA[3].name}</td><td>${ltA[3].match}</td><td>${ltA[3].win}</td><td>${ltA[3].draw}</td><td>${ltA[3].lose}</td><td>${ltA[3].goals_plus}</td><td>${ltA[3].goals_minus}</td><td>${ltA[3].points}</td>
                        </tr>
          </table>  
          <table>
                        <tr>
                            <th colspan="9" class="group">GROUP B</th>
                        </tr>
                        <tr>
                            <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                        </tr>
                        <tr>  
                        <td>1</td><td>${ltB[0].name}</td><td>${ltB[0].match}</td><td>${ltB[0].win}</td><td>${ltB[0].draw}</td><td>${ltB[0].lose}</td><td>${ltB[0].goals_plus}</td><td>${ltB[0].goals_minus}</td><td>${ltB[0].points}</td>
                        </tr>
                        <tr>
                        <td>2</td><td>${ltB[1].name}</td><td>${ltB[1].match}</td><td>${ltB[1].win}</td><td>${ltB[1].draw}</td><td>${ltB[1].lose}</td><td>${ltB[1].goals_plus}</td><td>${ltB[1].goals_minus}</td><td>${ltB[1].points}</td>
                        </tr>
                        <tr>
                         <td>3</td><td>${ltB[2].name}</td><td>${ltB[2].match}</td><td>${ltB[2].win}</td><td>${ltB[2].draw}</td><td>${ltB[2].lose}</td><td>${ltB[2].goals_plus}</td><td>${ltB[2].goals_minus}</td><td>${ltB[2].points}</td>
                        </tr>
                        <tr>
                        <td>4</td><td>${ltB[3].name}</td><td>${ltB[3].match}</td><td>${ltB[3].win}</td><td>${ltB[3].draw}</td><td>${ltB[3].lose}</td><td>${ltB[3].goals_plus}</td><td>${ltB[3].goals_minus}</td><td>${ltB[3].points}</td>
                        </tr>
          </table> 
          <table>
                        <tr>
                            <th colspan="9" class="group">GROUP C</th>
                        </tr>
                        <tr>
                            <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                        </tr>
                        <tr>  
                        <td>1</td><td>${ltC[0].name}</td><td>${ltC[0].match}</td><td>${ltC[0].win}</td><td>${ltC[0].draw}</td><td>${ltC[0].lose}</td><td>${ltC[0].goals_plus}</td><td>${ltC[0].goals_minus}</td><td>${ltC[0].points}</td>
                        </tr>
                        <tr>
                        <td>2</td><td>${ltC[1].name}</td><td>${ltC[1].match}</td><td>${ltC[1].win}</td><td>${ltC[1].draw}</td><td>${ltC[1].lose}</td><td>${ltC[1].goals_plus}</td><td>${ltC[1].goals_minus}</td><td>${ltC[1].points}</td>
                        </tr>
                        <tr>
                         <td>3</td><td>${ltC[2].name}</td><td>${ltC[2].match}</td><td>${ltC[2].win}</td><td>${ltC[2].draw}</td><td>${ltC[2].lose}</td><td>${ltC[2].goals_plus}</td><td>${ltC[2].goals_minus}</td><td>${ltC[2].points}</td>
                        </tr>
                        <tr>
                        <td>4</td><td>${ltC[3].name}</td><td>${ltC[3].match}</td><td>${ltC[3].win}</td><td>${ltC[3].draw}</td><td>${ltC[3].lose}</td><td>${ltC[3].goals_plus}</td><td>${ltC[3].goals_minus}</td><td>${ltC[3].points}</td>
                        </tr>
          </table> 
          <table>
                        <tr>
                            <th colspan="9" class="group">GROUP D</th>
                        </tr>
                        <tr>
                            <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Goals+</td><td>Goals-</td><td>Points</td>
                        </tr>
                        <tr>  
                        <td>1</td><td>${ltD[0].name}</td><td>${ltD[0].match}</td><td>${ltD[0].win}</td><td>${ltD[0].draw}</td><td>${ltD[0].lose}</td><td>${ltD[0].goals_plus}</td><td>${ltD[0].goals_minus}</td><td>${ltD[0].points}</td>
                        </tr>
                        <tr>
                        <td>2</td><td>${ltD[1].name}</td><td>${ltD[1].match}</td><td>${ltD[1].win}</td><td>${ltD[1].draw}</td><td>${ltD[1].lose}</td><td>${ltD[1].goals_plus}</td><td>${ltD[1].goals_minus}</td><td>${ltD[1].points}</td>
                        </tr>
                        <tr>
                         <td>3</td><td>${ltD[2].name}</td><td>${ltD[2].match}</td><td>${ltD[2].win}</td><td>${ltD[2].draw}</td><td>${ltD[2].lose}</td><td>${ltD[2].goals_plus}</td><td>${ltD[2].goals_minus}</td><td>${ltD[2].points}</td>
                        </tr>
                        <tr>
                        <td>4</td><td>${ltD[3].name}</td><td>${ltD[3].match}</td><td>${ltD[3].win}</td><td>${ltD[3].draw}</td><td>${ltD[3].lose}</td><td>${ltD[3].goals_plus}</td><td>${ltD[3].goals_minus}</td><td>${ltD[3].points}</td>
                        </tr>
          </table>   `
    }
    }

}

}

function play2(host,guest, m_id,r_id) {

  console.log("pokazanie nazw w play");
  console.log(host.name + host.a + host.p + host.o);
  let match_tr = document.getElementById(m_id);
  
  console.log(m_id);
  
  let hc = 0.01;
  let point = 0;
  
  
  let h_a = host.att + (host.att * hc) + Math.floor(Math.random() * 10);
  let h_tw = host.tw + (host.tw * hc) + Math.floor(Math.random() * 10);
  let h_d = host.def + (host.def * hc) + Math.floor(Math.random() * 10);
  let g_a = guest.att + Math.floor(Math.random() * 10);
  let g_tw = guest.tw + Math.floor(Math.random() * 10);
  let g_d = guest.def + Math.floor(Math.random() * 10);
  let shot = (h_a + h_tw) / 4;
  let saves = (g_tw + g_d) / 10;
  let score1 = Math.floor(shot - saves) + Math.floor(Math.random() * 2);
  let shot2 = (g_a + g_tw) / 4;
  let saves2 = (h_tw + h_d) / 10;
  let score2 = Math.floor(shot2 - saves2) + Math.floor(Math.random() * 2);
  
  if (score1 < 0) { score1 = 0 + Math.floor(Math.random() * 2) };
  if (score2 < 0) { score2 = 0 + Math.floor(Math.random() * 2) };
  
  
  let rew_host = host.finals[0]+ score1;
  let rew_guest = guest.finals[0]+ score2;
  let host_pen = 0;
  let guest_pen = 0;
  if(rew_host == rew_guest){
      for(let i = 0; i<10; i++){
          let pen = Math.floor(Math.random()*10)
          if(i%2==0 && pen>2){
              host_pen++
          }if(i%2!=0 && pen>2){
              guest_pen++
          }
      }
      if(host_pen == guest_pen){
          host_pen++;
      }
      console.log("Karne : ");
      console.log(host_pen);
      console.log(guest_pen);
      host.finals.push(score1 + host_pen);
      guest.finals.push(score2 + guest_pen);
  }
  else{
      host.finals.push(score1);
      guest.finals.push(score2);
  }




      m_id.innerHTML = `
      <td class="host">${host.name}</td>
      <td class="guest">${guest.name}</td>
      <td class="host host_score">${score1}</td>
     <td class="guest guest_score">${score2}</td>
      `


let ahp; //do wypisania wyniku karnych
let agp;
  if(r_id){

      if(r_id = 're'){
          if(host_pen>0 && guest_pen>0){
              ahp = `(k.${host_pen})`
              agp = `(k.${guest_pen})`
          }
          else{
              ahp = ``;
              agp= ``;
          }
          m_id.innerHTML = `
          <td class="host">${host.name}</td>
          <td class="guest">${guest.name}</td>
          <td class="host host_score">${score1} ${ahp}<br>(${rew_host})</td>
         <td class="guest guest_score">${score2} ${agp}<br>(${rew_guest})</td>
          `
          console.log(score1 + ' ' + host.finals[0])
          console.log(score2 + ' ' + guest.finals[0])
      }
      else{
          r_id.innerHTML = `
                 
          `;
      }
      
  }
  }

  let six_teamsA = [];
  let six_teamsB = [];
  let six_teamsC = [];
  let six_teamsD = [];
  let six_teamsE = [];
  let six_teamsF = [];
  let six_teamsG = [];
  let six_teamsH = [];
function sixteen(){
  
  for(i=0;i<teamsA.length;i++){
      six_teamsA.push({
        name: teamsA[i].name,
        att: teamsA[i].att,
        tw: teamsA[i].tw,
        def: teamsA[i].def,
        match: teamsA[i].points.length,
        win: teamsA[i].win.length,
        draw: teamsA[i].draw.length,
        lose: teamsA[i].lose.length,
        goals_plus: teamsA[i].goal_plus_sum,
        goals_minus: teamsA[i].goal_minus_sum,
        points: teamsA[i].points_sum,
        finals: []
      }
      )
    }
    for(i=0;i<teamsB.length;i++){
      six_teamsB.push({
        name: teamsB[i].name,
        att: teamsB[i].att,
        tw: teamsB[i].tw,
        def: teamsB[i].def,
        match: teamsB[i].points.length,
        win: teamsB[i].win.length,
        draw: teamsB[i].draw.length,
        lose: teamsB[i].lose.length,
        goals_plus: teamsB[i].goal_plus_sum,
        goals_minus: teamsB[i].goal_minus_sum,
        points: teamsB[i].points_sum,
        finals: []
      }
      )
    }
    for(i=0;i<teamsC.length;i++){
      six_teamsC.push({
        name: teamsC[i].name,
        att: teamsC[i].att,
        tw: teamsC[i].tw,
        def: teamsC[i].def,
        match: teamsC[i].points.length,
        win: teamsC[i].win.length,
        draw: teamsC[i].draw.length,
        lose: teamsC[i].lose.length,
        goals_plus: teamsC[i].goal_plus_sum,
        goals_minus: teamsC[i].goal_minus_sum,
        points: teamsC[i].points_sum,
        finals: []
      }
      )
    }
    for(i=0;i<teamsD.length;i++){
      six_teamsD.push({
        name: teamsD[i].name,
        att: teamsD[i].att,
        tw: teamsD[i].tw,
        def: teamsD[i].def,
        match: teamsD[i].points.length,
        win: teamsD[i].win.length,
        draw: teamsD[i].draw.length,
        lose: teamsD[i].lose.length,
        goals_plus: teamsD[i].goal_plus_sum,
        goals_minus: teamsD[i].goal_minus_sum,
        points: teamsD[i].points_sum,
        finals: []
      }
      )
    }
    for(i=0;i<teamsE.length;i++){
      six_teamsE.push({
        name: teamsE[i].name,
        att: teamsE[i].att,
        tw: teamsE[i].tw,
        def: teamsE[i].def,
        match: teamsE[i].points.length,
        win: teamsE[i].win.length,
        draw: teamsE[i].draw.length,
        lose: teamsE[i].lose.length,
        goals_plus: teamsE[i].goal_plus_sum,
        goals_minus: teamsE[i].goal_minus_sum,
        points: teamsE[i].points_sum,
        finals: []
      }
      )
    }
    for(i=0;i<teamsF.length;i++){
      six_teamsF.push({
        name: teamsF[i].name,
        att: teamsF[i].att,
        tw: teamsF[i].tw,
        def: teamsF[i].def,
        match: teamsF[i].points.length,
        win: teamsF[i].win.length,
        draw: teamsF[i].draw.length,
        lose: teamsF[i].lose.length,
        goals_plus: teamsF[i].goal_plus_sum,
        goals_minus: teamsF[i].goal_minus_sum,
        points: teamsF[i].points_sum,
        finals: []
      }
      )
    }
    for(i=0;i<teamsG.length;i++){
      six_teamsG.push({
        name: teamsG[i].name,
        att: teamsG[i].att,
        tw: teamsG[i].tw,
        def: teamsG[i].def,
        match: teamsG[i].points.length,
        win: teamsG[i].win.length,
        draw: teamsG[i].draw.length,
        lose: teamsG[i].lose.length,
        goals_plus: teamsG[i].goal_plus_sum,
        goals_minus: teamsG[i].goal_minus_sum,
        points: teamsG[i].points_sum,
        finals: []
      }
      )
    }
    for(i=0;i<teamsH.length;i++){
      six_teamsH.push({
        name: teamsH[i].name,
        att: teamsH[i].att,
        tw: teamsH[i].tw,
        def: teamsH[i].def,
        match: teamsH[i].points.length,
        win: teamsH[i].win.length,
        draw: teamsH[i].draw.length,
        lose: teamsH[i].lose.length,
        goals_plus: teamsH[i].goal_plus_sum,
        goals_minus: teamsH[i].goal_minus_sum,
        points: teamsH[i].points_sum,
        finals: []
      }
      )
    }
    
    let ft1 = six_teamsA.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))//live table
    let ft2 = six_teamsB.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft3 = six_teamsC.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft4 = six_teamsD.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft5 = six_teamsE.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft6 = six_teamsF.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft7 = six_teamsG.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft8 = six_teamsH.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))

    schedule.innerHTML = `<tr>
    <th colspan="4">1/16 Final 1</th>
</tr>

<tr id="sx1m1">
    <td id="host">${six_teamsB[1].name}</td>
    <td id="guest">${six_teamsA[0].name}</td>
    <td colspan="2"><button onclick="play2(six_teamsB[1],six_teamsA[0],sx1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx1m2">
    <td>${six_teamsD[1].name}</td>
    <td>${six_teamsC[0].name}</td>
    <td colspan="2"><button onclick="play2(six_teamsD[1],six_teamsC[0],sx1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="sx1m3">
    <td id="host">${six_teamsF[1].name}</td>
    <td id="guest">${six_teamsE[0].name}</td>
    <td colspan="2"><button onclick="play2(six_teamsF[1],six_teamsE[0],sx1m3)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx1m4">
    <td>${six_teamsH[1].name}</td>
    <td>${six_teamsG[0].name}</td>
    <td colspan="2"><button onclick="play2(six_teamsH[1],six_teamsG[0],sx1m4)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="sx1m5">
<td id="host">${six_teamsA[1].name}</td>
<td id="guest">${six_teamsB[0].name}</td>
<td colspan="2"><button onclick="play2(six_teamsA[1],six_teamsB[0],sx1m5)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx1m6">
<td>${six_teamsC[1].name}</td>
<td>${six_teamsD[0].name}</td>
<td colspan="2"><button onclick="play2(six_teamsC[1],six_teamsD[0],sx1m6)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="sx1m7">
<td id="host">${six_teamsE[1].name}</td>
<td id="guest">${six_teamsF[0].name}</td>
<td colspan="2"><button onclick="play2(six_teamsE[1],six_teamsF[0],sx1m7)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx1m8">
<td>${six_teamsG[1].name}</td>
<td>${six_teamsH[0].name}</td>
<td colspan="2"><button onclick="play2(six_teamsG[1],six_teamsH[0],sx1m8)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
<th colspan="4">1/16 Final 2</th>
</tr>
<tr id="re"><td colspan="4"></td></tr>
<tr id="sx2m1">
<td id="host">${six_teamsA[0].name}</td>
<td id="guest">${six_teamsB[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsA[0],six_teamsB[1],sx2m1,re)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx2m2">
<td>${six_teamsC[0].name}</td>
<td>${six_teamsD[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsC[0],six_teamsD[1],sx2m2,re)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="sx2m3">
<td id="host">${six_teamsE[0].name}</td>
<td id="guest">${six_teamsF[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsE[0],six_teamsF[1],sx2m3,re)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx2m4">
<td>${six_teamsG[0].name}</td>
<td>${six_teamsH[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsG[0],six_teamsH[1],sx2m4,re)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="sx2m5">
<td id="host">${six_teamsB[0].name}</td>
<td id="guest">${six_teamsA[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsB[0],six_teamsA[1],sx2m5,re)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx2m6">
<td>${six_teamsD[0].name}</td>
<td>${six_teamsC[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsD[0],six_teamsC[1],sx2m6,re)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="sx2m7">
<td id="host">${six_teamsF[0].name}</td>
<td id="guest">${six_teamsE[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsF[0],six_teamsE[1],sx2m7,re)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="sx2m8">
<td>${six_teamsH[0].name}</td>
<td>${six_teamsG[1].name}</td>
<td colspan="2"><button onclick="play2(six_teamsH[0],six_teamsG[1],sx2m8,re)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr> 
<tr><td colspan="4">
<button onclick="eight()" class="play_button btn_effect">1/4 FINAL</button> </td>
</tr> `
}

let team_q1 = [];
let team_q2 = [];
let team_q3 = [];
let team_q4 = [];
let team_q5 = [];
let team_q6 = [];
let team_q7 = [];
let team_q8 = [];
function eight(){
  if(teams_cup.length<17){
      for(i=0;i<teamsA.length;i++){
          six_teamsA.push({
            name: teamsA[i].name,
            att: teamsA[i].att,
            tw: teamsA[i].tw,
            def: teamsA[i].def,
            match: teamsA[i].points.length,
            win: teamsA[i].win.length,
            draw: teamsA[i].draw.length,
            lose: teamsA[i].lose.length,
            goals_plus: teamsA[i].goal_plus_sum,
            goals_minus: teamsA[i].goal_minus_sum,
            points: teamsA[i].points_sum,
            finals: []
          }
          )
        }
        for(i=0;i<teamsB.length;i++){
          six_teamsB.push({
            name: teamsB[i].name,
            att: teamsB[i].att,
            tw: teamsB[i].tw,
            def: teamsB[i].def,
            match: teamsB[i].points.length,
            win: teamsB[i].win.length,
            draw: teamsB[i].draw.length,
            lose: teamsB[i].lose.length,
            goals_plus: teamsB[i].goal_plus_sum,
            goals_minus: teamsB[i].goal_minus_sum,
            points: teamsB[i].points_sum,
            finals: []
          }
          )
        }
        for(i=0;i<teamsC.length;i++){
          six_teamsC.push({
            name: teamsC[i].name,
            att: teamsC[i].att,
            tw: teamsC[i].tw,
            def: teamsC[i].def,
            match: teamsC[i].points.length,
            win: teamsC[i].win.length,
            draw: teamsC[i].draw.length,
            lose: teamsC[i].lose.length,
            goals_plus: teamsC[i].goal_plus_sum,
            goals_minus: teamsC[i].goal_minus_sum,
            points: teamsC[i].points_sum,
            finals: []
          }
          )
        }
        for(i=0;i<teamsD.length;i++){
          six_teamsD.push({
            name: teamsD[i].name,
            att: teamsD[i].att,
            tw: teamsD[i].tw,
            def: teamsD[i].def,
            match: teamsD[i].points.length,
            win: teamsD[i].win.length,
            draw: teamsD[i].draw.length,
            lose: teamsD[i].lose.length,
            goals_plus: teamsD[i].goal_plus_sum,
            goals_minus: teamsD[i].goal_minus_sum,
            points: teamsD[i].points_sum,
            finals: []
          }
          )
        }

    let ft1 = six_teamsA.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))//live table
    let ft2 = six_teamsB.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft3 = six_teamsC.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
    let ft4 = six_teamsD.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus) || (a.goals_minus) - (b.goals_minus)))
   
 //push teams to quarter
      team_q1.push({
        name: six_teamsA[0].name,
        att: six_teamsA[0].att,
        tw: six_teamsA[0].tw,
        def: six_teamsA[0].def,
        finals: []
      })
      team_q2.push({
          name: six_teamsB[1].name,
          att: six_teamsB[1].att,
          tw: six_teamsB[1].tw,
          def: six_teamsB[1].def,
          finals: []
        })
        team_q3.push({
          name: six_teamsC[0].name,
          att: six_teamsC[0].att,
          tw: six_teamsC[0].tw,
          def: six_teamsC[0].def,
          finals: []
        })
        team_q4.push({
            name: six_teamsD[1].name,
            att: six_teamsD[1].att,
            tw: six_teamsD[1].tw,
            def: six_teamsD[1].def,
            finals: []
          })
          team_q5.push({
              name: six_teamsA[1].name,
              att: six_teamsA[1].att,
              tw: six_teamsA[1].tw,
              def: six_teamsA[1].def,
              finals: []
            })
            team_q6.push({
                name: six_teamsB[0].name,
                att: six_teamsB[0].att,
                tw: six_teamsB[0].tw,
                def: six_teamsB[0].def,
                finals: []
              })
              team_q7.push({
                name: six_teamsC[1].name,
                att: six_teamsC[1].att,
                tw: six_teamsC[1].tw,
                def: six_teamsC[1].def,
                finals: []
              })
              team_q8.push({
                  name: six_teamsD[0].name,
                  att: six_teamsD[0].att,
                  tw: six_teamsD[0].tw,
                  def: six_teamsD[0].def,
                  finals: []
                })

  }

  if(teams_cup.length>25){
  const sx1t1 = six_teamsA[0].finals[0] + six_teamsA[0].finals[1];
  const sx1t2 = six_teamsB[1].finals[0] + six_teamsB[1].finals[1];
  const sx2t1 = six_teamsC[0].finals[0] + six_teamsC[0].finals[1];
  const sx2t2 = six_teamsD[1].finals[0] + six_teamsD[1].finals[1];
  const sx3t1 = six_teamsE[0].finals[0] + six_teamsE[0].finals[1];
  const sx3t2 = six_teamsF[1].finals[0] + six_teamsF[1].finals[1];
  const sx4t1 = six_teamsG[0].finals[0] + six_teamsG[0].finals[1];
  const sx4t2 = six_teamsH[1].finals[0] + six_teamsH[1].finals[1];

  const sx5t1 = six_teamsA[1].finals[0] + six_teamsA[1].finals[1];
  const sx5t2 = six_teamsB[0].finals[0] + six_teamsB[0].finals[1];
  const sx6t1 = six_teamsC[1].finals[0] + six_teamsC[1].finals[1];
  const sx6t2 = six_teamsD[0].finals[0] + six_teamsD[0].finals[1];
  const sx7t1 = six_teamsE[1].finals[0] + six_teamsE[1].finals[1];
  const sx7t2 = six_teamsF[0].finals[0] + six_teamsF[0].finals[1];
  const sx8t1 = six_teamsG[1].finals[0] + six_teamsG[1].finals[1];
  const sx8t2 = six_teamsH[0].finals[0] + six_teamsH[0].finals[1];

  if(sx1t1>sx1t2){
      team_q1.push({
      name: six_teamsA[0].name,
      att: six_teamsA[0].att,
      tw: six_teamsA[0].tw,
      def: six_teamsA[0].def,
      finals: []
    })
    }else if(sx1t1<sx1t2){
      team_q1.push({
          name: six_teamsB[1].name,
          att: six_teamsB[1].att,
          tw: six_teamsB[1].tw,
          def: six_teamsB[1].def,
          finals: []
    })
    }
    if(sx2t1>sx2t2){
      team_q2.push({
      name: six_teamsC[0].name,
      att: six_teamsC[0].att,
      tw: six_teamsC[0].tw,
      def: six_teamsC[0].def,
      finals: []
    })
    }else if(sx2t1<sx2t2){
      team_q2.push({
          name: six_teamsD[1].name,
          att: six_teamsD[1].att,
          tw: six_teamsD[1].tw,
          def: six_teamsD[1].def,
          finals: []
    })
    }
    if(sx3t1>sx3t2){
      team_q3.push({
      name: six_teamsE[0].name,
      att: six_teamsE[0].att,
      tw: six_teamsE[0].tw,
      def: six_teamsE[0].def,
      finals: []
    })
    }else if(sx3t1<sx3t2){
      team_q3.push({
          name: six_teamsF[1].name,
          att: six_teamsF[1].att,
          tw: six_teamsF[1].tw,
          def: six_teamsF[1].def,
          finals: []
    })
    }
    if(sx4t1>sx4t2){
      team_q4.push({
      name: six_teamsG[0].name,
      att: six_teamsG[0].att,
      tw: six_teamsG[0].tw,
      def: six_teamsG[0].def,
      finals: []
    })
    }else if(sx4t1<sx4t2){
      team_q4.push({
          name: six_teamsH[1].name,
          att: six_teamsH[1].att,
          tw: six_teamsH[1].tw,
          def: six_teamsH[1].def,
          finals: []
    })
    }
    if(sx5t1>sx5t2){
      team_q5.push({
      name: six_teamsA[1].name,
      att: six_teamsA[1].att,
      tw: six_teamsA[1].tw,
      def: six_teamsA[1].def,
      finals: []
    })
    }else if(sx5t1<sx5t2){
      team_q5.push({
          name: six_teamsB[0].name,
          att: six_teamsB[0].att,
          tw: six_teamsB[0].tw,
          def: six_teamsB[0].def,
          finals: []
    })
    }
    if(sx6t1>sx6t2){
      team_q6.push({
      name: six_teamsC[1].name,
      att: six_teamsC[1].att,
      tw: six_teamsC[1].tw,
      def: six_teamsC[1].def,
      finals: []
    })
    }else if(sx6t1<sx6t2){
      team_q6.push({
          name: six_teamsD[0].name,
          att: six_teamsD[0].att,
          tw: six_teamsD[0].tw,
          def: six_teamsD[0].def,
          finals: []
    })
    }
    if(sx7t1>sx7t2){
      team_q7.push({
      name: six_teamsE[1].name,
      att: six_teamsE[1].att,
      tw: six_teamsE[1].tw,
      def: six_teamsE[1].def,
      finals: []
    })
    }else if(sx7t1<sx7t2){
      team_q7.push({
          name: six_teamsF[0].name,
          att: six_teamsF[0].att,
          tw: six_teamsF[0].tw,
          def: six_teamsF[0].def,
          finals: []
    })
    }
    if(sx8t1>sx8t2){
      team_q8.push({
      name: six_teamsG[1].name,
      att: six_teamsG[1].att,
      tw: six_teamsG[1].tw,
      def: six_teamsG[1].def,
      finals: []
    })
    }else if(sx8t1<sx8t2){
      team_q8.push({
          name: six_teamsH[0].name,
          att: six_teamsH[0].att,
          tw: six_teamsH[0].tw,
          def: six_teamsH[0].def,
          finals: []
    })
    }
  }
    schedule.innerHTML = `<tr>
          <th colspan="4">1/4 Final 1</th>
      </tr>

      <tr id="q1m1">
          <td id="host">${team_q1[0].name}</td>
          <td id="guest">${team_q2[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q1[0],team_q2[0],q1m1)" class="play_button btn_effect">Play</button></td> 
      </tr>
      <tr id="q1m2">
      <td id="host">${team_q3[0].name}</td>
      <td id="guest">${team_q4[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q3[0],team_q4[0],q1m2)" class="play_button btn_effect">Play</button></td>
      </tr>
      <tr id="q1m3">
      <td id="host">${team_q5[0].name}</td>
      <td id="guest">${team_q6[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q5[0],team_q6[0],q1m3)" class="play_button btn_effect">Play</button></td> 
      </tr>
      <tr id="q1m4">
      <td id="host">${team_q7[0].name}</td>
      <td id="guest">${team_q8[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q7[0],team_q8[0],q1m4)" class="play_button btn_effect">Play</button></td>
      </tr>
      <tr>
          <th colspan="4" class="end_round">X</th>
      </tr>
      <tr>
          <th colspan="4">1/4 Final 2</th>
      </tr>

      <tr id="re"><td colspan="4"></td></tr>
     
      <tr id="q2m1">
          <td id="host">${team_q2[0].name}</td>
          <td id="guest">${team_q1[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q2[0],team_q1[0],q2m1,re)" class="play_button btn_effect">Play</button></td> 
      </tr>
      <tr id="q2m2">
      <td id="host">${team_q4[0].name}</td>
      <td id="guest">${team_q3[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q4[0],team_q3[0],q2m2,re)" class="play_button btn_effect">Play</button></td>
      </tr>
      <tr id="q2m3">
      <td id="host">${team_q6[0].name}</td>
      <td id="guest">${team_q5[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q6[0],team_q5[0],q2m3,re)" class="play_button btn_effect">Play</button></td> 
      </tr>
      <tr id="q2m4">
      <td id="host">${team_q8[0].name}</td>
      <td id="guest">${team_q7[0].name}</td>
          <td colspan="2"><button onclick="play2(team_q8[0],team_q7[0],q2m4,re)" class="play_button btn_effect">Play</button></td>
      </tr>
      <tr>
          <th colspan="4" class="end_round">X</th>
      </tr>
      <tr><td colspan="4">
          <button onclick="semi()" class="play_button btn_effect">1/2 FINAL</button> </td>
            </tr> `

}

let final_teams = [];
function quarter(){
    console.log('Play Off: ')
    console.log(teams);

    final_teams = [];
    for(i=0;i<teams.length;i++){
  final_teams.push({
    name: teams[i].name,
    att: teams[i].att,
    def: teams[i].def,
    tw: teams[i].tw,
    match: teams[i].points.length,
    win: teams[i].win.length,
    draw: teams[i].draw.length,
    lose: teams[i].lose.length,
    goals_plus: teams[i].goal_plus_sum,
    goals_minus: teams[i].goal_minus_sum,
    points: teams[i].points_sum,
    finals: []
  }
  )
}

let ft = final_teams.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus)))//live table


console.log('Semi 1: ' + ft[0].name + " : " + ft[3].name);
console.log('Semi 2: ' + ft[1].name + " : " + ft[2].name);

    schedule.innerHTML = `<tr>
            <th colspan="4">Quarter Final 1</th>
        </tr>

        <tr id="q1m1">
            <td id="host">${final_teams[7].name}</td>
            <td id="guest">${final_teams[0].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[7],final_teams[0],q1m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="q1m2">
            <td>${final_teams[6].name}</td>
            <td>${final_teams[1].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[6],final_teams[1],q1m2)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr id="q1m3">
            <td id="host">${final_teams[5].name}</td>
            <td id="guest">${final_teams[2].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[5],final_teams[2],q1m3)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="q1m4">
            <td>${final_teams[4].name}</td>
            <td>${final_teams[3].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[4],final_teams[3],q1m4)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr>
            <th colspan="4">Quarter Final 2</th>
        </tr>

        <tr id="q2m1">
            <td id="host">${final_teams[0].name}</td>
            <td id="guest">${final_teams[7].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[0],final_teams[7],q2m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="q2m2">
            <td>${final_teams[1].name}</td>
            <td>${final_teams[6].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[1],final_teams[6],q2m2)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr id="q2m3">
            <td id="host">${final_teams[2].name}</td>
            <td id="guest">${final_teams[5].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[2],final_teams[5],q2m3)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="q2m4">
            <td>${final_teams[3].name}</td>
            <td>${final_teams[4].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[3],final_teams[4],q2m4)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr><td colspan="4">
            <button onclick="semi()" class="play_button btn_effect">1/2 FINAL</button> </td>
              </tr> `

}

let team_s1 = [];
let team_s2 = [];
let team_s3 = [];
let team_s4 = [];
let team_s1l = [];
let team_s2l = [];
let team_s3l = [];
let team_s4l = [];
function semi(){
    //console.log('Play Off: ')
    //console.log(teams);
    if(teams.length<1 && teams_cup.length>4){
      //Q1
      const q1t1 = team_q1[0].finals[0]+team_q1[0].finals[1];
      const q1t2 = team_q2[0].finals[0]+team_q2[0].finals[1];
      //Q2
      const q2t1 = team_q3[0].finals[0]+team_q3[0].finals[1];
      const q2t2 = team_q4[0].finals[0]+team_q4[0].finals[1];
      //Q3
      const q3t1 = team_q5[0].finals[0]+team_q5[0].finals[1];
      const q3t2 = team_q6[0].finals[0]+team_q6[0].finals[1];
      //Q4
      const q4t1 = team_q7[0].finals[0]+team_q7[0].finals[1];
      const q4t2 = team_q8[0].finals[0]+team_q8[0].finals[1];

          //Q1
if(q1t1>=q1t2){
team_s1.push({
name: team_q1[0].name,
att: team_q1[0].att,
tw: team_q1[0].tw,
def: team_q1[0].def,
finals: []
})
}else if(q1t1<q1t2){
team_s1.push({
name: team_q2[0].name,
att: team_q2[0].att,
tw: team_q2[0].tw,
def: team_q2[0].def,
finals: []
})
}
//Q2
if(q2t1>=q2t2){
team_s2.push({
name: team_q3[0].name,
att: team_q3[0].att,
tw: team_q3[0].tw,
def: team_q3[0].def,
finals: []
})
}else if(q2t1<q2t2){
team_s2.push({
name: team_q4[0].name,
att: team_q4[0].att,
tw: team_q4[0].tw,
def: team_q4[0].def,
finals: []
})
}
//Q3
if(q3t1>=q3t2){
team_s3.push({
name: team_q5[0].name,
att: team_q5[0].att,
tw: team_q5[0].tw,
def: team_q5[0].def,
finals: []
})
}else if(q3t1<q3t2){
team_s3.push({
name: team_q6[0].name,
att: team_q6[0].att,
tw: team_q6[0].tw,
def: team_q6[0].def,
finals: []
})
}
//Q4
if(q4t1>=q4t2){
team_s4.push({
name: team_q7[0].name,
att: team_q7[0].att,
tw: team_q7[0].tw,
def: team_q7[0].def,
finals: []
})
}else if(q4t1<q4t2){
team_s4.push({
name: team_q8[0].name,
att: team_q8[0].att,
tw: team_q8[0].tw,
def: team_q8[0].def,
finals: []
})
}

schedule.innerHTML = `<tr>
  <th colspan="4">Semi Final 1</th>
</tr>

<tr id="s1m1">
  <td id="host">${team_s4[0].name}</td>
  <td id="guest">${team_s1[0].name}</td>
  <td colspan="2"><button onclick="play2(team_s4[0],team_s1[0],s1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="s1m2">
  <td>${team_s3[0].name}</td>
  <td>${team_s2[0].name}</td>
  <td colspan="2"><button onclick="play2(team_s3[0],team_s2[0],s1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
  <th colspan="4" class="end_round">X</th>
</tr>
<tr>
  <th colspan="4">Semi Final 2</th>
</tr>
<tr id="re"><td colspan="4"></td></tr>
<tr id="s2m1">
  <td id="host">${team_s1[0].name}</td>
  <td id="guest">${team_s4[0].name}</td>
  <td colspan="2"><button onclick="play2(team_s1[0],team_s4[0],s2m1,re)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="s2m2">
  <td>${team_s2[0].name}</td>
  <td>${team_s3[0].name}</td>
  <td colspan="2"><button onclick="play2(team_s2[0],team_s3[0],s2m2,re)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
  <th colspan="4" class="end_round">X</th>
</tr>
<tr><td colspan="4">
  <button onclick="final()" class="play_button btn_effect">Finals</button> </td>
    </tr> `
}

if(teams.length>13){

        //Q1
        const q1t1 = final_teams[0].finals[0]+final_teams[0].finals[1];
        const q1t2 = final_teams[7].finals[0]+final_teams[7].finals[1];
        //Q2
        const q2t1 = final_teams[1].finals[0]+final_teams[1].finals[1];
        const q2t2 = final_teams[6].finals[0]+final_teams[6].finals[1];
        //Q3
        const q3t1 = final_teams[2].finals[0]+final_teams[2].finals[1];
        const q3t2 = final_teams[5].finals[0]+final_teams[5].finals[1];
        //Q4
        const q4t1 = final_teams[3].finals[0]+final_teams[3].finals[1];
        const q4t2 = final_teams[4].finals[0]+final_teams[4].finals[1];



    //Q1
    if(q1t1>=q1t2){
    team_s1.push({
    name: final_teams[0].name,
    att: final_teams[0].att,
    def: final_teams[0].def,
    tw: final_teams[0].tw,
    finals: []
  })
  team_s1l.push({
    name: final_teams[7].name,
    att: final_teams[7].att,
    def: final_teams[7].def,
    tw: final_teams[7].tw,
    finals: []
  })
  }else if(q1t1<q1t2){
    team_s1.push({
    name: final_teams[7].name,
    att: final_teams[7].att,
    def: final_teams[7].def,
    tw: final_teams[7].tw,
    finals: []
  })
  team_s1l.push({
    name: final_teams[0].name,
    att: final_teams[0].att,
    def: final_teams[0].def,
    tw: final_teams[0].tw,
    finals: []
  })
  }
   //Q2
   if(q2t1>=q2t2){
    team_s2.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    tw: final_teams[1].tw,
    finals: []
  })
  team_s2l.push({
    name: final_teams[6].name,
    att: final_teams[6].att,
    def: final_teams[6].def,
    tw: final_teams[6].tw,
    finals: []
  })
  }else if(q2t1<q2t2){
    team_s2.push({
    name: final_teams[6].name,
    att: final_teams[6].att,
    def: final_teams[6].def,
    tw: final_teams[6].tw,
    finals: []
  })
  team_s2l.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    tw: final_teams[1].tw,
    finals: []
  })
  }
   //Q3
   if(q3t1>=q3t2){
    team_s3.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    tw: final_teams[2].tw,
    finals: []
  })
  team_s3l.push({
    name: final_teams[5].name,
    att: final_teams[5].att,
    def: final_teams[5].def,
    tw: final_teams[5].tw,
    finals: []
  })
  }else if(q3t1<q3t2){
    team_s3.push({
    name: final_teams[5].name,
    att: final_teams[5].att,
    def: final_teams[5].def,
    tw: final_teams[5].tw,
    finals: []
  })
  team_s3l.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    tw: final_teams[2].tw,
    finals: []
  })
  }
   //Q4
   if(q4t1>=q4t2){
    team_s4.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    tw: final_teams[3].tw,
    finals: []
  })
  team_s4l.push({
    name: final_teams[4].name,
    att: final_teams[4].att,
    def: final_teams[4].def,
    tw: final_teams[4].tw,
    finals: []
  })
  }else if(q4t1<q4t2){
    team_s4.push({
    name: final_teams[4].name,
    att: final_teams[4].att,
    def: final_teams[4].def,
    tw: final_teams[4].tw,
    finals: []
  })
  team_s4l.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    tw: final_teams[3].tw,
    finals: []
  })
  }

  //schedule
  schedule.innerHTML = `<tr>
            <th colspan="4">Semi Final 1</th>
        </tr>

        <tr id="s1m1">
            <td id="host">${team_s4[0].name}</td>
            <td id="guest">${team_s1[0].name}</td>
            <td colspan="2"><button onclick="play2(team_s4[0],team_s1[0],s1m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="s1m2">
            <td>${team_s3[0].name}</td>
            <td>${team_s2[0].name}</td>
            <td colspan="2"><button onclick="play2(team_s3[0],team_s2[0],s1m2)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr>
            <th colspan="4">Semi Final 2</th>
        </tr>
        <td id="re"><td colspan="4"></td></td>
        <tr id="s2m1">
            <td id="host">${team_s1[0].name}</td>
            <td id="guest">${team_s4[0].name}</td>
            <td colspan="2"><button onclick="play2(team_s1[0],team_s4[0],s2m1,re)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="s2m2">
            <td>${team_s2[0].name}</td>
            <td>${team_s3[0].name}</td>
            <td colspan="2"><button onclick="play2(team_s2[0],team_s3[0],s2m2,re)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr><td colspan="4">
            <button onclick="final()" class="play_button btn_effect">Finals</button> </td>
              </tr> `

}

if(teams.length<13 && teams.length>2){
    final_teams = [];
    for(i=0;i<teams.length;i++){
  final_teams.push({
    name: teams[i].name,
    att: teams[i].att,
    def: teams[i].def,
    tw: teams[i].tw,
    match: teams[i].points.length,
    win: teams[i].win.length,
    draw: teams[i].draw.length,
    lose: teams[i].lose.length,
    goals_plus: teams[i].goal_plus_sum,
    goals_minus: teams[i].goal_minus_sum,
    points: teams[i].points_sum,
    finals: []
  }
  )
}

let ft = final_teams.sort((a,b)=> ((b.points) - (a.points) || (b.goals_plus) - (a.goals_plus)))//live table

// console.log("Finaly: ")
// console.log(ft);

// console.log('Semi 1: ' + ft[0].name + " : " + ft[3].name);
// console.log('Semi 2: ' + ft[1].name + " : " + ft[2].name);

    schedule.innerHTML = `<tr>
            <th colspan="4">Semi Final 1</th>
        </tr>
      
        <tr id="s1m1">
            <td id="host">${final_teams[3].name}</td>
            <td id="guest">${final_teams[0].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[3],final_teams[0],s1m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="s1m2">
            <td>${final_teams[2].name}</td>
            <td>${final_teams[1].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[2],final_teams[1],s1m2)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr>
            <th colspan="4">Semi Final 2</th>
        </tr>
        <tr id="re"><td colspan="4"></td></tr>
        <tr id="s2m1">
            <td id="host">${final_teams[0].name}</td>
            <td id="guest">${final_teams[3].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[0],final_teams[3],s2m1,re)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="s2m2">
            <td>${final_teams[1].name}</td>
            <td>${final_teams[2].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[1],final_teams[2],s2m2,re)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr><td colspan="4">
            <button onclick="final()" class="play_button btn_effect">Finals</button> </td>
              </tr> `

}

}

let team_f1 = [];
let team_f2 = [];
let team_f1l = [];
let team_f2l = [];
function final(){

    if(teams.length>13 || (teams_cup.length>4 && teams.length<1)){
        const s1t1 = team_s1[0].finals[0]+team_s1[0].finals[1];
        const s1t2 = team_s4[0].finals[0]+team_s4[0].finals[1];
        const s2t1 = team_s2[0].finals[0]+team_s2[0].finals[1];
        const s2t2 = team_s3[0].finals[0]+team_s3[0].finals[1];

        if(s1t1>=s1t2){
        team_f1.push({
    name: team_s1[0].name,
    att: team_s1[0].att,
    def: team_s1[0].def,
    tw: team_s1[0].tw,
    finals: []
  })
  team_f1l.push({
    name: team_s4[0].name,
    att: team_s4[0].att,
    def: team_s4[0].def,
    tw: team_s4[0].tw,
    finals: []
  })
  }else if(s1t1<s1t2){
        team_f1.push({
    name: team_s4[0].name,
    att: team_s4[0].att,
    def: team_s4[0].def,
    tw: team_s4[0].tw,
    finals: []
  })
  team_f1l.push({
    name: team_s1[0].name,
    att: team_s1[0].att,
    def: team_s1[0].def,
    tw: team_s1[0].tw,
    finals: []
  })
  }
  if(s2t1>=s2t2){
        team_f2.push({
    name: team_s2[0].name,
    att: team_s2[0].att,
    def: team_s2[0].def,
    tw: team_s2[0].tw,
    finals: []
  })
  team_f2l.push({
    name: team_s3[0].name,
    att: team_s3[0].att,
    def: team_s3[0].def,
    tw: team_s3[0].tw,
    finals: []
  })
  }else if(s2t1<s2t2){
        team_f2.push({
    name: team_s3[0].name,
    att: team_s3[0].att,
    def: team_s3[0].def,
    tw: team_s3[0].tw,
    finals: []
  })
  team_f2l.push({
    name: team_s2[0].name,
    att: team_s2[0].att,
    def: team_s2[0].def,
    tw: team_s2[0].tw,
    finals: []
  })}
    }

    if(teams.length<13 && teams.length>2){
        console.log("nowa funkcja final: ")
            console.log(final_teams);

        const s1t1 = final_teams[0].finals[0]+final_teams[0].finals[1];
        const s1t2 = final_teams[3].finals[0]+final_teams[3].finals[1];
        const s2t1 = final_teams[1].finals[0]+final_teams[1].finals[1];
        const s2t2 = final_teams[2].finals[0]+final_teams[2].finals[1];


    if(s1t1>=s1t2){
        team_f1.push({
    name: final_teams[0].name,
    att: final_teams[0].att,
    def: final_teams[0].def,
    tw: final_teams[0].tw,
    finals: []
  })
  team_f1l.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    tw: final_teams[3].tw,
    finals: []
  })
  }else if(s1t1<s1t2){
        team_f1.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    tw: final_teams[3].tw,
    finals: []
  })
  team_f1l.push({
    name: final_teams[0].name,
    att: final_teams[0].att,
    def: final_teams[0].def,
    tw: final_teams[0].tw,
    finals: []
  })
  }
  if(s2t1>=s2t2){
        team_f2.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    tw: final_teams[1].tw,
    finals: []
  })
  team_f2l.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    tw: final_teams[2].tw,
    finals: []
  })
  }else if(s2t1<s2t2){
        team_f2.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    tw: final_teams[2].tw,
    finals: []
  })
  team_f2l.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    tw: final_teams[1].tw,
    finals: []
  })}
    }

            schedule.innerHTML = `<tr>
            <th colspan="4">FINAL</th>
        </tr>
        <tr id="re"><td colspan="4"></td></tr>
        <tr id="f1m1">
            <td id="host">${team_f2[0].name}</td>
            <td id="guest">${team_f1[0].name}</td>
            <td colspan="2"><button onclick="play2(team_f2[0],team_f1[0],f1m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="f1m2">
            <td id="host">${team_f1[0].name}</td>
            <td id="guest">${team_f2[0].name}</td>
            <td colspan="2"><button onclick="play2(team_f1[0],team_f2[0],f1m2,re)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr>
            <th colspan="4">3rd place</th>
        </tr>

        <tr id="f2m1">
            <td id="host">${team_f1l[0].name}</td>
            <td id="guest">${team_f2l[0].name}</td>
            <td colspan="2"><button onclick="play2(team_f1l[0],team_f2l[0],f2m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="f2m2">
            <td id="host">${team_f2l[0].name}</td>
            <td id="guest">${team_f1l[0].name}</td>
            <td colspan="2"><button onclick="play2(team_f2l[0],team_f1l[0],f2m2,re)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr><td colspan="4"><button onclick="reload()" class="play_button btn_effect">Finish</button></td></tr>`;
        }
        



//Bazy do wyboru
const poland = [
  {
  name: 'Vive Kielce',
  att: 85,
  def: 85,
  tw: 85   
  },
      {
  name: 'Wisła Płock',
  att: 84,
  def: 83,
  tw: 84   
  },
  {
  name: 'Górnik Zabrze',
  att: 83,
  def: 82,
  tw: 83   
  },
  {
  name: 'Azoty Puławy',
  att: 80,
  def: 80,
  tw: 82   
  },          
  {
  name: 'Gwardia Opole',
  att: 77,
  def: 77,
  tw: 78   
  },
      {
  name: 'MKS Kalisz',
  att: 76,
  def: 77,
  tw: 77  
  },
          {
  name: 'Zagłębie Lublin',
  att: 77,
  def: 76,
  tw: 77  
  },            
  {
  name: 'Pogoń Szczecin',
  att: 76,
  def: 76,
  tw: 76  
  },
          {
  name: 'Chrobry Głogów',
  att: 75,
  def: 75,
  tw: 75  
  },
          {
  name: 'Piotrkowianin',
  att: 74,
  def: 74,
  tw: 75  
  },
          {
  name: 'MMTS Kwidzyn',
  att: 73,
  def: 74,
  tw: 74  
  },                {
  name: 'Stal Mielec',
  att: 73,
  def: 73,
  tw: 73  
  },        {
  name: 'Wybrzeże Gdańsk',
  att: 73,
  def: 73,
  tw: 73  
  },
          {
  name: 'Azoty Tarnów',
  att: 71,
  def: 71,
  tw: 72  
  }
]
const spain = [
  {
  name: 'Barcelona',
  att: 88,
  def: 88,
  tw: 88  
  },{
  name: 'Ademar',
  att: 85,
  def: 85,
  tw: 85  
  },{
  name: 'La Rioja',
  att: 84,
  def: 84,
  tw: 84  
  },{
  name: 'CD Biadosa',
  att: 83,
  def: 84,
  tw: 83 
  },{
  name: 'Cuenca',
  att: 82,
  def: 84,
  tw: 82  
  },{
  name: 'Granollers',
  att: 83,
  def: 81,
  tw: 81  
  },{
  name: 'Guadalajara',
  att: 82,
  def: 81,
  tw: 80  
  },{
  name: 'Puente Genil',
  att: 82,
  def: 81,
  tw: 82  
  },{
  name: 'Nava',
  att: 80,
  def: 80,
  tw: 81  
  },{
  name: 'Valladolid',
  att: 80,
  def: 82,
  tw: 80  
  },{
  name: 'Benidorm',
  att: 80,
  def: 79,
  tw: 80  
  },{
  name: 'Puerto Sagunto',
  att: 80,
  def: 79,
  tw: 80  
  },{
  name: 'Anaitasuna',
  att: 79,
  def: 79,
  tw: 78  
  },{
  name: 'BM Sinfin',
  att: 80,
  def: 79,
  tw: 77  
  },{
  name: 'Huesca',
  att: 77,
  def: 79,
  tw: 77  
  },{
  name: 'Morrazo',
  att: 77,
  def: 77,
  tw: 77  
  }
]

const polandW = [
  {
  name: 'Perła Lublin',
  att: 80,
  def: 80,
  tw: 80 
  },{
  name: 'Zagłębie Lubin',
  att: 79,
  def: 78,
  tw: 79 
  },{
  name: 'Kobierzyce',
  att: 77,
  def: 77,
  tw: 77  
  },{
  name: 'PR Koszalin',
  att: 75,
  def: 75,
  tw: 76  
  },{
  name: 'Eurobud',
  att: 74,
  def: 73,
  tw: 75  
  },{
  name: 'Start Elbląg',
  att: 73,
  def: 72,
  tw: 74  
  },{
  name: 'Piotrcovia',
  att: 70,
  def: 70,
  tw: 72  
  },{
  name: 'Ruch Chorzów',
  att: 68,
  def: 69,
  tw: 71  
  }
]

const wc = [
  {
  name: 'France',
  att: 88,
  def: 85,
  tw: 88  
  },{
  name: 'Russia',
  att: 80,
  def: 81,
  tw: 81  
  },{
  name: 'Serbia',
  att: 80,
  def: 80,
  tw: 82  
  },{
  name: 'Portugal',
  att: 76,
  def: 77,
  tw: 77  
  },{
  name: 'Germany',
  att: 85,
  def: 85,
  tw: 87  
  },{
  name: 'Brasil',
  att: 82,
  def: 84,
  tw: 82  
  },{
  name: 'Corea',
  att: 72,
  def: 70,
  tw: 72  
  },{
  name: 'Slovenia',
  att: 74,
  def: 75,
  tw: 75  
  },{
  name: 'Croatia',
  att: 85,
  def: 84,
  tw: 85  
  },{
  name: 'Macedonia',
  att: 82,
  def: 81,
  tw: 82  
  },{
  name: 'Bahrain',
  att: 75,
  def: 74,
  tw: 71 
  },{
  name: 'Belarus',
  att: 77,
  def: 73,
  tw: 74  
  },{
  name: 'Spain',
  att: 88,
  def: 87,
  tw: 87 
  },{
  name: 'Iceland',
  att: 85,
  def: 84,
  tw: 85 
  },{
  name: 'Japan',
  att: 78,
  def: 77,
  tw: 77  
  },{
  name: 'Netherland',
  att: 78,
  def: 78,
  tw: 77  
  },{
  name: 'Danemark',
  att: 87,
  def: 87,
  tw: 88  
  },{
  name: 'Chile',
  att: 79,
  def: 81,
  tw: 80
  },{
  name: 'Austria',
  att: 78,
  def: 78,
  tw: 81  
  },{
  name: 'Morocco',
  att: 74,
  def: 75,
  tw: 73  
  },{
  name: 'Norway',
  att: 84,
  def: 83,
  tw: 83 
  },{
  name: 'Tunisia',
  att: 80,
  def: 80,
  tw: 82  
  },{
  name: 'Arabia',
  att: 73,
  def: 73,
  tw: 72 
  },{
  name: 'Poland',
  att: 80,
  def: 80,
  tw: 81  
  },{
  name: 'Sweden',
  att: 85,
  def: 85,
  tw: 84 
  },{
  name: 'Quatar',
  att: 81,
  def: 80,
  tw: 82  
  },{
  name: 'Argentina',
  att: 80,
  def: 80,
  tw: 82  
  },{
  name: 'Algeria',
  att: 72,
  def: 71,
  tw: 72  
  },{
  name: 'Hungary',
  att: 83,
  def: 84,
  tw: 83 
  },{
  name: 'Egypt',
  att: 80,
  def: 82,
  tw: 80  
  },{
  name: 'Angola',
  att: 74,
  def: 74,
  tw: 73  
  },{
  name: 'Uruguay',
  att: 75,
  def: 76,
  tw: 74  
  },
]
             