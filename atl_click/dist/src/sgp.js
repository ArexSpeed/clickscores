const select = document.querySelector('#select'); 
const showTeam = document.querySelector('.showTeam'); 
const button = document.querySelector('.button') 
const schedule = document.querySelector('.schedule'); 
const tableSort = document.querySelector('.tablesort'); 
const addTeams = document.querySelector('.addteams'); 
const game = document.querySelector('.game'); 
const selectLeague = document.querySelector('.selectLeague');

function reload(){
location.reload();
return false;
}
//baza tworzona
const riders = [];
const rider = [
    {   
        name: "A.Cichocki",
        nr: 195,
        tech: 90,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "A.Speed",
        nr: 95,
        tech: 30,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "N.Lokstar",
        nr: 7,
        tech: 80,
        ref: 90,
        mot: 80,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "A.Kilberg",
        nr: 19,
        tech: 60,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "R.Ruksey",
        nr: 18,
        tech: 60,
        ref: 40,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "R.Thomson",
        nr: 13,
        tech: 50,
        ref: 93,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "J.McMiller",
        nr: 21,
        tech: 62,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "J.Adams",
        nr: 100,
        tech: 66,
        ref: 91,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "P.Pawlicki",
        nr: 777,
        tech: 30,
        ref: 30,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "A.Boyten",
        nr: 6,
        tech: 60,
        ref: 20,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "N.Tyrak",
        nr: 25,
        tech: 65,
        ref: 10,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "M.Wolksteier",
        nr: 10,
        tech: 65,
        ref: 60,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "F.Fisher",
        nr: 16,
        tech: 60,
        ref: 72,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "D.Torreto",
        nr: 34,
        tech: 60,
        ref: 71,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "T.Gultenberg",
        nr: 987,
        tech: 71,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "G.Hancock",
        nr: 44,
        tech: 33,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    }
]



//wyswietlanie dostepnych lig
select.addEventListener('change', () => {
    showTeam.innerHTML = '';
    if (select.value == 'sgp') {
        
        const rider_qty = 16;
        showTeam.innerHTML += `<input type="button" value="${rider_qty}" id="rider_qty">
        <input type="number" placeholder="Tech" readonly>
        <input type="number" placeholder="Ref" readonly>
        <input type="number" placeholder="Mot" readonly>
        <br>
        <input type="text" value="" placeholder="Skills: Technique, Reflex, Motor" readonly><br>
        `
        for (let i = 0; i < 16; i++) {

            showTeam.innerHTML += `<tr>
            <td> <input type="number" value="${rider[i].nr}" id="rider${i}_nr"> </td>
       <td> <input type="text" value="${rider[i].name}" id="rider${i}_name"> </td>
       <td><input type="number" value="${rider[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
        <td><input type="number" value="${rider[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
            <td><input type="number" value="${rider[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
        </tr><br>
    `;
        }
        showTeam.innerHTML += `<button onclick="accept_sgp()" id="accept_sgp" class="accept btn_effect">Accept</button>`
    };
})

function accept_sgp() {

    const rider_qty = document.querySelector('#rider_qty').value;

    console.log(rider_qty);
    for (let i = 0; i < rider_qty; i++) {
        let new_nr = document.querySelector(`#rider${i}_nr`).value;

        let new_name = document.querySelector(`#rider${i}_name`).value;
        let new_tech = document.querySelector(`#rider${i}_tech`).value;
        let new_ref = document.querySelector(`#rider${i}_ref`).value;
        let new_mot = document.querySelector(`#rider${i}_mot`).value;
        new_tech>99 ? new_tech=99 : new_tech; new_tech<1 ? new_tech=1 : new_tech;
        new_ref>99 ? new_ref=99 : new_ref; new_ref<1 ? new_ref=1 : new_ref;
        new_mot>99 ? new_mot=99 : new_mot; new_mot<1 ? new_mot=1 : new_mot;
        riders.push({
            nr: new_nr,
            name: new_name,
            tech: Number(new_tech),
            ref: Number(new_ref),
            mot: Number(new_mot),
            pts: [],
            pts_sum: 0
        })

    }

    

    addTeams.innerHTML = '';


    selectLeague.innerHTML = '';
    button.innerHTML += `<button onclick="heats()" id="round1" class="btn_start btn_effect">START</button>`

    //toggle divs to see
    game.classList.toggle('toggle');
    addTeams.classList.toggle('toggle');
    
    table();
    
}



