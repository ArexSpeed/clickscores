const select = document.querySelector('#select'); //jaka liga byla wybrana
        const showTeam = document.querySelector('.showTeam'); //do pokazania wybranych druzyn
        const button = document.querySelector('.button') //Button do wyswietlania round
        const schedule = document.querySelector('.schedule'); //pokazuje mecze
        const tableSort = document.querySelector('.tablesort'); //posortowana tabela
        const addTeams = document.querySelector('.addteams'); //main div
        const game = document.querySelector('.game'); //main div
        const selectLeague = document.querySelector('.selectLeague');
        const selectFaq = document.querySelector('#select_faq');
        const faqExpl = document.querySelector('.faq_expl');
       

        function reload(){
            location.reload();
            return false;
          }
          //FAQ
          selectFaq.addEventListener('change', () => {
            console.log(selectFaq.value);
            faqExpl.innerHTML = '';
            if (selectFaq.value == 'faq_ligi') {
                faqExpl.innerHTML += `Wybierając opcje "Select League" można wybrać swoja ulubiona ligę spośrod dostępnych. Po wyborze ligi wyświetlają się drużyny w niej występujące. <br>
                Do każdej drużyny przypisane są umiejętności kolejno:<br>
                Lid - siła liderów<br>
                2Ln - siła "drugiej lini"<br>
                Jun - siła juniorów<br>
                Jeśli chcesz możesz je swobodnie edytowac klikając na wybraną umiejętność danego teamu a także edytować nazwe drużyny jeśli chcesz by w rozgrywce brała udział Twoja drużyna<br>
                Potem wystarczy akceptować i zaczynasz zabawę. `
            }
            if (selectFaq.value == 'faq_yourL') {
                faqExpl.innerHTML += `W grze możesz także stworzyć własną ligę i drużyny. W opcji "Select League" wybierając opcję "Your Teams" wyświetli się do wyboru ilość drużyn jakie mają grać w Twojej lidze.<br>
                Po wyborze ilości możesz uzupełnić formularz z własnymi drużynami kolejno:<br>
                Nazwa drużyny: <br>
                Lid - siła liderów<br>
                2Ln - siła "drugiej lini"<br>
                Jun - siła juniorów<br>
                Potem wystarczy akceptować i zaczynasz zabawę.`
            }
            if (selectFaq.value == 'faq_skills') {
                faqExpl.innerHTML += `Umiejętności drużyn to najważniejszy element rozgrywki aby określić siłę danego zespołu. W symulatorze żużlowym mamy do wybrania takie skille: <br>
                Lid - siła liderów (odpowiada za umiętności najlepszych 3 zawodników podczas biegów w których występują)<br>
                2Ln - siła "drugiej lini" (odpowiada za umiętności pozostałych seniorów podczas biegów w których występują)<br>
                Jun - siła juniorów (odpowiada za umiętności juniorów podczas biegów w których występują)<br> `
            }
            if (selectFaq.value == 'faq_playoff') {
                faqExpl.innerHTML += `
                W każdej rozgrywce mozna dodać do sezonu rozgrywki Play-Off. Są one opcjonalnie nie musisz ich rozgrywać jeśli nie chcesz lecz jeśli chcesz przedłużyć sezon i dodać troche więcej zabawy możesz wybrać tą opcje w każdym momencie<br>
                Dla lig powyżej 13 zespołów w PlayOffach uczestniczy 8 najlepszych zespołów na koniec sezonu zasadniczego. <br>
                Dla lig poniżej 13 zespołów w PlayOffach uczestniczą 4 najlepsze zespoły na koniec sezonu zasadniczego.<br>
                `
            }
            if (selectFaq.value == 'faq_plays') {
                faqExpl.innerHTML += `
                Rozgrywki ligowe odbywają się na zasadzie mecz - rewanż każdy z każdym. <br>
                Po akceptacji wyboru zespołów pojawia się kalendarz spotkań w których możesz rozgrywać swoje mecze wybierając jedna z opcji: <br>
                Play All - rozgrywa wszystkie mecze w danej kolejce<br>
                Play - rozgrywa tylko dany mecz<br>
                Wszystkie wyniki są na bieżąco aktualizowane w tabeli wg schematu: <br>
                Wygrana - 2 pkt<br>
                Remis - 1 pkt<br>
                Porażka - 0 pkt<br>
                Bonus - 1 pkt<br>
                Po rozegranym sezonie zasadniczym możesz rozegrać Play-Offy, które w kolejnych rundach od ćwierćfinału do Finału wyłonią mistrza Twojej ligi.
                `
            }
            if (selectFaq.value == 'faq_gp') {
                faqExpl.innerHTML += `
                Do wyboru są także zawody indywidualne. Można wybrać dostępnych zawodników lub edytować ich dane wtedy odjechać zawody swoimi zawodnikami. Każdy zawodnik ma do uzupełnienia kolejno:<br>
                Nr - numer startowy <br>
                Nazwa zawodnika <br>
                Tech - Technika (im lepsza technika tym lepiej zawodik radzi sobie w kolejnych okrążeniach biegu)<br>
                Ref - refleks (ma ogromne znaczenie na początku biegu)<br>
                Mot - przygotowanie sprzetowe zawdonika, wpływa na jego jazdę podczas biegu<br>
                `
            }
            if (selectFaq.value == 'faq_one') {
                faqExpl.innerHTML += `
                Do wyboru jest także wybór pojedynczego meczu "One Match", w którym odjeżdzamy pełne 15 biegów, w których można w pełni sterować swoimi zawodnikami poprzez zmiany taktyczne czy też zwykłe juniorów. <br>
                Do wyboru są pełne składy zespołów polskiej ekstraligi a także można stworzyć własne zepoły wybierając odpowiednio "Your Team 1" i "Your Team 2" <br>
                Po wyborze interesujących drużyn można przystąpić do uzupełnienia składów.<br>
                Każdy zawodnik ma do uzupełnienia kolejno:<br>
                Nazwa zawodnika <br>
                Tech - Technika (im lepsza technika tym lepiej zawodik radzi sobie w kolejnych okrążeniach biegu)<br>
                Ref - refleks (ma ogromne znaczenie na początku biegu)<br>
                Mot - przygotowanie sprzetowe zawdonika, wpływa na jego jazdę podczas biegu<br>
                Do wystartowania biegu klikamy przycisk "GO" a jeśli chcemy dokonać jakiś zmian to wybieramy "Change"<br>
                `
            }
        });

          //baza tworzona
        const teams = [];
          const teams_cup = [];
        //wyswietlanie dostepnych lig
        select.addEventListener('change', () => {
            showTeam.innerHTML = '';
            if(select.value == 'sgp'){
              if (select.value == 'sgp') {
        
                const rider_qty = 16;
                showTeam.innerHTML += `
                <input type="number" placeholder="NR" readonly>
                <input type="text" placeholder="Name" id="rider_qty" readonly>
                <input type="number" placeholder="Tech" readonly>
                <input type="number" placeholder="Ref" readonly>
                <input type="number" placeholder="Mot" readonly>
                <br>
                <input type="text" value="" placeholder="Skills: Technique, Reflex, Motor" readonly><br>
                `
                for (let i = 0; i < 16; i++) {
        
                    showTeam.innerHTML += `<tr>
                    <td> <input type="number" value="${rider[i].nr}" id="rider${i}_nr" class="rider_nr"> </td>
               <td> <input type="text" value="${rider[i].name}" id="rider${i}_name"> </td>
               <td><input type="number" value="${rider[i].tech}" id="rider${i}_tech" max="99" min="1"> </td>
                <td><input type="number" value="${rider[i].ref}" id="rider${i}_ref" max="99" min="1"> </td>
                    <td><input type="number" value="${rider[i].mot}" id="rider${i}_mot" max="99" min="1"></td>
                </tr><br>
            `;
                }
                showTeam.innerHTML += `<button onclick="accept_sgp()" id="accept_sgp" class="accept btn_effect">Accept</button>`
            };
            }
            //ONE MATCH
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
            ///LEAGUES
            if (select.value == 'eng') {
                teams.splice(0, teams.length);
                const team_qty = england.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Lid" readonly>
                <input type="number" placeholder="2Ln" readonly>
                <input type="number" placeholder="Jun" readonly><br>
                <input type="text" value="" placeholder="Skills: Liders,2ndLine,Juniors" readonly><br><br>
                `
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `<tr>
               <td> <input type="text" value="${england[i].name}" id="team${i}_name"> </td>
               <td><input type="number" value="${england[i].l}" id="team${i}_l" max="99" min="1"> </td>
                <td><input type="number" value="${england[i].sl}" id="team${i}_sl" max="99" min="1"> </td>
                    <td><input type="number" value="${england[i].j}" id="team${i}_j" max="99" min="1"></td>
                </tr><br>
            `;
                }
                showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            };
            if (select.value == 'eks') {
                const team_qty = ekstraliga.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Lid" readonly>
                <input type="number" placeholder="2Ln" readonly>
                <input type="number" placeholder="Jun" readonly><br>
                <input type="text" value="" placeholder="Skills: Liders,2ndLine,Juniors" readonly><br><br>`
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `
                <input type="text" value="${ekstraliga[i].name}" id="team${i}_name"> 
                <input type="number" value="${ekstraliga[i].l}" id="team${i}_l" max="99" min="1"> 
                <input type="number" value="${ekstraliga[i].sl}" id="team${i}_sl" max="99" min="1"> 
                <input type="number" value="${ekstraliga[i].j}" id="team${i}_j" max="99" min="1">
                <br>`;
                }
                showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            }
            if (select.value == 'nic') {
                const team_qty = niceliga.length;
                showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
                <input type="number" placeholder="Lid" readonly>
                <input type="number" placeholder="2Ln" readonly>
                <input type="number" placeholder="Jun" readonly><br>
                <input type="text" value="" placeholder="Skills: Liders,2ndLine,Juniors" readonly><br><br>`
                for (let i = 0; i < team_qty; i++) {

                    showTeam.innerHTML += `
                <input type="text" value="${niceliga[i].name}" id="team${i}_name"> 
                <input type="number" value="${niceliga[i].l}" id="team${i}_l" max="99" min="1"> 
                <input type="number" value="${niceliga[i].sl}" id="team${i}_sl" max="99" min="1"> 
                <input type="number" value="${niceliga[i].j}" id="team${i}_j" max="99" min="1">
                <br>`;
                }
                showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
            }
            if (select.value == 'drug') {
              const team_qty = druga.length;
              showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
              <input type="number" placeholder="Lid" readonly>
              <input type="number" placeholder="2Ln" readonly>
              <input type="number" placeholder="Jun" readonly><br>
              <input type="text" value="" placeholder="Skills: Liders,2ndLine,Juniors" readonly><br><br>`
              for (let i = 0; i < team_qty; i++) {

                  showTeam.innerHTML += `
              <input type="text" value="${druga[i].name}" id="team${i}_name"> 
              <input type="number" value="${druga[i].l}" id="team${i}_l" max="99" min="1"> 
              <input type="number" value="${druga[i].sl}" id="team${i}_sl" max="99" min="1"> 
              <input type="number" value="${druga[i].j}" id="team${i}_j" max="99" min="1">
              <br>`;
              }
              showTeam.innerHTML += `</table><button onclick="accept()" id="accept" class="accept btn_effect">Accept</button>`
          }

            if (select.value == 'swe') {
              const team_qty = sweden.length;
              showTeam.innerHTML += `<input type="button" value="${team_qty}" id="team_qty">
              <input type="number" placeholder="Lid" readonly>
              <input type="number" placeholder="2Ln" readonly>
              <input type="number" placeholder="Jun" readonly><br>
              <input type="text" value="" placeholder="Skills: Liders,2ndLine,Juniors" readonly><br>`
              for (let i = 0; i < team_qty; i++) {

                  showTeam.innerHTML += `
              <input type="text" value="${sweden[i].name}" id="team${i}_name"> 
              <input type="number" value="${sweden[i].l}" id="team${i}_l" max="99" min="1"> 
              <input type="number" value="${sweden[i].sl}" id="team${i}_sl" max="99" min="1"> 
              <input type="number" value="${sweden[i].j}" id="team${i}_j" max="99" min="1">
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
        <option>16</option>
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
            <input type="number" placeholder="Lid" readonly>
            <input type="number" placeholder="2Ln" readonly>
            <input type="number" placeholder="Jun" readonly><br>
            <input type="text" value="" placeholder="Skills: Liders,2ndLine,Juniors" readonly><br>`
            if (numberTeams < 0 || numberTeams > 24) {
                showTeam.innerHTML += "Choose number from 1 to 24";
            }
            console.log(team_qty);
            for (let i = 0; i < numberTeams; i++) {
                showTeam.innerHTML += `<br>

                Team ${i + 1}: <input type="text" id="team${i}_name"> 
                <input type="number" id="team${i}_l"> 
                <input type="number" id="team${i}_sl"> 
                <input type="number" id="team${i}_j">
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
                let new_l = document.querySelector(`#team${n}_l`).value;
                let new_sl = document.querySelector(`#team${n}_sl`).value;
                let new_j = document.querySelector(`#team${n}_j`).value;
                new_l>99 ? new_l=99 : new_l; new_l<1 ? new_l=1 : new_l;
                new_sl>99 ? new_sl=99 : new_sl; new_sl<1 ? new_sl=1 : new_sl;
                new_j>99 ? new_j=99 : new_j; new_j<1 ? new_j=1 : new_j;
                teams.push({
                    name: new_name,
                    l: Number(new_l),
                    sl: Number(new_sl),
                    j: Number(new_j),
                    win: [],
                    draw: [],
                    lose: [],
                    point_plus: [],
                    point_minus: [],
                    points: [],
                    point_plus_sum: 0,
                    point_minus_sum: 0,
                    point_all: [],
                    bonus: 0,
                    points_sum: 0
                })
                nums.splice(rnd,1);
                // console.log(new_name);
                // console.log(new_l);
                // console.log(new_sl);
                // console.log(new_j);

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

        function play(host,guest, m_id,r_id){
            let host_point = 0;
            let guest_point = 0;
            let hc = 0.1;
          
            //40% t, 30% tw, 30% m;
            host_all = host.l+host.sl+host.j;
            guest_all = guest.l+guest.sl+guest.j;
            for(let i = 0; i<15; i++){
                if(i<2){
                host_skil = ((host.j+host.j*hc)+Math.floor(Math.random()*10))
                guest_skil = ((guest.j+Math.floor(Math.random()*10)))
                }
                else if(i<4){
                  host_skil = ((host.sl+host.sl*hc)+Math.floor(Math.random()*10))
                guest_skil = ((guest.sl+Math.floor(Math.random()*10)))
                }
                else if(i<6){
                  host_skil = ((host.l+host.l*hc)+Math.floor(Math.random()*10))
                guest_skil = ((guest.l+Math.floor(Math.random()*10)))
                }
                else if(i<9){
                  host_skil = (((host.sl+host.sl*hc)+Math.floor(Math.random()*10))*0.5)+(((host.j+host.j*hc)+Math.floor(Math.random()*10))*0.5)
                guest_skil = (((guest.sl)+Math.floor(Math.random()*10))*0.5)+(((guest.j)+Math.floor(Math.random()*10))*0.5)
                }
                else if(i<12){
                  host_skil = (((host.sl+host.sl*hc)+Math.floor(Math.random()*10))*0.5)+(((host.l+host.l*hc)+Math.floor(Math.random()*10))*0.5)
                guest_skil = (((guest.sl)+Math.floor(Math.random()*10))*0.5)+(((guest.l)+Math.floor(Math.random()*10))*0.5)
                }
                else if(i<15){
                  host_skil = (((host.l+host.l*hc)+Math.floor(Math.random()*10))*0.5)+(((host.j+host.j*hc)+Math.floor(Math.random()*10))*0.5)
                guest_skil = (((guest.l)+Math.floor(Math.random()*10))*0.5)+(((guest.j)+Math.floor(Math.random()*10))*0.5)
                }
               
                host_point > guest_point ? host_skil-=5 : host_skil+=10;
                guest_point > host_point ? guest_skil-=5 : guest_skil+=10;
          
          
                 let host_pow = Math.floor(Math.random()*(host_skil-host_all/2)+host_all/2);
                let guest_pow = Math.floor(Math.random()*(guest_skil-guest_all/2)+guest_all/2);
                
          
                if(host_pow > guest_pow+10){
                  host_point += 5;
                  guest_point += 1;
                }
                else if(host_pow > guest_pow +5){
                  host_point += 4;
                  guest_point += 2;
                }
                else if(host_pow+10 < guest_pow){
                  host_point += 1;
                  guest_point += 5;
                }
                else if(host_pow+5 < guest_pow ){
                  host_point += 2;
                  guest_point += 4;
                }
                else{
                  host_point += 3;
                  guest_point += 3;
                }

                //console.log(host_point + ':' + guest_point);
              }
              
              //Dodawanie bramek

      host.point_plus.push(host_point);
      host.point_minus.push(guest_point);
      host.point_all.push(host_point);
   
      guest.point_plus.push(guest_point);
      guest.point_minus.push(host_point);
      guest.point_all.push(guest_point);
    
  
  

  //Dodawanie bonusu
  
  if(teams.length==8){
    let nr; //nr round
    nr = host.point_all.length;
      //console.log("RID"); console.log(nr);
      if(nr>7){
        let hb = host.point_all[nr-8]+host_point;
        let gb = guest.point_all[nr-8]+guest_point;

        if(hb>gb){ host.bonus++}else if(gb>hb){guest.bonus++}
        //hb > gb ? host.bonus++ : guest.bonus++;
      }

  }
              
              //Dodawanie punktów
if (host_point > guest_point) {
    host.points.push(2);
    guest.points.push(0);
    host.win.push(1);
    guest.lose.push(1);
  } else if (host_point < guest_point) {
    guest.points.push(2);
    host.points.push(0);
    guest.win.push(1);
    host.lose.push(1);
  } else if (host_point == guest_point) {
    host.points.push(1);
    guest.points.push(1);
    guest.draw.push(1);
    host.draw.push(1);
  }
  
  //Sumowanie bramek i punktów
  teams.forEach(x => {
    x.points_sum = x.points.reduce((a, b) => a + b, 0)
  })
  
  teams.forEach(x => {
    x.point_plus_sum = x.point_plus.reduce((a, b) => a + b, 0)
  })
  
  teams.forEach(x => {
    x.point_minus_sum = x.point_minus.reduce((a, b) => a + b, 0)
  })
  if(r_id){
      r_id.innerHTML = `
             
             `;
  }
  
  m_id.innerHTML = `
        <td class="host">${host.name}</td>
        <td class="guest">${guest.name}</td>
        <td class="host host_score">${host_point}</td>
       <td class="guest guest_score">${guest_point}
         `
  
         teamtable();
           
            
          }

          function play2(host, guest, m_id,r_id) {

            let host_point = 0;
            let guest_point = 0;
            let hc = 0.1;
          
            //40% t, 30% tw, 30% m;
            host_all = host.l+host.sl+host.j;
            guest_all = guest.l+guest.sl+guest.j;
            for(let i = 0; i<15; i++){
                if(i<2){
                host_skil = ((host.j+host.j*hc)+Math.floor(Math.random()*10))
                guest_skil = ((guest.j+Math.floor(Math.random()*10)))
                }
                else if(i<4){
                  host_skil = ((host.sl+host.sl*hc)+Math.floor(Math.random()*10))
                guest_skil = ((guest.sl+Math.floor(Math.random()*10)))
                }
                else if(i<6){
                  host_skil = ((host.l+host.l*hc)+Math.floor(Math.random()*10))
                guest_skil = ((guest.l+Math.floor(Math.random()*10)))
                }
                else if(i<9){
                  host_skil = (((host.sl+host.sl*hc)+Math.floor(Math.random()*10))*0.5)+(((host.j+host.j*hc)+Math.floor(Math.random()*10))*0.5)
                guest_skil = (((guest.sl)+Math.floor(Math.random()*10))*0.5)+(((guest.j)+Math.floor(Math.random()*10))*0.5)
                }
                else if(i<12){
                  host_skil = (((host.sl+host.sl*hc)+Math.floor(Math.random()*10))*0.5)+(((host.l+host.l*hc)+Math.floor(Math.random()*10))*0.5)
                guest_skil = (((guest.sl)+Math.floor(Math.random()*10))*0.5)+(((guest.l)+Math.floor(Math.random()*10))*0.5)
                }
                else if(i<15){
                  host_skil = (((host.l+host.l*hc)+Math.floor(Math.random()*10))*0.5)+(((host.j+host.j*hc)+Math.floor(Math.random()*10))*0.5)
                guest_skil = (((guest.l)+Math.floor(Math.random()*10))*0.5)+(((guest.j)+Math.floor(Math.random()*10))*0.5)
                }
               
                host_point > guest_point ? host_skil-=5 : host_skil+=10;
                guest_point > host_point ? guest_skil-=5 : guest_skil+=10;
          
          
                 let host_pow = Math.floor(Math.random()*(host_skil-host_all/2)+host_all/2);
                let guest_pow = Math.floor(Math.random()*(guest_skil-guest_all/2)+guest_all/2);
                
          
                if(host_pow > guest_pow+10){
                  host_point += 5;
                  guest_point += 1;
                }
                else if(host_pow > guest_pow +5){
                  host_point += 4;
                  guest_point += 2;
                }
                else if(host_pow+10 < guest_pow){
                  host_point += 1;
                  guest_point += 5;
                }
                else if(host_pow+5 < guest_pow ){
                  host_point += 2;
                  guest_point += 4;
                }
                else{
                  host_point += 3;
                  guest_point += 3;
                }

                //console.log(host_point + ':' + guest_point);
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
                 <td class="guest guest_score">${guest_point}
                  `
            }

          function teamtable(){
            let new_teams = [];
            for(i=0;i<teams.length;i++){
              new_teams.push({
                name: teams[i].name,
                match: teams[i].points.length,
                win: teams[i].win.length,
                draw: teams[i].draw.length,
                lose: teams[i].lose.length,
                bilans: teams[i].point_plus_sum - teams[i].point_minus_sum,
                bonus: teams[i].bonus,
                points: teams[i].points_sum + teams[i].bonus
              }
              )
            }
            //console.log(new_teams);
            let lt = new_teams.sort((a,b)=> ((b.points) - (a.points) || (b.bilans) - (a.bilans)))//live table
            
            if(new_teams.length == 4){
                 tableSort.innerHTML = `<table>
                                <tr>
                                    <th colspan="9">Table</th>
                                </tr>
                                <tr>
                                    <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Bilans</td><td>B</td><td>Points</td>
                                </tr>
                                <tr>  
                                <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].bilans}</td><td>${lt[0].bonus}</td><td>${lt[0].points}</td>
                                </tr>
                                <tr>
                                <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].bilans}</td><td>${lt[1].bonus}</td><td>${lt[1].points}</td>
                                </tr>
                                <tr>
                                 <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].bilans}</td><td>${lt[2].bonus}</td><td>${lt[2].points}</td>
                                </tr>
                                <tr>
                                <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].bilans}</td><td>${lt[3].bonus}</td><td>${lt[3].points}</td>
                                </tr>
                  </table>   `
            }
                if(new_teams.length == 6){
                 tableSort.innerHTML = `<table>
                 <tr>
                 <th colspan="9">Table</th>
             </tr>
             <tr>
                 <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Bilans</td><td>B</td><td>Points</td>
             </tr>
             <tr>  
             <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].bilans}</td><td>${lt[0].bonus}</td><td>${lt[0].points}</td>
             </tr>
             <tr>
             <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].bilans}</td><td>${lt[1].bonus}</td><td>${lt[1].points}</td>
             </tr>
             <tr>
              <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].bilans}</td><td>${lt[2].bonus}</td><td>${lt[2].points}</td>
             </tr>
             <tr>
             <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].bilans}</td><td>${lt[3].bonus}</td><td>${lt[3].points}</td>
             </tr>
             <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].bilans}</td><td>${lt[4].bonus}</td><td>${lt[4].points}</td>
             </tr>
             <tr>
             <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].bilans}</td><td>${lt[5].bonus}</td><td>${lt[5].points}</td>
             </tr>
                  </table>   `
            }
            if(new_teams.length == 8){
                tableSort.innerHTML = `<table>
                <tr>
                    <th colspan="9">Table</th>
                </tr>
                <tr>
                    <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Bilans</td><td>B</td><td>Points</td>
                </tr>
                <tr>  
                <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].bilans}</td><td>${lt[0].bonus}</td><td>${lt[0].points}</td>
                </tr>
                <tr>
                <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].bilans}</td><td>${lt[1].bonus}</td><td>${lt[1].points}</td>
                </tr>
                <tr>
                 <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].bilans}</td><td>${lt[2].bonus}</td><td>${lt[2].points}</td>
                </tr>
                <tr>
                <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].bilans}</td><td>${lt[3].bonus}</td><td>${lt[3].points}</td>
                </tr>
                <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].bilans}</td><td>${lt[4].bonus}</td><td>${lt[4].points}</td>
                </tr>
                <tr>
                <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].bilans}</td><td>${lt[5].bonus}</td><td>${lt[5].points}</td>
                </tr>
                <tr>
                 <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].bilans}</td><td>${lt[6].bonus}</td><td>${lt[6].points}</td>
                </tr>
                <tr>
                <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].bilans}</td><td>${lt[7].bonus}</td><td>${lt[7].points}</td>
                </tr>
  </table>   `
           }
           if(new_teams.length == 10){
            tableSort.innerHTML = `<table>
            <tr>
                <th colspan="9">Table</th>
            </tr>
            <tr>
                <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Bilans</td><td>B</td><td>Points</td>
            </tr>
            <tr>  
            <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].bilans}</td><td>${lt[0].bonus}</td><td>${lt[0].points}</td>
            </tr>
            <tr>
            <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].bilans}</td><td>${lt[1].bonus}</td><td>${lt[1].points}</td>
            </tr>
            <tr>
             <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].bilans}</td><td>${lt[2].bonus}</td><td>${lt[2].points}</td>
            </tr>
            <tr>
            <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].bilans}</td><td>${lt[3].bonus}</td><td>${lt[3].points}</td>
            </tr>
            <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].bilans}</td><td>${lt[4].bonus}</td><td>${lt[4].points}</td>
            </tr>
            <tr>
            <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].bilans}</td><td>${lt[5].bonus}</td><td>${lt[5].points}</td>
            </tr>
            <tr>
             <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].bilans}</td><td>${lt[6].bonus}</td><td>${lt[6].points}</td>
            </tr>
            <tr>
            <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].bilans}</td><td>${lt[7].bonus}</td><td>${lt[7].points}</td>
            </tr>
            <tr>
            <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].bilans}</td><td>${lt[8].bonus}</td><td>${lt[8].points}</td>
           </tr>
           <tr>
           <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].bilans}</td><td>${lt[9].bonus}</td><td>${lt[9].points}</td>
           </tr>
