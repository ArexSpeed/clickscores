

        const select = document.querySelector('#select'); 
        const showTeam = document.querySelector('.showTeam'); 
        const button = document.querySelector('.button') 
        const schedule = document.querySelector('.schedule'); 
        const tableSort = document.querySelector('.tablesort'); 
        const addTeams = document.querySelector('.addteams'); 
        const game = document.querySelector('.game'); 
        const selectLeague = document.querySelector('.selectLeague');
        const selectFaq = document.querySelector('#select_faq');
        const faqExpl = document.querySelector('.faq_expl');
        
        function reload(){
  location.reload();
  return false;
}
        //baza tworzona
        const teams = [];
        const teams_cup = [];
        //FAQ
        selectFaq.addEventListener('change', () => {
          console.log(selectFaq.value);
          faqExpl.innerHTML = '';
          if (selectFaq.value == 'faq_ligi') {
              faqExpl.innerHTML += `Wybierając opcje "Select League" można wybrać swoja ulubiona ligę spośrod dostępnych. Po wyborze ligi wyświetlają się drużyny w niej występujące. <br>
              Do każdej drużyny przypisane są umiejętności kolejno:<br>
              Att - atak<br>
              Set - rozegranie<br>
              Def - defensywa<br>
              Jeśli chcesz możesz je swobodnie edytowac klikając na wybraną umiejętność danego teamu a także edytować nazwe drużyny jeśli chcesz by w rozgrywce brała udział Twoja drużyna<br>
              Potem wystarczy akceptować i zaczynasz zabawę. `
          }
          if (selectFaq.value == 'faq_yourL') {
              faqExpl.innerHTML += `W grze możesz także stworzyć własną ligę i drużyny. W opcji "Select League" wybierając opcję "Your Teams" wyświetli się do wyboru ilość drużyn jakie mają grać w Twojej lidze.<br>
              Po wyborze ilości możesz uzupełnić formularz z własnymi drużynami kolejno:<br>
              Nazwa drużyny: <br>
              Att - atak<br>
              Set - rozegranie<br>
              Def - defensywa<br>
              Potem wystarczy akceptować i zaczynasz zabawę.`
          }
          if (selectFaq.value == 'faq_skills') {
              faqExpl.innerHTML += `Umiejętności drużyn to najważniejszy element rozgrywki aby określić siłę danego zespołu. W symulatorze siatkarskim mamy do wybrania takie skille: <br>
              Att - atak (odpowiedzialny za ilość ataków danej drużyny)<br>
              Set - rozegranie (rozgrywający odpowiedzialny za jak najlepsze dogrania to atakujących)<br>
              Def - defensywa (odpowiedzialna za jakość obrony drużyny)<br> `
          }
          if (selectFaq.value == 'faq_playoff') {
              faqExpl.innerHTML += `
              W każdej rozgrywce mozna dodać do sezonu rozgrywki Play-Off. Są one opcjonalnie nie musisz ich rozgrywać jeśli nie chcesz lecz jeśli chcesz przedłużyć sezon i dodać troche więcej zabawy możesz wybrać tą opcje w każdym momencie<br>
              Dla lig powyżej 13 zespołów w PlayOffach uczestniczy 8 najlepszych zespołów na koniec sezonu zasadniczego. <br>
              Dla lig poniżej 13 zespołów w PlayOffach uczestniczą 4 najlepsze zespoły na koniec sezonu zasadniczego.<br>
              W przypadku remisu w dwumeczu rozgrywane są karne.
              `
          }
          if (selectFaq.value == 'faq_plays') {
              faqExpl.innerHTML += `
              Rozgrywki ligowe odbywają się na zasadzie mecz - rewanż każdy z każdym. <br>
              Po akceptacji wyboru zespołów pojawia się kalendarz spotkań w których możesz rozgrywać swoje mecze wybierając jedna z opcji: <br>
              Play All - rozgrywa wszystkie mecze w danej kolejce<br>
              Play - rozgrywa tylko dany mecz<br>
              Wszystkie wyniki są na bieżąco aktualizowane w tabeli wg schematu: <br>
              Wygrana 3:0 lub 3:1 - 3 pkt<br>
              Wygrana 3:2 -  2 pkt <br>
              Przegrana 2:3 - 1 pkt<br>
              Przegrana 1:3 lub 0:3 - 0 pkt<br>
              Po rozegranym sezonie zasadniczym możesz rozegrać Play-Offy, które w kolejnych rundach od ćwierćfinału do Finału wyłonią mistrza Twojej ligi.
              `
          }
          if (selectFaq.value == 'faq_cups') {
              faqExpl.innerHTML += `
              Do dyspozycji są także rozgrywki pucharowe. Wybierając w "Select League" odpowiednią opcję np. "Champions League" czy "World Cup" pojawiają się drużyny występujące w tych rozgrywkach. <br>Nazwy i umiejętności mozesz oczywiscie zmieniać na swoje drużyny ale kolejność uzupełniania ma znaczenie ponieważ wybrane zespoły są dzielone kolejno do odpowiednich grup tzn. pierwsze 4 drużyny do Grupy A, kolejne cztery do Grupy B, następne do Gr C itd.<br>
              `
          }
      })

        //wyswietlanie dostepnych lig
        select.addEventListener('change', () => {
            showTeam.innerHTML = '';

            if (select.value == 'pol') {
                const team_qty = poland.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Att" readonly>
                <input type="number" placeholder="Set" readonly>
                <input type="number" placeholder="Def" readonly><br>
                <input type="text" value="" placeholder="Skills: Attack, Setter, Defense" readonly><br>`
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `
                <input type="text" value="${poland[i].name}" id="team${i}_name"> 
                <input type="number" value="${poland[i].att}" id="team${i}_att" max="99" min="1"> 
                <input type="number" value="${poland[i].set}" id="team${i}_set" max="99" min="1"> 
                <input type="number" value="${poland[i].def}" id="team${i}_def" max="99" min="1">
                <br>`;
                }
                showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            }            if (select.value == 'polW') {
              const team_qty = polandW.length;
              showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
              <input type="number" placeholder="Att" readonly>
              <input type="number" placeholder="Set" readonly>
              <input type="number" placeholder="Def" readonly><br>
              <input type="text" value="" placeholder="Skills: Attack, Setter, Defense" readonly><br>`
              for (let i = 0; i < team_qty; i++) {

                  showTeam.innerHTML += `
              <input type="text" value="${polandW[i].name}" id="team${i}_name"> 
              <input type="number" value="${polandW[i].att}" id="team${i}_att" max="99" min="1"> 
              <input type="number" value="${polandW[i].set}" id="team${i}_set" max="99" min="1"> 
              <input type="number" value="${polandW[i].def}" id="team${i}_def" max="99" min="1">
              <br>`;
              }
              showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
          }
            if (select.value == 'ita') {
                const team_qty = italy.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Att" readonly>
                <input type="number" placeholder="Set" readonly>
                <input type="number" placeholder="Def" readonly><br>
                <input type="text" value="" placeholder="Skills: Attack, Setter, Defense" readonly><br>`
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `
                <input type="text" value="${italy[i].name}" id="team${i}_name"> 
                <input type="number" value="${italy[i].att}" id="team${i}_att" max="99" min="1"> 
                <input type="number" value="${italy[i].set}" id="team${i}_set" max="99" min="1"> 
                <input type="number" value="${italy[i].def}" id="team${i}_def" max="99" min="1">
                <br>`;
                }
                showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            }
            if (select.value == 'nat') {
              const team_qty = national.length;
              showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
              <input type="number" placeholder="Att" readonly>
              <input type="number" placeholder="Set" readonly>
              <input type="number" placeholder="Def" readonly><br>
              <input type="text" value="" placeholder="Skills: Attack, Setter, Defense" readonly><br>`
              for (let i = 0; i < team_qty; i++) {

                  showTeam.innerHTML += `
              <input type="text" value="${national[i].name}" id="team${i}_name"> 
              <input type="number" value="${national[i].att}" id="team${i}_att" max="99" min="1"> 
              <input type="number" value="${national[i].set}" id="team${i}_set" max="99" min="1"> 
              <input type="number" value="${national[i].def}" id="team${i}_def" max="99" min="1">
              <br>`;
              }
              showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
          }
          if (select.value == 'natW') {
            const team_qty = nationalW.length;
            showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
            <input type="number" placeholder="Att" readonly>
            <input type="number" placeholder="Set" readonly>
            <input type="number" placeholder="Def" readonly><br>
            <input type="text" value="" placeholder="Skills: Attack, Setter, Defense" readonly><br>`
            for (let i = 0; i < team_qty; i++) {

                showTeam.innerHTML += `
            <input type="text" value="${nationalW[i].name}" id="team${i}_name"> 
            <input type="number" value="${nationalW[i].att}" id="team${i}_att" max="99" min="1"> 
            <input type="number" value="${nationalW[i].set}" id="team${i}_set" max="99" min="1"> 
            <input type="number" value="${nationalW[i].def}" id="team${i}_def" max="99" min="1">
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
            <input type="number" placeholder="Set" readonly>
            <input type="number" placeholder="Def" readonly><br>
            <input type="text" value="" placeholder="Skills: Attack, Setter, Defense" readonly><br>`
            
            console.log(team_qty);
            for (let i = 0; i < numberTeams; i++) {
                showTeam.innerHTML += `<br>

                Team ${i + 1}: <input type="text" id="team${i}_name"> 
                <input type="number" id="team${i}_att"> 
                <input type="number" id="team${i}_set"> 
                <input type="number" id="team${i}_def">
                <br>`;

            }
           
           showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
        }

        function accept() {

            const teams_qty = document.querySelector('#team_qty').value;

            //console.log(teams_qty);
            let nums = []; //teams rand
                for(let j = 0; j<teams_qty; j++){
                    nums.push(j);
                }
            for (let i = 0; i < teams_qty; i++) {
              let rnd = Math.floor(Math.random()*nums.length);
                    n = nums[rnd];
                let new_name = document.querySelector(`#team${n}_name`).value;
                let new_att = document.querySelector(`#team${n}_att`).value;
                let new_set = document.querySelector(`#team${n}_set`).value;
                let new_def = document.querySelector(`#team${n}_def`).value;
                new_att>99 ? new_att=99 : new_att; new_att<1 ? new_att=1 : new_att;
                new_set>99 ? new_set=99 : new_set; new_set<1 ? new_set=1 : new_set;
                new_def>99 ? new_def=99 : new_def; new_def<1 ? new_def=1 : new_def;
                teams.push({
                    name: new_name,
                    att: Number(new_att),
                    set: Number(new_set),
                    def: Number(new_def),
                    win: [],
                    lose: [],
                    set_plus: [],
                    set_minus: [],
                    points: [],
                    set_plus_sum: 0,
                    set_minus_sum: 0,
                    points_sum: 0,
                    finals: []
                })
                nums.splice(rnd,1);

            }

            

            addTeams.innerHTML = '';
            // showTeam.innerHTML = ' Your Teams: <br>';
            // for (let i = 0; i < teams_qty; i++) {
            //     showTeam.innerHTML += `${teams[i].name} <br>`
            // }
            console.log(teams);
            selectLeague.innerHTML = '';
            button.innerHTML += `<button onclick="start()" id="round1" class="btn_start btn_effect">START</button>`
            //pokaz();

            //toggle divs to see
            game.classList.toggle('toggle');
            addTeams.classList.toggle('toggle');
            
            teamtable();
            
        }
        



        function play(host, guest, m_id,r_id) {


let match_tr = document.getElementById(m_id);



  let hc = 0.05;
  let host_point = 0;
  let guest_point = 0;

  let host_skil = Math.floor(host.att +host.att*hc)*0.4+Math.floor(host.set +host.set*hc)*0.3+Math.floor(host.def +host.def*hc)*0.3;
  let guest_skil = Math.floor(guest.att)*0.4+Math.floor(guest.set)*0.3+Math.floor(guest.def)*0.3;
  //console.log(host_skil + ' vs ' + guest_skil)

  for(i=0; i<5; i++){
    host_point > guest_point ? host_skil-=5 : host_skil+=10; 
      guest_point > host_point ? guest_skil-=5 : guest_skil+=10;

        let rand_h = Math.floor(Math.random() * 20);
        let rand_g = Math.floor(Math.random() * 20);
       let host_pow = Math.floor(Math.random()*(host_skil-rand_h)+rand_h); 
      let guest_pow = Math.floor(Math.random()*(guest_skil-rand_g)+rand_g);
      //console.log("powe: " + host_pow + ' vs ' + guest_pow);
    if(host_pow>=guest_pow){
      host_point++;
    }    else if(host_pow<guest_pow){
      guest_point++;
    }

    if(host_point==3 || guest_point==3){
      break;
    }
  }

//Dodawanie bramek
for (let i = 0; i < teams.length; i++) {

  if (host === teams[i]) {
    teams[i].set_plus.push(host_point);
    teams[i].set_minus.push(guest_point);
  } else if (guest === teams[i]) {
    teams[i].set_plus.push(guest_point);
    teams[i].set_minus.push(host_point);
  }

}

//Dodawanie punktów
if (host_point==3 && guest_point==1 || guest_point==0) {
  host.points.push(3);
  guest.points.push(0);
  host.win.push(1);
  guest.lose.push(1);
} else if (host_point==3 && guest_point==2) {
    host.points.push(2);
    guest.points.push(1);
    host.win.push(1);
    guest.lose.push(1);
}  else if (host_point==2 && guest_point==3) {
    host.points.push(1);
    guest.points.push(2);
    host.lose.push(1);
    guest.win.push(1);
} else if (guest_point==3 && host_point==1 || host_point==0) {
    guest.points.push(3);
    host.points.push(0);
    guest.win.push(1);
    host.lose.push(1);
  } 

//Sumowanie bramek i punktów
teams.forEach(x => {
  x.points_sum = x.points.reduce((a, b) => a + b, 0)
})

teams.forEach(x => {
  x.set_plus_sum = x.set_plus.reduce((a, b) => a + b, 0)
})

teams.forEach(x => {
  x.set_minus_sum = x.set_minus.reduce((a, b) => a + b, 0)
})
if(r_id){
    r_id.innerHTML = `
           
           `;
}

m_id.innerHTML = `
      <td class="host">${host.name}</td>
      <td class="guest">${guest.name}</td>
      <td class="host host_score">${host_point}</td>
     <td class="guest guest_score">${guest_point}</td>
       `

teamtable();
}

function play2(host,guest, m_id,r_id) {

console.log("pokazanie nazw w play");
let hc = 0.05;
  let host_point = 0;
  let guest_point = 0;

  let host_skil = Math.floor(host.att +host.att*hc)*0.4+Math.floor(host.set +host.set*hc)*0.3+Math.floor(host.def +host.def*hc)*0.3;
  let guest_skil = Math.floor(guest.att)*0.4+Math.floor(guest.set)*0.3+Math.floor(guest.def)*0.3;
  console.log(host_skil + ' vs ' + guest_skil)

  for(i=0; i<5; i++){
    host_point > guest_point ? host_skil-=5 : host_skil+=10; 
      guest_point > host_point ? guest_skil-=5 : guest_skil+=10;

        let rand_h = Math.floor(Math.random() * 20);
        let rand_g = Math.floor(Math.random() * 20);
       let host_pow = Math.floor(Math.random()*(host_skil-rand_h)+rand_h); 
      let guest_pow = Math.floor(Math.random()*(guest_skil-rand_g)+rand_g);
      console.log("powe: " + host_pow + ' vs ' + guest_pow);
    if(host_pow>=guest_pow){
      host_point++;
    }    else if(host_pow<guest_pow){
      guest_point++;
    }

    if(host_point==3 || guest_point==3){
      break;
    }
  }

host.finals.push(host_point);
guest.finals.push(guest_point);


if(r_id){
    r_id.innerHTML = `
           
           `;
}

m_id.innerHTML = `
      <td class="host">${host.name}</td>
      <td class="guest">${guest.name}</td>
      <td class="host host_score">${host_point}</td>
     <td class="guest guest_score">${guest_point}</td>
      `
}

function teamtable(){
let new_teams = [];
for(i=0;i<teams.length;i++){
  new_teams.push({
    name: teams[i].name,
    match: teams[i].points.length,
    win: teams[i].win.length,
    lose: teams[i].lose.length,
    set_plus: teams[i].set_plus_sum,
    set_minus: teams[i].set_minus_sum,
    points: teams[i].points_sum
  }
  )
}
console.log(new_teams);
let lt = new_teams.sort((a,b)=> ((b.points) - (a.points) || (b.set_plus) - (a.set_plus) || (a.set_minus) - (b.set_minus)))//live table

if(new_teams.length == 4){
     tableSort.innerHTML = `<table>
                    <tr>
                        <th colspan="9">Table</th>
                    </tr>
                    <tr>
                   <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
               </tr>
               <tr>  
               <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
               </tr>
               <tr>
               <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
               </tr>
               <tr>
                <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
               </tr>
               <tr>
               <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
               </tr>

      </table>   `
}
    if(new_teams.length == 6){
     tableSort.innerHTML = `<table>
                    <tr>
                        <th colspan="9">Table</th>
                    </tr>
                    <tr>
                    <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
                </tr>
                <tr>  
                <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
                </tr>
                <tr>
                <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
                </tr>
                <tr>
                 <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
                </tr>
                <tr>
                <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
                </tr>
                <tr>
                <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td></td><td>${lt[4].lose}</td><td>${lt[4].set_plus}</td><td>${lt[4].set_minus}</td><td>${lt[4].points}</td>
                </tr>
                <tr>
                <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td></td><td>${lt[5].lose}</td><td>${lt[5].set_plus}</td><td>${lt[5].set_minus}</td><td>${lt[5].points}</td>
                </tr>
      </table>   `
}
if(new_teams.length == 8){
  tableSort.innerHTML = `<table>
                 <tr>
                     <th colspan="9">Table</th>
                 </tr>
                 <tr>
                 <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
             </tr>
             <tr>  
             <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
             </tr>
             <tr>
             <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
             </tr>
             <tr>
              <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
             </tr>
             <tr>
             <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
             </tr>
             <tr>
             <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td></td><td>${lt[4].lose}</td><td>${lt[4].set_plus}</td><td>${lt[4].set_minus}</td><td>${lt[4].points}</td>
             </tr>
             <tr>
             <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td></td><td>${lt[5].lose}</td><td>${lt[5].set_plus}</td><td>${lt[5].set_minus}</td><td>${lt[5].points}</td>
             </tr>
             <tr>  
             <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td></td><td>${lt[6].lose}</td><td>${lt[6].set_plus}</td><td>${lt[6].set_minus}</td><td>${lt[6].points}</td>
             </tr>
             <tr>
             <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td></td><td>${lt[7].lose}</td><td>${lt[7].set_plus}</td><td>${lt[7].set_minus}</td><td>${lt[7].points}</td>
             </tr>
             <tr>
                 <tr>
   </table>   `
}
if(new_teams.length == 10){
  tableSort.innerHTML = `<table>
                 <tr>
                     <th colspan="9">Table</th>
                 </tr>
                 <tr>
                 <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
             </tr>
             <tr>  
             <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
             </tr>
             <tr>
             <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
             </tr>
             <tr>
              <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
             </tr>
             <tr>
             <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
             </tr>
             <tr>
             <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td></td><td>${lt[4].lose}</td><td>${lt[4].set_plus}</td><td>${lt[4].set_minus}</td><td>${lt[4].points}</td>
             </tr>
             <tr>
             <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td></td><td>${lt[5].lose}</td><td>${lt[5].set_plus}</td><td>${lt[5].set_minus}</td><td>${lt[5].points}</td>
             </tr>
             <tr>  
             <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td></td><td>${lt[6].lose}</td><td>${lt[6].set_plus}</td><td>${lt[6].set_minus}</td><td>${lt[6].points}</td>
             </tr>
             <tr>
             <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td></td><td>${lt[7].lose}</td><td>${lt[7].set_plus}</td><td>${lt[7].set_minus}</td><td>${lt[7].points}</td>
             </tr>
             <tr>
              <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td></td><td>${lt[8].lose}</td><td>${lt[8].set_plus}</td><td>${lt[8].set_minus}</td><td>${lt[8].points}</td>
             </tr>
             <tr>
             <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td></td><td>${lt[9].lose}</td><td>${lt[9].set_plus}</td><td>${lt[9].set_minus}</td><td>${lt[9].points}</td>
             </tr>
   </table>   `
}
if(new_teams.length == 12){
  tableSort.innerHTML = `<table>
                 <tr>
                     <th colspan="9">Table</th>
                 </tr>
                 <tr>
                 <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
             </tr>
             <tr>  
             <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
             </tr>
             <tr>
             <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
             </tr>
             <tr>
              <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
             </tr>
             <tr>
             <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
             </tr>
             <tr>
             <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td></td><td>${lt[4].lose}</td><td>${lt[4].set_plus}</td><td>${lt[4].set_minus}</td><td>${lt[4].points}</td>
             </tr>
             <tr>
             <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td></td><td>${lt[5].lose}</td><td>${lt[5].set_plus}</td><td>${lt[5].set_minus}</td><td>${lt[5].points}</td>
             </tr>
             <tr>  
             <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td></td><td>${lt[6].lose}</td><td>${lt[6].set_plus}</td><td>${lt[6].set_minus}</td><td>${lt[6].points}</td>
             </tr>
             <tr>
             <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td></td><td>${lt[7].lose}</td><td>${lt[7].set_plus}</td><td>${lt[7].set_minus}</td><td>${lt[7].points}</td>
             </tr>
             <tr>
              <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td></td><td>${lt[8].lose}</td><td>${lt[8].set_plus}</td><td>${lt[8].set_minus}</td><td>${lt[8].points}</td>
             </tr>
             <tr>
             <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td></td><td>${lt[9].lose}</td><td>${lt[9].set_plus}</td><td>${lt[9].set_minus}</td><td>${lt[9].points}</td>
             </tr>
             <tr>
             <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td></td><td>${lt[10].lose}</td><td>${lt[10].set_plus}</td><td>${lt[10].set_minus}</td><td>${lt[10].points}</td>
             </tr>
             <tr>
             <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td></td><td>${lt[11].lose}</td><td>${lt[11].set_plus}</td><td>${lt[11].set_minus}</td><td>${lt[11].points}</td>
             </tr>
   </table>   `
}
if(new_teams.length == 14){
  tableSort.innerHTML = `<table>
                 <tr>
                     <th colspan="9">Table</th>
                 </tr>
                 <tr>
                 <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
             </tr>
             <tr>  
             <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
             </tr>
             <tr>
             <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
             </tr>
             <tr>
              <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
             </tr>
             <tr>
             <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
             </tr>
             <tr>
             <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td></td><td>${lt[4].lose}</td><td>${lt[4].set_plus}</td><td>${lt[4].set_minus}</td><td>${lt[4].points}</td>
             </tr>
             <tr>
             <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td></td><td>${lt[5].lose}</td><td>${lt[5].set_plus}</td><td>${lt[5].set_minus}</td><td>${lt[5].points}</td>
             </tr>
             <tr>  
             <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td></td><td>${lt[6].lose}</td><td>${lt[6].set_plus}</td><td>${lt[6].set_minus}</td><td>${lt[6].points}</td>
             </tr>
             <tr>
             <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td></td><td>${lt[7].lose}</td><td>${lt[7].set_plus}</td><td>${lt[7].set_minus}</td><td>${lt[7].points}</td>
             </tr>
             <tr>
              <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td></td><td>${lt[8].lose}</td><td>${lt[8].set_plus}</td><td>${lt[8].set_minus}</td><td>${lt[8].points}</td>
             </tr>
             <tr>
             <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td></td><td>${lt[9].lose}</td><td>${lt[9].set_plus}</td><td>${lt[9].set_minus}</td><td>${lt[9].points}</td>
             </tr>
             <tr>
             <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td></td><td>${lt[10].lose}</td><td>${lt[10].set_plus}</td><td>${lt[10].set_minus}</td><td>${lt[10].points}</td>
             </tr>
             <tr>
             <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td></td><td>${lt[11].lose}</td><td>${lt[11].set_plus}</td><td>${lt[11].set_minus}</td><td>${lt[11].points}</td>
             </tr>
             <tr>  
             <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td></td><td>${lt[12].lose}</td><td>${lt[12].set_plus}</td><td>${lt[12].set_minus}</td><td>${lt[12].points}</td>
             </tr>
             <tr>
             <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td></td><td>${lt[13].lose}</td><td>${lt[13].set_plus}</td><td>${lt[13].set_minus}</td><td>${lt[13].points}</td>
             </tr>
   </table>   `
}
if(new_teams.length == 16){
    tableSort.innerHTML = `<table>
                   <tr>
                       <th colspan="9">Table</th>
                   </tr>
                   <tr>
                   <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
               </tr>
               <tr>  
               <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
               </tr>
               <tr>
               <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
               </tr>
               <tr>
                <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
               </tr>
               <tr>
               <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
               </tr>
               <tr>
               <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td></td><td>${lt[4].lose}</td><td>${lt[4].set_plus}</td><td>${lt[4].set_minus}</td><td>${lt[4].points}</td>
               </tr>
               <tr>
               <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td></td><td>${lt[5].lose}</td><td>${lt[5].set_plus}</td><td>${lt[5].set_minus}</td><td>${lt[5].points}</td>
               </tr>
               <tr>  
               <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td></td><td>${lt[6].lose}</td><td>${lt[6].set_plus}</td><td>${lt[6].set_minus}</td><td>${lt[6].points}</td>
               </tr>
               <tr>
               <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td></td><td>${lt[7].lose}</td><td>${lt[7].set_plus}</td><td>${lt[7].set_minus}</td><td>${lt[7].points}</td>
               </tr>
               <tr>
                <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td></td><td>${lt[8].lose}</td><td>${lt[8].set_plus}</td><td>${lt[8].set_minus}</td><td>${lt[8].points}</td>
               </tr>
               <tr>
               <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td></td><td>${lt[9].lose}</td><td>${lt[9].set_plus}</td><td>${lt[9].set_minus}</td><td>${lt[9].points}</td>
               </tr>
               <tr>
               <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td></td><td>${lt[10].lose}</td><td>${lt[10].set_plus}</td><td>${lt[10].set_minus}</td><td>${lt[10].points}</td>
               </tr>
               <tr>
               <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td></td><td>${lt[11].lose}</td><td>${lt[11].set_plus}</td><td>${lt[11].set_minus}</td><td>${lt[11].points}</td>
               </tr>
               <tr>  
               <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td></td><td>${lt[12].lose}</td><td>${lt[12].set_plus}</td><td>${lt[12].set_minus}</td><td>${lt[12].points}</td>
               </tr>
               <tr>
               <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td></td><td>${lt[13].lose}</td><td>${lt[13].set_plus}</td><td>${lt[13].set_minus}</td><td>${lt[13].points}</td>
               </tr>
               <tr>
                <td>15</td><td>${lt[14].name}</td><td>${lt[14].match}</td><td>${lt[14].win}</td><td></td><td>${lt[14].lose}</td><td>${lt[14].set_plus}</td><td>${lt[14].set_minus}</td><td>${lt[14].points}</td>
               </tr>
               <tr>
               <td>16</td><td>${lt[15].name}</td><td>${lt[15].match}</td><td>${lt[15].win}</td><td></td><td>${lt[15].lose}</td><td>${lt[15].set_plus}</td><td>${lt[15].set_minus}</td><td>${lt[15].points}</td>
               </tr>
     </table>   `
}

    if(new_teams.length == 20){
     tableSort.innerHTML = `<table>
                    <tr>
                        <th colspan="9">Table</th>
                    </tr>
                    <tr>
                        <td>Poz</td><td>Team</td><td>M</td><td>W</td><td></td><td>L</td><td>Set+</td><td>Set-</td><td>Points</td>
                    </tr>
                    <tr>  
                    <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td></td><td>${lt[0].lose}</td><td>${lt[0].set_plus}</td><td>${lt[0].set_minus}</td><td>${lt[0].points}</td>
                    </tr>
                    <tr>
                    <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td></td><td>${lt[1].lose}</td><td>${lt[1].set_plus}</td><td>${lt[1].set_minus}</td><td>${lt[1].points}</td>
                    </tr>
                    <tr>
                     <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td></td><td>${lt[2].lose}</td><td>${lt[2].set_plus}</td><td>${lt[2].set_minus}</td><td>${lt[2].points}</td>
                    </tr>
                    <tr>
                    <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td></td><td>${lt[3].lose}</td><td>${lt[3].set_plus}</td><td>${lt[3].set_minus}</td><td>${lt[3].points}</td>
                    </tr>
                    <tr>
                    <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td></td><td>${lt[4].lose}</td><td>${lt[4].set_plus}</td><td>${lt[4].set_minus}</td><td>${lt[4].points}</td>
                    </tr>
                    <tr>
                    <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td></td><td>${lt[5].lose}</td><td>${lt[5].set_plus}</td><td>${lt[5].set_minus}</td><td>${lt[5].points}</td>
                    </tr>
                    <tr>  
                    <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td></td><td>${lt[6].lose}</td><td>${lt[6].set_plus}</td><td>${lt[6].set_minus}</td><td>${lt[6].points}</td>
                    </tr>
                    <tr>
                    <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td></td><td>${lt[7].lose}</td><td>${lt[7].set_plus}</td><td>${lt[7].set_minus}</td><td>${lt[7].points}</td>
                    </tr>
                    <tr>
                     <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td></td><td>${lt[8].lose}</td><td>${lt[8].set_plus}</td><td>${lt[8].set_minus}</td><td>${lt[8].points}</td>
                    </tr>
                    <tr>
                    <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td></td><td>${lt[9].lose}</td><td>${lt[9].set_plus}</td><td>${lt[9].set_minus}</td><td>${lt[9].points}</td>
                    </tr>
                    <tr>
                    <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td></td><td>${lt[10].lose}</td><td>${lt[10].set_plus}</td><td>${lt[10].set_minus}</td><td>${lt[10].points}</td>
                    </tr>
                    <tr>
                    <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td></td><td>${lt[11].lose}</td><td>${lt[11].set_plus}</td><td>${lt[11].set_minus}</td><td>${lt[11].points}</td>
                    </tr>
                    <tr>  
                    <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td></td><td>${lt[12].lose}</td><td>${lt[12].set_plus}</td><td>${lt[12].set_minus}</td><td>${lt[12].points}</td>
                    </tr>
                    <tr>
                    <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td></td><td>${lt[13].lose}</td><td>${lt[13].set_plus}</td><td>${lt[13].set_minus}</td><td>${lt[13].points}</td>
                    </tr>
                    <tr>
                     <td>15</td><td>${lt[14].name}</td><td>${lt[14].match}</td><td>${lt[14].win}</td><td></td><td>${lt[14].lose}</td><td>${lt[14].set_plus}</td><td>${lt[14].set_minus}</td><td>${lt[14].points}</td>
                    </tr>
                    <tr>
                    <td>16</td><td>${lt[15].name}</td><td>${lt[15].match}</td><td>${lt[15].win}</td><td></td><td>${lt[15].lose}</td><td>${lt[15].set_plus}</td><td>${lt[15].set_minus}</td><td>${lt[15].points}</td>
                    </tr>
                    <tr>
                    <td>17</td><td>${lt[16].name}</td><td>${lt[16].match}</td><td>${lt[16].win}</td><td></td><td>${lt[16].lose}</td><td>${lt[16].set_plus}</td><td>${lt[16].set_minus}</td><td>${lt[16].points}</td>
                    </tr>
                    <tr>
                    <td>18</td><td>${lt[17].name}</td><td>${lt[17].match}</td><td>${lt[17].win}</td><td></td><td>${lt[17].lose}</td><td>${lt[17].set_plus}</td><td>${lt[17].set_minus}</td><td>${lt[17].points}</td>
                    </tr>
                    <tr>
                    <td>19</td><td>${lt[18].name}</td><td>${lt[18].match}</td><td>${lt[18].win}</td><td></td><td>${lt[18].lose}</td><td>${lt[18].set_plus}</td><td>${lt[18].set_minus}</td><td>${lt[18].points}</td>
                    </tr>
                    <tr>
                    <td>20</td><td>${lt[19].name}</td><td>${lt[19].match}</td><td>${lt[19].win}</td><td></td><td>${lt[19].lose}</td><td>${lt[19].set_plus}</td><td>${lt[19].set_minus}</td><td>${lt[19].points}</td>
                    </tr>
      </table>   `
}
//console.log(lt);
  //console.log(teams);

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
    set: teams[i].set,
    match: teams[i].points.length,
    win: teams[i].win.length,
    lose: teams[i].lose.length,
    set_plus: teams[i].set_plus_sum,
    set_minus: teams[i].set_minus_sum,
    points: teams[i].points_sum,
    finals: []
  }
  )
}