function sgp(a,b,c,d,h_id,r1,r2,r3,r4){
    
    let scores = [];
    const laps = (x) =>{
        //tec = x.tech*Math.floor(Math.random()*10);
        let mtr1,mtr2,mtr3,mtr4;

        if(x.mot<15){
            mtr1 = Math.floor(Math.random()*5);
            mtr2 = Math.floor(Math.random()*5);
            mtr3 = Math.floor(Math.random()*5);
            mtr4 = Math.floor(Math.random()*5);
            Math.floor(Math.random()*10);
            Math.floor(Math.random()*(15-5))+5;
        }        if(x.mot<30){
            mtr1 = Math.floor(Math.random()*10);
            mtr2 = Math.floor(Math.random()*10);
            mtr3 = Math.floor(Math.random()*10);
            mtr4 = Math.floor(Math.random()*10);
            Math.floor(Math.random()*10);
            Math.floor(Math.random()*(15-5))+5;
        }        if(x.mot<45){
            mtr1 = Math.floor(Math.random()*(15-5))+5;
            mtr2 = Math.floor(Math.random()*(15-5))+5;
            mtr3 = Math.floor(Math.random()*(15-5))+5;
            mtr4 = Math.floor(Math.random()*(15-5))+5;
        }       if(x.mot<60){
            mtr1 = Math.floor(Math.random()*(20-10))+10;
            mtr2 = Math.floor(Math.random()*(20-10))+10;
            mtr3 = Math.floor(Math.random()*(20-10))+10;
            mtr4 = Math.floor(Math.random()*(20-10))+10;
        }
        if(x.mot<75){
            mtr1 = Math.floor(Math.random()*(25-15))+15;
            mtr2 = Math.floor(Math.random()*(25-15))+15;
            mtr3 = Math.floor(Math.random()*(25-15))+15;
            mtr4 = Math.floor(Math.random()*(25-15))+15;
        }       if(x.mot<90){
            mtr1 = Math.floor(Math.random()*(30-20))+20;
            mtr2 = Math.floor(Math.random()*(30-20))+20;
            mtr3 = Math.floor(Math.random()*(30-20))+20;
            mtr4 = Math.floor(Math.random()*(30-20))+20;
        }       if(x.mot>=90){
            mtr1 = Math.floor(Math.random()*(35-20))+20;
            mtr2 = Math.floor(Math.random()*(35-20))+20;
            mtr3 = Math.floor(Math.random()*(35-20))+20;
            mtr4 = Math.floor(Math.random()*(35-20))+20;
        }

        lap1 = 0.2*(x.tech+mtr1) + 1*(x.ref+mtr1);
        lap2 = 0.5*(x.tech+mtr2) + 0.5*(x.ref+mtr2);
        lap3 = 0.5*(x.tech+mtr3) + 0.3*(x.ref+mtr3);
        lap4 = 0.8*(x.tech+mtr4) + 0.1*(x.ref+mtr4);
        let sum = lap1+lap2+lap3+lap4;
        return sum;
    }

    let score1 = laps(a);
    let score2 = laps(b);
    let score3 = laps(c);
    let score4 = laps(d);
    console.log('Scores:');

    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);

    score1==score2||score1==score3||score1==score4 ? score1++ : score1;
    score2==score3||score2==score4 ? score2++ : score2;
    score3==score4 ? score3++ : score3;
    scores.push(score1,score2,score3,score4);
    scores.sort((a,b)=>b-a);
    // if(scores[0] == score1){
    //     a.pts.push(3);
    //     apts = 3;
    //     apos = 1;
    // }
    let apos,apts,bpos,bpts,cpos,cpts,dpos,dpts;
    if(scores[0]==score1){a.pts.push(3); apts=3; apos=1; }
    else if(scores[0]==score2){b.pts.push(3); bpts=3; bpos=1; }
    else if(scores[0]==score3){c.pts.push(3); cpts=3; cpos=1; }
    else if(scores[0]==score4){d.pts.push(3); dpts=3; dpos=1; }
    if(scores[1]==score1){a.pts.push(2); apts=2; apos=2; }
    else if(scores[1]==score2){b.pts.push(2); bpts=2; bpos=2; }
    else if(scores[1]==score3){c.pts.push(2); cpts=2; cpos=2; }
    else if(scores[1]==score4){d.pts.push(2); dpts=2; dpos=2; }
    if(scores[2]==score1){a.pts.push(1); apts=1; apos=3; }
    else if(scores[2]==score2){b.pts.push(1); bpts=1; bpos=3; }
    else if(scores[2]==score3){c.pts.push(1); cpts=1; cpos=3; }
    else if(scores[2]==score4){d.pts.push(1); dpts=1; dpos=3; }
    if(scores[3]==score1){a.pts.push(0); apts=0; apos=4; }
    else if(scores[3]==score2){b.pts.push(0); bpts=0; bpos=4; }
    else if(scores[3]==score3){c.pts.push(0); cpts=0; cpos=4; }
    else if(scores[3]==score4){d.pts.push(0); dpts=0; dpos=4; }

    riders.forEach(x => {
        x.pts_sum = x.pts.reduce((a, b) => a + b, 0)
      })
    // scores[0]==score1 ? a.pts.push(3) : scores[1]==score1 ? a.pts.push(2) && apts==2 && apos==2 : scores[2]==score1 ? a.pts.push(1) && apts==1 && apos==3 : a.pts.push(0) && apts==0 && apos==4 ;
    // scores[0]==score2 ? b.pts.push(3) : scores[1]==score2 ? b.pts.push(2) : scores[2]==score2 ? b.pts.push(1) : b.pts.push(0);
    // scores[0]==score3 ? c.pts.push(3) : scores[1]==score3 ? c.pts.push(2) : scores[2]==score3 ? c.pts.push(1) : c.pts.push(0);
    // scores[0]==score4 ? d.pts.push(3) : scores[1]==score4 ? d.pts.push(2) : scores[2]==score4 ? d.pts.push(1) : d.pts.push(0);
    
    
    h_id.innerHTML = '';
    r1.innerHTML = `<tr class="red_hel"><td>${a.nr}</td><td>${a.name}</td><td>${apos}</td><td>${apts}</td></tr>`
    r2.innerHTML = `<tr class="blue_hel"><td>${b.nr}</td><td>${b.name}</td><td>${bpos}</td><td>${bpts}</td></tr>`
    r3.innerHTML = `<tr class="white_hel"><td>${c.nr}</td><td>${c.name}</td><td>${cpos}</td><td>${cpts}</td></tr>`
    r4.innerHTML = `<tr class="yellow_hel"><td>${d.nr}</td><td>${d.name}</td><td>${dpos}</td><td>${dpts}</td></tr>`
    //return score1 + ' ' + score2 + ' ' + score3 + ' ' + score4 + ' ' + scores;

    table();
}