</table>   `
       }

       if(new_teams.length == 12){
        tableSort.innerHTML = `<table>
        <tr>
            <th colspan="9">Table</th>
        </tr>
        <tr>
            <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Bilans</td><td>B</td><td>Points</td>
        </tr>
        <tr>  
        <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].bilans}</td><td>${lt[0].bonus}</td><td>${lt[0].points}</td>
        </tr>
        <tr>
        <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].bilans}</td><td>${lt[1].bonus}</td><td>${lt[1].points}</td>
        </tr>
        <tr>
         <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].bilans}</td><td>${lt[2].bonus}</td><td>${lt[2].points}</td>
        </tr>
        <tr>
        <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].bilans}</td><td>${lt[3].bonus}</td><td>${lt[3].points}</td>
        </tr>
        <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].bilans}</td><td>${lt[4].bonus}</td><td>${lt[4].points}</td>
        </tr>
        <tr>
        <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].bilans}</td><td>${lt[5].bonus}</td><td>${lt[5].points}</td>
        </tr>
        <tr>
         <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].bilans}</td><td>${lt[6].bonus}</td><td>${lt[6].points}</td>
        </tr>
        <tr>
        <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].bilans}</td><td>${lt[7].bonus}</td><td>${lt[7].points}</td>
        </tr>
        <tr>
        <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].bilans}</td><td>${lt[8].bonus}</td><td>${lt[8].points}</td>
       </tr>
       <tr>
       <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].bilans}</td><td>${lt[9].bonus}</td><td>${lt[9].points}</td>
       </tr>   
       <tr>     
       <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].bilans}</td><td>${lt[10].bonus}</td><td>${lt[10].points}</td>
       </tr>
       <tr>
       <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].bilans}</td><td>${lt[11].bonus}</td><td>${lt[11].points}</td>
       </tr>
