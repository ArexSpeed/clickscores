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



//wyswietlanie dostepnych lig
select.addEventListener('change', () => {
    showTeam.innerHTML = '';
    if (select.value == 'one') {
        showTeam.innerHTML += `Team1: <select name="" id="select_t1" class="select_input">
        <option value="">Select League</option>
        <option value="one">One</option>
         <option value="les">Unia</option>
         <option value="wro">Sparta</option>
         <option value="cze">Włókniarz</option>
         <option value="zie">Falubaz</option>
         <option value="gru">GKM</option>
         <option value="lub">Motor</option>
         <option value="gor">Stal</option>
         <option value="ryb">ROW</option>
         <option value="yt1">Your Team1</option>

     </select><br>`
     showTeam.innerHTML += `Team2: <select name="" id="select_t2" class="select_input">
     <option value="">Select League</option>
     <option value="one">One</option>
     <option value="les">Unia</option>
     <option value="wro">Sparta</option>
     <option value="cze">Włókniarz</option>
     <option value="zie">Falubaz</option>
     <option value="gru">GKM</option>
     <option value="lub">Motor</option>
     <option value="gor">Stal</option>
     <option value="ryb">ROW</option>
     <option value="yt2">Your Team2</option>

  </select><br>`

  showTeam.innerHTML += `<button onclick="next()" class="accept btn_effect">Next</button>`

    }
})