// console.log(sgp(rider[0],rider[1],rider[2],rider[3]));
// console.log(sgp(rider[0],rider[1],rider[2],rider[3]));
// console.log(rider);
function table(){
    let new_riders = [];
    for(i=0;i<riders.length;i++){
      new_riders.push({
        nr: riders[i].nr,
        name: riders[i].name,
        pt1: riders[i].pts[0],
        pt2: riders[i].pts[1],
        pt3: riders[i].pts[2],
        pt4: riders[i].pts[3],
        pt5: riders[i].pts[4],
        pt6: riders[i].pts[5],
        pt7: riders[i].pts[6],
        pts_sum: riders[i].pts_sum
      }
      )
    }
    // for(let i =0; i<new_riders.length; i++){
    //     for(let j = 1; j<8; j++){
    //         new_riders.pt[j] == undefined ? 
    //     }
    //     new_riders.pt
    // }
    new_riders.forEach(x =>{
        x.pt1 == undefined ? x.pt1='-' : x.pt1;
        x.pt2 == undefined ? x.pt2='-' : x.pt2;
        x.pt3 == undefined ? x.pt3='-' : x.pt3;
        x.pt4 == undefined ? x.pt4='-' : x.pt4;
        x.pt5 == undefined ? x.pt5='-' : x.pt5;
        x.pt6 == undefined ? x.pt6='-' : x.pt6;
        x.pt7 == undefined ? x.pt7='-' : x.pt7;
    })
    // console.log(new_riders);
    let lt = new_riders.sort((a,b)=> ((b.pts_sum) - (a.pts_sum)))//live table


    tableSort.innerHTML = `<table>
                                <tr>
                                    <th colspan="11">Table</th>
                                </tr>
                                <tr>
                                    <td>Poz</td><td>#</td><td>Name</td><td>PTS</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
                                </tr>
                                <tr>
                                    <td>1</td><td>${lt[0].nr}</td><td>${lt[0].name}</td><td>${lt[0].pts_sum}</td><td>${lt[0].pt1}</td><td>${lt[0].pt2}</td><td>${lt[0].pt3}</td><td>${lt[0].pt4}</td><td>${lt[0].pt5}</td><td>${lt[0].pt6}</td><td>${lt[0].pt7}</td>
                                </tr>
                                <tr>
                                    <td>2</td><td>${lt[1].nr}</td><td>${lt[1].name}</td><td>${lt[1].pts_sum}</td><td>${lt[1].pt1}</td><td>${lt[1].pt2}</td><td>${lt[1].pt3}</td><td>${lt[1].pt4}</td><td>${lt[1].pt5}</td><td>${lt[1].pt6}</td><td>${lt[1].pt7}</td>
                                </tr>
                                <tr>
                                    <td>3</td><td>${lt[2].nr}</td><td>${lt[2].name}</td><td>${lt[2].pts_sum}</td><td>${lt[2].pt1}</td><td>${lt[2].pt2}</td><td>${lt[2].pt3}</td><td>${lt[2].pt4}</td><td>${lt[2].pt5}</td><td>${lt[2].pt6}</td><td>${lt[2].pt7}</td>
                                </tr>
                                <tr>
                                    <td>4</td><td>${lt[3].nr}</td><td>${lt[3].name}</td><td>${lt[3].pts_sum}</td><td>${lt[3].pt1}</td><td>${lt[3].pt2}</td><td>${lt[3].pt3}</td><td>${lt[3].pt4}</td><td>${lt[3].pt5}</td><td>${lt[3].pt6}</td><td>${lt[3].pt7}</td>
                                </tr>
                                <tr>
                                    <td>5</td><td>${lt[4].nr}</td><td>${lt[4].name}</td><td>${lt[4].pts_sum}</td><td>${lt[4].pt1}</td><td>${lt[4].pt2}</td><td>${lt[4].pt3}</td><td>${lt[4].pt4}</td><td>${lt[4].pt5}</td><td>${lt[4].pt6}</td><td>${lt[4].pt7}</td>
                                </tr>
                                <tr>
                                    <td>6</td><td>${lt[5].nr}</td><td>${lt[5].name}</td><td>${lt[5].pts_sum}</td><td>${lt[5].pt1}</td><td>${lt[5].pt2}</td><td>${lt[5].pt3}</td><td>${lt[5].pt4}</td><td>${lt[5].pt5}</td><td>${lt[5].pt6}</td><td>${lt[5].pt7}</td>
                                </tr>
                                <tr>
                                    <td>7</td><td>${lt[6].nr}</td><td>${lt[6].name}</td><td>${lt[6].pts_sum}</td><td>${lt[6].pt1}</td><td>${lt[6].pt2}</td><td>${lt[6].pt3}</td><td>${lt[6].pt4}</td><td>${lt[6].pt5}</td><td>${lt[6].pt6}</td><td>${lt[6].pt7}</td>
                                </tr>
                                <tr>
                                    <td>8</td><td>${lt[7].nr}</td><td>${lt[7].name}</td><td>${lt[7].pts_sum}</td><td>${lt[7].pt1}</td><td>${lt[7].pt2}</td><td>${lt[7].pt3}</td><td>${lt[7].pt4}</td><td>${lt[7].pt5}</td><td>${lt[7].pt6}</td><td>${lt[7].pt7}</td>
                                </tr>
                                <tr>
                                    <td>9</td><td>${lt[8].nr}</td><td>${lt[8].name}</td><td>${lt[8].pts_sum}</td><td>${lt[8].pt1}</td><td>${lt[8].pt2}</td><td>${lt[8].pt3}</td><td>${lt[8].pt4}</td><td>${lt[8].pt5}</td><td>${lt[8].pt6}</td><td>${lt[8].pt7}</td>
                                </tr>
                                <tr>
                                    <td>10</td><td>${lt[9].nr}</td><td>${lt[9].name}</td><td>${lt[9].pts_sum}</td><td>${lt[9].pt1}</td><td>${lt[9].pt2}</td><td>${lt[9].pt3}</td><td>${lt[9].pt4}</td><td>${lt[9].pt5}</td><td>${lt[9].pt6}</td><td>${lt[9].pt7}</td>
                                </tr>
                                <tr>
                                    <td>11</td><td>${lt[10].nr}</td><td>${lt[10].name}</td><td>${lt[10].pts_sum}</td><td>${lt[10].pt1}</td><td>${lt[10].pt2}</td><td>${lt[10].pt3}</td><td>${lt[10].pt4}</td><td>${lt[10].pt5}</td><td>${lt[10].pt6}</td><td>${lt[10].pt7}</td>
                                </tr>
                                <tr>
                                    <td>12</td><td>${lt[11].nr}</td><td>${lt[11].name}</td><td>${lt[11].pts_sum}</td><td>${lt[11].pt1}</td><td>${lt[11].pt2}</td><td>${lt[11].pt3}</td><td>${lt[11].pt4}</td><td>${lt[11].pt5}</td><td>${lt[11].pt6}</td><td>${lt[11].pt7}</td>
                                </tr>
                                <tr>
                                    <td>13</td><td>${lt[12].nr}</td><td>${lt[12].name}</td><td>${lt[12].pts_sum}</td><td>${lt[12].pt1}</td><td>${lt[12].pt2}</td><td>${lt[12].pt3}</td><td>${lt[12].pt4}</td><td>${lt[12].pt5}</td><td>${lt[12].pt6}</td><td>${lt[12].pt7}</td>
                                </tr>
                                <tr>
                                    <td>14</td><td>${lt[13].nr}</td><td>${lt[13].name}</td><td>${lt[13].pts_sum}</td><td>${lt[13].pt1}</td><td>${lt[13].pt2}</td><td>${lt[13].pt3}</td><td>${lt[13].pt4}</td><td>${lt[13].pt5}</td><td>${lt[13].pt6}</td><td>${lt[13].pt7}</td>
                                </tr>
                                <tr>
                                    <td>15</td><td>${lt[14].nr}</td><td>${lt[14].name}</td><td>${lt[14].pts_sum}</td><td>${lt[14].pt1}</td><td>${lt[14].pt2}</td><td>${lt[14].pt3}</td><td>${lt[14].pt4}</td><td>${lt[14].pt5}</td><td>${lt[14].pt6}</td><td>${lt[14].pt7}</td>
                                </tr>
                                <tr>
                                    <td>16</td><td>${lt[15].nr}</td><td>${lt[15].name}</td><td>${lt[15].pts_sum}</td><td>${lt[15].pt1}</td><td>${lt[15].pt2}</td><td>${lt[15].pt3}</td><td>${lt[15].pt4}</td><td>${lt[15].pt5}</td><td>${lt[15].pt6}</td><td>${lt[15].pt7}</td>
                                </tr>

                  </table>   `
    
}

