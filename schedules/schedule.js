const setTeams = document.querySelector('.set_teams');
const schedule = document.querySelector('.schedule');
const buttons = document.querySelector('.buttons');
const select = document.getElementById('select');

  
  

function choose(){
    let num = select.value;
    setTeams.innerHTML = '';
    schedule.innerHTML = '';
    setTeams.innerHTML += `Nazwa rund: <select id="round_name">
    <option value="Round">Round</option>
    <option value="Runda">Runda</option>
    <option value="Kolejka">Kolejka</option>
    <option value="Day">Day</option>
    <option value="Dzień">Dzień</option>
    <option value="Week">Week</option>
    </select>`
    if(num == 'gr34'){
      for(i = 0; i<4; i++){
          setTeams.innerHTML += `Pot ${i+1}: <br>`
          for(j=0; j<3; j++){
              setTeams.innerHTML += `Team ${j+1} : <input type="text" name="name" id="team-${(i*3)+j}" placeholder="team name"> <br>`;
          }
          
      }
      setTeams.innerHTML += `<button onclick="groupen()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Losuj</button>`;
  }
  else if(num == 'gr43'){
    for(i = 0; i<3; i++){
        setTeams.innerHTML += `Pot ${i+1}: <br>`
        for(j=0; j<4; j++){
            setTeams.innerHTML += `Team ${j+1} : <input type="text" name="name" id="team-${(i*4)+j}" placeholder="team name"> <br>`;
        }
        
    }
    setTeams.innerHTML += `<button onclick="groupen()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Losuj</button>`;
}
    else if(num == 'gr44'){
        for(i = 0; i<4; i++){
            setTeams.innerHTML += `Pot ${i+1}: <br>`
            for(j=0; j<4; j++){
                setTeams.innerHTML += `Team ${j+1} : <input type="text" name="name" id="team-${(i*4)+j}" placeholder="team name"> <br>`;
            }
            
        }
        setTeams.innerHTML += `<button onclick="groupen()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Losuj</button>`;
    }
    else if(num == 'gr64'){
      for(i = 0; i<4; i++){
          setTeams.innerHTML += `Pot ${i+1}: <br>`
          for(j=0; j<6; j++){
              setTeams.innerHTML += `Team ${j+1} : <input type="text" name="name" id="team-${(i*6)+j}" placeholder="team name"> <br>`;
          }
          
      }
      setTeams.innerHTML += `<button onclick="groupen()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Losuj</button>`;
  }
  else if(num == 'gr84'){
    for(i = 0; i<4; i++){
        setTeams.innerHTML += `Pot ${i+1}: <br>`
        for(j=0; j<8; j++){
            setTeams.innerHTML += `Team ${j+1} : <input type="text" name="name" id="team-${(i*8)+j}" placeholder="team name"> <br>`;
        }
        
    }
    setTeams.innerHTML += `<button onclick="groupen()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Losuj</button>`;
}
else if(num == 'gr26'){
  for(i = 0; i<6; i++){
      setTeams.innerHTML += `Pot ${i+1}: <br>`
      for(j=0; j<2; j++){
          setTeams.innerHTML += `Team ${j+1} : <input type="text" name="name" id="team-${(i*2)+j}" placeholder="team name"> <br>`;
      }
      
  }
  setTeams.innerHTML += `<button onclick="groupen()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Losuj</button>`;
}
else if(num == 'gr46'){
  for(i = 0; i<6; i++){
      setTeams.innerHTML += `Pot ${i+1}: <br>`
      for(j=0; j<4; j++){
          setTeams.innerHTML += `Team ${j+1} : <input type="text" name="name" id="team-${(i*4)+j}" placeholder="team name"> <br>`;
      }
      
  }
  setTeams.innerHTML += `<button onclick="groupen()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Losuj</button>`;
}
    else{
        for(i = 1; i<= num; i++){
            setTeams.innerHTML += `Team ${i} : <input type="text" name="name" id="team-${i}" placeholder="team name"> <br>`;
        }
        setTeams.innerHTML += `<button onclick="startL()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Start</button>`;
    }

    
}
function reset(){
    setTeams.innerHTML = '';
    schedule.innerHTML = '';
    buttons.innerHTML = '';
}
const groups = [];
const pot1 = [];
const pot2 = [];
const pot3 = [];
const pot4 = [];
const pot5 = [];
const pot6 = [];
const grA = [];
const grB = [];
const grC = [];
const grD = [];
const grE = [];
const grF = [];
const grG = [];
const grH = [];
let r_name = document.querySelector('#round_name').value;
function groupen(){
  let num = select.value;
  
  if(num=='gr34' || num=='gr43' || num=='gr44' || num=='gr64' || num=='gr84'){
  if (num == 'gr34') {
    for (i = 0; i < 3; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot1.push(n_team);
    } for (i = 3; i < 6; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot2.push(n_team);
    } for (i = 6; i < 9; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot3.push(n_team);
    } for (i = 9; i < 12; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot4.push(n_team);
    }

  }
  if (num == 'gr43') {
    for (i = 0; i < 4; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot1.push(n_team);
    } for (i = 4; i < 8; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot2.push(n_team);
    } for (i = 8; i < 12; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot3.push(n_team);
    }
    pot4.push('free','free','free','free');

  }
  if (num == 'gr44') {
    for (i = 0; i < 4; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot1.push(n_team);
    } for (i = 4; i < 8; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot2.push(n_team);
    } for (i = 8; i < 12; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot3.push(n_team);
    } for (i = 12; i < 16; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot4.push(n_team);
    }

  }

  if (num == 'gr64') {
    for (i = 0; i < 6; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot1.push(n_team);
    } for (i = 6; i < 12; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot2.push(n_team);
    } for (i = 12; i < 18; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot3.push(n_team);
    } for (i = 18; i < 24; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot4.push(n_team);
    }

  }
  if (num == 'gr84') {
    for (i = 0; i < 8; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot1.push(n_team);
    } for (i = 8; i < 16; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot2.push(n_team);
    } for (i = 16; i < 24; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot3.push(n_team);
    } for (i = 24; i < 32; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot4.push(n_team);
    }

  }

  for(let i=pot1.length-1;i>=0;i--){
    let rand1 = Math.floor(Math.random()*pot1.length);
    let rand2 = Math.floor(Math.random()*pot2.length);
    let rand3 = Math.floor(Math.random()*pot3.length);
    let rand4 = Math.floor(Math.random()*pot4.length);
    groups.push(pot1[rand1]);
    pot1.splice(rand1,1);
     groups.push(pot2[rand2]);
    pot2.splice(rand2,1);
     groups.push(pot3[rand3]);
    pot3.splice(rand3,1);
     groups.push(pot4[rand4]);
    pot4.splice(rand4,1);

    //console.log(rand);
  }
  console.log(groups)
  for(let i =0; i<groups.length;i++){
      if(i<4){
        grA.push(groups[i]);
      }else if(i<8){
        grB.push(groups[i]);
      }else if(i<12){
        grC.push(groups[i]);
      }else if(i<16){
        grD.push(groups[i]);
      }
    else if(i<20){
      grE.push(groups[i]);
    }
        else if(i<24){
      grF.push(groups[i]);
    }
        else if(i<28){
      grG.push(groups[i]);
    }
        else if(i<32){
      grH.push(groups[i]);
    }
  }
console.log(grA);
console.log(grB);
console.log(grC);
console.log(grD);
console.log(grE);
console.log(grF);
console.log(grG);
console.log(grH);

setTeams.innerHTML = `<span class="gr_name">Group A</span>
${grA[0]}<br>
${grA[1]}<br>
${grA[2]}<br>
${grA[3]}<br>
<span class="gr_name">Group B</span>
${grB[0]}<br>
${grB[1]}<br>
${grB[2]}<br>
${grB[3]}<br>
<span class="gr_name">Group C</span>
${grC[0]}<br>
${grC[1]}<br>
${grC[2]}<br>
${grC[3]}<br>
<span class="gr_name">Group D</span>
${grD[0]}<br>
${grD[1]}<br>
${grD[2]}<br>
${grD[3]}<br>
`

if(num=="gr64" || num=="gr84"){
  setTeams.innerHTML += `<span class="gr_name">Group E</span>
${grE[0]}<br>
${grE[1]}<br>
${grE[2]}<br>
${grE[3]}<br>
<span class="gr_name">Group F</span>
${grF[0]}<br>
${grF[1]}<br>
${grF[2]}<br>
${grF[3]}<br>
`
} 
if(num=="gr84"){
  setTeams.innerHTML += `<span class="gr_name">Group G</span>
${grG[0]}<br>
${grG[1]}<br>
${grG[2]}<br>
${grG[3]}<br>
<span class="gr_name">Group H</span>
${grH[0]}<br>
${grH[1]}<br>
${grH[2]}<br>
${grH[3]}<br>
`
}

  }

if(num=='gr26' || num=='gr46'){
  if (num == 'gr46') {
    for (i = 0; i < 4; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot1.push(n_team);
    } for (i = 4; i < 8; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot2.push(n_team);
    } for (i = 8; i < 12; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot3.push(n_team);
    } for (i = 12; i < 16; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot4.push(n_team);
    } for (i = 16; i < 20; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot5.push(n_team);
    } for (i = 20; i < 24; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot6.push(n_team);
    }

  }
  if (num == 'gr26') {
    for (i = 0; i < 2; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot1.push(n_team);
    } for (i = 2; i < 4; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot2.push(n_team);
    } for (i = 4; i < 6; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot3.push(n_team);
    } for (i = 6; i < 8; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot4.push(n_team);
    } for (i = 8; i < 10; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot5.push(n_team);
    } for (i = 10; i < 12; i++) {
      const n_team = document.querySelector(`#team-${i}`).value;
      pot6.push(n_team);
    }

  }
  for(let i=pot1.length-1;i>=0;i--){
    let rand1 = Math.floor(Math.random()*pot1.length);
    let rand2 = Math.floor(Math.random()*pot2.length);
    let rand3 = Math.floor(Math.random()*pot3.length);
    let rand4 = Math.floor(Math.random()*pot4.length);
    let rand5 = Math.floor(Math.random()*pot5.length);
    let rand6 = Math.floor(Math.random()*pot6.length);
    groups.push(pot1[rand1]);
    pot1.splice(rand1,1);
     groups.push(pot2[rand2]);
    pot2.splice(rand2,1);
     groups.push(pot3[rand3]);
    pot3.splice(rand3,1);
     groups.push(pot4[rand4]);
    pot4.splice(rand4,1);
    groups.push(pot5[rand5]);
    pot5.splice(rand5,1);
    groups.push(pot6[rand6]);
    pot6.splice(rand6,1);

    //console.log(rand);
  }
  console.log(groups)
  for(let i =0; i<groups.length;i++){
      if(i<6){
        grA.push(groups[i]);
      }else if(i<12){
        grB.push(groups[i]);
      }else if(i<18){
        grC.push(groups[i]);
      }else if(i<24){
        grD.push(groups[i]);
      }
    else if(i<30){
      grE.push(groups[i]);
    }
        else if(i<36){
      grF.push(groups[i]);
    }
        else if(i<42){
      grG.push(groups[i]);
    }
        else if(i<48){
      grH.push(groups[i]);
    }
  }

if(num=='gr46'){
  setTeams.innerHTML = `<span class="gr_name">Group A</span>
  ${grA[0]}<br>
  ${grA[1]}<br>
  ${grA[2]}<br>
  ${grA[3]}<br>
  ${grA[4]}<br>
  ${grA[5]}<br>
  <span class="gr_name">Group B</span> 
  ${grB[0]}<br>
  ${grB[1]}<br>
  ${grB[2]}<br>
  ${grB[3]}<br>
  ${grB[4]}<br>
  ${grB[5]}<br>
  <span class="gr_name">Group C</span> 
  ${grC[0]}<br>
  ${grC[1]}<br>
  ${grC[2]}<br>
  ${grC[3]}<br>
  ${grC[4]}<br>
  ${grC[5]}<br>
  <span class="gr_name">Group D</span> 
  ${grD[0]}<br>
  ${grD[1]}<br>
  ${grD[2]}<br>
  ${grD[3]}<br>
  ${grD[4]}<br>
  ${grD[5]}<br>
  `
}
if(num=='gr26'){
  setTeams.innerHTML = `<span class="gr_name">Group A</span>
  ${grA[0]}<br>
  ${grA[1]}<br>
  ${grA[2]}<br>
  ${grA[3]}<br>
  ${grA[4]}<br>
  ${grA[5]}<br>
  <span class="gr_name">Group B</span> 
  ${grB[0]}<br>
  ${grB[1]}<br>
  ${grB[2]}<br>
  ${grB[3]}<br>
  ${grB[4]}<br>
  ${grB[5]}<br>
  `
}

 
}


setTeams.innerHTML += `<button onclick="start()" class="btn-rect-4 btn-round-4 btn-neograd color-green">Start</button>`;

}