</table>   `
   }
       if(new_teams.length == 14){
        tableSort.innerHTML = `<table>
        <tr>
            <th colspan="9">Table</th>
        </tr>
        <tr>
            <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Bilans</td><td>B</td><td>Points</td>
        </tr>
        <tr>  
        <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].bilans}</td><td>${lt[0].bonus}</td><td>${lt[0].points}</td>
        </tr>
        <tr>
        <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].bilans}</td><td>${lt[1].bonus}</td><td>${lt[1].points}</td>
        </tr>
        <tr>
         <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].bilans}</td><td>${lt[2].bonus}</td><td>${lt[2].points}</td>
        </tr>
        <tr>
        <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].bilans}</td><td>${lt[3].bonus}</td><td>${lt[3].points}</td>
        </tr>
        <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].bilans}</td><td>${lt[4].bonus}</td><td>${lt[4].points}</td>
        </tr>
        <tr>
        <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].bilans}</td><td>${lt[5].bonus}</td><td>${lt[5].points}</td>
        </tr>
        <tr>
         <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].bilans}</td><td>${lt[6].bonus}</td><td>${lt[6].points}</td>
        </tr>
        <tr>
        <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].bilans}</td><td>${lt[7].bonus}</td><td>${lt[7].points}</td>
        </tr>
        <tr>
        <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].bilans}</td><td>${lt[8].bonus}</td><td>${lt[8].points}</td>
       </tr>
       <tr>
       <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].bilans}</td><td>${lt[9].bonus}</td><td>${lt[9].points}</td>
       </tr>   
       <tr>     
       <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].bilans}</td><td>${lt[10].bonus}</td><td>${lt[10].points}</td>
       </tr>
       <tr>
       <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].bilans}</td><td>${lt[11].bonus}</td><td>${lt[11].points}</td>
       </tr>
       <tr>
        <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td>${lt[12].draw}</td><td>${lt[12].lose}</td><td>${lt[12].bilans}</td><td>${lt[12].bonus}</td><td>${lt[12].points}</td>
       </tr>
       <tr>
       <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td>${lt[13].draw}</td><td>${lt[13].lose}</td><td>${lt[13].bilans}</td><td>${lt[13].bonus}</td><td>${lt[13].points}</td>
       </tr>