let sf_riders = [];
function semi_sgp(){

    for(i=0;i<riders.length;i++){
      sf_riders.push({
        nr: riders[i].nr,
        name: riders[i].name,
        tech: riders[i].tech,
        ref: riders[i].ref,
        mot: riders[i].mot,
        pts: riders[i].pts,
        pt1: riders[i].pts[0],
        pt2: riders[i].pts[1],
        pt3: riders[i].pts[2],
        pt4: riders[i].pts[3],
        pt5: riders[i].pts[4],
        pt6: riders[i].pts[5],
        pt7: riders[i].pts[6],
        pts_sum: riders[i].pts_sum
      }
      )
    }
    let lt = sf_riders.sort((a,b)=> ((b.pts_sum) - (a.pts_sum)))//live table
    console.log("Semi riders:");
    console.log(sf_riders);

    heat = `
    <tr>
    <th colspan="4">Semi-Final 1</th>
</tr>
<tr id="h1"><td colspan="4"><button onclick="sgp(sf_riders[0],sf_riders[7],sf_riders[4],sf_riders[3],h1,r1h1,r2h1,r3h1,r4h1)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h1"><td>${sf_riders[0].nr}</td><td>${sf_riders[0].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h1"><td>${sf_riders[7].nr}</td><td>${sf_riders[7].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h1"><td>${sf_riders[4].nr}</td><td>${sf_riders[4].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h1"><td>${sf_riders[3].nr}</td><td>${sf_riders[3].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Semi-Final 2</th>
</tr>
<tr id="h2"><td colspan="4"><button onclick="sgp(sf_riders[1],sf_riders[6],sf_riders[5],sf_riders[2],h2,r1h2,r2h2,r3h2,r4h2)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h2"><td>${sf_riders[1].nr}</td><td>${sf_riders[1].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h2"><td>${sf_riders[6].nr}</td><td>${sf_riders[6].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h2"><td>${sf_riders[5].nr}</td><td>${sf_riders[5].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h2"><td>${sf_riders[2].nr}</td><td>${sf_riders[2].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
`

schedule.innerHTML = heat;
schedule.innerHTML += `<tr><td colspan="4"><button onclick="final_sgp()" class="play_button btn_effect">Final</button></td></tr>`;

}