function start(){
    let num = select.value;
    const r_name = 'Round';
    //const r_name = document.querySelector('#round_name').value;
    // let arr_teams = [];
    // for(i = 1; i<=num; i++){
    //         const n_team = document.querySelector(`#team-${i}`).value;
    //         arr_teams.push(n_team);
    //         console.log(n_team);
    // }
    if(num='gr34' || num=='gr43' || num=='gr44' || num=='gr64' || num=='gr84'){
      schedule.innerHTML += `
      <tr><th>Group A</th></tr>
      <tr><th>${r_name} 1: </th></tr>
      <tr><td>${grA[0]} vs ${grA[1]}</td></tr> 
      <tr><td>${grA[2]} vs ${grA[3]}</td> </tr>
      <tr><th>${r_name} 2: </th></tr> 
      <tr><td>${grA[1]} vs ${grA[2]}</td></tr> 
      <tr><td>${grA[3]} vs ${grA[0]}</td></tr> 
      <tr><th>${r_name} 3: </th></tr> 
      <tr><td>${grA[0]} vs ${grA[2]}</td></tr> 
      <tr><td>${grA[1]} vs ${grA[3]}</td></tr> 
      <tr><th>${r_name} 4: </th></tr> 
      <tr><td>${grA[1]} vs ${grA[0]}</td></tr> 
      <tr><td>${grA[3]} vs ${grA[2]}</td></tr>
      <tr><th>${r_name} 5: </th></tr> 
      <tr><td>${grA[2]} vs ${grA[1]}</td></tr> 
      <tr><td>${grA[0]} vs ${grA[3]}</td></tr> 
      <tr><th>${r_name} 6: </th></tr> 
      <tr><td>${grA[2]} vs ${grA[0]}</td></tr> 
      <tr><td>${grA[3]} vs ${grA[1]}</td></tr> 
      <tr><th>Group B</th></tr>
      <tr><th>${r_name} 1: </th></tr>
      <tr><td>${grB[0]} vs ${grB[1]}</td></tr> 
      <tr><td>${grB[2]} vs ${grB[3]}</td> </tr>
      <tr><th>${r_name} 2: </th></tr> 
      <tr><td>${grB[1]} vs ${grB[2]}</td></tr> 
      <tr><td>${grB[3]} vs ${grB[0]}</td></tr> 
      <tr><th>${r_name} 3: </th></tr> 
      <tr><td>${grB[0]} vs ${grB[2]}</td></tr> 
      <tr><td>${grB[1]} vs ${grB[3]}</td></tr> 
      <tr><th>${r_name} 4: </th></tr> 
      <tr><td>${grB[1]} vs ${grB[0]}</td></tr> 
      <tr><td>${grB[3]} vs ${grB[2]}</td></tr>
      <tr><th>${r_name} 5: </th></tr> 
      <tr><td>${grB[2]} vs ${grB[1]}</td></tr> 
      <tr><td>${grB[0]} vs ${grB[3]}</td></tr> 
      <tr><th>${r_name} 6: </th></tr> 
      <tr><td>${grB[2]} vs ${grB[0]}</td></tr> 
      <tr><td>${grB[3]} vs ${grB[1]}</td></tr> 
      <tr><th>Group C</th></tr>
      <tr><th>${r_name} 1: </th></tr>
      <tr><td>${grC[0]} vs ${grC[1]}</td></tr> 
      <tr><td>${grC[2]} vs ${grC[3]}</td> </tr>
      <tr><th>${r_name} 2: </th></tr> 
      <tr><td>${grC[1]} vs ${grC[2]}</td></tr> 
      <tr><td>${grC[3]} vs ${grC[0]}</td></tr> 
      <tr><th>${r_name} 3: </th></tr> 
      <tr><td>${grC[0]} vs ${grC[2]}</td></tr> 
      <tr><td>${grC[1]} vs ${grC[3]}</td></tr> 
      <tr><th>${r_name} 4: </th></tr> 
      <tr><td>${grC[1]} vs ${grC[0]}</td></tr> 
      <tr><td>${grC[3]} vs ${grC[2]}</td></tr>
      <tr><th>${r_name} 5: </th></tr> 
      <tr><td>${grC[2]} vs ${grC[1]}</td></tr> 
      <tr><td>${grC[0]} vs ${grC[3]}</td></tr> 
      <tr><th>${r_name} 6: </th></tr> 
      <tr><td>${grC[2]} vs ${grC[0]}</td></tr> 
      <tr><td>${grC[3]} vs ${grC[1]}</td></tr> 
      <tr><th>Group D</th></tr>
      <tr><th>${r_name} 1: </th></tr>
      <tr><td>${grD[0]} vs ${grD[1]}</td></tr> 
      <tr><td>${grD[2]} vs ${grD[3]}</td> </tr>
      <tr><th>${r_name} 2: </th></tr> 
      <tr><td>${grD[1]} vs ${grD[2]}</td></tr> 
      <tr><td>${grD[3]} vs ${grD[0]}</td></tr> 
      <tr><th>${r_name} 3: </th></tr> 
      <tr><td>${grD[0]} vs ${grD[2]}</td></tr> 
      <tr><td>${grD[1]} vs ${grD[3]}</td></tr> 
      <tr><th>${r_name} 4: </th></tr> 
      <tr><td>${grD[1]} vs ${grD[0]}</td></tr> 
      <tr><td>${grD[3]} vs ${grD[2]}</td></tr>
      <tr><th>${r_name} 5: </th></tr> 
      <tr><td>${grD[2]} vs ${grD[1]}</td></tr> 
      <tr><td>${grD[0]} vs ${grD[3]}</td></tr> 
      <tr><th>${r_name} 6: </th></tr> 
      <tr><td>${grD[2]} vs ${grD[0]}</td></tr> 
      <tr><td>${grD[3]} vs ${grD[1]}</td></tr> 
      `;
      if(num=='gr64' || num=='gr84'){
        schedule.innerHTML += `
        <tr><th>Group E</th></tr>
        <tr><th>${r_name} 1: </th></tr>
        <tr><td>${grE[0]} vs ${grE[1]}</td></tr> 
        <tr><td>${grE[2]} vs ${grE[3]}</td> </tr>
        <tr><th>${r_name} 2: </th></tr> 
        <tr><td>${grE[1]} vs ${grE[2]}</td></tr> 
        <tr><td>${grE[3]} vs ${grE[0]}</td></tr> 
        <tr><th>${r_name} 3: </th></tr> 
        <tr><td>${grE[0]} vs ${grE[2]}</td></tr> 
        <tr><td>${grE[1]} vs ${grE[3]}</td></tr> 
        <tr><th>${r_name} 4: </th></tr> 
        <tr><td>${grE[1]} vs ${grE[0]}</td></tr> 
        <tr><td>${grE[3]} vs ${grE[2]}</td></tr>
        <tr><th>${r_name} 5: </th></tr> 
        <tr><td>${grE[2]} vs ${grE[1]}</td></tr> 
        <tr><td>${grE[0]} vs ${grE[3]}</td></tr> 
        <tr><th>${r_name} 6: </th></tr> 
        <tr><td>${grE[2]} vs ${grE[0]}</td></tr> 
        <tr><td>${grE[3]} vs ${grE[1]}</td></tr> 
        <tr><th>Group F</th></tr>
        <tr><th>${r_name} 1: </th></tr>
        <tr><td>${grF[0]} vs ${grF[1]}</td></tr> 
        <tr><td>${grF[2]} vs ${grF[3]}</td> </tr>
        <tr><th>${r_name} 2: </th></tr> 
        <tr><td>${grF[1]} vs ${grF[2]}</td></tr> 
        <tr><td>${grF[3]} vs ${grF[0]}</td></tr> 
        <tr><th>${r_name} 3: </th></tr> 
        <tr><td>${grF[0]} vs ${grF[2]}</td></tr> 
        <tr><td>${grF[1]} vs ${grF[3]}</td></tr> 
        <tr><th>${r_name} 4: </th></tr> 
        <tr><td>${grF[1]} vs ${grF[0]}</td></tr> 
        <tr><td>${grF[3]} vs ${grF[2]}</td></tr>
        <tr><th>${r_name} 5: </th></tr> 
        <tr><td>${grF[2]} vs ${grF[1]}</td></tr> 
        <tr><td>${grF[0]} vs ${grF[3]}</td></tr> 
        <tr><th>${r_name} 6: </th></tr> 
        <tr><td>${grF[2]} vs ${grF[0]}</td></tr> 
        <tr><td>${grF[3]} vs ${grF[1]}</td></tr> 
        `
      }
      if(num=='gr84'){
        schedule.innerHTML += `
        <tr><th>Group G</th></tr>
        <tr><th>${r_name} 1: </th></tr>
        <tr><td>${grG[0]} vs ${grG[1]}</td></tr> 
        <tr><td>${grG[2]} vs ${grG[3]}</td> </tr>
        <tr><th>${r_name} 2: </th></tr> 
        <tr><td>${grG[1]} vs ${grG[2]}</td></tr> 
        <tr><td>${grG[3]} vs ${grG[0]}</td></tr> 
        <tr><th>${r_name} 3: </th></tr> 
        <tr><td>${grG[0]} vs ${grG[2]}</td></tr> 
        <tr><td>${grG[1]} vs ${grG[3]}</td></tr> 
        <tr><th>${r_name} 4: </th></tr> 
        <tr><td>${grG[1]} vs ${grG[0]}</td></tr> 
        <tr><td>${grG[3]} vs ${grG[2]}</td></tr>
        <tr><th>${r_name} 5: </th></tr> 
        <tr><td>${grG[2]} vs ${grG[1]}</td></tr> 
        <tr><td>${grG[0]} vs ${grG[3]}</td></tr> 
        <tr><th>${r_name} 6: </th></tr> 
        <tr><td>${grG[2]} vs ${grG[0]}</td></tr> 
        <tr><td>${grG[3]} vs ${grG[1]}</td></tr> 
        <tr><th>Group H</th></tr>
        <tr><th>${r_name} 1: </th></tr>
        <tr><td>${grH[0]} vs ${grH[1]}</td></tr> 
        <tr><td>${grH[2]} vs ${grH[3]}</td> </tr>
        <tr><th>${r_name} 2: </th></tr> 
        <tr><td>${grH[1]} vs ${grH[2]}</td></tr> 
        <tr><td>${grH[3]} vs ${grH[0]}</td></tr> 
        <tr><th>${r_name} 3: </th></tr> 
        <tr><td>${grH[0]} vs ${grH[2]}</td></tr> 
        <tr><td>${grH[1]} vs ${grH[3]}</td></tr> 
        <tr><th>${r_name} 4: </th></tr> 
        <tr><td>${grH[1]} vs ${grH[0]}</td></tr> 
        <tr><td>${grH[3]} vs ${grH[2]}</td></tr>
        <tr><th>${r_name} 5: </th></tr> 
        <tr><td>${grH[2]} vs ${grH[1]}</td></tr> 
        <tr><td>${grH[0]} vs ${grH[3]}</td></tr> 
        <tr><th>${r_name} 6: </th></tr> 
        <tr><td>${grH[2]} vs ${grH[0]}</td></tr> 
        <tr><td>${grH[3]} vs ${grH[1]}</td></tr> 
        `
      }
    }
    if(num=='gr26' || num=='gr46'){
        schedule.innerHTML += `
            <tr><th>Group A</th></tr>
            <tr><th>${r_name} 1: </th></tr>
            <tr><td>${grA[1]} vs ${grA[4]} </td></tr>
            <tr><td>${grA[2]} vs ${grA[5]} </td></tr>
            <tr><td>${grA[3]} vs ${grA[0]} </td></tr>
            <tr><th>${r_name} 2: </th></tr>
            <tr><td>${grA[4]} vs ${grA[2]} </td></tr>
            <tr><td>${grA[5]} vs ${grA[3]} </td></tr>
            <tr><td>${grA[0]} vs ${grA[1]} </td></tr>
            <tr><th>${r_name} 3: </th></tr>
            <tr><td>${grA[1]} vs ${grA[2]} </td></tr>
            <tr><td>${grA[3]} vs ${grA[4]} </td></tr>
            <tr><td>${grA[5]} vs ${grA[0]} </td></tr>
            <tr><th>${r_name} 4: </th></tr>
            <tr><td>${grA[1]} vs ${grA[3]} </td></tr>
            <tr><td>${grA[4]} vs ${grA[5]} </td></tr>
            <tr><td>${grA[2]} vs ${grA[0]} </td></tr>
            <tr><th>${r_name} 5: </th></tr>
            <tr><td>${grA[5]} vs ${grA[1]} </td></tr>
            <tr><td>${grA[3]} vs ${grA[2]} </td></tr>
            <tr><td>${grA[1]} vs ${grA[4]} </td></tr>
            <tr><th>${r_name} 6: </th></tr>
            <tr><td>${grA[4]} vs ${grA[1]} </td></tr>
            <tr><td>${grA[5]} vs ${grA[2]} </td></tr>
            <tr><td>${grA[0]} vs ${grA[3]} </td></tr>
            <tr><th>${r_name} 7: </th></tr>
            <tr><td>${grA[2]} vs ${grA[4]} </td></tr>
            <tr><td>${grA[3]} vs ${grA[5]} </td></tr>
            <tr><td>${grA[1]} vs ${grA[0]} </td></tr>
            <tr><th>${r_name} 8: </th></tr>
            <tr><td>${grA[2]} vs ${grA[1]} </td></tr>
            <tr><td>${grA[4]} vs ${grA[3]} </td></tr>
            <tr><td>${grA[0]} vs ${grA[5]} </td></tr>
            <tr><th>${r_name} 9: </th></tr>
            <tr><td>${grA[3]} vs ${grA[1]} </td></tr>
            <tr><td>${grA[5]} vs ${grA[4]} </td></tr>
            <tr><td>${grA[0]} vs ${grA[2]} </td></tr>
            <tr><th>${r_name} 10: </th></tr>
            <tr><td>${grA[1]} vs ${grA[5]} </td></tr>
            <tr><td>${grA[2]} vs ${grA[3]} </td></tr>
            <tr><td>${grA[4]} vs ${grA[1]} </td></tr>

            <tr><th>Group B</th></tr>
            <tr><th>${r_name} 1: </th></tr>
            <tr><td>${grB[1]} vs ${grB[4]} </td></tr>
            <tr><td>${grB[2]} vs ${grB[5]} </td></tr>
            <tr><td>${grB[3]} vs ${grB[0]} </td></tr>
            <tr><th>${r_name} 2: </th></tr>
            <tr><td>${grB[4]} vs ${grB[2]} </td></tr>
            <tr><td>${grB[5]} vs ${grB[3]} </td></tr>
            <tr><td>${grB[0]} vs ${grB[1]} </td></tr>
            <tr><th>${r_name} 3: </th></tr>
            <tr><td>${grB[1]} vs ${grB[2]} </td></tr>
            <tr><td>${grB[3]} vs ${grB[4]} </td></tr>
            <tr><td>${grB[5]} vs ${grB[0]} </td></tr>
            <tr><th>${r_name} 4: </th></tr>
            <tr><td>${grB[1]} vs ${grB[3]} </td></tr>
            <tr><td>${grB[4]} vs ${grB[5]} </td></tr>
            <tr><td>${grB[2]} vs ${grB[0]} </td></tr>
            <tr><th>${r_name} 5: </th></tr>
            <tr><td>${grB[5]} vs ${grB[1]} </td></tr>
            <tr><td>${grB[3]} vs ${grB[2]} </td></tr>
            <tr><td>${grB[1]} vs ${grB[4]} </td></tr>
            <tr><th>${r_name} 6: </th></tr>
            <tr><td>${grB[4]} vs ${grB[1]} </td></tr>
            <tr><td>${grB[5]} vs ${grB[2]} </td></tr>
            <tr><td>${grB[0]} vs ${grB[3]} </td></tr>
            <tr><th>${r_name} 7: </th></tr>
            <tr><td>${grB[2]} vs ${grB[4]} </td></tr>
            <tr><td>${grB[3]} vs ${grB[5]} </td></tr>
            <tr><td>${grB[1]} vs ${grB[0]} </td></tr>
            <tr><th>${r_name} 8: </th></tr>
            <tr><td>${grB[2]} vs ${grB[1]} </td></tr>
            <tr><td>${grB[4]} vs ${grB[3]} </td></tr>
            <tr><td>${grB[0]} vs ${grB[5]} </td></tr>
            <tr><th>${r_name} 9: </th></tr>
            <tr><td>${grB[3]} vs ${grB[1]} </td></tr>
            <tr><td>${grB[5]} vs ${grB[4]} </td></tr>
            <tr><td>${grB[0]} vs ${grB[2]} </td></tr>
            <tr><th>${r_name} 10: </th></tr>
            <tr><td>${grB[1]} vs ${grB[5]} </td></tr>
            <tr><td>${grB[2]} vs ${grB[3]} </td></tr>
            <tr><td>${grB[4]} vs ${grB[1]} </td></tr>`
            if(num=='gr46'){
              schedule.innerHTML += `
            <tr><th>Group C</th></tr>
            <tr><th>${r_name} 1: </th></tr>
            <tr><td>${grC[1]} vs ${grC[4]} </td></tr>
            <tr><td>${grC[2]} vs ${grC[5]} </td></tr>
            <tr><td>${grC[3]} vs ${grC[0]} </td></tr>
            <tr><th>${r_name} 2: </th></tr>
            <tr><td>${grC[4]} vs ${grC[2]} </td></tr>
            <tr><td>${grC[5]} vs ${grC[3]} </td></tr>
            <tr><td>${grC[0]} vs ${grC[1]} </td></tr>
            <tr><th>${r_name} 3: </th></tr>
            <tr><td>${grC[1]} vs ${grC[2]} </td></tr>
            <tr><td>${grC[3]} vs ${grC[4]} </td></tr>
            <tr><td>${grC[5]} vs ${grC[0]} </td></tr>
            <tr><th>${r_name} 4: </th></tr>
            <tr><td>${grC[1]} vs ${grC[3]} </td></tr>
            <tr><td>${grC[4]} vs ${grC[5]} </td></tr>
            <tr><td>${grC[2]} vs ${grC[0]} </td></tr>
            <tr><th>${r_name} 5: </th></tr>
            <tr><td>${grC[5]} vs ${grC[1]} </td></tr>
            <tr><td>${grC[3]} vs ${grC[2]} </td></tr>
            <tr><td>${grC[1]} vs ${grC[4]} </td></tr>
            <tr><th>${r_name} 6: </th></tr>
            <tr><td>${grC[4]} vs ${grC[1]} </td></tr>
            <tr><td>${grC[5]} vs ${grC[2]} </td></tr>
            <tr><td>${grC[0]} vs ${grC[3]} </td></tr>
            <tr><th>${r_name} 7: </th></tr>
            <tr><td>${grC[2]} vs ${grC[4]} </td></tr>
            <tr><td>${grC[3]} vs ${grC[5]} </td></tr>
            <tr><td>${grC[1]} vs ${grC[0]} </td></tr>
            <tr><th>${r_name} 8: </th></tr>
            <tr><td>${grC[2]} vs ${grC[1]} </td></tr>
            <tr><td>${grC[4]} vs ${grC[3]} </td></tr>
            <tr><td>${grC[0]} vs ${grC[5]} </td></tr>
            <tr><th>${r_name} 9: </th></tr>
            <tr><td>${grC[3]} vs ${grC[1]} </td></tr>
            <tr><td>${grC[5]} vs ${grC[4]} </td></tr>
            <tr><td>${grC[0]} vs ${grC[2]} </td></tr>
            <tr><th>${r_name} 10: </th></tr>
            <tr><td>${grC[1]} vs ${grC[5]} </td></tr>
            <tr><td>${grC[2]} vs ${grC[3]} </td></tr>
            <tr><td>${grC[4]} vs ${grC[1]} </td></tr>

            <tr><th>Group D</th></tr>
            <tr><th>${r_name} 1: </th></tr>
            <tr><td>${grD[1]} vs ${grD[4]} </td></tr>
            <tr><td>${grD[2]} vs ${grD[5]} </td></tr>
            <tr><td>${grD[3]} vs ${grD[0]} </td></tr>
            <tr><th>${r_name} 2: </th></tr>
            <tr><td>${grD[4]} vs ${grD[2]} </td></tr>
            <tr><td>${grD[5]} vs ${grD[3]} </td></tr>
            <tr><td>${grD[0]} vs ${grD[1]} </td></tr>
            <tr><th>${r_name} 3: </th></tr>
            <tr><td>${grD[1]} vs ${grD[2]} </td></tr>
            <tr><td>${grD[3]} vs ${grD[4]} </td></tr>
            <tr><td>${grD[5]} vs ${grD[0]} </td></tr>
            <tr><th>${r_name} 4: </th></tr>
            <tr><td>${grD[1]} vs ${grD[3]} </td></tr>
            <tr><td>${grD[4]} vs ${grD[5]} </td></tr>
            <tr><td>${grD[2]} vs ${grD[0]} </td></tr>
            <tr><th>${r_name} 5: </th></tr>
            <tr><td>${grD[5]} vs ${grD[1]} </td></tr>
            <tr><td>${grD[3]} vs ${grD[2]} </td></tr>
            <tr><td>${grD[1]} vs ${grD[4]} </td></tr>
            <tr><th>${r_name} 6: </th></tr>
            <tr><td>${grD[4]} vs ${grD[1]} </td></tr>
            <tr><td>${grD[5]} vs ${grD[2]} </td></tr>
            <tr><td>${grD[0]} vs ${grD[3]} </td></tr>
            <tr><th>${r_name} 7: </th></tr>
            <tr><td>${grD[2]} vs ${grD[4]} </td></tr>
            <tr><td>${grD[3]} vs ${grD[5]} </td></tr>
            <tr><td>${grD[1]} vs ${grD[0]} </td></tr>
            <tr><th>${r_name} 8: </th></tr>
            <tr><td>${grD[2]} vs ${grD[1]} </td></tr>
            <tr><td>${grD[4]} vs ${grD[3]} </td></tr>
            <tr><td>${grD[0]} vs ${grD[5]} </td></tr>
            <tr><th>${r_name} 9: </th></tr>
            <tr><td>${grD[3]} vs ${grD[1]} </td></tr>
            <tr><td>${grD[5]} vs ${grD[4]} </td></tr>
            <tr><td>${grD[0]} vs ${grD[2]} </td></tr>
            <tr><th>${r_name} 10: </th></tr>
            <tr><td>${grD[1]} vs ${grD[5]} </td></tr>
            <tr><td>${grD[2]} vs ${grD[3]} </td></tr>
            <tr><td>${grD[4]} vs ${grD[1]} </td></tr>
            
            `;
      }
    }


    
    buttons.innerHTML+= '<button onclick="copy()" class="btn-rect-4 btn-round-4 btn-neograd-r color-green">Copy</button>';
    buttons.innerHTML+= '<button onclick="reset()" class="btn-rect-4 btn-round-4 btn-neograd-r color-red">Reset</button>';

}