</table>   `
   }

       if(new_teams.length == 16){
        tableSort.innerHTML = `<table>
        <tr>
            <th colspan="9">Table</th>
        </tr>
        <tr>
            <td>Poz</td><td>Team</td><td>M</td><td>W</td><td>D</td><td>L</td><td>Bilans</td><td>B</td><td>Points</td>
        </tr>
        <tr>  
        <td>1</td><td>${lt[0].name}</td><td>${lt[0].match}</td><td>${lt[0].win}</td><td>${lt[0].draw}</td><td>${lt[0].lose}</td><td>${lt[0].bilans}</td><td>${lt[0].bonus}</td><td>${lt[0].points}</td>
        </tr>
        <tr>
        <td>2</td><td>${lt[1].name}</td><td>${lt[1].match}</td><td>${lt[1].win}</td><td>${lt[1].draw}</td><td>${lt[1].lose}</td><td>${lt[1].bilans}</td><td>${lt[1].bonus}</td><td>${lt[1].points}</td>
        </tr>
        <tr>
         <td>3</td><td>${lt[2].name}</td><td>${lt[2].match}</td><td>${lt[2].win}</td><td>${lt[2].draw}</td><td>${lt[2].lose}</td><td>${lt[2].bilans}</td><td>${lt[2].bonus}</td><td>${lt[2].points}</td>
        </tr>
        <tr>
        <td>4</td><td>${lt[3].name}</td><td>${lt[3].match}</td><td>${lt[3].win}</td><td>${lt[3].draw}</td><td>${lt[3].lose}</td><td>${lt[3].bilans}</td><td>${lt[3].bonus}</td><td>${lt[3].points}</td>
        </tr>
        <td>5</td><td>${lt[4].name}</td><td>${lt[4].match}</td><td>${lt[4].win}</td><td>${lt[4].draw}</td><td>${lt[4].lose}</td><td>${lt[4].bilans}</td><td>${lt[4].bonus}</td><td>${lt[4].points}</td>
        </tr>
        <tr>
        <td>6</td><td>${lt[5].name}</td><td>${lt[5].match}</td><td>${lt[5].win}</td><td>${lt[5].draw}</td><td>${lt[5].lose}</td><td>${lt[5].bilans}</td><td>${lt[5].bonus}</td><td>${lt[5].points}</td>
        </tr>
        <tr>
         <td>7</td><td>${lt[6].name}</td><td>${lt[6].match}</td><td>${lt[6].win}</td><td>${lt[6].draw}</td><td>${lt[6].lose}</td><td>${lt[6].bilans}</td><td>${lt[6].bonus}</td><td>${lt[6].points}</td>
        </tr>
        <tr>
        <td>8</td><td>${lt[7].name}</td><td>${lt[7].match}</td><td>${lt[7].win}</td><td>${lt[7].draw}</td><td>${lt[7].lose}</td><td>${lt[7].bilans}</td><td>${lt[7].bonus}</td><td>${lt[7].points}</td>
        </tr>
        <tr>
        <td>9</td><td>${lt[8].name}</td><td>${lt[8].match}</td><td>${lt[8].win}</td><td>${lt[8].draw}</td><td>${lt[8].lose}</td><td>${lt[8].bilans}</td><td>${lt[8].bonus}</td><td>${lt[8].points}</td>
       </tr>
       <tr>
       <td>10</td><td>${lt[9].name}</td><td>${lt[9].match}</td><td>${lt[9].win}</td><td>${lt[9].draw}</td><td>${lt[9].lose}</td><td>${lt[9].bilans}</td><td>${lt[9].bonus}</td><td>${lt[9].points}</td>
       </tr>   
       <tr>     
       <td>11</td><td>${lt[10].name}</td><td>${lt[10].match}</td><td>${lt[10].win}</td><td>${lt[10].draw}</td><td>${lt[10].lose}</td><td>${lt[10].bilans}</td><td>${lt[10].bonus}</td><td>${lt[10].points}</td>
       </tr>
       <tr>
       <td>12</td><td>${lt[11].name}</td><td>${lt[11].match}</td><td>${lt[11].win}</td><td>${lt[11].draw}</td><td>${lt[11].lose}</td><td>${lt[11].bilans}</td><td>${lt[11].bonus}</td><td>${lt[11].points}</td>
       </tr>
       <tr>
        <td>13</td><td>${lt[12].name}</td><td>${lt[12].match}</td><td>${lt[12].win}</td><td>${lt[12].draw}</td><td>${lt[12].lose}</td><td>${lt[12].bilans}</td><td>${lt[12].bonus}</td><td>${lt[12].points}</td>
       </tr>
       <tr>
       <td>14</td><td>${lt[13].name}</td><td>${lt[13].match}</td><td>${lt[13].win}</td><td>${lt[13].draw}</td><td>${lt[13].lose}</td><td>${lt[13].bilans}</td><td>${lt[13].bonus}</td><td>${lt[13].points}</td>
       </tr>
       <tr>
       <td>15</td><td>${lt[14].name}</td><td>${lt[14].match}</td><td>${lt[14].win}</td><td>${lt[14].draw}</td><td>${lt[14].lose}</td><td>${lt[14].bilans}</td><td>${lt[14].bonus}</td><td>${lt[14].points}</td>
      </tr>
      <tr>
      <td>16</td><td>${lt[15].name}</td><td>${lt[15].match}</td><td>${lt[15].win}</td><td>${lt[15].draw}</td><td>${lt[15].lose}</td><td>${lt[15].bilans}</td><td>${lt[15].bonus}</td><td>${lt[15].points}</td>
      </tr>