const next = () => {
    console.log('tralala');
    //showTeam.innerHTML = '';
    if (document.contains(document.querySelector(".versus"))) {
        document.querySelector(".versus").remove();
}
        let vs = document.createElement('div');
        vs.classList.add('versus');
        addTeams.append(vs);
    


    
    const select_t1 = document.querySelector('#select_t1');
  const select_t2 = document.querySelector('#select_t2');
let t1_name = select_t1.value;
let t2_name = select_t2.value;

  if(t1_name != t2_name){
    //vs.innerHTML +=  `${t1_name} <br>`;
    if(t1_name=="les"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<les.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${les[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${les[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${les[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${les[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="wro"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<wro.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${wro[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${wro[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${wro[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${wro[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="cze"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<cze.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${cze[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${cze[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${cze[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${cze[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="zie"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<zie.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${zie[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${zie[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${zie[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${zie[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="gru"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<gru.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${gru[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${gru[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${gru[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${gru[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="lub"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<lub.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${lub[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${lub[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${lub[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${lub[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="gor"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<gor.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${gor[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${gor[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${gor[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${gor[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="ryb"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<ryb.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${ryb[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${ryb[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${ryb[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${ryb[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t1_name=="yt1"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<yt1.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+9}" id="rider${i+8}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${yt1[i].name}" id="rider${i+8}_name"> </td>
                <td><input type="number" value="${yt1[i].tech}" id="rider${i+8}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${yt1[i].ref}" id="rider${i+8}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${yt1[i].mot}" id="rider${i+8}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    //TEAM 2
    vs.innerHTML +=  `${t2_name} <br>`;
    if(t2_name=="les"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<les.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${les[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${les[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${les[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${les[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="wro"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<wro.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${wro[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${wro[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${wro[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${wro[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="cze"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<cze.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${cze[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${cze[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${cze[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${cze[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="zie"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<zie.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${zie[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${zie[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${zie[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${zie[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="gru"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<gru.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${gru[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${gru[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${gru[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${gru[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="lub"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<lub.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${lub[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${lub[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${lub[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${lub[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="gor"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<gor.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${gor[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${gor[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${gor[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${gor[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="ryb"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<ryb.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${ryb[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${ryb[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${ryb[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${ryb[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    if(t2_name=="yt2"){
        vs.innerHTML += `<tr><td colspan="5">UNIA LESZNO</td></tr><br>`;
        for(let i = 0; i<yt2.length; i++){
            vs.innerHTML += ` 
                <tr>
                <td> <input type="number" value="${i+1}" id="rider${i}_nr" max="99" min="1"> </td>
                <td> <input type="text" value="${yt2[i].name}" id="rider${i}_name"> </td>
                <td><input type="number" value="${yt2[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${yt2[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                <td><input type="number" value="${yt2[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>`
        }
    }
    }
    else{
        vs.innerHTML +=  `The same teams!!`;
    }
    vs.innerHTML += `<button onclick="accept_one()" class="accept btn_effect">Accept</button>`
}
let hostP = 0;
let guestP = 0;
function accept_one(){
    //const rider_qty = document.querySelector('#rider_qty').value;

    //console.log(rider_qty);
    for (let i = 0; i < 16; i++) {
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
    button.innerHTML += `<button onclick="heats_one()" class="btn_start btn_effect">START</button>`

    //toggle divs to see
    game.classList.toggle('toggle');
    addTeams.classList.toggle('toggle');
    
    table_one();
}

function play_one(a,b,c,d,h_id,r1,r2,r3,r4){
    
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

    console.log(score1 + " " + a.name);
    console.log(score2+ " " + b.name);
    console.log(score3+ " " + c.name);
    console.log(score4+ " " + d.name);

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
      let h_host_pts = apts+bpts;
      let host_pts;
      let h_guest_pts = cpts+dpts;
      let guest_pts;
      console.log("R1: " + r1.value);
      
    hostP += h_host_pts;
    guestP += h_guest_pts;
    h_id.innerHTML = `<td></td><td>H: ${hostP} G: ${guestP}</td> <td colspan="2"> (${h_host_pts} : ${h_guest_pts})</td>`;
    r1.innerHTML = `<td>${a.nr}</td><td>${a.name}</td><td>${apos}</td><td>${apts}</td>`
    r2.innerHTML = `<td>${b.nr}</td><td>${b.name}</td><td>${bpos}</td><td>${bpts}</td>`
    r3.innerHTML = `<td>${c.nr}</td><td>${c.name}</td><td>${cpos}</td><td>${cpts}</td>`
    r4.innerHTML = `<td>${d.nr}</td><td>${d.name}</td><td>${dpos}</td><td>${dpts}</td>`
    //return score1 + ' ' + score2 + ' ' + score3 + ' ' + score4 + ' ' + scores;

    table_one();
}


function table_one(){
    let tab_riders = [];
    for(i=0;i<riders.length;i++){
      tab_riders.push({
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
    tab_riders.forEach(x =>{
        x.pt1 == undefined ? x.pt1='-' : x.pt1;
        x.pt2 == undefined ? x.pt2='-' : x.pt2;
        x.pt3 == undefined ? x.pt3='-' : x.pt3;
        x.pt4 == undefined ? x.pt4='-' : x.pt4;
        x.pt5 == undefined ? x.pt5='-' : x.pt5;
        x.pt6 == undefined ? x.pt6='-' : x.pt6;
        x.pt7 == undefined ? x.pt7='-' : x.pt7;
    })
    // console.log(new_riders);
    //let lt = new_riders.sort((a,b)=> ((b.pts_sum) - (a.pts_sum)))//live table
    
    tableSort.innerHTML = `Host Guest<br>
                          <span class="point">${hostP}</span> : <span class="point">${guestP}</span> <br>`
    tableSort.innerHTML += `<table>
                                <tr>
                                    <th colspan="9">Host</th>
                                </tr>
                                <tr>
                                    <td>Nr</td><td>Name</td><td>PTS</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
                                </tr>
                                <tr>
                                    <td>9</td><td>${tab_riders[8].name}</td><td>${tab_riders[8].pts_sum}</td><td>${tab_riders[8].pt1}</td><td>${tab_riders[8].pt2}</td><td>${tab_riders[8].pt3}</td><td>${tab_riders[8].pt4}</td><td>${tab_riders[8].pt5}</td><td>${tab_riders[8].pt6}</td>
                                </tr>
                                <tr>
                                    <td>10</td><td>${tab_riders[9].name}</<td><td>${tab_riders[9].pts_sum}</td><td>${tab_riders[9].pt1}</td><td>${tab_riders[9].pt2}</td><td>${tab_riders[9].pt3}</td><td>${tab_riders[9].pt4}</td><td>${tab_riders[9].pt5}</td><td>${tab_riders[9].pt6}</td>
                                </tr>
                                <tr>
                                    <td>11</td><td>${tab_riders[10].name}</td><td>${tab_riders[10].pts_sum}</td><td>${tab_riders[10].pt1}</td><td>${tab_riders[10].pt2}</td><td>${tab_riders[10].pt3}</td><td>${tab_riders[10].pt4}</td><td>${tab_riders[10].pt5}</td><td>${tab_riders[10].pt6}</td>
                                </tr>
                                <tr>
                                    <td>12</td><td>${tab_riders[11].name}</td><td>${tab_riders[11].pts_sum}</td><td>${tab_riders[11].pt1}</td><td>${tab_riders[11].pt2}</td><td>${tab_riders[11].pt3}</td><td>${tab_riders[11].pt4}</td><td>${tab_riders[11].pt5}</td><td>${tab_riders[11].pt6}</td>
                                </tr>
                                <tr>
                                    <td>13</td><td>${tab_riders[12].name}</td><td>${tab_riders[12].pts_sum}</td><td>${tab_riders[12].pt1}</td><td>${tab_riders[12].pt2}</td><td>${tab_riders[12].pt3}</td><td>${tab_riders[12].pt4}</td><td>${tab_riders[12].pt5}</td><td>${tab_riders[12].pt6}</td>
                                </tr>
                                <tr>
                                    <td>14</td><td>${tab_riders[13].name}</td><td>${tab_riders[13].pts_sum}</td><td>${tab_riders[13].pt1}</td><td>${tab_riders[13].pt2}</td><td>${tab_riders[13].pt3}</td><td>${tab_riders[13].pt4}</td><td>${tab_riders[13].pt5}</td><td>${tab_riders[13].pt6}</td>
                                </tr>
                                <tr>
                                    <td>15</td><td>${tab_riders[14].name}</td><td>${tab_riders[14].pts_sum}</td><td>${tab_riders[14].pt1}</td><td>${tab_riders[14].pt2}</td><td>${tab_riders[14].pt3}</td><td>${tab_riders[14].pt4}</td><td>${tab_riders[14].pt5}</td><td>${tab_riders[14].pt6}</td>
                                </tr>
                                <tr>
                                    <td>16</td><td>${tab_riders[15].name}</<td<td><td>${tab_riders[15].pts_sum}</td><td>${tab_riders[15].pt1}</td><td>${tab_riders[15].pt2}</td><td>${tab_riders[15].pt3}</td><td>${tab_riders[15].pt4}</td><td>${tab_riders[15].pt5}</td><td>${tab_riders[15].pt6}</td>
                                </tr>
                                
                  </table>   `
tableSort.innerHTML += `<table>
                  <tr>
                      <th colspan="9">Guest</th>
                  </tr>
                  <tr>
                      <td>Nr</td><td>Name</td><td>PTS</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
                  </tr>
                  <tr>
                      <td>1</td><td>${tab_riders[0].name}</td><td>${tab_riders[0].pts_sum}</td><td>${tab_riders[0].pt1}</td><td>${tab_riders[0].pt2}</td><td>${tab_riders[0].pt3}</td><td>${tab_riders[0].pt4}</td><td>${tab_riders[0].pt5}</td><td>${tab_riders[0].pt6}</td>
                  </tr>
                  <tr>
                      <td>2</td><td>${tab_riders[1].name}</td><td>${tab_riders[1].pts_sum}</td><td>${tab_riders[1].pt1}</td><td>${tab_riders[1].pt2}</td><td>${tab_riders[1].pt3}</td><td>${tab_riders[1].pt4}</td><td>${tab_riders[1].pt5}</td><td>${tab_riders[1].pt6}</td>
                  </tr>
                  <tr>
                      <td>3</td><td>${tab_riders[2].name}</td><td>${tab_riders[2].pts_sum}</td><td>${tab_riders[2].pt1}</td><td>${tab_riders[2].pt2}</td><td>${tab_riders[2].pt3}</td><td>${tab_riders[2].pt4}</td><td>${tab_riders[2].pt5}</td><td>${tab_riders[2].pt6}</td>
                  </tr>
                  <tr>
                      <td>4</td><td>${tab_riders[3].name}</td><td>${tab_riders[3].pts_sum}</td><td>${tab_riders[3].pt1}</td><td>${tab_riders[3].pt2}</td><td>${tab_riders[3].pt3}</td><td>${tab_riders[3].pt4}</td><td>${tab_riders[3].pt5}</td><td>${tab_riders[3].pt6}</td>
                  </tr>
                  <tr>
                      <td>5</td><td>${tab_riders[4].name}</td><td>${tab_riders[4].pts_sum}</td><td>${tab_riders[4].pt1}</td><td>${tab_riders[4].pt2}</td><td>${tab_riders[4].pt3}</td><td>${tab_riders[4].pt4}</td><td>${tab_riders[4].pt5}</td><td>${tab_riders[4].pt6}</td>
                  </tr>
                  <tr>
                      <td>6</td><td>${tab_riders[5].name}</td><td>${tab_riders[5].pts_sum}</td><td>${tab_riders[5].pt1}</td><td>${tab_riders[5].pt2}</td><td>${tab_riders[5].pt3}</td><td>${tab_riders[5].pt4}</td><td>${tab_riders[5].pt5}</td><td>${tab_riders[5].pt6}</td>
                  </tr>
                  <tr>
                      <td>7</td><td>${tab_riders[6].name}</td><td>${tab_riders[6].pts_sum}</td><td>${tab_riders[6].pt1}</td><td>${tab_riders[6].pt2}</td><td>${tab_riders[6].pt3}</td><td>${tab_riders[6].pt4}</td><td>${tab_riders[6].pt5}</td><td>${tab_riders[6].pt6}</td>
                  </tr>
                  <tr>
                      <td>8</td><td>${tab_riders[7].name}</td><td>${tab_riders[7].pts_sum}</td><td>${tab_riders[7].pt1}</td><td>${tab_riders[7].pt2}</td><td>${tab_riders[7].pt3}</td><td>${tab_riders[7].pt4}</td><td>${tab_riders[7].pt5}</td><td>${tab_riders[7].pt6}</td>
                  </tr>
                  
    </table>   `
    
}

function heats_one(){
    console.log(riders);
    heat = `
    <tr>
    <th colspan="4">Heat 1</th>
</tr>
<tr id="h1"><td colspan="4"><button onclick="play_one(riders[8],riders[9],riders[0],riders[1],h1,r1h1,r2h1,r3h1,r4h1)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h1"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h1"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h1"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h1"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
`;

heat+= `
<tr>
    <th colspan="4">Heat 2</th>
</tr>
<tr id="h2"><td colspan="4"><button onclick="play_one(riders[13],riders[14],riders[5],riders[6],h2,r1h2,r2h2,r3h2,r4h2)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="yellow_hel" id="r3h2"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr class="red_hel" id="r1h2"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h2"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h2"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

`;

heat += `
<tr>
<th colspan="4">Heat 3</th>
</tr>
<tr id="h3"><td colspan="2"><button onclick="change(riders[10],riders[11],riders[2],riders[3],h3,r1h3,r2h3,r3h3,r4h3)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[10],riders[11],riders[2],riders[3],h3,r1h3,r2h3,r3h3,r4h3)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h3"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h3"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h3"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h3"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>
<tr>
<th colspan="4">Heat 4</th>
</tr>
<tr id="h4"><td colspan="2"><button onclick="change(riders[12],riders[14],riders[4],riders[6],h4,r1h4,r2h4,r3h4,r4h4)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[12],riders[14],riders[4],riders[6],h4,r1h4,r2h4,r3h4,r4h4)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="yellow_hel" id="r3h4"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr class="red_hel" id="r1h4"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h4"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h4"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 5</th>
</tr>
<tr id="h5"><td colspan="2"><button onclick="change(riders[10],riders[11],riders[0],riders[1],h5,r1h5,r2h5,r3h5,r4h5)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[10],riders[11],riders[0],riders[1],h5,r1h5,r2h5,r3h5,r4h5)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h5"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h5"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h5"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h5"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 6</th>
</tr>
<tr id="h6"><td colspan="2"><button onclick="change(riders[12],riders[14],riders[2],riders[3],h6,r1h6,r2h6,r3h6,r4h6)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[12],riders[14],riders[2],riders[3],h6,r1h6,r2h6,r3h6,r4h6)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="yellow_hel" id="r3h6"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="red_hel" id="r1h6"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h6"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h6"><td>${riders[14].nr}</td><td>${riders[14].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 7</th>
</tr>
<tr id="h7"><td colspan="2"><button onclick="change(riders[8],riders[9],riders[4],riders[5],h7,r1h7,r2h7,r3h7,r4h7)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[8],riders[9],riders[4],riders[5],h7,r1h7,r2h7,r3h7,r4h7)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h7"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h7"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h7"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h7"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 8</th>
</tr>
<tr id="h8"><td colspan="2"><button onclick="change(riders[12],riders[13],riders[0],riders[1],h8,r1h8,r2h8,r3h8,r4h8)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[12],riders[13],riders[0],riders[1],h8,r1h8,r2h8,r3h8,r4h8)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="yellow_hel" id="r3h8"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="red_hel" id="r1h8"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h8"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h8"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 9</th>
</tr>
<tr id="h9"><td colspan="2"><button onclick="change(riders[8],riders[9],riders[2],riders[3],h9,r1h9,r2h9,r3h9,r4h9)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[8],riders[9],riders[2],riders[3],h9,r1h9,r2h9,r3h9,r4h9)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h9"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h9"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h9"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h9"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 10</th>
</tr>
<tr id="h10"><td colspan="2"><button onclick="change(riders[10],riders[11],riders[4],riders[6],h10,r1h10,r2h10,r3h10,r4h10)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[10],riders[11],riders[4],riders[6],h10,r1h10,r2h10,r3h10,r4h10)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="yellow_hel" id="r3h10"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr class="red_hel" id="r1h10"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h10"><td>${riders[6].nr}</td><td>${riders[6].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h10"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 11</th>
</tr>
<tr id="h11"><td colspan="2"><button onclick="change(riders[9],riders[12],riders[2],riders[1],h11,r1h11,r2h11,r3h11,r4h11)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[9],riders[12],riders[2],riders[1],h11,r1h11,r2h11,r3h11,r4h11)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h11"><td>${riders[9].nr}</td><td>${riders[9].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h11"><td>${riders[2].nr}</td><td>${riders[2].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h11"><td>${riders[12].nr}</td><td>${riders[12].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h11"><td>${riders[1].nr}</td><td>${riders[1].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 12</th>
</tr>
<tr id="h12"><td colspan="2"><button onclick="change(riders[10],riders[13],riders[0],riders[5],h12,r1h12,r2h12,r3h12,r4h12)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[10],riders[13],riders[0],riders[5],h12,r1h12,r2h12,r3h12,r4h12)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="yellow_hel" id="r3h12"><td>${riders[0].nr}</td><td>${riders[0].name}</td><td></td><td></td></tr>
<tr class="red_hel" id="r1h12"><td>${riders[10].nr}</td><td>${riders[10].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h12"><td>${riders[5].nr}</td><td>${riders[5].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h12"><td>${riders[13].nr}</td><td>${riders[13].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 13</th>
</tr>
<tr id="h13"><td colspan="2"><button onclick="change(riders[8],riders[11],riders[3],riders[4],h13,r1h13,r2h13,r3h13,r4h13)" class="play_button btn_effect">Change</button></td>
<td colspan="2"><button onclick="play_one(riders[8],riders[11],riders[3],riders[4],h13,r1h13,r2h13,r3h13,r4h13)" class="play_button btn_effect">GO</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h13"><td>${riders[8].nr}</td><td>${riders[8].name}</td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h13"><td>${riders[3].nr}</td><td>${riders[3].name}</td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h13"><td>${riders[11].nr}</td><td>${riders[11].name}</td><td></td><td></td></tr>
<tr class="white_hel" id="r4h13"><td>${riders[4].nr}</td><td>${riders[4].name}</td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 14</th>
</tr>
<tr id="h14"><td colspan="4"><button onclick="nomine(h14,r1h14,r2h14,r3h14,r4h14,h15,r1h15,r2h15,r3h15,r4h15)" class="play_button btn_effect">OK</button></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="yellow_hel" id="r3h14"><td></td><td></td><td></td><td></td></tr>
<tr class="red_hel" id="r1h14"><td></td><td></td><td></td><td></td></tr>
<tr class="white_hel" id="r4h14"><td></td><td></td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h14"><td></td><td></td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>

<tr>
<th colspan="4">Heat 15</th>
<tr id="h15"><td colspan="4"></td>
</tr>
<tr><td>NR</td><td>Name</td><td>Pos</td><td>Pts</td></tr>
<tr class="red_hel" id="r1h15"><td></td><td></td><td></td><td></td></tr>
<tr class="yellow_hel" id="r3h15"><td></td><td></td><td></td><td></td></tr>
<tr class="blue_hel" id="r2h15"><td></td><td></td><td></td><td></td></tr>
<tr class="white_hel" id="r4h15"><td></td><td></td><td></td><td></td></tr>
<tr><th colspan="4" class="end_round">X</th></tr>



`;



schedule.classList.toggle('toggle');
schedule.innerHTML += heat;


}
let arider;
let brider;
let crider;
let drider;
// let ap;
// let bp;
// let cp;
// let dp;
function change(r1,r2,r3,r4,h,a,b,c,d){
console.log(h);
// ap = a.id; //get id from this rider's place in schedule (r1h3)
// bp = b.id;
// cp = c.id;
// dp = d.id;
//console.log(ap + ' ' + bp + ' ' + cp + ' ' +dp);

// a,b,c,d ID to <tr></tr> change context if you want change a rider
a.innerHTML = `
<td>${r1.nr}</td>
<td>
    <select id="ar" class="change_select">
        <option>${r1.name}</option>
        <option>${riders[8].name}</option>
        <option>${riders[9].name}</option>
        <option>${riders[10].name}</option>
        <option>${riders[11].name}</option>
        <option>${riders[12].name}</option>
        <option>${riders[13].name}</option>
        <option>${riders[14].name}</option>       
        <option>${riders[15].name}</option>
    </select>
</td><td></td><td></td>
`
b.innerHTML = `
<td>${r2.nr}</td>
<td>
    <select id="br" class="change_select">
        <option>${r2.name}</option>
        <option>${riders[8].name}</option>
        <option>${riders[9].name}</option>
        <option>${riders[10].name}</option>
        <option>${riders[11].name}</option>
        <option>${riders[12].name}</option>
        <option>${riders[13].name}</option>
        <option>${riders[14].name}</option>       
        <option>${riders[15].name}</option>
    </select>
</td><td></td><td></td>
`
c.innerHTML = `
<td>${r3.nr}</td>
<td>
    <select id="cr" class="change_select">
        <option>${r3.name}</option>
        <option>${riders[0].name}</option>
        <option>${riders[1].name}</option>
        <option>${riders[2].name}</option>
        <option>${riders[3].name}</option>
        <option>${riders[4].name}</option>
        <option>${riders[5].name}</option>
        <option>${riders[6].name}</option>
        <option>${riders[7].name}</option>
    </select>
</td><td></td><td></td>
`
d.innerHTML = `
<td>${r4.nr}</td>
<td>
    <select id="dr" class="change_select">
        <option>${r4.name}</option>
        <option>${riders[0].name}</option>
        <option>${riders[1].name}</option>
        <option>${riders[2].name}</option>
        <option>${riders[3].name}</option>
        <option>${riders[4].name}</option>
        <option>${riders[5].name}</option>
        <option>${riders[6].name}</option>
        <option>${riders[7].name}</option>
    </select>
</td><td></td><td></td>
`

//ar - Rider from a position etc
const ar = document.querySelector('#ar');
const br = document.querySelector('#br');
const cr = document.querySelector('#cr');
const dr = document.querySelector('#dr');
for(let i =0; i<16; i++){
    if(ar.value == riders[i].name){
        console.log('Wybrany 1');
        console.log(riders[i]);
        arider = riders[i];
    }
    if(br.value == riders[i].name){
        brider = riders[i];
    }
    if(cr.value == riders[i].name){
        crider = riders[i];
    }
    if(dr.value == riders[i].name){
        drider = riders[i];
    }
}
ar.addEventListener('change',()=>{
    console.log(ar.value);
    for(let i =0; i<16; i++){
        if(ar.value == riders[i].name){
            console.log('Wybrany');
            console.log(riders[i]);
            arider = 0;
            return arider = riders[i];
            // arider.pop();
            // arider.push(riders[i]);
        }
    }
})
br.addEventListener('change',()=>{
    console.log(br.value);
    for(let i =0; i<16; i++){
        if(br.value == riders[i].name){
            brider = 0;
            return brider = riders[i];
        }
    }
})
cr.addEventListener('change',()=>{
    console.log(cr.value);
    for(let i =0; i<16; i++){
        if(cr.value == riders[i].name){
            crider = 0;
            return crider = riders[i];
        }
    }
})
dr.addEventListener('change',()=>{
    console.log(dr.value);
    for(let i =0; i<16; i++){
        if(dr.value == riders[i].name){
            drider = 0;
            return drider = riders[i];
        }
    }
})

//console.log(ar1);
//console.log("odczyt ap: " + ap);
if(a.id == 'r1h3'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h3,r1h3,r2h3,r3h3,r4h3)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h4'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h4,r1h4,r2h4,r3h4,r4h4)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h5'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h5,r1h5,r2h5,r3h5,r4h5)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h6'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h6,r1h6,r2h6,r3h6,r4h6)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h7'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h7,r1h7,r2h7,r3h7,r4h7)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h8'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h8,r1h8,r2h8,r3h8,r4h8)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h9'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h9,r1h9,r2h9,r3h9,r4h9)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h10'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h10,r1h10,r2h10,r3h10,r4h10)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h11'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h11,r1h11,r2h11,r3h11,r4h11)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h12'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h12,r1h12,r2h12,r3h12,r4h12)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h13'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h13,r1h13,r2h13,r3h13,r4h13)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h14'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h14,r1h14,r2h14,r3h14,r4h14)" class="play_button btn_effect">GO</button></td>
    `
}
if(a.id == 'r1h15'){
    h.innerHTML = `<td colspan="4"><button onclick="play_one(arider,brider,crider,drider,h15,r1h15,r2h15,r3h15,r4h15)" class="play_button btn_effect">GO</button></td>
    `
}

}

let an1rider;
let bn1rider;
let cn1rider;
let dn1rider;
let an2rider;
let bn2rider;
let cn2rider;
let dn2rider;
function nomine(h14,a,b,c,d,h15,a2,b2,c2,d2){
    let griders = [];
    for(let i =0; i<7; i++){
        griders.push(riders[i])
    }
    griders.sort((a,b)=>(b.pts_sum)-(a.pts_sum));
    console.log(griders);
    let hriders = [];
    for(let i =8; i<15; i++){
        hriders.push(riders[i])
    }
    hriders.sort((a,b)=>(b.pts_sum)-(a.pts_sum));
    console.log(hriders);

    for(let i =0; i<16; i++){
        if(hriders[0].name == riders[i].name){
            console.log('Wybrany 1');
            console.log(riders[i]);
            an2rider = riders[i];
        }
        if(hriders[1].name == riders[i].name){
            bn2rider = riders[i];
        }
        if(griders[0].name == riders[i].name){
            cn2rider = riders[i];
        }
        if(griders[1].name == riders[i].name){
            dn2rider = riders[i];
        }
        if(hriders[2].name == riders[i].name){
            console.log('Wybrany 1');
            console.log(riders[i]);
            an1rider = riders[i];
        }
        if(hriders[3].name == riders[i].name){
            bn1rider = riders[i];
        }
        if(griders[2].name == riders[i].name){
            cn1rider = riders[i];
        }
        if(griders[3].name == riders[i].name){
            dn1rider = riders[i];
        }
    }

        h14.innerHTML = `<td colspan="2"><button onclick="change(an1rider,bn1rider,cn1rider,dn1rider,h14,r1h14,r2h14,r3h14,r4h14)" class="play_button btn_effect">Change</button></td>
        <td colspan="2"><button onclick="play_one(an1rider,bn1rider,cn1rider,dn1rider,h14,r1h14,r2h14,r3h14,r4h14)" class="play_button btn_effect">GO</button></td>
        `
        a.innerHTML = `<td>${hriders[2].nr}</td><td>${hriders[2].name}</td><td></td><td></td>`
        b.innerHTML = `<td>${hriders[3].nr}</td><td>${hriders[3].name}</td><td></td><td></td>`
        c.innerHTML = `<td>${griders[2].nr}</td><td>${griders[2].name}</td><td></td><td></td>`
        d.innerHTML = `<td>${griders[3].nr}</td><td>${griders[3].name}</td><td></td><td></td>`

        h15.innerHTML = `<td colspan="2"><button onclick="change(an2rider,bn2rider,cn2rider,dn2rider,h15,r1h15,r2h15,r3h15,r4h15)" class="play_button btn_effect">Change</button></td>
        <td colspan="2"><button onclick="play_one(an2rider,bn2rider,cn2rider,dn2rider,h15,r1h15,r2h15,r3h15,r4h15)" class="play_button btn_effect">GO</button></td>
        `
        a2.innerHTML = `<td>${hriders[0].nr}</td><td>${hriders[0].name}</td><td></td><td></td>`
        b2.innerHTML = `<td>${hriders[1].nr}</td><td>${hriders[1].name}</td><td></td><td></td>`
        c2.innerHTML = `<td>${griders[0].nr}</td><td>${griders[0].name}</td><td></td><td></td>`
        d2.innerHTML = `<td>${griders[1].nr}</td><td>${griders[1].name}</td><td></td><td></td>`


  
}

const les = [
    {   
        name: "E. Sayfutdinov",
        tech: 90,
        ref: 90,
        mot: 88,
    },    {   
        name: "B. Kurtz",
        tech: 80,
        ref: 80,
        mot: 82,
    },    {   
        name: "J. Hampel",
        tech: 85,
        ref: 88,
        mot: 90,
    },    {   
        name: "J. Kołodziej",
        tech: 87,
        ref: 85,
        mot: 87,
    },    {   
        name: "P. Pawlicki",
        tech: 87,
        ref: 86,
        mot: 87,
    },    {   
        name: "D. Kubera",
        tech: 85,
        ref: 82,
        mot: 83,
    },    {   
        name: "S. Szlauderbach",
        tech: 76,
        ref: 74,
        mot: 80,
    }, {   
        name: "B. Smektała",
        tech: 86,
        ref: 86,
        mot: 86,
    },
]
const wro = [
    {   
        name: "T. Woffinden",
        tech: 88,
        ref: 88,
        mot: 88,
    },    {   
        name: "G. Czogunov",
        tech: 81,
        ref: 80,
        mot: 82,
    },    {   
        name: "M. Drabik",
        tech: 86,
        ref: 86,
        mot: 86,
    },    {   
        name: "M. Fricke",
        tech: 84,
        ref: 83,
        mot: 83,
    },    {   
        name: "M. Janowski",
        tech: 87,
        ref: 86,
        mot: 87,
    },    {   
        name: "P. Liszka",
        tech: 74,
        ref: 76,
        mot: 77,
    },    {   
        name: "P. Wojdyła",
        tech: 71,
        ref: 72,
        mot: 74,
    }, {   
        name: "D. Bewley",
        tech: 80,
        ref: 78,
        mot: 80,
    },
]

const cze = [
    {   
        name: "J. Doyle",
        tech: 86,
        ref: 85,
        mot: 88,
    },    {   
        name: "R. Holta",
        tech: 80,
        ref: 79,
        mot: 82,
    },    {   
        name: "F. Lindgren",
        tech: 84,
        ref: 84,
        mot: 86,
    },    {   
        name: "P. Przedpełski",
        tech: 77,
        ref: 76,
        mot: 79,
    },    {   
        name: "L. Madsen",
        tech: 90,
        ref: 89,
        mot: 88,
    },    {   
        name: "J. Miśkowiak",
        tech: 77,
        ref: 76,
        mot: 77,
    },    {   
        name: "B. Kowalski",
        tech: 66,
        ref: 69,
        mot: 70,
    }, {   
        name: "",
        tech: 80,
        ref: 78,
        mot: 80,
    },
]

const zie = [
    {   
        name: "P. Dudek",
        tech: 87,
        ref: 88,
        mot: 88,
    },    {   
        name: "M. Jensen",
        tech: 83,
        ref: 80,
        mot: 83,
    },    {   
        name: "P. Protasiewicz",
        tech: 84,
        ref: 83,
        mot: 84,
    },    {   
        name: "A. Lindbaeck",
        tech: 85,
        ref: 84,
        mot: 84,
    },    {   
        name: "M. Vaculik",
        tech: 88,
        ref: 87,
        mot: 88,
    },    {   
        name: "N. Krakowiak",
        tech: 74,
        ref: 76,
        mot: 77,
    },    {   
        name: "M. Tonder",
        tech: 72,
        ref: 72,
        mot: 74,
    }, {   
        name: "J. Kvech",
        tech: 79,
        ref: 74,
        mot: 78,
    },
]

const gru = [
    {   
        name: "A. Laguta",
        tech: 86,
        ref: 87,
        mot: 87,
    },    {   
        name: "K. Buczkowski",
        tech: 82,
        ref: 83,
        mot: 82,
    },    {   
        name: "K. Bjerre",
        tech: 84,
        ref: 86,
        mot: 85,
    },    {   
        name: "Pr. Pawlicki",
        tech: 84,
        ref: 86,
        mot: 86,
    },    {   
        name: "N. Pedersen",
        tech: 85,
        ref: 84,
        mot: 87,
    },    {   
        name: "M. Turowski",
        tech: 72,
        ref: 73,
        mot: 74,
    },    {   
        name: "D. Lotarski",
        tech: 71,
        ref: 71,
        mot: 71,
    }, {   
        name: "R. Lauchbaum",
        tech: 74,
        ref: 76,
        mot: 76,
    },
]

const lub = [
    {   
        name: "M. Mikkelsen",
        tech: 85,
        ref: 86,
        mot: 87,
    },    {   
        name: "J. Jamróg",
        tech: 81,
        ref: 81,
        mot: 81,
    },    {   
        name: "M. Zagar",
        tech: 84,
        ref: 85,
        mot: 86,
    },    {   
        name: "P. Miesiąc",
        tech: 82,
        ref: 81,
        mot: 81,
    },    {   
        name: "G. Laguta",
        tech: 85,
        ref: 86,
        mot: 87,
    },    {   
        name: "W. Lampart",
        tech: 80,
        ref: 81,
        mot: 80,
    },    {   
        name: "W. Trofimov",
        tech: 79,
        ref: 78,
        mot: 80,
    }, {   
        name: "O. Bober",
        tech: 78,
        ref: 79,
        mot: 80,
    },
]
const gor = [
    {   
        name: "N. Iversen",
        tech: 87,
        ref: 87,
        mot: 87,
    },    {   
        name: "A. Thomsen",
        tech: 83,
        ref: 83,
        mot: 82,
    },    {   
        name: "K. Kasprzak",
        tech: 84,
        ref: 86,
        mot: 84,
    },    {   
        name: "S. Woźniak",
        tech: 85,
        ref: 84,
        mot: 85,
    },    {   
        name: "B. Zmarzlik",
        tech: 90,
        ref: 90,
        mot: 90,
    },    {   
        name: "R. Karczmarz",
        tech: 76,
        ref: 76,
        mot: 77,
    },    {   
        name: "M. Borowiak",
        tech: 71,
        ref: 70,
        mot: 72,
    }, {   
        name: "F. Hjelmland",
        tech: 76,
        ref: 77,
        mot: 77,
    },
]
const ryb = [
    {   
        name: "T. Batchelor",
        tech: 84,
        ref: 85,
        mot: 85,
    },    {   
        name: "M. Szczepaniak",
        tech: 79,
        ref: 80,
        mot: 80,
    },    {   
        name: "A. Lebiediev",
        tech: 82,
        ref: 83,
        mot: 83,
    },    {   
        name: "V. Milik",
        tech: 83,
        ref: 82,
        mot: 83,
    },    {   
        name: "K. Woryna",
        tech: 87,
        ref: 86,
        mot: 87,
    },    {   
        name: "P. Giera",
        tech: 72,
        ref: 73,
        mot: 75,
    },    {   
        name: "M. Tudzień",
        tech: 71,
        ref: 72,
        mot: 73,
    }, {   
        name: "R. Lambert",
        tech: 82,
        ref: 82,
        mot: 82,
    },
]

const yt1 = [
    {   
        name: "Rider 1",
        tech: 80,
        ref: 80,
        mot: 80,
    },       {   
        name: "Rider 2",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 3",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 4",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 5",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 6",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 7",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 8",
        tech: 80,
        ref: 80,
        mot: 80,
    }, 
]
const yt2 = [
    {   
        name: "Rider 1",
        tech: 80,
        ref: 80,
        mot: 80,
    },       {   
        name: "Rider 2",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 3",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 4",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 5",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 6",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 7",
        tech: 80,
        ref: 80,
        mot: 80,
    },     {   
        name: "Rider 8",
        tech: 80,
        ref: 80,
        mot: 80,
    }, 
]