function startL(){
  let num = select.value;

  const r_name = document.querySelector('#round_name').value;
  let arr_teams = [];
  for(i = 1; i<=num; i++){
          const n_team = document.querySelector(`#team-${i}`).value;
          arr_teams.push(n_team);
          console.log(n_team);
  }

  if(num==4){
      
      
      schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]}</td></tr> 
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]}</td> </tr>
          <tr><th>${r_name} 2: </th></tr> 
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]}</td></tr> 
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]}</td></tr> 
          <tr><th>${r_name} 3: </th></tr> 
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]}</td></tr> 
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]}</td></tr> 
          <tr><th>${r_name} 4: </th></tr> 
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]}</td></tr> 
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]}</td></tr>
          <tr><th>${r_name} 5: </th></tr> 
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]}</td></tr> 
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]}</td></tr> 
          <tr><th>${r_name} 6: </th></tr> 
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]}</td></tr> 
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]}</td></tr> 
          `;
      
  }
  else if(num==6){
     
      schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]} </td></tr>
          <tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]} </td></tr>
          <tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]} </td></tr>
          
          `;
  }
  else if(num==8){
      
      schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]} </td></tr>
          <tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[6]} </td></tr>
          <tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[4]} </td></tr>
          <tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[7]} </td></tr>
          <tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[0]} </td></tr>

          <tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[4]} </td></tr>
          <tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]} </td></tr>
          <tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]} </td></tr>
          <tr><th>${r_name} 11: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[7]} </td></tr>
          <tr><th>${r_name} 12: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[7]} </td></tr>
          <tr><th>${r_name} 13: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[6]} </td></tr>
          <tr><th>${r_name} 14: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[6]} </td></tr>
          `;
  }else if(num==10){
      schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[6]} </td></tr>
          <tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[9]} </td></tr>
          <tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[8]} </td></tr>
          <tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[7]} </td></tr>
          <tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[0]} </td></tr>

<tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[5]}</td></tr>
          <tr><th>${r_name} 11: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[0]}</td></tr>
          <tr><th>${r_name} 12: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[9]}</td></tr>
          <tr><th>${r_name} 13: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[8]}</td></tr>
          <tr><th>${r_name} 14: </th></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[8]}</td></tr>
          <tr><th>${r_name} 15: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[7]}</td></tr>
          <tr><th>${r_name} 16: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[7]}</td></tr>
          <tr><th>${r_name} 17: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[6]}</td></tr>
          <tr><th>${r_name} 18: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[6]}</td></tr>

          `
  }else if(num==12){
       schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[9]} </td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[7]} </td></tr>
<tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[4]} </td></tr>            
          <tr><td>${arr_teams[7]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[6]} </td></tr>
<tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[7]} </td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]} </td></tr>            
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[11]} </td></tr>
<tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]} </td></tr>            
          <tr><td>${arr_teams[11]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[4]} </td></tr>            
          <tr><td>${arr_teams[8]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[10]} </td></tr>
<tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[7]} </td></tr>            
          <tr><td>${arr_teams[10]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[11]} </td></tr>            
          <tr><td>${arr_teams[7]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[9]} </td></tr>
<tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[6]} </td></tr>            
          <tr><td>${arr_teams[9]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[10]} </td></tr>            
          <tr><td>${arr_teams[6]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[8]} </td></tr>
<tr><th>${r_name} 11: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[5]} </td></tr>            
          <tr><td>${arr_teams[8]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[0]} </td></tr>

<tr><th>${r_name} 12: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[4]}</td></tr>            
          <tr><td>${arr_teams[8]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[6]}</td></tr>
<tr><th>${r_name} 13: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[11]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[10]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[8]}</td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[0]}</td></tr>
<tr><th>${r_name} 14: </th></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[4]}</td></tr>            
          <tr><td>${arr_teams[6]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[11]}</td></tr>
<tr><th>${r_name} 15: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[6]}</td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[10]}</td></tr>
<tr><th>${r_name} 16: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]}</td></tr>            
          <tr><td> ${arr_teams[9]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[10]}</td></tr>