</table>   `
   }
        }

        let final_teams = [];
           function semi(){
            console.log('Play Off: ')
            console.log(teams);
            
        // if(teams.length>13){
        
        //         //Q1
        //         const q1t1 = final_teams[0].finals[0]+final_teams[0].finals[1];
        //         const q1t2 = final_teams[7].finals[0]+final_teams[7].finals[1];
        //         //Q2
        //         const q2t1 = final_teams[1].finals[0]+final_teams[1].finals[1];
        //         const q2t2 = final_teams[6].finals[0]+final_teams[6].finals[1];
        //         //Q3
        //         const q3t1 = final_teams[2].finals[0]+final_teams[2].finals[1];
        //         const q3t2 = final_teams[5].finals[0]+final_teams[5].finals[1];
        //         //Q4
        //         const q4t1 = final_teams[3].finals[0]+final_teams[3].finals[1];
        //         const q4t2 = final_teams[4].finals[0]+final_teams[4].finals[1];
        
        
        
        //     //Q1
        //     if(q1t1>=q1t2){
        //     team_s1.push({
        //     name: final_teams[0].name,
        //     a: final_teams[0].a,
        //     p: final_teams[0].p,
        //     o: final_teams[0].o,
        //     finals: []
        //   })
        //   team_s1l.push({
        //     name: final_teams[7].name,
        //     a: final_teams[7].a,
        //     p: final_teams[7].p,
        //     o: final_teams[7].o,
        //     finals: []
        //   })
        //   }else if(q1t1<q1t2){
        //     team_s1.push({
        //     name: final_teams[7].name,
        //     a: final_teams[7].a,
        //     p: final_teams[7].p,
        //     o: final_teams[7].o,
        //     finals: []
        //   })
        //   team_s1l.push({
        //     name: final_teams[0].name,
        //     a: final_teams[0].a,
        //     p: final_teams[0].p,
        //     o: final_teams[0].o,
        //     finals: []
        //   })
        //   }
        //    //Q2
        //    if(q2t1>=q2t2){
        //     team_s2.push({
        //     name: final_teams[1].name,
        //     a: final_teams[1].a,
        //     p: final_teams[1].p,
        //     o: final_teams[1].o,
        //     finals: []
        //   })
        //   team_s2l.push({
        //     name: final_teams[6].name,
        //     a: final_teams[6].a,
        //     p: final_teams[6].p,
        //     o: final_teams[6].o,
        //     finals: []
        //   })
        //   }else if(q2t1<q2t2){
        //     team_s2.push({
        //     name: final_teams[6].name,
        //     a: final_teams[6].a,
        //     p: final_teams[6].p,
        //     o: final_teams[6].o,
        //     finals: []
        //   })
        //   team_s2l.push({
        //     name: final_teams[1].name,
        //     a: final_teams[1].a,
        //     p: final_teams[1].p,
        //     o: final_teams[1].o,
        //     finals: []
        //   })
        //   }
        //    //Q3
        //    if(q3t1>=q3t2){
        //     team_s3.push({
        //     name: final_teams[2].name,
        //     a: final_teams[2].a,
        //     p: final_teams[2].p,
        //     o: final_teams[2].o,
        //     finals: []
        //   })
        //   team_s3l.push({
        //     name: final_teams[5].name,
        //     a: final_teams[5].a,
        //     p: final_teams[5].p,
        //     o: final_teams[5].o,
        //     finals: []
        //   })
        //   }else if(q3t1<q3t2){
        //     team_s3.push({
        //     name: final_teams[5].name,
        //     a: final_teams[5].a,
        //     p: final_teams[5].p,
        //     o: final_teams[5].o,
        //     finals: []
        //   })
        //   team_s3l.push({
        //     name: final_teams[2].name,
        //     a: final_teams[2].a,
        //     p: final_teams[2].p,
        //     o: final_teams[2].o,
        //     finals: []
        //   })
        //   }
        //    //Q4
        //    if(q4t1>=q4t2){
        //     team_s4.push({
        //     name: final_teams[3].name,
        //     a: final_teams[3].a,
        //     p: final_teams[3].p,
        //     o: final_teams[3].o,
        //     finals: []
        //   })
        //   team_s4l.push({
        //     name: final_teams[4].name,
        //     a: final_teams[4].a,
        //     p: final_teams[4].p,
        //     o: final_teams[4].o,
        //     finals: []
        //   })
        //   }else if(q4t1<q4t2){
        //     team_s4.push({
        //     name: final_teams[4].name,
        //     a: final_teams[4].a,
        //     p: final_teams[4].p,
        //     o: final_teams[4].o,
        //     finals: []
        //   })
        //   team_s4l.push({
        //     name: final_teams[3].name,
        //     a: final_teams[3].a,
        //     p: final_teams[3].p,
        //     o: final_teams[3].o,
        //     finals: []
        //   })
        //   }
        
        //   //schedule
        //   schedule.innerHTML = `<tr>
        //             <th colspan="4">Semi Final 1</th>
        //         </tr>
        
        //         <tr id="s1m1">
        //             <td id="host">${team_s4[0].name}</td>
        //             <td id="guest">${team_s1[0].name}</td>
        //             <td colspan="2"><button onclick="play2(team_s4[0],team_s1[0],s1m1)" class="play_button btn_effect">Play</button></td> 
        //         </tr>
        //         <tr id="s1m2">
        //             <td>${team_s3[0].name}</td>
        //             <td>${team_s2[0].name}</td>
        //             <td colspan="2"><button onclick="play2(team_s3[0],team_s2[0],s1m2)" class="play_button btn_effect">Play</button></td>
        //         </tr>
        //         <tr>
        //             <th colspan="4" class="end_round">X</th>
        //         </tr>
        //         <tr>
        //             <th colspan="4">Semi Final 2</th>
        //         </tr>
        
        //         <tr id="s2m1">
        //             <td id="host">${team_s1[0].name}</td>
        //             <td id="guest">${team_s4[0].name}</td>
        //             <td colspan="2"><button onclick="play2(team_s4[0],team_s1[0],s2m1)" class="play_button btn_effect">Play</button></td> 
        //         </tr>
        //         <tr id="s2m2">
        //             <td>${team_s2[0].name}</td>
        //             <td>${team_s3[0].name}</td>
        //             <td colspan="2"><button onclick="play2(team_s2[0],team_s3[0],s2m2)" class="play_button btn_effect">Play</button></td>
        //         </tr>
        //         <tr>
        //             <th colspan="4" class="end_round">X</th>
        //         </tr>
        //         <tr id="s3m2">
        //             <button onclick="final()" class="play_button btn_effect">Finals</button> 
        //               </tr> `
        
        // }
        
        if(teams.length<13){
            final_teams = [];
            for(i=0;i<teams.length;i++){
          final_teams.push({
            name: teams[i].name,
            l: teams[i].l,
            sl: teams[i].sl,
            j: teams[i].j,
            bilans: teams[i].point_plus_sum - teams[i].point_minus_sum,
            points: teams[i].points_sum,
            finals: []
          }
          )
        }

        let ft = final_teams.sort((a,b)=> ((b.points) - (a.points) || (b.bilans) - (a.bilans)))//live table

        console.log('Semi 1: ' + ft[0].name + " : " + ft[3].name);
        console.log('Semi 2: ' + ft[1].name + " : " + ft[2].name);
        
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
                    console.log("nowa funkcja final: ")
                    console.log(final_teams);
        
                const s1t1 = final_teams[0].finals[0]+final_teams[0].finals[1];
                const s1t2 = final_teams[3].finals[0]+final_teams[3].finals[1];
                const s2t1 = final_teams[1].finals[0]+final_teams[1].finals[1];
                const s2t2 = final_teams[2].finals[0]+final_teams[2].finals[1];
        
        
                // const team_f1 = s1t1>=s1t2 ? final_teams[0] : final_teams[3];
                // const team_f2 = s2t1>=s2t2 ? final_teams[1] : final_teams[2];
                // const team_f1l = s1t1>=s1t2 ? final_teams[3] : final_teams[0];
                // const team_f2l = s2t1>=s2t2 ? final_teams[2] : final_teams[1];
        
        
            if(s1t1>=s1t2){
                team_f1.push({
            name: final_teams[0].name,
            l: final_teams[0].l,
            sl: final_teams[0].sl,
            j: final_teams[0].j,
            finals: []
          })
          team_f1l.push({
            name: final_teams[3].name,
            l: final_teams[3].l,
            sl: final_teams[3].sl,
            j: final_teams[3].j,
            finals: []
          })
          }else if(s1t1<s1t2){
                team_f1.push({
            name: final_teams[3].name,
            l: final_teams[3].l,
            sl: final_teams[3].sl,
            j: final_teams[3].j,
            finals: []
          })
          team_f1l.push({
            name: final_teams[0].name,
            l: final_teams[0].l,
            sl: final_teams[0].sl,
            j: final_teams[0].j,
            finals: []
          })
          }
          if(s2t1>=s2t2){
                team_f2.push({
            name: final_teams[1].name,
            l: final_teams[1].l,
            sl: final_teams[1].sl,
            j: final_teams[1].j,
            finals: []
          })
          team_f2l.push({
            name: final_teams[2].name,
            l: final_teams[2].l,
            sl: final_teams[2].sl,
            j: final_teams[2].j,
            finals: []
          })
          }else if(s2t1<s2t2){
                team_f2.push({
            name: final_teams[2].name,
            l: final_teams[2].l,
            sl: final_teams[2].sl,
            j: final_teams[2].j,
            finals: []
          })
          team_f2l.push({
            name: final_teams[1].name,
            l: final_teams[1].l,
            sl: final_teams[1].sl,
            j: final_teams[1].j,
            finals: []
          })}
        
        
                console.log("team 0: " + s1t1);
                console.log("team 3: " + s1t2);
                console.log("team 1: " + s2t1);
                console.log("team 2: " + s2t2);
                console.log("Final 1 : ");
                console.log(team_f1[0].name);
                console.log("Final 1 : ");
                console.log(team_f2[0].name);
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
                <tr><td colspan="4"><button onclick="reload()" class="play_button btn_effect">Finish</button></td></tr>
                `


                }
               
            
        

const ekstraliga = [{
            name: 'Unia Leszno',
            l: 90,
            sl: 90,
            j: 85
            },{
            name: 'Sparta Wrocław',
            l: 88,
            sl: 87,
            j: 84
            },{
            name: 'Włókniarz Częstochowa',
            l: 89,
            sl: 87,
            j: 85
            },{
            name: 'Falubaz Zielona Góra',
            l: 87,
            sl: 86,
            j: 81
            },{
            name: 'GKM Grudziądz',
            l: 86,
            sl: 86,
            j: 82
            },{
            name: 'Motor Lublin',
            l: 85,
            sl: 84,
            j: 87
            },{
            name: 'Stal Gorzów',
            l: 88,
            sl: 85,
            j: 85
            },{
            name: 'ROW Rybnik',
            l: 83,
            sl: 83,
            j: 83
            }]

        const niceliga = [{
            name: 'Apator Toruń',
            l: 80,
            sl: 80,
            j: 80
            },{
            name: 'TŻ Ostrów',
            l: 75,
            sl: 74,
            j: 71
            },{
            name: 'Start Gniezno',
            l: 76,
            sl: 72,
            j: 72
            },{
            name: 'Unia Tarnów',
            l: 76,
            sl: 72,
            j: 76
            },{
            name: 'Wybrzeże Gdańsk',
            l: 75,
            sl: 75,
            j: 74
            },{
            name: 'Lokomotiv Daugavpils',
            l: 72,
            sl: 70,
            j: 71
            },{
            name: 'Orzeł Łódź',
            l: 75,
            sl: 73,
            j: 71
            },{
            name: 'Polonia Bydgoszcz',
            l: 77,
            sl: 75,
            j: 73
            }
    
            ]
            const druga = [{
              name: 'PSZ Poznań',
              l: 64,
              sl: 64,
              j: 62
              },{
              name: 'Kolejarz Opole',
              l: 60,
              sl: 60,
              j: 59
              },{
              name: 'Wilki Krosno',
              l: 62,
              sl: 61,
              j: 60
              },{
              name: 'Kolejarz Rawicz',
              l: 66,
              sl: 62,
              j: 64
              },{
              name: 'Wittstock',
              l: 58,
              sl: 56,
              j: 58
              },{
              name: 'Rzeszów',
              l: 60,
              sl: 59,
              j: 60
              }
                ]

            const england = [{
              name: 'Pool Pirates',
              l: 75,
              sl: 75,
              j: 75
              },{
              name: 'Swindon Robins',
              l: 75,
              sl: 74,
              j: 73
              },{
              name: 'Wolverhampton',
              l: 74,
              sl: 73,
              j: 71
              },{
              name: 'Ipswich',
              l: 71,
              sl: 70,
              j: 71
              },{
              name: 'Belle Vue Aces',
              l: 77,
              sl: 74,
              j: 74
              },{
              name: 'Kings Lynn Stars',
              l: 70,
              sl: 70,
              j: 71
              },{
              name: 'Peterborough',
              l: 70,
              sl: 72,
              j: 69
              },{
              name: 'Somerset',
              l: 69,
              sl: 68,
              j: 68
              },{
                name: 'Leicester',
                l: 68,
                sl: 68,
                j: 67
                },{
                name: 'Birmingham',
                l: 67,
                sl: 68,
                j: 67
                }
                  ]

  
  const sweden = [{
              name: 'Dackarna Malilla',
              l: 79,
              sl: 78,
              j: 75
              },{
              name: 'Vetlanda',
              l: 77,
              sl: 76,
              j: 75
              },{
              name: 'Vastervik',
              l: 74,
              sl: 73,
              j: 73
              },{
              name: 'Eskilstuna',
              l: 75,
              sl: 75,
              j: 75
              },{
              name: 'Lejonen',
              l: 78,
              sl: 75,
              j: 75
              },{
              name: 'Indianerna Kumla',
              l: 72,
              sl: 71,
              j: 72
              },{
              name: 'Rospiggarna',
              l: 70,
              sl: 70,
              j: 72
              },{
              name: 'Masarna Avesta',
              l: 68,
              sl: 69,
              j: 68
              }
                 ]



////SGP/////


//baza tworzona
const riders = [];
const rider = [
    {   
        name: "B. Zmarzlik",
        nr: 95,
        tech: 90,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "L. Madsen",
        nr: 30,
        tech: 89,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "E. Sayfutdinov",
        nr: 89,
        tech: 90,
        ref: 90,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "F. Lindgren",
        nr: 66,
        tech: 88,
        ref: 88,
        mot: 90,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "M. Vaculik",
        nr: 54,
        tech: 87,
        ref: 86,
        mot: 89,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "M. Janowski",
        nr: 71,
        tech: 86,
        ref: 87,
        mot: 88,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "J. Doyle",
        nr: 69,
        tech: 87,
        ref: 86,
        mot: 88,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "P. Dudek",
        nr: 692,
        tech: 87,
        ref: 87,
        mot: 87,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "M. Zagar",
        nr: 55,
        tech: 85,
        ref: 86,
        mot: 86,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "N. Iversen",
        nr: 88,
        tech: 84,
        ref: 85,
        mot: 86,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "A. Laguta",
        nr: 222,
        tech: 85,
        ref: 85,
        mot: 85,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "A. Lindbeack",
        nr: 85,
        tech: 84,
        ref: 84,
        mot: 85,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "T. Woffinden",
        nr: 108,
        tech: 86,
        ref: 87,
        mot: 88,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "M. Fricke",
        nr: 46,
        tech: 84,
        ref: 84,
        mot: 85,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "M. Smolinski",
        nr: 84,
        tech: 82,
        ref: 81,
        mot: 81,
        pts: [],
        pts_sum: 0,
    },
    {   
        name: "Wild Card",
        nr: 16,
        tech: 80,
        ref: 80,
        mot: 80,
        pts: [],
        pts_sum: 0,
    }
]

function accept_sgp() {

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
        let rand = Math.floor(Math.random()*10);
        let rnd = Math.floor(Math.random()*10);
        let arnd = 0;
        rnd<5 ? arnd-=rand : arnd=rand;
        lap1 = 0.2*(x.tech+arnd+mtr1) + 1*(x.ref+arnd+mtr1);
        lap2 = 0.5*(x.tech+arnd+mtr2) + 0.5*(x.ref+arnd+mtr2);
        lap3 = 0.5*(x.tech+rand+mtr3) + 0.3*(x.ref+arnd+mtr3);
        lap4 = 0.8*(x.tech+arnd+mtr4) + 0.1*(x.ref+arnd+mtr4);
        let inj = Math.floor(Math.random()*100);
        console.log("INJ");
        console.log(inj);
        let sum;
        if(inj>0 && inj<5){
            sum = 1;
        }else if(inj>5 && inj<10){
            sum = 2;
        }else if(inj>10 && inj<15){
            sum = 3;
        }else{
            sum = lap1+lap2+lap3+lap4;
        }
        
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
    if(scores[3]==score1){a.pts.push(0); apts=0; 
        scores[3]==3 ? apos="t" : scores[3]==2 ? apos="d" : scores[3]==1 ? apos="u" : apos=4}
    else if(scores[3]==score2){b.pts.push(0); bpts=0;
        scores[3]==3 ? bpos="t" : scores[3]==2 ? bpos="d" : scores[3]==1 ? bpos="u" : bpos=4}
    else if(scores[3]==score3){c.pts.push(0); cpts=0; 
        scores[3]==3 ? cpos="t" : scores[3]==2 ? cpos="d" : scores[3]==1 ? cpos="u" : cpos=4}
    else if(scores[3]==score4){d.pts.push(0); dpts=0; 
        scores[3]==3 ? dpos="t" : scores[3]==2 ? dpos="d" : scores[3]==1 ? dpos="u" : dpos=4}

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
                                <tr class="sgpf_tab">
                                    <td>1</td><td>${lt[0].nr}</td><td>${lt[0].name}</td><td>${lt[0].pts_sum}</td><td>${lt[0].pt1}</td><td>${lt[0].pt2}</td><td>${lt[0].pt3}</td><td>${lt[0].pt4}</td><td>${lt[0].pt5}</td><td>${lt[0].pt6}</td><td>${lt[0].pt7}</td>
                                </tr>
                                <tr class="sgpf_tab">
                                    <td>2</td><td>${lt[1].nr}</td><td>${lt[1].name}</td><td>${lt[1].pts_sum}</td><td>${lt[1].pt1}</td><td>${lt[1].pt2}</td><td>${lt[1].pt3}</td><td>${lt[1].pt4}</td><td>${lt[1].pt5}</td><td>${lt[1].pt6}</td><td>${lt[1].pt7}</td>
                                </tr>
                                <tr class="sgpf_tab">
                                    <td>3</td><td>${lt[2].nr}</td><td>${lt[2].name}</td><td>${lt[2].pts_sum}</td><td>${lt[2].pt1}</td><td>${lt[2].pt2}</td><td>${lt[2].pt3}</td><td>${lt[2].pt4}</td><td>${lt[2].pt5}</td><td>${lt[2].pt6}</td><td>${lt[2].pt7}</td>
                                </tr>
                                <tr class="sgpf_tab">
                                    <td>4</td><td>${lt[3].nr}</td><td>${lt[3].name}</td><td>${lt[3].pts_sum}</td><td>${lt[3].pt1}</td><td>${lt[3].pt2}</td><td>${lt[3].pt3}</td><td>${lt[3].pt4}</td><td>${lt[3].pt5}</td><td>${lt[3].pt6}</td><td>${lt[3].pt7}</td>
                                </tr>
                                <tr class="sgpf_tab">
                                    <td>5</td><td>${lt[4].nr}</td><td>${lt[4].name}</td><td>${lt[4].pts_sum}</td><td>${lt[4].pt1}</td><td>${lt[4].pt2}</td><td>${lt[4].pt3}</td><td>${lt[4].pt4}</td><td>${lt[4].pt5}</td><td>${lt[4].pt6}</td><td>${lt[4].pt7}</td>
                                </tr>
                                <tr class="sgpf_tab">
                                    <td>6</td><td>${lt[5].nr}</td><td>${lt[5].name}</td><td>${lt[5].pts_sum}</td><td>${lt[5].pt1}</td><td>${lt[5].pt2}</td><td>${lt[5].pt3}</td><td>${lt[5].pt4}</td><td>${lt[5].pt5}</td><td>${lt[5].pt6}</td><td>${lt[5].pt7}</td>
                                </tr>
                                <tr class="sgpf_tab">
                                    <td>7</td><td>${lt[6].nr}</td><td>${lt[6].name}</td><td>${lt[6].pts_sum}</td><td>${lt[6].pt1}</td><td>${lt[6].pt2}</td><td>${lt[6].pt3}</td><td>${lt[6].pt4}</td><td>${lt[6].pt5}</td><td>${lt[6].pt6}</td><td>${lt[6].pt7}</td>
                                </tr>
                                <tr class="sgpf_tab">
                                    <td>8</td><td>${lt[7].nr}</td><td>${lt[7].name}</td><td>${lt[7].pts_sum}</td><td>${lt[7].pt1}</td><td>${lt[7].pt2}</td><td>${lt[7].pt3}</td><td>${lt[7].pt4}</td><td>${lt[7].pt5}</td><td>${lt[7].pt6}</td><td>${lt[7].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
                                    <td>9</td><td>${lt[8].nr}</td><td>${lt[8].name}</td><td>${lt[8].pts_sum}</td><td>${lt[8].pt1}</td><td>${lt[8].pt2}</td><td>${lt[8].pt3}</td><td>${lt[8].pt4}</td><td>${lt[8].pt5}</td><td>${lt[8].pt6}</td><td>${lt[8].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
                                    <td>10</td><td>${lt[9].nr}</td><td>${lt[9].name}</td><td>${lt[9].pts_sum}</td><td>${lt[9].pt1}</td><td>${lt[9].pt2}</td><td>${lt[9].pt3}</td><td>${lt[9].pt4}</td><td>${lt[9].pt5}</td><td>${lt[9].pt6}</td><td>${lt[9].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
                                    <td>11</td><td>${lt[10].nr}</td><td>${lt[10].name}</td><td>${lt[10].pts_sum}</td><td>${lt[10].pt1}</td><td>${lt[10].pt2}</td><td>${lt[10].pt3}</td><td>${lt[10].pt4}</td><td>${lt[10].pt5}</td><td>${lt[10].pt6}</td><td>${lt[10].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
                                    <td>12</td><td>${lt[11].nr}</td><td>${lt[11].name}</td><td>${lt[11].pts_sum}</td><td>${lt[11].pt1}</td><td>${lt[11].pt2}</td><td>${lt[11].pt3}</td><td>${lt[11].pt4}</td><td>${lt[11].pt5}</td><td>${lt[11].pt6}</td><td>${lt[11].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
                                    <td>13</td><td>${lt[12].nr}</td><td>${lt[12].name}</td><td>${lt[12].pts_sum}</td><td>${lt[12].pt1}</td><td>${lt[12].pt2}</td><td>${lt[12].pt3}</td><td>${lt[12].pt4}</td><td>${lt[12].pt5}</td><td>${lt[12].pt6}</td><td>${lt[12].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
                                    <td>14</td><td>${lt[13].nr}</td><td>${lt[13].name}</td><td>${lt[13].pts_sum}</td><td>${lt[13].pt1}</td><td>${lt[13].pt2}</td><td>${lt[13].pt3}</td><td>${lt[13].pt4}</td><td>${lt[13].pt5}</td><td>${lt[13].pt6}</td><td>${lt[13].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
                                    <td>15</td><td>${lt[14].nr}</td><td>${lt[14].name}</td><td>${lt[14].pts_sum}</td><td>${lt[14].pt1}</td><td>${lt[14].pt2}</td><td>${lt[14].pt3}</td><td>${lt[14].pt4}</td><td>${lt[14].pt5}</td><td>${lt[14].pt6}</td><td>${lt[14].pt7}</td>
                                </tr>
                                <tr class="sgpl_tab">
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
schedule.innerHTML += `<tr><td colspan="4"><button onclick="reload()" class="play_button btn_effect">Finish</button></td></tr>`;



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
button.innerHTML = ``
}

/////ONE MATCH//////
const next = () => {
    console.log('tralala');
    //showTeam.innerHTML = '';
    if (document.contains(document.querySelector(".versus"))) {
        document.querySelector(".versus").remove();
}
        let vs = document.createElement('div');
        vs.classList.add('versus');
        addTeams.append(vs);
    //add class versus to show correctly all inputs in one match


    
    const select_t1 = document.querySelector('#select_t1');
  const select_t2 = document.querySelector('#select_t2');
let t1_name = select_t1.value;
let t2_name = select_t2.value;

  if(t1_name != t2_name){
    //vs.innerHTML +=  `${t1_name} <br>`;
    showTeam.innerHTML += `<br><br><br>
    <input type="number" placeholder="NR" readonly>
    <input type="text" placeholder="Name" id="rider_qty" readonly>
    <input type="number" placeholder="Tech" readonly>
    <input type="number" placeholder="Ref" readonly>
    <input type="number" placeholder="Mot" readonly>
    <br>
    <input type="text" value="" placeholder="Skills: Technique, Reflex, Motor" readonly><br>
    `
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
        vs.innerHTML += `<tr><td colspan="5">SPARTA WROCŁAW</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">WŁÓKNIARZ CZĘSTOCHOWA</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">FALUBAZ ZIELONA GÓRA</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">GKM GRUDZIĄDZ</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">MOTOR LUBLIN</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">STAL GORZÓW</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">RKM RYBNIK</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">YOUR TEAM</td></tr><br>`;
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
    //vs.innerHTML +=  `${t2_name} <br>`;
    vs.innerHTML +=  `<br>`
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
        vs.innerHTML += `<tr><td colspan="5">SPARTA WROCŁAW</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">WŁÓKNIARZ CZĘSTOCHOWA</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">FALUBAZ ZIELONA GÓRA</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">GKM GRUDZIĄDZ</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">MOTOR LUBLIN</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5>STAL GORZÓW</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">RKM RYBNIK</td></tr><br>`;
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
        vs.innerHTML += `<tr><td colspan="5">YOUR TEAM</td></tr><br>`;
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

        let rand = Math.floor(Math.random()*10);
        let rnd = Math.floor(Math.random()*10);
        let arnd = 0;
        rnd<5 ? arnd-=rand : arnd=rand;
        lap1 = 0.2*(x.tech+arnd+mtr1) + 1*(x.ref+arnd+mtr1);
        lap2 = 0.5*(x.tech+arnd+mtr2) + 0.5*(x.ref+arnd+mtr2);
        lap3 = 0.5*(x.tech+rand+mtr3) + 0.3*(x.ref+arnd+mtr3);
        lap4 = 0.8*(x.tech+arnd+mtr4) + 0.1*(x.ref+arnd+mtr4);
        let inj = Math.floor(Math.random()*100);
        console.log("INJ");
        console.log(inj);
        let sum;
        if(inj>0 && inj<5){
            sum = 1;
        }else if(inj>5 && inj<10){
            sum = 2;
        }else if(inj>10 && inj<15){
            sum = 3;
        }else{
            sum = lap1+lap2+lap3+lap4;
        }
        
        return sum;
    }

    let score1 = laps(a);
    let score2 = laps(b);
    let score3 = laps(c);
    let score4 = laps(d);
    // console.log('Scores:');

    // console.log(score1 + " " + a.name);
    // console.log(score2+ " " + b.name);
    // console.log(score3+ " " + c.name);
    // console.log(score4+ " " + d.name);

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
    if(scores[3]==score1){a.pts.push(0); apts=0; 
        scores[3]==3 ? apos="t" : scores[3]==2 ? apos="d" : scores[3]==1 ? apos="u" : apos=4}
    else if(scores[3]==score2){b.pts.push(0); bpts=0;
        scores[3]==3 ? bpos="t" : scores[3]==2 ? bpos="d" : scores[3]==1 ? bpos="u" : bpos=4}
    else if(scores[3]==score3){c.pts.push(0); cpts=0; 
        scores[3]==3 ? cpos="t" : scores[3]==2 ? cpos="d" : scores[3]==1 ? cpos="u" : cpos=4}
    else if(scores[3]==score4){d.pts.push(0); dpts=0; 
        scores[3]==3 ? dpos="t" : scores[3]==2 ? dpos="d" : scores[3]==1 ? dpos="u" : dpos=4}


    riders.forEach(x => {
        x.pts_sum = x.pts.reduce((a, b) => a + b, 0)
      })
      let h_host_pts = apts+bpts;
      let host_pts;
      let h_guest_pts = cpts+dpts;
      let guest_pts;
      //console.log("R1: " + r1.value);
      
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
                                <tr class="host_one-match">
                                    <td>9</td><td>${tab_riders[8].name}</td><td>${tab_riders[8].pts_sum}</td><td>${tab_riders[8].pt1}</td><td>${tab_riders[8].pt2}</td><td>${tab_riders[8].pt3}</td><td>${tab_riders[8].pt4}</td><td>${tab_riders[8].pt5}</td><td>${tab_riders[8].pt6}</td>
                                </tr>
                                <tr class="host_one-match">
                                    <td>10</td><td>${tab_riders[9].name}</<td><td>${tab_riders[9].pts_sum}</td><td>${tab_riders[9].pt1}</td><td>${tab_riders[9].pt2}</td><td>${tab_riders[9].pt3}</td><td>${tab_riders[9].pt4}</td><td>${tab_riders[9].pt5}</td><td>${tab_riders[9].pt6}</td>
                                </tr>
                                <tr class="host_one-match">
                                    <td>11</td><td>${tab_riders[10].name}</td><td>${tab_riders[10].pts_sum}</td><td>${tab_riders[10].pt1}</td><td>${tab_riders[10].pt2}</td><td>${tab_riders[10].pt3}</td><td>${tab_riders[10].pt4}</td><td>${tab_riders[10].pt5}</td><td>${tab_riders[10].pt6}</td>
                                </tr>
                                <tr class="host_one-match">
                                    <td>12</td><td>${tab_riders[11].name}</td><td>${tab_riders[11].pts_sum}</td><td>${tab_riders[11].pt1}</td><td>${tab_riders[11].pt2}</td><td>${tab_riders[11].pt3}</td><td>${tab_riders[11].pt4}</td><td>${tab_riders[11].pt5}</td><td>${tab_riders[11].pt6}</td>
                                </tr>
                                <tr class="host_one-match">
                                    <td>13</td><td>${tab_riders[12].name}</td><td>${tab_riders[12].pts_sum}</td><td>${tab_riders[12].pt1}</td><td>${tab_riders[12].pt2}</td><td>${tab_riders[12].pt3}</td><td>${tab_riders[12].pt4}</td><td>${tab_riders[12].pt5}</td><td>${tab_riders[12].pt6}</td>
                                </tr>
                                <tr class="host_one-match">
                                    <td>14</td><td>${tab_riders[13].name}</td><td>${tab_riders[13].pts_sum}</td><td>${tab_riders[13].pt1}</td><td>${tab_riders[13].pt2}</td><td>${tab_riders[13].pt3}</td><td>${tab_riders[13].pt4}</td><td>${tab_riders[13].pt5}</td><td>${tab_riders[13].pt6}</td>
                                </tr>
                                <tr class="host_one-match">
                                    <td>15</td><td>${tab_riders[14].name}</td><td>${tab_riders[14].pts_sum}</td><td>${tab_riders[14].pt1}</td><td>${tab_riders[14].pt2}</td><td>${tab_riders[14].pt3}</td><td>${tab_riders[14].pt4}</td><td>${tab_riders[14].pt5}</td><td>${tab_riders[14].pt6}</td>
                                </tr>
                                <tr class="host_one-match">
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
                  <tr class="guest_one-match">
                      <td>1</td><td>${tab_riders[0].name}</td><td>${tab_riders[0].pts_sum}</td><td>${tab_riders[0].pt1}</td><td>${tab_riders[0].pt2}</td><td>${tab_riders[0].pt3}</td><td>${tab_riders[0].pt4}</td><td>${tab_riders[0].pt5}</td><td>${tab_riders[0].pt6}</td>
                  </tr>
                  <tr class="guest_one-match">
                      <td>2</td><td>${tab_riders[1].name}</td><td>${tab_riders[1].pts_sum}</td><td>${tab_riders[1].pt1}</td><td>${tab_riders[1].pt2}</td><td>${tab_riders[1].pt3}</td><td>${tab_riders[1].pt4}</td><td>${tab_riders[1].pt5}</td><td>${tab_riders[1].pt6}</td>
                  </tr>
                  <tr class="guest_one-match">
                      <td>3</td><td>${tab_riders[2].name}</td><td>${tab_riders[2].pts_sum}</td><td>${tab_riders[2].pt1}</td><td>${tab_riders[2].pt2}</td><td>${tab_riders[2].pt3}</td><td>${tab_riders[2].pt4}</td><td>${tab_riders[2].pt5}</td><td>${tab_riders[2].pt6}</td>
                  </tr>
                  <tr class="guest_one-match">
                      <td>4</td><td>${tab_riders[3].name}</td><td>${tab_riders[3].pts_sum}</td><td>${tab_riders[3].pt1}</td><td>${tab_riders[3].pt2}</td><td>${tab_riders[3].pt3}</td><td>${tab_riders[3].pt4}</td><td>${tab_riders[3].pt5}</td><td>${tab_riders[3].pt6}</td>
                  </tr>
                  <tr class="guest_one-match">
                      <td>5</td><td>${tab_riders[4].name}</td><td>${tab_riders[4].pts_sum}</td><td>${tab_riders[4].pt1}</td><td>${tab_riders[4].pt2}</td><td>${tab_riders[4].pt3}</td><td>${tab_riders[4].pt4}</td><td>${tab_riders[4].pt5}</td><td>${tab_riders[4].pt6}</td>
                  </tr>
                  <tr class="guest_one-match">
                      <td>6</td><td>${tab_riders[5].name}</td><td>${tab_riders[5].pts_sum}</td><td>${tab_riders[5].pt1}</td><td>${tab_riders[5].pt2}</td><td>${tab_riders[5].pt3}</td><td>${tab_riders[5].pt4}</td><td>${tab_riders[5].pt5}</td><td>${tab_riders[5].pt6}</td>
                  </tr>
                  <tr class="guest_one-match">
                      <td>7</td><td>${tab_riders[6].name}</td><td>${tab_riders[6].pts_sum}</td><td>${tab_riders[6].pt1}</td><td>${tab_riders[6].pt2}</td><td>${tab_riders[6].pt3}</td><td>${tab_riders[6].pt4}</td><td>${tab_riders[6].pt5}</td><td>${tab_riders[6].pt6}</td>
                  </tr>
                  <tr class="guest_one-match">
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
button.innerHTML = ``
schedule.innerHTML += `<tr><td colspan="4"><button onclick="reload()" class="play_button btn_effect">Finish</button></td></tr>`;



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
        name: "M. Świdnicki",
        tech: 65,
        ref: 65,
        mot: 70,
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




