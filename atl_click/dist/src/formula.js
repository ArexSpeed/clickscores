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

          const riders = [];

          select.addEventListener('change', () => {
            showTeam.innerHTML = '';
            if (select.value == 'f12020') {
                riders.splice(0, riders.length);
                const team_qty = f1_20.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="text" placeholder="Team" readonly>
                <input type="number" placeholder="Tec" readonly>
                <input type="number" placeholder="Con" readonly>
                <input type="number" placeholder="Eng" readonly><br>
                <input type="text" value="" placeholder="Skills: Technique,Condition,Engine" readonly><br><br>
                `
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `<tr>
               <td> <input type="text" value="${f1_20[i].name}" id="rider${i}_name"> </td>
               <td> <input type="text" value="${f1_20[i].team}" id="rider${i}_team"> </td>
               <td><input type="number" value="${f1_20[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${f1_20[i].con}" id="rider${i}_con" max="99" min="1"> </td>
                    <td><input type="number" value="${f1_20[i].eng}" id="rider${i}_eng" max="99" min="1"></td>
                </tr><br>
            `;
                }
                showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            };
            if (select.value == 'self') {
                showTeam.innerHTML = `Riders quantity: <select id="number_teams" class="select_input">
                <option>--</option>
                <option>20</option>
              </select> <button onclick="selfTeamFunc()" class="btn_effect">OK</button>`

            }
        })

        function selfTeamFunc() {
            const teams_qty = document.querySelector('#number_teams');
            
            //console.log(selfTeam);
            let numberTeams = teams_qty.value;
            // const team_qty = selfTeam.value;
            showTeam.innerHTML = "";
            showTeam.innerHTML += `<input type="button" value="${numberTeams}" id="team_qty">
            <input type="text" placeholder="Team" readonly>
            <input type="number" placeholder="Tec" readonly>
            <input type="number" placeholder="Con" readonly>
            <input type="number" placeholder="Eng" readonly><br>
            <input type="text" value="" placeholder="Skills: Technique,Condition,Engine" readonly><br>
            `

            console.log(team_qty);
            for (let i = 0; i < numberTeams; i++) {
                showTeam.innerHTML += `<br>

                Team ${i + 1}: <input type="text" id="rider${i}_name">
                <input type="text" id="rider${i}_team"> 
                <input type="number" id="rider${i}_tech"> 
                <input type="number" id="rider${i}_con"> 
                <input type="number" id="rider${i}_eng">
                <br>`;

            }
           
           showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
        }
        function accept() {

            const teams_qty = document.querySelector('#team_qty').value;

            console.log(teams_qty);
            for (let i = 0; i < teams_qty; i++) {
                let new_name = document.querySelector(`#rider${i}_name`).value;
                let new_team = document.querySelector(`#rider${i}_team`).value;
                let new_tech = document.querySelector(`#rider${i}_tech`).value;
                let new_con = document.querySelector(`#rider${i}_con`).value;
                let new_eng = document.querySelector(`#rider${i}_eng`).value;
                new_tech>99 ? new_tech=99 : new_tech; new_tech<1 ? new_tech=1 : new_tech;
                new_con>99 ? new_con=99 : new_con; new_con<1 ? new_con=1 : new_con;
                new_eng>99 ? new_eng=99 : new_eng; new_eng<1 ? new_eng=1 : new_eng;
                riders.push({
                    name: new_name,
                    team: new_team,
                    tech: Number(new_tech),
                    con: Number(new_con),
                    eng: Number(new_eng),
                    gp: [],
                    point: [],
                    point_sum: 0
                })
                // console.log('dodaje w accept')
                // console.log(new_name);
                // console.log(new_team);
                // console.log(new_tech);
                // console.log(new_con);
                // console.log(new_eng);

            }

            

            addTeams.innerHTML = '';

            //console.log(teams);
            selectLeague.innerHTML = '';
            button.innerHTML += `<button onclick="start()" id="round1" class="btn_start btn_effect">START</button>`
            //pokaz();

            //toggle divs to see
            game.classList.toggle('toggle');
            addTeams.classList.toggle('toggle');
            
            table();
            
        }
        const new_riders = []
        var gp_all = 0;
function play(rider, laps,r_id){
    let weather = Math.floor(Math.random()*3);
    let cond = rider.con;
    // console.log(rider.tech);
    // console.log(rider.eng);
    // console.log(rider.con);

 let time = 0;
    for(let i = 0; i < laps; i++){
        cond--;
        let tech_r = Math.floor(Math.random()*10);
        let eng_r = Math.floor(Math.random()*10);
        time += (rider.tech*0.5+tech_r)*(rider.eng*0.5+eng_r) + cond
        if(cond<1){
            cond = 1;
        }
        
    }
    var finish = (5000-(time/60)).toFixed(3);
    let dns = Math.floor(Math.random()*100);
    dns<10 ? finish=5000: finish

    rider.gp.push(finish)
    

   if(r_id){
    r_id.innerHTML = `
           `;
}
// if(new_riders.length == riders.length){
//     new_riders.splice(0,new_riders.length);
// }
new_riders.push({
    name: rider.name,
    team: rider.team,
    gp: finish})

gp_all++;

    if(gp_all == riders.length){
       
          gptable(r_id);
    }


}


function gptable(r_id){

    let gp_riders = [];
    for(let i =0; i<new_riders.length; i++){
        gp_riders.push({
            name: new_riders[i].name,
            team: new_riders[i].team,
            gp: new_riders[i].gp
        })
        // console.log("dodawanie gp")
        // console.log(gp_riders);

    }

    let gpsort = gp_riders.sort((a,b)=> (a.gp) -  (b.gp));
    console.log(gp_riders);
    for(let j =0; j<riders.length; j++){
        if(riders[j].gp.length==riders[riders.length-1].gp.length){
            
                if(riders[j].name==gpsort[0].name){riders[j].point.push(25)}
                else if(riders[j].name==gpsort[1].name){riders[j].point.push(18)}
                else if(riders[j].name==gpsort[2].name){riders[j].point.push(15)}
                else if(riders[j].name==gpsort[3].name){riders[j].point.push(12)}
                else if(riders[j].name==gpsort[4].name){riders[j].point.push(10)}
                else if(riders[j].name==gpsort[5].name){riders[j].point.push(8)}
                else if(riders[j].name==gpsort[6].name){riders[j].point.push(6)}
                else if(riders[j].name==gpsort[7].name){riders[j].point.push(4)}
                else if(riders[j].name==gpsort[8].name){riders[j].point.push(2)}
                else if(riders[j].name==gpsort[9].name){riders[j].point.push(1)}
            

        }
    }
    r_id.innerHTML = `
    <tr><td>1</td><td>${gpsort[0].name}</td></tr>
    <tr><td>2</td><td>${gpsort[1].name}</td></tr>
    <tr><td>3</td><td>${gpsort[2].name}</td></tr>
    <tr><td>4</td><td>${gpsort[3].name}</td></tr>       
    <tr><td>5</td><td>${gpsort[4].name}</td></tr>
    <tr><td>6</td><td>${gpsort[5].name}</td></tr>
    <tr><td>7</td><td>${gpsort[6].name}</td></tr>
    <tr><td>8</td><td>${gpsort[7].name}</td></tr>
    <tr><td>9</td><td>${gpsort[8].name}</td></tr>
    <tr><td>10</td><td>${gpsort[9].name}</td></tr>
    <tr><td>11</td><td>${gpsort[10].name}</td></tr>
    <tr><td>12</td><td>${gpsort[11].name}</td></tr>
    <tr><td>13</td><td>${gpsort[12].name}</td></tr>
    <tr><td>14</td><td>${gpsort[13].name}</td></tr>
    <tr><td>15</td><td>${gpsort[14].name}</td></tr>
    <tr><td>16</td><td>${gpsort[15].name}</td></tr>
    <tr><td>17</td><td>${gpsort[16].name}</td></tr>
    <tr><td>18</td><td>${gpsort[17].name}</td></tr>
    <tr><td>19</td><td>${gpsort[18].name}</td></tr>
    <tr><td>20</td><td>${gpsort[19].name}</td></tr>
    `;


    riders.forEach(x => {
        x.point_sum = x.point.reduce((a, b) => a + b, 0)
      })
      gp_riders.splice(0,gp_riders.length);


    let tab_riders = [];
    for(let i =0; i<riders.length; i++){
        tab_riders.push({
            name: riders[i].name,
            team: riders[i].team,
            gp: riders[i].gp,
            point: riders[i].point,
            point_sum: riders[i].point_sum
        })
    }

    let lt = tab_riders.sort((a,b)=> (b.point_sum) -  (a.point_sum));//tabsort

    tableSort.innerHTML = `<table>
                                <tr>
                                    <th colspan="9">Table</th>
                                </tr>
                                <tr>
                                    <td>Poz</td><td>Rider</td><td>Team</td><td>Points</td>
                                </tr>
                                <tr>  
                                <td>1</td><td>${lt[0].name}</td><td>${lt[0].team}</td><td>${lt[0].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>2</td><td>${lt[1].name}</td><td>${lt[1].team}</td><td>${lt[1].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>3</td><td>${lt[2].name}</td><td>${lt[2].team}</td><td>${lt[2].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>4</td><td>${lt[3].name}</td><td>${lt[3].team}</td><td>${lt[3].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>5</td><td>${lt[4].name}</td><td>${lt[4].team}</td><td>${lt[4].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>6</td><td>${lt[5].name}</td><td>${lt[5].team}</td><td>${lt[5].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>7</td><td>${lt[6].name}</td><td>${lt[6].team}</td><td>${lt[6].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>8</td><td>${lt[7].name}</td><td>${lt[7].team}</td><td>${lt[7].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>9</td><td>${lt[8].name}</td><td>${lt[8].team}</td><td>${lt[8].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>10</td><td>${lt[9].name}</td><td>${lt[9].team}</td><td>${lt[9].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>11</td><td>${lt[10].name}</td><td>${lt[10].team}</td><td>${lt[10].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>12</td><td>${lt[11].name}</td><td>${lt[11].team}</td><td>${lt[11].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>13</td><td>${lt[12].name}</td><td>${lt[12].team}</td><td>${lt[12].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>14</td><td>${lt[13].name}</td><td>${lt[13].team}</td><td>${lt[13].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>15</td><td>${lt[14].name}</td><td>${lt[14].team}</td><td>${lt[14].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>16</td><td>${lt[15].name}</td><td>${lt[15].team}</td><td>${lt[15].point_sum}</td>
                                </tr>                                
                                <tr>  
                                <td>17</td><td>${lt[16].name}</td><td>${lt[16].team}</td><td>${lt[16].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>18</td><td>${lt[17].name}</td><td>${lt[17].team}</td><td>${lt[17].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>19</td><td>${lt[18].name}</td><td>${lt[18].team}</td><td>${lt[18].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>20</td><td>${lt[19].name}</td><td>${lt[19].team}</td><td>${lt[19].point_sum}</td>
                                </tr>

                  </table>   `

                  gp_all = 0;
                  new_riders.splice(0,new_riders.length);
    

}

function table(){
            riders.forEach(x => {
            x.point_sum = x.point.reduce((a, b) => a + b, 0)
          })
    let tab_riders = [];
    for(let i =0; i<riders.length; i++){
        tab_riders.push({
            name: riders[i].name,
            team: riders[i].team,
            gp: riders[i].gp,
            point: riders[i].point,
            point_sum: riders[i].point_sum
        })
    }

    let lt = tab_riders.sort((a,b)=> (b.point_sum) -  (a.point_sum));//tabsort

    tableSort.innerHTML = `<table>
                                <tr>
                                    <th colspan="9">Table</th>
                                </tr>
                                <tr>
                                    <td>Poz</td><td>Rider</td><td>Team</td><td>Points</td>
                                </tr>
                                <tr>  
                                <td>1</td><td>${lt[0].name}</td><td>${lt[0].team}</td><td>${lt[0].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>2</td><td>${lt[1].name}</td><td>${lt[1].team}</td><td>${lt[1].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>3</td><td>${lt[2].name}</td><td>${lt[2].team}</td><td>${lt[2].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>4</td><td>${lt[3].name}</td><td>${lt[3].team}</td><td>${lt[3].point_sum}</td>
                                </tr>                                
                                <tr>  
                                <td>5</td><td>${lt[4].name}</td><td>${lt[4].team}</td><td>${lt[4].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>6</td><td>${lt[5].name}</td><td>${lt[5].team}</td><td>${lt[5].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>7</td><td>${lt[6].name}</td><td>${lt[6].team}</td><td>${lt[6].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>8</td><td>${lt[7].name}</td><td>${lt[7].team}</td><td>${lt[7].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>9</td><td>${lt[8].name}</td><td>${lt[8].team}</td><td>${lt[8].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>10</td><td>${lt[9].name}</td><td>${lt[9].team}</td><td>${lt[9].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>11</td><td>${lt[10].name}</td><td>${lt[10].team}</td><td>${lt[10].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>12</td><td>${lt[11].name}</td><td>${lt[11].team}</td><td>${lt[11].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>13</td><td>${lt[12].name}</td><td>${lt[12].team}</td><td>${lt[12].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>14</td><td>${lt[13].name}</td><td>${lt[13].team}</td><td>${lt[13].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>15</td><td>${lt[14].name}</td><td>${lt[14].team}</td><td>${lt[14].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>16</td><td>${lt[15].name}</td><td>${lt[15].team}</td><td>${lt[15].point_sum}</td>
                                </tr>                                
                                <tr>  
                                <td>17</td><td>${lt[16].name}</td><td>${lt[16].team}</td><td>${lt[16].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>18</td><td>${lt[17].name}</td><td>${lt[17].team}</td><td>${lt[17].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>19</td><td>${lt[18].name}</td><td>${lt[18].team}</td><td>${lt[18].point_sum}</td>
                                </tr>
                                <tr>  
                                <td>20</td><td>${lt[19].name}</td><td>${lt[19].team}</td><td>${lt[19].point_sum}</td>
                                </tr>

                  </table>   `
}

function start(){
    button.innerHTML = '';
    schedule.classList.toggle('toggle');
    schedule.innerHTML += `<tr>
    <th colspan="4">GP Australia (57 laps)</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(riders[0],57,r1), play(riders[1],57,r1),play(riders[2],57,r1),play(riders[3],57,r1),play(riders[4],57,r1),play(riders[5],57,r1),play(riders[6],57,r1),play(riders[7],57,r1),play(riders[8],57,r1),play(riders[9],57,r1),play(riders[10],57,r1),play(riders[11],57,r1),play(riders[12],57,r1),play(riders[13],57,r1),play(riders[14],57,r1),play(riders[15],57,r1),play(riders[16],57,r1),play(riders[17],57,r1),play(riders[18],57,r1),play(riders[19],57,r1)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Bahrain (57 laps)</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(riders[0],57,r2), play(riders[1],57,r2),play(riders[2],57,r2),play(riders[3],57,r2),play(riders[4],57,r2),play(riders[5],57,r2),play(riders[6],57,r2),play(riders[7],57,r2),play(riders[8],57,r2),play(riders[9],57,r2),play(riders[10],57,r2),play(riders[11],57,r2),play(riders[12],57,r2),play(riders[13],57,r2),play(riders[14],57,r12),play(riders[15],57,r2),play(riders[16],57,r2),play(riders[17],57,r2),play(riders[18],57,r2),play(riders[19],57,r2)" class="play_button btn_effect">Race Start</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Vietnam (56 laps)</th>
</tr>
<tr id="r3"><td colspan="4"><button onclick="play(riders[0],56,r3), play(riders[1],56,r3),play(riders[2],56,r3),play(riders[3],56,r3),play(riders[4],56,r3),play(riders[5],56,r3),play(riders[6],56,r3),play(riders[7],56,r3),play(riders[8],56,r3),play(riders[9],56,r3),play(riders[10],56,r3),play(riders[11],56,r3),play(riders[12],56,r3),play(riders[13],56,r3),play(riders[14],56,r3),play(riders[15],56,r3),play(riders[16],56,r3),play(riders[17],56,r3),play(riders[18],56,r3),play(riders[19],56,r3)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP China (56 laps)</th>
</tr>
<tr id="r4"><td colspan="4"><button onclick="play(riders[0],56,r4), play(riders[1],56,r4),play(riders[2],56,r4),play(riders[3],56,r4),play(riders[4],56,r4),play(riders[5],56,r4),play(riders[6],56,r4),play(riders[7],56,r4),play(riders[8],56,r4),play(riders[9],56,r4),play(riders[10],56,r4),play(riders[11],56,r4),play(riders[12],56,r4),play(riders[13],56,r4),play(riders[14],56,r4),play(riders[15],56,r4),play(riders[16],56,r4),play(riders[17],56,r4),play(riders[18],56,r4),play(riders[19],56,r4)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Netherland (70 laps)</th>
</tr>
<tr id="r5"><td colspan="4"><button onclick="play(riders[0],70,r5), play(riders[1],70,r5),play(riders[2],70,r5),play(riders[3],70,r5),play(riders[4],70,r5),play(riders[5],70,r5),play(riders[6],70,r5),play(riders[7],70,r5),play(riders[8],70,r5),play(riders[9],70,r5),play(riders[10],70,r5),play(riders[11],70,r5),play(riders[12],70,r5),play(riders[13],70,r5),play(riders[14],70,r5),play(riders[15],70,r5),play(riders[16],70,r5),play(riders[17],70,r5),play(riders[18],70,r5),play(riders[19],70,r5)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Spain (66 laps)</th>
</tr>
<tr id="r6"><td colspan="4"><button onclick="play(riders[0],66,r6), play(riders[1],66,r6),play(riders[2],66,r6),play(riders[3],66,r6),play(riders[4],66,r6),play(riders[5],66,r6),play(riders[6],66,r6),play(riders[7],66,r6),play(riders[8],66,r6),play(riders[9],66,r6),play(riders[10],66,r6),play(riders[11],66,r6),play(riders[12],66,r6),play(riders[13],66,r6),play(riders[14],66,r6),play(riders[15],66,r6),play(riders[16],66,r6),play(riders[17],66,r6),play(riders[18],66,r6),play(riders[19],66,r6)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Monaco (78 laps)</th>
</tr>
<tr id="r7"><td colspan="4"><button onclick="play(riders[0],78,r7), play(riders[1],78,r7),play(riders[2],78,r7),play(riders[3],78,r7),play(riders[4],78,r7),play(riders[5],78,r7),play(riders[6],70,r5),play(riders[7],78,r7),play(riders[8],78,r7),play(riders[9],78,r7),play(riders[10],78,r7),play(riders[11],78,r7),play(riders[12],78,r7),play(riders[13],78,r7),play(riders[14],78,r7),play(riders[15],78,r7),play(riders[16],78,r7),play(riders[17],78,r7),play(riders[18],78,r7),play(riders[19],78,r7)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Azerbaijan (51 laps)</th>
</tr>
<tr id="r8"><td colspan="4"><button onclick="play(riders[0],51,r8), play(riders[1],51,r8),play(riders[2],51,r8),play(riders[3],51,r8),play(riders[4],51,r8),play(riders[5],51,r8),play(riders[6],51,r8),play(riders[7],51,r8),play(riders[8],51,r8),play(riders[9],51,r8),play(riders[10],51,r8),play(riders[11],51,r8),play(riders[12],51,r8),play(riders[13],51,r8),play(riders[14],51,r8),play(riders[15],51,r8),play(riders[16],51,r8),play(riders[17],51,r8),play(riders[18],51,r8),play(riders[19],51,r8)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Canada (70 laps)</th>
</tr>
<tr id="r9"><td colspan="4"><button onclick="play(riders[0],70,r9), play(riders[1],70,r9),play(riders[2],70,r9),play(riders[3],70,r9),play(riders[4],70,r9),play(riders[5],70,r9),play(riders[6],70,r9),play(riders[7],70,r9),play(riders[8],70,r9),play(riders[9],70,r9),play(riders[10],70,r9),play(riders[11],70,r9),play(riders[12],70,r9),play(riders[13],70,r9),play(riders[14],70,r9),play(riders[15],70,r9),play(riders[16],70,r9),play(riders[17],70,r9),play(riders[18],70,r9),play(riders[19],70,r9)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP France (52 laps)</th>
</tr>
<tr id="r10"><td colspan="4"><button onclick="play(riders[0],52,r10), play(riders[1],52,r10),play(riders[2],52,r10),play(riders[3],52,r10),play(riders[4],52,r10),play(riders[5],52,r10),play(riders[6],52,r10),play(riders[7],52,r10),play(riders[8],52,r10),play(riders[9],52,r10),play(riders[10],52,r10),play(riders[11],52,r10),play(riders[12],52,r10),play(riders[13],52,r10),play(riders[14],52,r10),play(riders[15],52,r10),play(riders[16],52,r10),play(riders[17],52,r10),play(riders[18],52,r10),play(riders[19],52,r10)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Austria (70 laps)</th>
</tr>
<tr id="r11"><td colspan="4"><button onclick="play(riders[0],70,r11), play(riders[1],70,r11),play(riders[2],70,r11),play(riders[3],70,r11),play(riders[4],70,r11),play(riders[5],70,r11),play(riders[6],70,r11),play(riders[7],70,r11),play(riders[8],70,r11),play(riders[9],70,r11),play(riders[10],70,r11),play(riders[11],70,r11),play(riders[12],70,r11),play(riders[13],70,r11),play(riders[14],70,r11),play(riders[15],70,r11),play(riders[16],70,r11),play(riders[17],70,r11),play(riders[18],70,r11),play(riders[19],70,r11)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP UK (52 laps)</th>
</tr>
<tr id="r12"><td colspan="4"><button onclick="play(riders[0],52,r12), play(riders[1],52,r12),play(riders[2],52,r12),play(riders[3],52,r12),play(riders[4],52,r12),play(riders[5],52,r12),play(riders[6],52,r12),play(riders[7],52,r12),play(riders[8],52,r12),play(riders[9],52,r12),play(riders[10],52,r12),play(riders[11],52,r12),play(riders[12],52,r12),play(riders[13],52,r12),play(riders[14],52,r12),play(riders[15],52,r12),play(riders[16],52,r12),play(riders[17],52,r12),play(riders[18],52,r12),play(riders[19],52,r12)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Hungary (70 laps)</th>
</tr>
<tr id="r13"><td colspan="4"><button onclick="play(riders[0],70,r13), play(riders[1],70,r13),play(riders[2],70,r13),play(riders[3],70,r13),play(riders[4],70,r13),play(riders[5],70,r13),play(riders[6],70,r13),play(riders[7],70,r13),play(riders[8],70,r13),play(riders[9],70,r13),play(riders[10],70,r13),play(riders[11],70,r13),play(riders[12],70,r13),play(riders[13],70,r13),play(riders[14],70,r13),play(riders[15],70,r13),play(riders[16],70,r13),play(riders[17],70,r13),play(riders[18],70,r13),play(riders[19],70,r13)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Belgium (44 laps)</th>
</tr>
<tr id="r14"><td colspan="4"><button onclick="play(riders[0],44,r14), play(riders[1],44,r14),play(riders[2],44,r14),play(riders[3],44,r14),play(riders[4],44,r14),play(riders[5],44,r14),play(riders[6],44,r14),play(riders[7],44,r14),play(riders[8],44,r14),play(riders[9],44,r14),play(riders[10],44,r14),play(riders[11],44,r14),play(riders[12],44,r14),play(riders[13],44,r14),play(riders[14],44,r14),play(riders[15],44,r14),play(riders[16],44,r14),play(riders[17],44,r14),play(riders[18],44,r14),play(riders[19],44,r14)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Italy (53 laps)</th>
</tr>
<tr id="r15"><td colspan="4"><button onclick="play(riders[0],53,r15), play(riders[1],53,r15),play(riders[2],53,r15),play(riders[3],53,r15),play(riders[4],53,r15),play(riders[5],53,r15),play(riders[6],53,r15),play(riders[7],53,r15),play(riders[8],53,r15),play(riders[9],53,r15),play(riders[10],53,r15),play(riders[11],53,r15),play(riders[12],53,r15),play(riders[13],53,r15),play(riders[14],53,r15),play(riders[15],53,r15),play(riders[16],53,r15),play(riders[17],53,r15),play(riders[18],53,r15),play(riders[19],53,r15)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Singapur (61 laps)</th>
</tr>
<tr id="r16"><td colspan="4"><button onclick="play(riders[0],61,r16), play(riders[1],61,r16),play(riders[2],61,r16),play(riders[3],61,r16),play(riders[4],61,r16),play(riders[5],61,r16),play(riders[6],61,r16),play(riders[7],61,r16),play(riders[8],61,r16),play(riders[9],61,r16),play(riders[10],61,r16),play(riders[11],61,r16),play(riders[12],61,r16),play(riders[13],61,r16),play(riders[14],61,r16),play(riders[15],61,r16),play(riders[16],61,r16),play(riders[17],61,r16),play(riders[18],61,r16),play(riders[19],61,r16)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Russia (53 laps)</th>
</tr>
<tr id="r17"><td colspan="4"><button onclick="play(riders[0],53,r17), play(riders[1],53,r17),play(riders[2],53,r17),play(riders[3],53,r17),play(riders[4],53,r17),play(riders[5],53,r17),play(riders[6],53,r17),play(riders[7],53,r17),play(riders[8],53,r17),play(riders[9],53,r17),play(riders[10],53,r17),play(riders[11],53,r17),play(riders[12],53,r17),play(riders[13],53,r17),play(riders[14],53,r17),play(riders[15],53,r17),play(riders[16],53,r17),play(riders[17],53,r17),play(riders[18],53,r17),play(riders[19],53,r17)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Japan (53 laps)</th>
</tr>
<tr id="r18"><td colspan="4"><button onclick="play(riders[0],53,r18), play(riders[1],53,r18),play(riders[2],53,r18),play(riders[3],53,r18),play(riders[4],53,r18),play(riders[5],53,r18),play(riders[6],53,r18),play(riders[7],53,r18),play(riders[8],53,r18),play(riders[9],53,r18),play(riders[10],53,r18),play(riders[11],53,r18),play(riders[12],53,r18),play(riders[13],53,r18),play(riders[14],53,r18),play(riders[15],53,r18),play(riders[16],53,r18),play(riders[17],53,r18),play(riders[18],53,r18),play(riders[19],53,r18)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Mexico (71 laps)</th>
</tr>
<tr id="r19"><td colspan="4"><button onclick="play(riders[0],71,r19), play(riders[1],71,r19),play(riders[2],71,r19),play(riders[3],71,r19),play(riders[4],71,r19),play(riders[5],71,r19),play(riders[6],71,r19),play(riders[7],71,r19),play(riders[8],71,r19),play(riders[9],71,r19),play(riders[10],71,r19),play(riders[11],71,r19),play(riders[12],71,r19),play(riders[13],71,r19),play(riders[14],71,r19),play(riders[15],71,r19),play(riders[16],71,r19),play(riders[17],71,r19),play(riders[18],71,r19),play(riders[19],71,r19)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP USA (56 laps)</th>
</tr>
<tr id="r20"><td colspan="4"><button onclick="play(riders[0],56,r20), play(riders[1],56,r20),play(riders[2],56,r20),play(riders[3],56,r20),play(riders[4],56,r20),play(riders[5],56,r20),play(riders[6],56,r20),play(riders[7],56,r20),play(riders[8],56,r20),play(riders[9],56,r20),play(riders[10],56,r20),play(riders[11],56,r20),play(riders[12],56,r20),play(riders[13],56,r20),play(riders[14],56,r20),play(riders[15],56,r20),play(riders[16],56,r20),play(riders[17],56,r20),play(riders[18],56,r20),play(riders[19],56,r20)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Brasil (71 laps)</th>
</tr>
<tr id="r21"><td colspan="4"><button onclick="play(riders[0],71,r21), play(riders[1],71,r21),play(riders[2],71,r21),play(riders[3],71,r21),play(riders[4],71,r21),play(riders[5],71,r21),play(riders[6],71,r21),play(riders[7],71,r21),play(riders[8],71,r21),play(riders[9],71,r21),play(riders[10],71,r21),play(riders[11],71,r21),play(riders[12],71,r21),play(riders[13],71,r21),play(riders[14],71,r21),play(riders[15],71,r21),play(riders[16],71,r21),play(riders[17],71,r21),play(riders[18],71,r21),play(riders[19],71,r21)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr>
    <th colspan="4">GP Abu Dhabi(55 laps)</th>
</tr>
<tr id="r22"><td colspan="4"><button onclick="play(riders[0],55,r22), play(riders[1],55,r22),play(riders[2],55,r22),play(riders[3],55,r22),play(riders[4],55,r22),play(riders[5],55,r22),play(riders[6],55,r22),play(riders[7],55,r22),play(riders[8],55,r22),play(riders[9],55,r22),play(riders[10],55,r22),play(riders[11],55,r22),play(riders[12],55,r22),play(riders[13],55,r22),play(riders[14],55,r22),play(riders[15],55,r22),play(riders[16],55,r22),play(riders[17],55,r22),play(riders[18],55,r22),play(riders[19],55,r22)" class="play_button btn_effect">Race Start</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
`
}


const f1_20 = [{
    name: "Leclerc",
    tech: 90,
    con: 90,
    eng: 90,
    team: "Ferrari",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Vettel",
    tech: 92,
    con: 90,
    eng: 90,
    team: "Ferrari",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Bottas",
    tech: 89,
    con: 88,
    eng: 93,
    team: "Mercedes",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Hamilton",
    tech: 95,
    con: 95,
    eng: 95,
    team: "Mercedes",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Ricciardo",
    tech: 88,
    con: 90,
    eng: 87,
    team: "Renault",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Occon",
    tech: 86,
    con: 86,
    eng: 86,
    team: "Reanault",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Raikonnen",
    tech: 90,
    con: 83,
    eng: 83,
    team: "AlfaRomeo",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Kubica",
    tech: 85,
    con: 84,
    eng: 83,
    team: "Alfa Romeo",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Verstappen",
    tech: 86,
    con: 87,
    eng: 87,
    team: "RedBull",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Albion",
    tech: 83,
    con: 85,
    eng: 86,
    team: "Merc",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Latifi",
    tech: 79,
    con: 80,
    eng: 79,
    team: "Williams",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Russel",
    tech: 77,
    con: 78,
    eng: 79,
    team: "Williams",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Grojean",
    tech: 83,
    con: 78,
    eng: 81,
    team: "Haas",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Magnussen",
    tech: 82,
    con: 82,
    eng: 82,
    team: "Haas",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Gasly",
    tech: 81,
    con: 83,
    eng: 83,
    team: "AlfaTauri",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Kviat",
    tech: 84,
    con: 85,
    eng: 84,
    team: "AlfaTauri",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Perez",
    tech: 86,
    con: 86,
    eng: 85,
    team: "RacingPoint",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Stroll",
    tech: 83,
    con: 84,
    eng: 84,
    team: "RacingPoint",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Sainz",
    tech: 83,
    con: 84,
    eng: 84,
    team: "McLaren",
    gp: [],
    point: [],
    point_sum: 0
},{
    name: "Norris",
    tech: 81,
    con: 84,
    eng: 84,
    team: "McLaren",
    gp: [],
    point: [],
    point_sum: 0
}
]


// console.log(play(riders[0], 57));
// console.log(play(riders[1], 57));
// console.log(play(riders[2], 57));
// console.log(play(riders[3], 57));