<tr><th>${r_name} 17: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[0]}</td></tr>            
          <tr><td>${arr_teams[11]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[9]}</td></tr>
<tr><th>${r_name} 18: </th></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]}</td></tr>
          <tr><td> ${arr_teams[7]} vs ${arr_teams[11]}</td></tr>            
          <tr><td> ${arr_teams[8]} vs ${arr_teams[10]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[9]}</td></tr>
<tr><th>${r_name} 19: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[6]}</td></tr>            
          <tr><td>${arr_teams[10]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[8]}</td></tr>
<tr><th>${r_name} 20: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]}</td></tr>
          <tr><td> ${arr_teams[5]} vs ${arr_teams[11]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[10]}</td></tr>            
          <tr><td>${arr_teams[7]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[8]}</td></tr>
<tr><th>${r_name} 21: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[5]}</td></tr>            
          <tr><td>${arr_teams[9]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[7]}</td></tr>
<tr><th>${r_name} 22: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]}</td></tr>
          <tr><td> ${arr_teams[3]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[4]} vs ${arr_teams[10]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[9]}</td></tr>            
          <tr><td>${arr_teams[6]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[7]}</td></tr>
          `
  }else if(num==14){
      schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[11]} </td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[8]} </td></tr>
<tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[4]} </td></tr>            
          <tr><td>${arr_teams[9]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[7]} </td></tr>
       <tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[9]} </td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[4]} </td></tr>            
          <tr><td>${arr_teams[7]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[13]} </td></tr>
<tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[7]} </td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]} </td></tr>            
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[12]} </td></tr>
<tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]} </td></tr>            
          <tr><td>${arr_teams[13]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[4]} </td></tr>            
          <tr><td>${arr_teams[8]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[11]} </td></tr>
<tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[7]} </td></tr>            
          <tr><td>${arr_teams[12]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[13]} </td></tr>            
          <tr><td>${arr_teams[7]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[10]} </td></tr>
<tr><th>${r_name} 11: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[6]} </td></tr>            
          <tr><td>${arr_teams[11]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 12: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[12]} </td></tr>            
          <tr><td>${arr_teams[6]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[9]} </td></tr>
<tr><th>${r_name} 13: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[5]} </td></tr>            
          <tr><td>${arr_teams[10]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[0]} </td></tr>

<tr><th>${r_name} 14: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[4]}</td></tr>            
          <tr><td>${arr_teams[10]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[7]}</td></tr>
<tr><th>${r_name} 15: </th></tr>
          <tr><td> ${arr_teams[1]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[2]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[3]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[4]} vs ${arr_teams[10]}</td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[0]}</td></tr>
       <tr><th>${r_name} 16: </th></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[4]}</td></tr>            
          <tr><td>${arr_teams[8]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[6]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[13]}</td></tr>
<tr><th>${r_name} 17: </th></tr>
          <tr><td> ${arr_teams[1]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[2]} vs ${arr_teams[10]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[8]}</td></tr>            
          <tr><td>${arr_teams[5]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[0]}</td></tr>
          <tr><td> ${arr_teams[13]} vs ${arr_teams[12]}</td></tr>
<tr><th>${r_name} 18: </th></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[4]}</td></tr>            
          <tr><td>${arr_teams[6]} vs ${arr_teams[5]}</td></tr>
          <tr><td> ${arr_teams[11]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[12]}</td></tr>
<tr><th>${r_name} 19: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]}</td></tr>            
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]}</td></tr>
          <tr><td> ${arr_teams[13]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[12]} vs ${arr_teams[11]}</td></tr>
<tr><th>${r_name} 20: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]}</td></tr>            
          <tr><td> ${arr_teams[9]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[10]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[11]}</td></tr>
<tr><th>${r_name} 21: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[0]}</td></tr>            
          <tr><td>${arr_teams[13]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[11]} vs ${arr_teams[10]}</td></tr>
<tr><th>${r_name} 22: </th></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]}</td></tr>
          <tr><td> ${arr_teams[7]} vs ${arr_teams[13]}</td></tr>            
          <tr><td> ${arr_teams[8]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[9]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[10]}</td></tr>
<tr><th>${r_name} 23: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[6]}</td></tr>            
          <tr><td>${arr_teams[12]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[9]}</td></tr>
<tr><th>${r_name} 24: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]}</td></tr>
          <tr><td> ${arr_teams[5]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[6]} vs ${arr_teams[12]}</td></tr>            
          <tr><td> ${arr_teams[7]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[8]} vs ${arr_teams[10]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[9]}</td></tr>
<tr><th>${r_name} 25: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[5]}</td></tr>            
          <tr><td>${arr_teams[11]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[8]}</td></tr>
<tr><th>${r_name} 26: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]}</td></tr>
          <tr><td> ${arr_teams[3]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[4]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[5]} vs ${arr_teams[11]}</td></tr>            
          <tr><td> ${arr_teams[6]} vs ${arr_teams[10]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[8]}</td></tr>
          `
  }
      else if(num==16){
          schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[8]} </td></tr>
          <tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[12]} </td></tr>
          <tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[14]} </td></tr>
          <tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[12]} </td></tr>
          <tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[8]} </td></tr>
          <tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[15]} </td></tr>
          <tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[8]} </td></tr>
          <tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[15]} </td></tr>
          <tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[1]} </td></tr>
          <tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[15]} </td></tr>
          <tr><th>${r_name} 11: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[3]} </td></tr>
          <tr><th>${r_name} 12: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[15]} </td></tr>
          <tr><th>${r_name} 13: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[5]} </td></tr>
          <tr><th>${r_name} 14: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[15]} </td></tr>
          <tr><th>${r_name} 15: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[7]} </td></tr>