let ft = final_teams.sort((a,b)=> ((b.points) - (a.points) || (b.set_plus) - (a.set_plus) || (a.set_minus) - (b.set_minus)))//live table



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
    console.log('Play Off: ')
    console.log(teams);
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
    set: final_teams[0].set,
    finals: []
  })
  team_s1l.push({
    name: final_teams[7].name,
    att: final_teams[7].att,
    def: final_teams[7].def,
    set: final_teams[7].set,
    finals: []
  })
  }else if(q1t1<q1t2){
    team_s1.push({
    name: final_teams[7].name,
    att: final_teams[7].att,
    def: final_teams[7].def,
    set: final_teams[7].set,
    finals: []
  })
  team_s1l.push({
    name: final_teams[0].name,
    att: final_teams[0].att,
    def: final_teams[0].def,
    set: final_teams[0].set,
    finals: []
  })
  }
   //Q2
   if(q2t1>=q2t2){
    team_s2.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    set: final_teams[1].set,
    finals: []
  })
  team_s2l.push({
    name: final_teams[6].name,
    att: final_teams[6].att,
    def: final_teams[6].def,
    set: final_teams[6].set,
    finals: []
  })
  }else if(q2t1<q2t2){
    team_s2.push({
    name: final_teams[6].name,
    att: final_teams[6].att,
    def: final_teams[6].def,
    set: final_teams[6].set,
    finals: []
  })
  team_s2l.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    set: final_teams[1].set,
    finals: []
  })
  }
   //Q3
   if(q3t1>=q3t2){
    team_s3.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    set: final_teams[2].set,
    finals: []
  })
  team_s3l.push({
    name: final_teams[5].name,
    att: final_teams[5].att,
    def: final_teams[5].def,
    set: final_teams[5].set,
    finals: []
  })
  }else if(q3t1<q3t2){
    team_s3.push({
    name: final_teams[5].name,
    att: final_teams[5].att,
    def: final_teams[5].def,
    set: final_teams[5].set,
    finals: []
  })
  team_s3l.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    set: final_teams[2].set,
    finals: []
  })
  }
   //Q4
   if(q4t1>=q4t2){
    team_s4.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    set: final_teams[3].set,
    finals: []
  })
  team_s4l.push({
    name: final_teams[4].name,
    att: final_teams[4].att,
    def: final_teams[4].def,
    set: final_teams[4].set,
    finals: []
  })
  }else if(q4t1<q4t2){
    team_s4.push({
    name: final_teams[4].name,
    att: final_teams[4].att,
    def: final_teams[4].def,
    set: final_teams[4].set,
    finals: []
  })
  team_s4l.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    set: final_teams[3].set,
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

        <tr id="s2m1">
            <td id="host">${team_s1[0].name}</td>
            <td id="guest">${team_s4[0].name}</td>
            <td colspan="2"><button onclick="play2(team_s1[0],team_s4[0],s2m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="s2m2">
            <td>${team_s2[0].name}</td>
            <td>${team_s3[0].name}</td>
            <td colspan="2"><button onclick="play2(team_s2[0],team_s3[0],s2m2)" class="play_button btn_effect">Play</button></td>
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr><td colspan="4">
            <button onclick="final()" class="play_button btn_effect">Finals</button> </td>
              </tr> `

}

if(teams.length<13){
  final_teams = [];
  for(i=0;i<teams.length;i++){
final_teams.push({
  name: teams[i].name,
  att: teams[i].att,
  def: teams[i].def,
  set: teams[i].set,
  match: teams[i].points.length,
  win: teams[i].win.length,
  lose: teams[i].lose.length,
  set_plus: teams[i].set_plus_sum,
  set_minus: teams[i].set_minus_sum,
  points: teams[i].points_sum,
  finals: []
}
)
}

let ft = final_teams.sort((a,b)=> ((b.points) - (a.points) || (b.set_plus) - (a.set_plus)))//live table

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

        <tr id="s2m1">
            <td id="host">${final_teams[0].name}</td>
            <td id="guest">${final_teams[3].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[0],final_teams[3],s2m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="s2m2">
            <td>${final_teams[1].name}</td>
            <td>${final_teams[2].name}</td>
            <td colspan="2"><button onclick="play2(final_teams[1],final_teams[2],s2m2)" class="play_button btn_effect">Play</button></td>
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

    if(teams.length>13){
        const s1t1 = team_s1[0].finals[0]+team_s1[0].finals[1];
        const s1t2 = team_s4[0].finals[0]+team_s4[0].finals[1];
        const s2t1 = team_s2[0].finals[0]+team_s2[0].finals[1];
        const s2t2 = team_s3[0].finals[0]+team_s3[0].finals[1];

        if(s1t1>=s1t2){
        team_f1.push({
    name: team_s1[0].name,
    att: team_s1[0].att,
    def: team_s1[0].def,
    set: team_s1[0].set,
    finals: []
  })
  team_f1l.push({
    name: team_s4[0].name,
    att: team_s4[0].att,
    def: team_s4[0].def,
    set: team_s4[0].set,
    finals: []
  })
  }else if(s1t1<s1t2){
        team_f1.push({
    name: team_s4[0].name,
    att: team_s4[0].att,
    def: team_s4[0].def,
    set: team_s4[0].set,
    finals: []
  })
  team_f1l.push({
    name: team_s1[0].name,
    att: team_s1[0].att,
    def: team_s1[0].def,
    set: team_s1[0].set,
    finals: []
  })
  }
  if(s2t1>=s2t2){
        team_f2.push({
    name: team_s2[0].name,
    att: team_s2[0].att,
    def: team_s2[0].def,
    set: team_s2[0].set,
    finals: []
  })
  team_f2l.push({
    name: team_s3[0].name,
    att: team_s3[0].att,
    def: team_s3[0].def,
    set: team_s3[0].set,
    finals: []
  })
  }else if(s2t1<s2t2){
        team_f2.push({
    name: team_s3[0].name,
    att: team_s3[0].att,
    def: team_s3[0].def,
    set: team_s3[0].set,
    finals: []
  })
  team_f2l.push({
    name: team_s2[0].name,
    att: team_s2[0].att,
    def: team_s2[0].def,
    set: team_s2[0].set,
    finals: []
  })}
    }

    if(teams.length<13){
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
    set: final_teams[0].set,
    finals: []
  })
  team_f1l.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    set: final_teams[3].set,
    finals: []
  })
  }else if(s1t1<s1t2){
        team_f1.push({
    name: final_teams[3].name,
    att: final_teams[3].att,
    def: final_teams[3].def,
    set: final_teams[3].set,
    finals: []
  })
  team_f1l.push({
    name: final_teams[0].name,
    att: final_teams[0].att,
    def: final_teams[0].def,
    set: final_teams[0].set,
    finals: []
  })
  }
  if(s2t1>=s2t2){
        team_f2.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    set: final_teams[1].set,
    finals: []
  })
  team_f2l.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    set: final_teams[2].set,
    finals: []
  })
  }else if(s2t1<s2t2){
        team_f2.push({
    name: final_teams[2].name,
    att: final_teams[2].att,
    def: final_teams[2].def,
    set: final_teams[2].set,
    finals: []
  })
  team_f2l.push({
    name: final_teams[1].name,
    att: final_teams[1].att,
    def: final_teams[1].def,
    set: final_teams[1].set,
    finals: []
  })}
    }

            schedule.innerHTML = `<tr>
            <th colspan="4">FINAL</th>
        </tr>

        <tr id="f1m1">
            <td id="host">${team_f2[0].name}</td>
            <td id="guest">${team_f1[0].name}</td>
            <td colspan="2"><button onclick="play2(team_f2[0],team_f1[0],f1m1)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr id="f1m2">
            <td id="host">${team_f1[0].name}</td>
            <td id="guest">${team_f2[0].name}</td>
            <td colspan="2"><button onclick="play2(team_f1[0],team_f2[0],f1m2)" class="play_button btn_effect">Play</button></td> 
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
            <td colspan="2"><button onclick="play2(team_f2l[0],team_f1l[0],f2m2)" class="play_button btn_effect">Play</button></td> 
        </tr>
        <tr>
            <th colspan="4" class="end_round">X</th>
        </tr>
        <tr><td colspan="4"><button onclick="reload()" class="play_button btn_effect">Finish</button></td></tr>`;
        }
        
        



//Bazy do wyboru
const poland4 = [{
            name: 'Legia',
            att: 90,
            mid: 70,
            def: 70
        },
        {
            name: 'Unia',
            att: 90,
            mid: 70,
            def: 70
        },
        {
            name: 'Lech',
            att: 90,
            mid: 70,
            def: 70
        },
        {
            name: 'Sparta',
            att: 90,
            mid: 70,
            def: 70
        }
        ];

        const poland = [{
          name: 'Zaksa',
          att: 85,
          set: 84,
          def: 85
          },{
          name: 'Verva Warszawa',
          att: 84,
          set: 83,
          def: 85
          },{
          name: 'Skra Bełchatów',
          att: 85,
          set: 82,
          def: 84
          },{
          name: 'Jastrzębski Węgiel',
          att: 83,
          set: 83,
          def: 83
          },{
          name: 'Trefl Gdańsk',
          att: 81,
          set: 81,
          def: 82
          },{
          name: 'GKS Katowice',
          att: 80,
          set: 81,
          def: 80
          },{
          name: 'Czarni Radom',
          att: 80,
          set: 80,
          def: 81
          },{
          name: 'Indykpol Olsztyn',
          att: 79,
          set: 80,
          def: 79
          },{
          name: 'Ślepsk Suwałki',
          att: 80,
          set: 78,
          def: 79
          },{
          name: 'Aluron Zawiercie',
          att: 78,
          set: 79,
          def: 78
          },{
          name: 'MKS Będzin',
          att: 77,
          set: 77,
          def: 79
          },{
          name: 'Cuprum Lubin',
          att: 77,
          set: 76,
          def: 78
          },{
          name: 'Asseco Resovia',
          att: 78,
          set: 76,
          def: 77
          },{
          name: 'Visla Bydgoszcz',
          att: 77,
          set: 76,
          def: 75
          },{
          name: 'BBTS Bielsko-Bała',
          att: 75,
          set: 74,
          def: 74
          },{
          name: 'Stal Nysa',
          att: 75,
          set: 74,
          def: 74
          }
             ]

const national = [{
          name: 'Brasil',
          att: 90,
          set: 90,
          def: 90
          },{
          name: 'Iran',
          att: 87,
          set: 87,
          def: 87
          },{
          name: 'Russia',
          att: 88,
          set: 88,
          def: 88
          },{
          name: 'France',
          att: 89,
          set: 87,
          def: 87
          },{
          name: 'Poland',
          att: 92,
          set: 88,
          def: 88
          },{
          name: 'USA',
          att: 90,
          set: 88,
          def: 90
          },{
          name: 'Argentina',
          att: 85,
          set: 85,
          def: 85
          },{
          name: 'Italy',
          att: 87,
          set: 85,
          def: 85
          },{
          name: 'Canada',
          att: 85,
          set: 83,
          def: 84
          },{
          name: 'Japan',
          att: 81,
          set: 81,
          def: 81
          },{
          name: 'Serbia',
          att: 84,
          set: 84,
          def: 84
          },{
          name: 'Bulgaria',
          att: 82,
          set: 82,
          def: 83
          },{
          name: 'Australia',
          att: 80,
          set: 79,
          def: 80
          },{
          name: 'Germany',
          att: 81,
          set: 82,
          def: 80
          },{
          name: 'Portugal',
          att: 77,
          set: 78,
          def: 77
          },{
          name: 'China',
          att: 75,
          set: 77,
          def: 76
          }
  
]

const nationalW = [{
          name: 'China',
          att: 90,
          set: 90,
          def: 90
          },{
          name: 'USA',
          att: 90,
          set: 87,
          def: 89
          },{
          name: 'Brasil',
          att: 88,
          set: 88,
          def: 88
          },{
          name: 'Italy',
          att: 89,
          set: 87,
          def: 87
          },{
          name: 'Poland',
          att: 86,
          set: 88,
          def: 88
          },{
          name: 'Turkey',
          att: 87,
          set: 88,
          def: 89
          },{
          name: 'Belgium',
          att: 85,
          set: 85,
          def: 87
          },{
          name: 'Dominicana',
          att: 87,
          set: 85,
          def: 85
          },{
          name: 'Japan',
          att: 85,
          set: 83,
          def: 84
          },{
          name: 'Germany',
          att: 81,
          set: 81,
          def: 81
          },{
          name: 'Netherland',
          att: 84,
          set: 84,
          def: 84
          },{
          name: 'Tailand',
          att: 82,
          set: 82,
          def: 83
          },{
          name: 'Russia',
          att: 80,
          set: 79,
          def: 80
          },{
          name: 'South Corea',
          att: 81,
          set: 82,
          def: 80
          },{
          name: 'Serbia',
          att: 80,
          set: 78,
          def: 79
          },{
          name: 'Bulgaria',
          att: 79,
          set: 77,
          def: 79
          }
  
]

const italy = [
  {
          name: 'Lube Civitanova',
          att: 90,
          set: 90,
          def: 90  
          },{
          name: 'Modena',
          att: 90,
          set: 89,
          def: 89 
          },{
          name: 'Perugia',
          att: 90,
          set: 89,
          def: 88  
          },{
          name: 'Trentino',
          att: 88,
          set: 88,
          def: 88  
          },{
          name: 'Milano',
          att: 86,
          set: 87,
          def: 87  
          },{
          name: 'Ravenna',
          att: 86,
          set: 85,
          def: 85  
          },{
          name: 'Padova',
          att: 85,
          set: 85,
          def: 84  
          },{
          name: 'Verona',
          att: 84,
          set: 85,
          def: 84 
          },{
          name: 'Monza',
          att: 84,
          set: 83,
          def: 84  
          },{
          name: 'Piacenza',
          att: 82,
          set: 81,
          def: 81  
          },{
          name: 'Latina',
          att: 81,
          set: 80,
          def: 81  
          },{
          name: 'Vibo Valentia',
          att: 81,
          set: 81,
          def: 80  
          }
]
const polandW = [
  {
name: 'Chemik Police',
att: 80,
set: 80,
def: 80 
},{
name: 'SkyRes Rzeszów',
att: 79,
set: 78,
def: 79 
},{
name: 'ŁKS Łódź',
att: 77,
set: 77,
def: 77  
},{
name: 'Legionowo',
att: 75,
set: 75,
def: 76  
},{
name: 'Budowlani Łódź',
att: 74,
set: 73,
def: 75  
},{
name: 'Pałac Bydgoszcz',
att: 73,
set: 72,
def: 74  
},{
name: 'Stal Bielsko-Biała',
att: 73,
set: 73,
def: 73  
},{
name: 'Enea Piła',
att: 72,
set: 71,
def: 71  
},{
name: 'MKS Kalisz',
att: 71,
set: 71,
def: 70 
},{
name: 'Radomka Radom',
att: 70,
set: 71,
def: 71  
},{
name: 'Volley Wrocław',
att: 70,
set: 70,
def: 70  
},{
name: 'Wisła Warszawa',
att: 68,
set: 68,
def: 69  
}
]