let f_riders = [];
function final_sgp(){
    for(i=0;i<riders.length;i++){
        if(riders[i].pts[5]>1){
            f_riders.push({
                nr: riders[i].nr,
                name: riders[i].name,
                tech: riders[i].tech,
                ref: riders[i].ref,
                mot: riders[i].mot,
                pts: riders[i].pts,
                pt1: riders[i].pts[0],
                pt2: riders[i].pts[1],
                pt3: riders[i].pts[2],
                pt4: riders[i].pts[3],
                pt5: riders[i].pts[4],
                pt6: riders[i].pts[5],
                pt7: riders[i].pts[6],
                pts_sum: riders[i].pts_sum
              }
              )
        }

      }
      let lt = f_riders.sort((a,b)=> ((b.pts_sum) - (a.pts_sum)))//live table
      console.log("Final riders:");
      console.log(f_riders);

      heat = `
    <tr>
    <th colspan="4">FINAL</th>
</tr>
<tr id="h1"><td colspan="4"><button onclick="sgp(f_riders[0],f_riders[1],f_riders[2],f_riders[3],h1,r1h1,r2h1,r3h1,r4h1)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h1"><td>${f_riders[0].nr}</td><td>${f_riders[0].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h1"><td>${f_riders[1].nr}</td><td>${f_riders[1].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h1"><td>${f_riders[2].nr}</td><td>${f_riders[2].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h1"><td>${f_riders[3].nr}</td><td>${f_riders[3].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
`
schedule.innerHTML = heat;


}