<tr><th>${r_name} 16: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[14]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[15]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[8]} vs ${arr_teams[12]}</td></tr>
          <tr><th>${r_name} 17: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]}</td></tr>
          <tr><td> ${arr_teams[9]} vs ${arr_teams[14]}</td></tr>
          <tr><td> ${arr_teams[10]} vs ${arr_teams[15]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[8]}</td></tr>
          <tr><td> ${arr_teams[12]} vs ${arr_teams[13]}</td></tr>
          <tr><th>${r_name} 18: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[8]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[13]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[14]} vs ${arr_teams[12]}</td></tr>
          <tr><th>${r_name} 19: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[8]}</td></tr>
          <tr><td> ${arr_teams[10]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[11]} vs ${arr_teams[14]}</td></tr>
          <tr><td> ${arr_teams[12]} vs ${arr_teams[15]}</td></tr>
          <tr><th>${r_name} 20: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[12]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[14]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[8]} vs ${arr_teams[15]}</td></tr>
          <tr><th>${r_name} 21: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[6]}</td></tr>
          <tr><td> ${arr_teams[9]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[11]} vs ${arr_teams[10]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[8]}</td></tr>
          <tr><td> ${arr_teams[15]} vs ${arr_teams[14]}</td></tr>
          <tr><th>${r_name} 22: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[12]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[15]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[8]} vs ${arr_teams[14]}</td></tr>
          <tr><th>${r_name} 23: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[0]}</td></tr>
          <tr><th>${r_name} 24: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[4]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[5]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[6]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[7]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[14]}</td></tr>
          <tr><td> ${arr_teams[1]} vs ${arr_teams[15]}</td></tr>
          <tr><th>${r_name} 25: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[2]}</td></tr>
          <tr><th>${r_name} 26: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[6]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[7]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[1]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[2]} vs ${arr_teams[14]}</td></tr>
          <tr><td> ${arr_teams[3]} vs ${arr_teams[15]}</td></tr>
          <tr><th>${r_name} 27: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[6]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[4]}</td></tr>
          <tr><th>${r_name} 28: </th></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[0]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[1]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[2]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[3]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[4]} vs ${arr_teams[14]}</td></tr>
          <tr><td> ${arr_teams[5]} vs ${arr_teams[15]}</td></tr>
          <tr><th>${r_name} 29: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[7]}</td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[0]}</td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[1]}</td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[2]}</td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[3]}</td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[4]}</td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[5]}</td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[6]}</td></tr>
          <tr><th>${r_name} 30: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[9]}</td></tr>
          <tr><td> ${arr_teams[2]} vs ${arr_teams[10]}</td></tr>
          <tr><td> ${arr_teams[3]} vs ${arr_teams[11]}</td></tr>
          <tr><td> ${arr_teams[4]} vs ${arr_teams[12]}</td></tr>
          <tr><td> ${arr_teams[5]} vs ${arr_teams[13]}</td></tr>
          <tr><td> ${arr_teams[6]} vs ${arr_teams[14]}</td></tr>
          <tr><td> ${arr_teams[7]} vs ${arr_teams[15]}</td></tr>
          `
      }
  else if(num==18){
          schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[9]}  </td></tr>
<tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[8]}</td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[17]} </td></tr>
<tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[16]}  </td></tr>
<tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[16]} </td></tr>
<tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[15]}  </td></tr>
<tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[15]} </td></tr>
<tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[14]}  </td></tr>
<tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[14]} </td></tr>
<tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[13]}  </td></tr>
<tr><th>${r_name} 11 </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[13]} </td></tr>
<tr><th>${r_name} 12: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[12]}  </td></tr>
<tr><th>${r_name} 13: </th></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[12]} </td></tr>
<tr><th>${r_name} 14: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[11]}  </td></tr>
<tr><th>${r_name} 15: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[11]} </td></tr>
<tr><th>${r_name} 16: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[10]}  </td></tr>
<tr><th>${r_name} 17: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[10]} </td></tr>

<tr><th>${r_name} 18: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[10]}  </td></tr>
<tr><th>${r_name} 19: </th></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[9]} </td></tr>
<tr><th>${r_name} 20: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[9]}</td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 21: </th></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[17]}   </td></tr>
<tr><th>${r_name} 22: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[15]}   </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 23: </th></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[17]}   </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[16]}   </td></tr>
<tr><th>${r_name} 24: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[13]}   </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[14]}   </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 25: </th></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[17]}   </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[16]}   </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[15]}   </td></tr>
<tr><th>${r_name} 26: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[11]}   </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[12]}   </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[13]}   </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 27: </th></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[17]}   </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[16]}   </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[15]}   </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[14]}   </td></tr>
<tr><th>${r_name} 28 </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[10]}   </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[11]}   </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[12]}   </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 29: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[15]}   </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[14]}   </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[13]}   </td></tr>
<tr><th>${r_name} 30: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[10]}   </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[11]}   </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 31: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[13]}   </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[12]}   </td></tr>
<tr><th>${r_name} 32: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[10]}   </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 33: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[11]}   </td></tr>
<tr><th>${r_name} 34: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[0]}  </td></tr>
          `
  }
  else if(num==20){
                  schedule.innerHTML += `
          <tr><th>${r_name} 1: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[11]} </td></tr>
<tr><th>${r_name} 2: </th></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[10]} </td></tr>
<tr><th>${r_name} 3: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 4: </th></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[19]} </td></tr>
<tr><th>${r_name} 5: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 6: </th></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[18]} </td></tr>
<tr><th>${r_name} 7: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 8: </th></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[17]} </td></tr>
<tr><th>${r_name} 9: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 10: </th></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[16]} </td></tr>
<tr><th>${r_name} 11: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 12: </th></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[15]} </td></tr>
<tr><th>${r_name} 13: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 14: </th></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[14]} </td></tr>
<tr><th>${r_name} 15: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[0]} </td></tr>
          <tr><th>${r_name} 16: </th></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[13]} </td></tr>
<tr><th>${r_name} 17: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[0]} </td></tr>
<tr><th>${r_name} 18: </th></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[12]} </td></tr>
<tr><th>${r_name} 19: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[0]} </td></tr>

<tr><th>${r_name} 20: </th></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[10]}  </td></tr>
          <tr><th>${r_name} 21: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[0]}  </td></tr>
<tr><th>${r_name} 22: </th></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[19]} </td></tr>
          <tr><th>${r_name} 23: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[18]}  </td></tr>
<tr><th>${r_name} 24: </th></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[19]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[18]} </td></tr>
          <tr><th>${r_name} 25: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[17]}  </td></tr>
<tr><th>${r_name} 26: </th></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[19]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[18]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[17]} </td></tr>
          <tr><th>${r_name} 27: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[12]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[16]}  </td></tr>
<tr><th>${r_name} 28: </th></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[2]}  </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[3]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[19]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[18]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[16]} </td></tr>
          <tr><th>${r_name} 29: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[11]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[10]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[15]}  </td></tr>
<tr><th>${r_name} 30: </th></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[1]}  </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[19]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[18]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[15]} </td></tr>
          <tr><th>${r_name} 31: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[9]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[8]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[14]}  </td></tr>
<tr><th>${r_name} 32: </th></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[18]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[17]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[14]} </td></tr>
          <tr><th>${r_name} 33: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[7]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[6]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[13]}  </td></tr>
<tr><th>${r_name} 34: </th></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[16]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[15]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[13]} </td></tr>
          <tr><th>${r_name} 35: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[5]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[4]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[11]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[12]}  </td></tr>
<tr><th>${r_name} 36: </th></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[2]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[14]}  </td></tr>
          <tr><td>${arr_teams[11]} vs ${arr_teams[13]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[12]} </td></tr>
          <tr><th>${r_name} 37: </th></tr>
          <tr><td>${arr_teams[1]} vs ${arr_teams[3]} </td></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[0]} </td></tr>
          <tr><td>${arr_teams[19]} vs ${arr_teams[4]}  </td></tr>
          <tr><td>${arr_teams[18]} vs ${arr_teams[5]}  </td></tr>
          <tr><td>${arr_teams[17]} vs ${arr_teams[6]}  </td></tr>
          <tr><td>${arr_teams[16]} vs ${arr_teams[7]}  </td></tr>
          <tr><td>${arr_teams[15]} vs ${arr_teams[8]}  </td></tr>
          <tr><td>${arr_teams[14]} vs ${arr_teams[9]}  </td></tr>
          <tr><td>${arr_teams[13]} vs ${arr_teams[10]}  </td></tr>
          <tr><td>${arr_teams[12]} vs ${arr_teams[11]}  </td></tr>
<tr><th>${r_name} 38: </th></tr>
          <tr><td>${arr_teams[2]} vs ${arr_teams[1]} </td></tr>
          <tr><td>${arr_teams[3]} vs ${arr_teams[19]} </td></tr>
          <tr><td>${arr_teams[4]} vs ${arr_teams[18]} </td></tr>
          <tr><td>${arr_teams[5]} vs ${arr_teams[17]} </td></tr>
          <tr><td>${arr_teams[6]} vs ${arr_teams[16]} </td></tr>
          <tr><td>${arr_teams[7]} vs ${arr_teams[15]} </td></tr>
          <tr><td>${arr_teams[8]} vs ${arr_teams[14]} </td></tr>
          <tr><td>${arr_teams[9]} vs ${arr_teams[13]} </td></tr>
          <tr><td>${arr_teams[10]} vs ${arr_teams[12]}  </td></tr>
          <tr><td>${arr_teams[0]} vs ${arr_teams[11]} </td></tr>
          `
  }

  
  buttons.innerHTML+= '<button onclick="copy()" class="btn-rect-4 btn-round-4 btn-neograd-r color-green">Copy</button>';
  buttons.innerHTML+= '<button onclick="reset()" class="btn-rect-4 btn-round-4 btn-neograd-r color-red">Reset</button>';
      
 console.log(arr_teams); 
}

//var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

function copy() {
    var elm = document.querySelector(".div_schedule");
    // for Internet Explorer
  
    if(document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(elm);
      range.select();
      document.execCommand("Copy");
      alert("Skopiowałeś terminiarz");
    }
    else if(window.getSelection) {
      // other browsers
  
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      alert("Skopiowałeś terminiarz");
    }
  }