function heats(){
    heat = `
    <tr>
    <th colspan="4">Heat 1</th>
</tr>
<tr id="h1"><td colspan="4"><button onclick="sgp(riders[0],riders[1],riders[2],riders[3],h1,r1h1,r2h1,r3h1,r4h1)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h1"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h1"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h1"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h1"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 2</th>
</tr>
<tr id="h2"><td colspan="4"><button onclick="sgp(riders[4],riders[6],riders[5],riders[7],h2,r1h2,r2h2,r3h2,r4h2)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h2"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h2"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h2"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h2"><td>${riders[7].nr}</td><td>${riders[7].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 3</th>
</tr>
<tr id="h3"><td colspan="4"><button onclick="sgp(riders[9],riders[10],riders[8],riders[11],h3,r1h3,r2h3,r3h3,r4h3)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h3"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h3"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h3"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h3"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 4</th>
</tr>
<tr id="h4"><td colspan="4"><button onclick="sgp(riders[14],riders[13],riders[15],riders[12],h4,r1h4,r2h4,r3h4,r4h4)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h4"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h4"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h4"><td>${riders[15].nr}</td><td>${riders[15].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h4"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 5</th>
</tr>
<tr id="h5"><td colspan="4"><button onclick="sgp(riders[12],riders[0],riders[4],riders[8],h5,r1h5,r2h5,r3h5,r4h5)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h5"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h5"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h5"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h5"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 6</th>
</tr>
<tr id="h6"><td colspan="4"><button onclick="sgp(riders[13],riders[9],riders[1],riders[5],h6,r1h6,r2h6,r3h6,r4h6)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h6"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h6"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h6"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h6"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 7</th>
</tr>
<tr id="h7"><td colspan="4"><button onclick="sgp(riders[10],riders[14],riders[6],riders[2],h7,r1h7,r2h7,r3h7,r4h7)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h7"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h7"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h7"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h7"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 8</th>
</tr>
<tr id="h8"><td colspan="4"><button onclick="sgp(riders[3],riders[7],riders[11],riders[15],h8,r1h8,r2h8,r3h8,r4h8)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h8"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h8"><td>${riders[7].nr}</td><td>${riders[7].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h8"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h8"><td>${riders[15].nr}</td><td>${riders[15].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 9</th>
</tr>
<tr id="h9"><td colspan="4"><button onclick="sgp(riders[5],riders[15],riders[0],riders[10],h9,r1h9,r2h9,r3h9,r4h9)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h9"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h9"><td>${riders[15].nr}</td><td>${riders[15].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h9"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h9"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 10</th>
</tr>
<tr id="h10"><td colspan="4"><button onclick="sgp(riders[11],riders[4],riders[14],riders[1],h10,r1h10,r2h10,r3h10,r4h10)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h10"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h10"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h10"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h10"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 11</th>
</tr>
<tr id="h11"><td colspan="4"><button onclick="sgp(riders[7],riders[8],riders[2],riders[13],h11,r1h11,r2h11,r3h11,r4h11)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h11"><td>${riders[7].nr}</td><td>${riders[7].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h11"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h11"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h11"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 12</th>
</tr>
<tr id="h12"><td colspan="4"><button onclick="sgp(riders[12],riders[3],riders[9],riders[6],h12,r1h12,r2h12,r3h12,r4h12)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h12"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h12"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h12"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h12"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 13</th>
</tr>
<tr id="h13"><td colspan="4"><button onclick="sgp(riders[6],riders[11],riders[13],riders[0],h13,r1h13,r2h13,r3h13,r4h13)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h13"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h13"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h13"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h13"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 14</th>
</tr>
<tr id="h14"><td colspan="4"><button onclick="sgp(riders[1],riders[12],riders[7],riders[10],h14,r1h14,r2h14,r3h14,r4h14)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h14"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h14"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h14"><td>${riders[7].nr}</td><td>${riders[7].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h14"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 15</th>
</tr>
<tr id="h15"><td colspan="4"><button onclick="sgp(riders[15],riders[2],riders[9],riders[4],h15,r1h15,r2h15,r3h15,r4h15)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h15"><td>${riders[15].nr}</td><td>${riders[15].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h15"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h15"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h15"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 16</th>
</tr>
<tr id="h16"><td colspan="4"><button onclick="sgp(riders[8],riders[5],riders[3],riders[14],h16,r1h16,r2h16,r3h16,r4h16)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h16"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h16"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h16"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h16"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 17</th>
</tr>
<tr id="h17"><td colspan="4"><button onclick="sgp(riders[0],riders[7],riders[14],riders[9],h17,r1h17,r2h17,r3h17,r4h17)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h17"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h17"><td>${riders[7].nr}</td><td>${riders[7].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h17"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h17"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 18</th>
</tr>
<tr id="h18"><td colspan="4"><button onclick="sgp(riders[8],riders[1],riders[6],riders[15],h18,r1h18,r2h18,r3h18,r4h18)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h18"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h18"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h18"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h18"><td>${riders[15].nr}</td><td>${riders[15].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 19</th>
</tr>
<tr id="h19"><td colspan="4"><button onclick="sgp(riders[2],riders[11],riders[12],riders[5],h19,r1h19,r2h19,r3h19,r4h19)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h19"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h19"><td>${riders[11].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h19"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h19"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
    <th colspan="4">Heat 20</th>
</tr>
<tr id="h20"><td colspan="4"><button onclick="sgp(riders[4],riders[13],riders[10],riders[3],h20,r1h20,r2h20,r3h20,r4h20)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h20"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h20"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r3h20"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r4h20"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
`

schedule.classList.toggle('toggle');
schedule.innerHTML += heat;
schedule.innerHTML += `<tr><td colspan="4"><button onclick="semi_sgp()" class="play_button btn_effect">SemiFinal</button></td></tr>`;
}


