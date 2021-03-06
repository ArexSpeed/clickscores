
  $(".tablechange").click(function(){
    $(".tablesort-box").addClass("change");
    $(".schedule-box").addClass("change");
    $(".change-table").addClass("change");
    $(".change-schedule").addClass("change");
  });
  $(".schedulechange").click(function(){
    $(".tablesort-box").removeClass("change");
    $(".schedule-box").removeClass("change");
    $(".change-table").removeClass("change");
    $(".change-schedule").removeClass("change");
  });

function start() {

    //let but_value = document.querySelector('.btn_start').textContent;

    let n = teams.length;
    let cn = teams_cup.length;
    console.log(cn + ' team A')
    let round = [];
    console.log(n + "liczba pobrana so f start")
    //rundy
    if (n == 4) {
        round = ['',
`<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[0],teams[1],r1m1,r1), play(teams[2],teams[3],r1m2,r1)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r1m1">
    <td id="host">${teams[0].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[1],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m2">
    <td>${teams[2].name}</td>
    <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
`,
            `
<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[1],teams[2],r2m1,r2), play(teams[3],teams[0],r2m2,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[3].name}</td>
    <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[0],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
`,
`<tr>
    <th colspan="4">Round 3</th>
</tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[0],teams[2],r3m1,r3), play(teams[1],teams[3],r3m2,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r3m1">
    <td id="host">${teams[0].name}</td>
    <td id="guest">${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r3m1,r3)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r3m2">
    <td>${teams[1].name}</td>
    <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[3],r3m2,r3)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 4</th>
</tr>
<tr id="r4"><td colspan="4"><button onclick="play(teams[1],teams[0],r4m1,r4), play(teams[3],teams[2],r4m2,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r4m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[0],r4m1,r4)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r4m2">
    <td>${teams[3].name}</td>
    <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 5</th>
</tr>
<tr id="r5"><td colspan="4"><button onclick="play(teams[2],teams[1],r5m1,r5), play(teams[0],teams[3],r5m2,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r5m1">
    <td id="host">${teams[2].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[1],r5m1,r5)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r5m2">
    <td>${teams[0].name}</td>
    <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r5m2,r5)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 6</th>
</tr>
<tr id="r6"><td colspan="4"><button onclick="play(teams[2],teams[0],r6m1,r6), play(teams[3],teams[1],r6m2,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r6m1">
    <td id="host">${teams[2].name}</td>
    <td id="guest">${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[0],r6m1,r6)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r6m2">
    <td>${teams[3].name}</td>
    <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r6m2,r6)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`
        ];
    }
    if (n == 6) {
        round = ['',
            `
<tr>
<th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[4],r1m1,r1), play(teams[2],teams[5],r1m2,r1), play(teams[3],teams[0],r1m3,r1)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r1m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[4].name}</td>
    <td><button onclick="play(teams[1],teams[4],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m2">
    <td>${teams[2].name}</td>
    <td>${teams[5].name}</td>
    <td><button onclick="play(teams[2],teams[5],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m3">
    <td>${teams[3].name}</td>
    <td>${teams[0].name}</td>
    <td><button onclick="play(teams[3],teams[0],r1m3,r1)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[4],teams[2],r2m1,r2), play(teams[5],teams[3],r2m2,r2), play(teams[0],teams[1],r2m3,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td id="host">${teams[4].name}</td>
    <td id="guest">${teams[2].name}</td>
    <td><button onclick="play(teams[4],teams[2],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[5].name}</td>
    <td>${teams[3].name}</td>
    <td><button onclick="play(teams[5],teams[3],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m3">
    <td>${teams[0].name}</td>
    <td>${teams[1].name}</td>
    <td><button onclick="play(teams[0],teams[1],r2m3,r2)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 3</th>
</tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[2],r3m1,r3), play(teams[3],teams[4],r3m2,r3), play(teams[5],teams[0],r3m3,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r3m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[2].name}</td>
    <td><button onclick="play(teams[1],teams[2],r3m1,r3)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r3m2">
    <td>${teams[3].name}</td>
    <td>${teams[4].name}</td>
    <td><button onclick="play(teams[3],teams[4],r3m2,r3)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r3m3">
    <td>${teams[5].name}</td>
    <td>${teams[0].name}</td>
    <td><button onclick="play(teams[5],teams[0],r3m3,r3)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 4</th>
</tr>
<tr id="r4"><td colspan="4"><button onclick="play(teams[1],teams[3],r4m1,r4), play(teams[4],teams[5],r4m2,r4), play(teams[2],teams[0],r4m3,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r4m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[3].name}</td>
    <td><button onclick="play(teams[1],teams[3],r4m1,r4)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r4m2">
    <td>${teams[4].name}</td>
    <td>${teams[5].name}</td>
    <td><button onclick="play(teams[4],teams[5],r4m2,r4)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r4m3">
    <td>${teams[2].name}</td>
    <td>${teams[0].name}</td>
    <td><button onclick="play(teams[2],teams[0],r4m3,r4)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 5</th>
</tr>
<tr id="r5"><td colspan="4"><button onclick="play(teams[5],teams[1],r5m1,r5), play(teams[3],teams[2],r5m2,r5), play(teams[0],teams[4],r5m3,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r5m1">
    <td id="host">${teams[5].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td><button onclick="play(teams[5],teams[1],r5m1,r5)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r5m2">
    <td>${teams[3].name}</td>
    <td>${teams[2].name}</td>
    <td><button onclick="play(teams[3],teams[2],r5m2,r5)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r5m3">
    <td>${teams[0].name}</td>
    <td>${teams[4].name}</td>
    <td><button onclick="play(teams[0],teams[4],r5m3,r5)" class="play_button btn_effect">Play</button></td>
</tr>
`,  `
<tr>
<th colspan="4">Round 6</th>
</tr>
<tr id="r6"><td colspan="4"><button onclick="play(teams[4],teams[1],r6m1,r6), play(teams[5],teams[2],r6m2,r6), play(teams[0],teams[3],r6m3,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r6m1">
    <td id="host">${teams[4].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td><button onclick="play(teams[4],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r6m2">
    <td>${teams[5].name}</td>
    <td>${teams[2].name}</td>
    <td><button onclick="play(teams[5],teams[2],r6m2,r6)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r6m3">
    <td>${teams[0].name}</td>
    <td>${teams[3].name}</td>
    <td><button onclick="play(teams[0],teams[3],r6m3,r6)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 7</th>
</tr>
<tr id="r7"><td colspan="4"><button onclick="play(teams[2],teams[4],r7m1,r7), play(teams[3],teams[5],r7m2,r7), play(teams[1],teams[0],r7m3,r7)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r7m1">
    <td id="host">${teams[2].name}</td>
    <td id="guest">${teams[4].name}</td>
    <td><button onclick="play(teams[2],teams[4],r7m1,r7)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r7m2">
    <td>${teams[3].name}</td>
    <td>${teams[5].name}</td>
    <td><button onclick="play(teams[3],teams[5],r7m2,r7)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r7m3">
    <td>${teams[1].name}</td>
    <td>${teams[0].name}</td>
    <td><button onclick="play(teams[1],teams[0],r7m3,r7)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 8</th>
</tr>
<tr id="r8"><td colspan="4"><button onclick="play(teams[2],teams[1],r8m1,r8), play(teams[4],teams[3],r8m2,r8), play(teams[0],teams[5],r8m3,r8)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r8m1">
    <td id="host">${teams[2].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td><button onclick="play(teams[2],teams[1],r8m1,r8)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r8m2">
    <td>${teams[4].name}</td>
    <td>${teams[3].name}</td>
    <td><button onclick="play(teams[4],teams[3],r8m2,r8)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r8m3">
    <td>${teams[0].name}</td>
    <td>${teams[5].name}</td>
    <td><button onclick="play(teams[0],teams[5],r8m3,r8)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 9</th>
</tr>
<tr id="r9"><td colspan="4"><button onclick="play(teams[3],teams[1],r9m1,r9), play(teams[5],teams[4],r9m2,r9), play(teams[0],teams[2],r9m3,r9)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r9m1">
    <td id="host">${teams[3].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td><button onclick="play(teams[3],teams[1],r9m1,r9)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r9m2">
    <td>${teams[5].name}</td>
    <td>${teams[4].name}</td>
    <td><button onclick="play(teams[5],teams[4],r9m2,r9)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r9m3">
    <td>${teams[0].name}</td>
    <td>${teams[2].name}</td>
    <td><button onclick="play(teams[0],teams[2],r9m3,r9)" class="play_button btn_effect">Play</button></td>
</tr>
`,
            `
            <tr>
<th colspan="4">Round 10</th>
</tr>
<tr id="r10"><td colspan="4"><button onclick="play(teams[1],teams[5],r10m1,r10), play(teams[2],teams[3],r10m2,r10), play(teams[4],teams[1],r10m3,r10)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r10m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[5].name}</td>
    <td><button onclick="play(teams[1],teams[5],r10m1,r10)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r10m2">
    <td>${teams[2].name}</td>
    <td>${teams[3].name}</td>
    <td><button onclick="play(teams[2],teams[3],r10m2,r10)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r10m3">
    <td>${teams[4].name}</td>
    <td>${teams[1].name}</td>
    <td><button onclick="play(teams[4],teams[1],r10m3,r10)" class="play_button btn_effect">Play</button></td>
</tr>
`
        ]
    }
    
    if (n == 20) {
        round = ['',
 `<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[0],r1m1,r1), play(teams[2],teams[19],r1m2,r1), play(teams[3],teams[18],r1m3,r1), play(teams[4],teams[17],r1m4,r1), play(teams[5],teams[16],r1m5,r1), play(teams[6],teams[15],r1m6,r1), play(teams[7],teams[14],r1m7,r1), play(teams[8],teams[13],r1m8,r1), play(teams[9],teams[12],r1m9,r1), play(teams[10],teams[11],r1m10,r1)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r1m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[0],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m2">
    <td>${teams[2].name}</td>
    <td>${teams[19].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[19],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m3">
    <td>${teams[3].name}</td>
    <td>${teams[18].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[18],r1m3,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m4">
    <td>${teams[4].name}</td>
    <td>${teams[17].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[17],r1m4,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m5">
    <td>${teams[5].name}</td>
    <td>${teams[16].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[16],r1m5,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m6">
    <td>${teams[6].name}</td>
    <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[15],r1m6,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m7">
    <td>${teams[7].name}</td>
    <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[14],r1m7,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m8">
    <td>${teams[8].name}</td>
    <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[13],r1m8,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m9">
    <td>${teams[9].name}</td>
    <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[12],r1m9,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m10">
    <td>${teams[10].name}</td>
    <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[11],r1m10,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[19],teams[1],r2m1,r2), play(teams[18],teams[2],r2m2,r2), play(teams[17],teams[3],r2m3,r2), play(teams[16],teams[4],r2m4,r2), play(teams[15],teams[5],r2m5,r2), play(teams[14],teams[6],r2m6,r2), play(teams[13],teams[7],r2m7,r2), play(teams[12],teams[8],r2m8,r2), play(teams[11],teams[9],r2m9,r2), play(teams[0],teams[10],r2m10,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td id="host">${teams[19].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[19],teams[1],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[18].name}</td>
    <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[18],teams[2],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m3">
    <td>${teams[17].name}</td>
    <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[17],teams[3],r2m3,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m4">
    <td>${teams[16].name}</td>
    <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[16],teams[4],r2m4,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m5">
    <td>${teams[15].name}</td>
    <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[5],r2m5,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m6">
    <td>${teams[14].name}</td>
    <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[6],r2m6,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m7">
    <td>${teams[13].name}</td>
    <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[7],r2m7,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m8">
    <td>${teams[12].name}</td>
    <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[8],r2m8,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m9">
    <td>${teams[11].name}</td>
    <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[9],r2m9,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m10">
    <td>${teams[0].name}</td>
    <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[10],r2m10,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 3: </th></tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[18],r3m1,r3), play(teams[2],teams[17],r3m2,r3), play(teams[3],teams[16],r3m3,r3), play(teams[4],teams[15],r3m4,r3), play(teams[5],teams[14],r3m5,r3), play(teams[6],teams[13],r3m6,r3), play(teams[7],teams[12],r3m7,r3), play(teams[8],teams[11],r3m8,r3), play(teams[9],teams[10],r3m9,r3), play(teams[19],teams[0],r3m10,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r3m1">
    <td>${teams[1].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[18],r3m1,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m2">
    <td>${teams[2].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[17],r3m2,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m3">
    <td>${teams[3].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[16],r3m3,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m4">
    <td>${teams[4].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[15],r3m4,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m5">
    <td>${teams[5].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[14],r3m5,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m6">
    <td>${teams[6].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[13],r3m6,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m7">
    <td>${teams[7].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[12],r3m7,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m8"> 
    <td>${teams[8].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[11],r3m8,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m9">
    <td>${teams[9].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[10],r3m9,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m10">
    <td>${teams[19].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[0],r3m10,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 4: </th></tr>
    <tr id="r4"><td colspan="4"><button onclick="play(teams[17],teams[1],r4m1,r4), play(teams[16],teams[2],r4m2,r4), play(teams[15],teams[3],r4m3,r4), play(teams[14],teams[4],r4m4,r4), play(teams[13],teams[5],r4m5,r4), play(teams[12],teams[6],r4m6,r4), play(teams[11],teams[7],r4m7,r4), play(teams[10],teams[8],r4m8,r4), play(teams[0],teams[9],r4m9,r4), play(teams[18],teams[19],r4m10,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r4m1">
    <td>${teams[17].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[1],r4m1,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m2">
    <td>${teams[16].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m3">
    <td>${teams[15].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[3],r4m3,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m4">
    <td>${teams[14].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[4],r4m4,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m5">
    <td>${teams[13].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[5],r4m5,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m6">
    <td>${teams[12].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[6],r4m6,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m7">
    <td>${teams[11].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[7],r4m7,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m8">
    <td>${teams[10].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[8],r4m8,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m9">
    <td>${teams[0].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[9],r4m9,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m10">
    <td>${teams[18].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[19],r4m10,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 5: </th></tr>
    <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[16],r5m1,r5), play(teams[2],teams[15],r5m2,r5), play(teams[3],teams[14],r5m3,r5), play(teams[4],teams[13],r5m4,r5), play(teams[5],teams[12],r5m5,r5), play(teams[6],teams[11],r5m6,r5), play(teams[7],teams[10],r5m7,r5), play(teams[8],teams[9],r5m8,r5), play(teams[19],teams[17],r5m9,r5), play(teams[18],teams[0],r5m10,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r5m1">
    <td>${teams[1].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[16],r5m1,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m2">
    <td>${teams[2].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[15],r5m2,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m3">
    <td>${teams[3].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[14],r5m3,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m4">
    <td>${teams[4].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[13],r5m4,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m5">
    <td>${teams[5].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[12],r5m5,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m6">
    <td>${teams[6].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[11],r5m6,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m7">
    <td>${teams[7].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[10],r5m7,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m8">
    <td>${teams[8].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[9],r5m8,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m9">
    <td>${teams[19].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[17],r5m9,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m10">
    <td>${teams[18].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[0],r5m10,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 6: </th></tr>
    <tr id="r6"><td colspan="4"><button onclick="play(teams[15],teams[1],r6m1,r6), play(teams[14],teams[2],r6m2,r6), play(teams[13],teams[3],r6m3,r6), play(teams[12],teams[4],r6m4,r6), play(teams[11],teams[5],r6m5,r6), play(teams[10],teams[6],r6m6,r6), play(teams[9],teams[7],r6m7,r6), play(teams[0],teams[8],r6m8,r6), play(teams[16],teams[19],r6m9,r6), play(teams[17],teams[18],r6m10,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r6m1">
    <td>${teams[15].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m2">
    <td>${teams[14].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[2],r6m2,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m3">
    <td>${teams[13].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[3],r6m3,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m4">
    <td>${teams[12].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[4],r6m4,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m5">
    <td>${teams[11].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[5],r6m5,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m6">
    <td>${teams[10].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[6],r6m6,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m7">
    <td>${teams[9].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[7],r6m7,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m8">
    <td>${teams[0].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[8],r6m8,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m9">
    <td>${teams[16].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[19],r6m9,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m10">
    <td>${teams[17].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[18],r6m10,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 7: </th></tr>
    <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[14],r7m1,r7), play(teams[2],teams[13],r7m2,r7), play(teams[3],teams[12],r7m3,r7), play(teams[4],teams[11],r7m4,r7), play(teams[5],teams[10],r7m5,r7), play(teams[6],teams[9],r7m6,r7), play(teams[7],teams[8],r7m7,r7), play(teams[19],teams[15],r7m8,r7), play(teams[18],teams[16],r7m9,r7), play(teams[17],teams[0],r7m10,r7)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r7m1">
    <td>${teams[1].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[14],r7m1,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m2">
    <td>${teams[2].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[13],r7m2,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m3">
    <td>${teams[3].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[12],r7m3,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m4">
    <td>${teams[4].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[11],r7m4,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m5">
    <td>${teams[5].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[10],r7m5,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m6">
    <td>${teams[6].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[9],r7m6,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m7">
    <td>${teams[7].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[8],r7m7,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m8">
    <td>${teams[19].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[15],r7m8,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m9">
    <td>${teams[18].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[16],r7m9,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m10">
    <td>${teams[17].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[0],r7m10,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 8: </th></tr>
    <tr id="r8"><td colspan="4"><button onclick="play(teams[13],teams[1],r8m1,r8), play(teams[12],teams[2],r8m2,r8), play(teams[11],teams[3],r8m3,r8), play(teams[10],teams[4],r8m4,r8), play(teams[9],teams[5],r8m5,r8), play(teams[8],teams[6],r8m6,r8), play(teams[0],teams[7],r8m7,r8), play(teams[14],teams[19],r8m8,r8), play(teams[15],teams[18],r8m9,r8), play(teams[16],teams[17],r8m10,r8)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r8m1">
    <td>${teams[13].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[1],r8m1,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m2">
    <td>${teams[12].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[2],r8m2,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m3">
    <td>${teams[11].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[3],r8m3,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m4">
    <td>${teams[10].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[4],r8m4,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m5">
    <td>${teams[9].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[5],r8m5,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m6">
    <td>${teams[8].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[6],r8m6,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m7">
    <td>${teams[0].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[7],r8m7,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m8">
    <td>${teams[14].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[19],r8m8,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m9">
    <td>${teams[15].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[18],r8m9,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m10">
    <td>${teams[16].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[17],r8m10,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 9: </th></tr>
    <tr id="r9"><td colspan="4"><button onclick="play(teams[1],teams[12],r9m1,r9), play(teams[2],teams[11],r9m2,r9), play(teams[3],teams[10],r9m3,r9), play(teams[4],teams[9],r9m4,r9), play(teams[5],teams[8],r9m5,r9), play(teams[6],teams[7],r9m6,r9), play(teams[19],teams[13],r9m7,r9), play(teams[18],teams[14],r9m8,r9), play(teams[17],teams[15],r9m9,r9), play(teams[16],teams[0],r9m10,r9)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r9m1">
    <td>${teams[1].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[12],r9m1,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m2">
    <td>${teams[2].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[11],r9m2,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m3">
    <td>${teams[3].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[10],r9m3,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m4">
    <td>${teams[4].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[9],r9m4,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m5">
    <td>${teams[5].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[8],r9m5,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m6">
    <td>${teams[6].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[7],r9m6,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m7">
    <td>${teams[19].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[13],r9m7,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m8">
    <td>${teams[18].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[14],r9m8,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m9">
    <td>${teams[17].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[15],r9m9,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m10">
    <td>${teams[16].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[0],r9m10,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 10: </th></tr>
    <tr id="r10"><td colspan="4"><button onclick="play(teams[11],teams[1],r10m1,r10), play(teams[10],teams[2],r10m2,r10), play(teams[9],teams[3],r10m3,r10), play(teams[8],teams[4],r10m4,r10), play(teams[7],teams[5],r10m5,r10), play(teams[0],teams[6],r10m6,r10), play(teams[12],teams[19],r10m7,r10), play(teams[13],teams[18],r10m8,r10), play(teams[14],teams[17],r10m9,r10), play(teams[15],teams[16],r10m10,r10)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r10m1">
    <td>${teams[11].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[1],r10m1,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m2">
    <td>${teams[10].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[2],r10m2,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m3">
    <td>${teams[9].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[3],r10m3,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m4">
    <td>${teams[8].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[4],r10m4,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m5">
    <td>${teams[7].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[5],r10m5,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m6">
    <td>${teams[0].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[6],r10m6,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m7">
    <td>${teams[12].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[19],r10m7,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m8">
    <td>${teams[13].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[18],r10m8,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m9">
    <td>${teams[14].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[17],r10m9,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m10">
    <td>${teams[15].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[16],r10m10,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 11: </th></tr>
    <tr id="r11"><td colspan="4"><button onclick="play(teams[1],teams[10],r11m1,r11), play(teams[2],teams[9],r11m2,r11), play(teams[3],teams[8],r11m3,r11), play(teams[4],teams[7],r11m4,r11), play(teams[5],teams[6],r11m5,r11), play(teams[19],teams[11],r11m6,r11), play(teams[18],teams[12],r11m7,r11), play(teams[17],teams[13],r11m8,r11), play(teams[16],teams[14],r11m9,r11), play(teams[15],teams[0],r11m10,r11)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r11m1">
    <td>${teams[1].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[10],r11m1,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m2">
    <td>${teams[2].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[9],r11m2,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m3">
    <td>${teams[3].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[8],r11m3,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m4">
    <td>${teams[4].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[7],r11m4,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m5">
    <td>${teams[5].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[6],r11m5,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m6">
    <td>${teams[19].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[11],r11m6,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m7">
    <td>${teams[18].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[12],r11m7,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m8">
    <td>${teams[17].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[13],r11m8,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m9">
    <td>${teams[16].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[14],r11m9,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m10">
    <td>${teams[15].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[0],r11m10,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 12: </th></tr>
    <tr id="r12"><td colspan="4"><button onclick="play(teams[9],teams[1],r12m1,r12), play(teams[8],teams[2],r12m2,r12), play(teams[7],teams[3],r12m3,r12), play(teams[6],teams[4],r12m4,r12), play(teams[0],teams[5],r12m5,r12), play(teams[10],teams[19],r12m6,r12), play(teams[11],teams[18],r12m7,r12), play(teams[12],teams[17],r12m8,r12), play(teams[13],teams[16],r12m9,r12), play(teams[14],teams[15],r12m10,r12)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r12m1">
    <td>${teams[9].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[1],r12m1,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m2">
    <td>${teams[8].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[2],r12m2,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m3">
    <td>${teams[7].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[3],r12m3,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m4">
    <td>${teams[6].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[4],r12m4,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m5">
    <td>${teams[0].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[5],r12m5,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m6">
    <td>${teams[10].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[19],r12m6,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m7">
    <td>${teams[11].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[18],r12m7,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m8">
    <td>${teams[12].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[17],r12m8,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m9">
    <td>${teams[13].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[16],r12m9,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m10">
    <td>${teams[14].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[15],r12m10,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 13: </th></tr>
    <tr id="r13"><td colspan="4"><button onclick="play(teams[1],teams[8],r13m1,r13), play(teams[2],teams[7],r13m2,r13), play(teams[3],teams[6],r13m3,r13), play(teams[4],teams[5],r13m4,r13), play(teams[19],teams[9],r13m5,r13), play(teams[18],teams[10],r13m6,r13), play(teams[17],teams[11],r13m7,r13), play(teams[16],teams[12],r13m8,r13), play(teams[15],teams[13],r13m9,r13), play(teams[14],teams[0],r13m10,r13)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r13m1">
    <td>${teams[1].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[8],r13m1,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m2">
    <td>${teams[2].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[7],r13m2,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m3">
    <td>${teams[3].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[6],r13m3,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m4">
    <td>${teams[4].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[5],r13m4,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m5">
    <td>${teams[19].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[9],r13m5,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m6">
    <td>${teams[18].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[10],r13m6,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m7">
    <td>${teams[17].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[11],r13m7,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m8">
    <td>${teams[16].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[12],r13m8,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m9">
    <td>${teams[15].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[13],r13m9,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m10">
    <td>${teams[14].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[0],r13m10,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 14: </th></tr>
    <tr id="r14"><td colspan="4"><button onclick="play(teams[7],teams[1],r14m1,r14), play(teams[6],teams[2],r14m2,r14), play(teams[5],teams[3],r14m3,r14), play(teams[0],teams[4],r14m4,r14), play(teams[8],teams[19],r14m5,r14), play(teams[9],teams[18],r14m6,r14), play(teams[10],teams[17],r14m7,r14), play(teams[11],teams[16],r14m8,r14), play(teams[12],teams[15],r14m9,r14), play(teams[13],teams[14],r14m10,r14)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r14m1">
    <td>${teams[7].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[1],r14m1,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m2">
    <td>${teams[6].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[2],r14m2,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m3">
    <td>${teams[5].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[3],r14m3,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m4">
    <td>${teams[0].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[4],r14m4,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m5">
    <td>${teams[8].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[19],r14m5,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m6">
    <td>${teams[9].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[18],r14m6,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m7">
    <td>${teams[10].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[17],r14m7,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m8">
    <td>${teams[11].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[16],r14m8,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m9">
    <td>${teams[12].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[15],r14m9,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m10">
    <td>${teams[13].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[14],r14m10,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 15: </th></tr>
    <tr id="r15"><td colspan="4"><button onclick="play(teams[1],teams[6],r15m1,r15), play(teams[2],teams[5],r15m2,r15), play(teams[3],teams[4],r15m3,r15), play(teams[19],teams[7],r15m4,r15), play(teams[18],teams[8],r15m5,r15), play(teams[17],teams[9],r15m6,r15), play(teams[16],teams[10],r15m7,r15), play(teams[15],teams[11],r15m8,r15), play(teams[14],teams[12],r15m9,r15), play(teams[13],teams[0],r15m10,r15)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r15m1">
    <td>${teams[1].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[6],r15m1,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m2">
    <td>${teams[2].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[5],r15m2,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m3">
    <td>${teams[3].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[4],r15m3,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m4">
    <td>${teams[19].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[7],r15m4,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m5">
    <td>${teams[18].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[8],r15m5,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m6">
    <td>${teams[17].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[9],r15m6,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m7">
    <td>${teams[16].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[10],r15m7,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m8">
    <td>${teams[15].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[11],r15m8,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m9">
    <td>${teams[14].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[12],r15m9,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m10">
    <td>${teams[13].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[0],r15m10,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 16: </th></tr>
    <tr id="r16"><td colspan="4"><button onclick="play(teams[5],teams[1],r16m1,r16), play(teams[4],teams[2],r16m2,r16), play(teams[0],teams[3],r16m3,r16), play(teams[6],teams[19],r16m4,r16), play(teams[7],teams[18],r16m5,r16), play(teams[8],teams[17],r16m6,r16), play(teams[9],teams[16],r16m7,r16), play(teams[10],teams[15],r16m8,r16), play(teams[11],teams[14],r16m9,r16), play(teams[12],teams[13],r16m10,r16)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r16m1">
    <td>${teams[5].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[1],r16m1,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m2">
    <td>${teams[4].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[2],r16m2,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m3">
    <td>${teams[0].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r16m3,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m4">
    <td>${teams[6].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[19],r16m4,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m5">
    <td>${teams[7].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[18],r16m5,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m6">
    <td>${teams[8].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[17],r16m6,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m7">
    <td>${teams[9].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[16],r16m7,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m8">
    <td>${teams[10].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[15],r16m8,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m9">
    <td>${teams[11].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[14],r16m9,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m10">
    <td>${teams[12].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[13],r16m10,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 17: </th></tr>
    <tr id="r17"><td colspan="4"><button onclick="play(teams[1],teams[4],r17m1,r17), play(teams[2],teams[3],r17m2,r17), play(teams[19],teams[5],r17m3,r17), play(teams[18],teams[6],r17m4,r17), play(teams[17],teams[7],r17m5,r17), play(teams[16],teams[8],r17m6,r17), play(teams[15],teams[9],r17m7,r17), play(teams[14],teams[10],r17m8,r17), play(teams[13],teams[11],r17m9,r17), play(teams[12],teams[0],r17m10,r17)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r17m1">
    <td>${teams[1].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[4],r17m1,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m2">
    <td>${teams[2].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r17m2,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m3">
    <td>${teams[19].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[5],r17m3,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m4">
    <td>${teams[18].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[6],r17m4,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m5">
    <td>${teams[17].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[7],r17m5,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m6">
    <td>${teams[16].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[8],r17m6,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m7">
    <td>${teams[15].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[9],r17m7,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m8">
    <td>${teams[14].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[10],r17m8,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m9">
    <td>${teams[13].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[11],r17m9,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m10">
    <td>${teams[12].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[0],r17m10,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 18: </th></tr>
    <tr id="r18"><td colspan="4"><button onclick="play(teams[3],teams[1],r18m1,r18), play(teams[0],teams[2],r18m2,r18), play(teams[4],teams[19],r18m3,r18), play(teams[5],teams[18],r18m4,r18), play(teams[6],teams[17],r18m5,r18), play(teams[7],teams[16],r18m6,r18), play(teams[8],teams[15],r18m7,r18), play(teams[9],teams[14],r18m8,r18), play(teams[10],teams[13],r18m9,r18), play(teams[11],teams[12],r18m10,r18)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r18m1">
    <td>${teams[3].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r18m1,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m2">
    <td>${teams[0].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r18m2,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m3">
    <td>${teams[4].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[19],r18m3,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m4">
    <td>${teams[5].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[18],r18m4,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m5">
    <td>${teams[6].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[17],r18m5,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m6">
    <td>${teams[7].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[16],r18m6,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m7">
    <td>${teams[8].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[15],r18m7,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m8">
    <td>${teams[9].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[14],r18m8,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m9">
    <td>${teams[10].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[13],r18m9,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m10">
    <td>${teams[11].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[12],r18m10,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 19: </th></tr>
    <tr id="r19"><td colspan="4"><button onclick="play(teams[1],teams[2],r19m1,r19), play(teams[19],teams[3],r19m2,r19), play(teams[18],teams[4],r19m3,r19), play(teams[17],teams[5],r19m4,r19), play(teams[16],teams[6],r19m5,r19), play(teams[15],teams[7],r19m6,r19), play(teams[14],teams[8],r19m7,r19), play(teams[13],teams[9],r19m8,r19), play(teams[12],teams[10],r19m9,r19), play(teams[11],teams[0],r19m10,r19)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r19m1">
    <td>${teams[1].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r19m1,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m2">
    <td>${teams[19].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[3],r19m2,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m3">
    <td>${teams[18].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[4],r19m3,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m4">
    <td>${teams[17].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[5],r19m4,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m5">
    <td>${teams[16].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[6],r19m5,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m6">
    <td>${teams[15].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[7],r19m6,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m7">
    <td>${teams[14].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[8],r19m7,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m8">
    <td>${teams[13].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[9],r19m8,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m9">
    <td>${teams[12].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[10],r19m9,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m10">
    <td>${teams[11].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[0],r19m10,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    //Rewanze 
    `<tr>
    <th colspan="4">Round 20</th>
</tr>
<tr id="r20"><td colspan="4"><button onclick="play(teams[0],teams[1],r20m1,r20), play(teams[19],teams[2],r20m2,r20), play(teams[18],teams[3],r20m3,r20), play(teams[17],teams[4],r20m4,r20), play(teams[16],teams[5],r20m5,r20), play(teams[15],teams[6],r20m6,r20), play(teams[14],teams[7],r20m7,r20), play(teams[13],teams[8],r20m8,r20), play(teams[12],teams[9],r20m9,r20), play(teams[11],teams[10],r20m10,r20)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r20m1">
    <td id="host">${teams[0].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[1],r20m1,r20)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r20m2">
    <td>${teams[19].name}</td>
    <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[19],teams[2],r20m2,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m3">
    <td>${teams[18].name}</td>
    <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[18],teams[3],r20m3,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m4">
    <td>${teams[17].name}</td>
    <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[17],teams[4],r20m4,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m5">
    <td>${teams[16].name}</td>
    <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[16],teams[5],r20m5,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m6">
    <td>${teams[15].name}</td>
    <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[6],r20m6,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m7">
    <td>${teams[14].name}</td>
    <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[7],r20m7,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m8">
    <td>${teams[13].name}</td>
    <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[8],r20m8,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m9">
    <td>${teams[12].name}</td>
    <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[9],r20m9,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m10">
    <td>${teams[11].name}</td>
    <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[10],r20m10,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 21</th>
</tr>
<tr id="r21"><td colspan="4"><button onclick="play(teams[1],teams[19],r21m1,r21), play(teams[2],teams[18],r21m2,r21), play(teams[3],teams[17],r21m3,r21), play(teams[4],teams[16],r21m4,r21), play(teams[5],teams[15],r21m5,r21), play(teams[6],teams[14],r21m6,r21), play(teams[7],teams[13],r21m7,r21), play(teams[8],teams[12],r21m8,r21), play(teams[9],teams[11],r21m9,r21), play(teams[10],teams[0],r21m10,r21)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r21m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[19].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[19],r21m1,r21)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r21m2">
    <td>${teams[2].name}</td>
    <td>${teams[18].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[18],r21m2,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m3">
    <td>${teams[3].name}</td>
    <td>${teams[17].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[17],r21m3,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m4">
    <td>${teams[4].name}</td>
    <td>${teams[16].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[16],r21m4,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m5">
    <td>${teams[5].name}</td>
    <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[15],r21m5,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m6">
    <td>${teams[6].name}</td>
    <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[14],r21m6,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m7">
    <td>${teams[7].name}</td>
    <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[13],r21m7,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m8">
    <td>${teams[8].name}</td>
    <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[12],r21m8,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m9">
    <td>${teams[9].name}</td>
    <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[11],r21m9,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m10">
    <td>${teams[10].name}</td>
    <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[0],r21m10,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 22: </th></tr>
<tr id="r22"><td colspan="4"><button onclick="play(teams[18],teams[1],r22m1,r22), play(teams[17],teams[2],r22m2,r22), play(teams[16],teams[3],r22m3,r22), play(teams[15],teams[4],r22m4,r22), play(teams[14],teams[5],r22m5,r22), play(teams[13],teams[6],r22m6,r22), play(teams[12],teams[7],r22m7,r22), play(teams[11],teams[8],r22m8,r22), play(teams[10],teams[9],r22m9,r22), play(teams[0],teams[19],r22m10,r22)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r22m1">
    <td>${teams[18].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[1],r22m1,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m2">
    <td>${teams[17].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[2],r22m2,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m3">
    <td>${teams[16].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[3],r22m3,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m4">
    <td>${teams[15].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[4],r22m4,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m5">
    <td>${teams[14].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[5],r22m5,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m6">
    <td>${teams[13].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[6],r22m6,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m7">
    <td>${teams[12].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[7],r22m7,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m8"> 
    <td>${teams[11].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[8],r22m8,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m9">
    <td>${teams[10].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[9],r22m9,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m10">
    <td>${teams[0].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[19],r22m10,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 23: </th></tr>
    <tr id="r23"><td colspan="4"><button onclick="play(teams[1],teams[17],r23m1,r23), play(teams[2],teams[16],r23m2,r23), play(teams[3],teams[15],r23m3,r23), play(teams[4],teams[14],r23m4,r23), play(teams[5],teams[13],r23m5,r23), play(teams[6],teams[12],r23m6,r23), play(teams[7],teams[11],r23m7,r23), play(teams[8],teams[10],r23m8,r23), play(teams[9],teams[0],r23m9,r23), play(teams[19],teams[18],r23m10,r23)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r23m1">
    <td>${teams[1].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[17],r23m1,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m2">
    <td>${teams[2].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[16],r23m2,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m3">
    <td>${teams[3].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[15],r23m3,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m4">
    <td>${teams[4].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[14],r23m4,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m5">
    <td>${teams[5].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[13],r23m5,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m6">
    <td>${teams[6].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[12],r23m6,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m7">
    <td>${teams[7].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[11],r23m7,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m8">
    <td>${teams[8].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[10],r23m8,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m9">
    <td>${teams[9].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[0],r23m9,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m10">
    <td>${teams[19].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[18],r23m10,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, 
    ` 
    <tr><th colspan="4">Round 24: </th></tr>
    <tr id="r24"><td colspan="4"><button onclick="play(teams[16],teams[1],r24m1,r24), play(teams[15],teams[2],r24m2,r24), play(teams[14],teams[3],r24m3,r24), play(teams[13],teams[4],r24m4,r24), play(teams[12],teams[5],r24m5,r24), play(teams[11],teams[6],r24m6,r24), play(teams[10],teams[7],r24m7,r24), play(teams[9],teams[8],r24m8,r24), play(teams[17],teams[19],r24m9,r24), play(teams[0],teams[18],r24m10,r24)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r24m1">
    <td>${teams[16].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[1],r24m1,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m2">
    <td>${teams[15].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[2],r24m2,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m3">
    <td>${teams[14].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[3],r24m3,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m4">
    <td>${teams[13].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[4],r24m4,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m5">
    <td>${teams[12].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[5],r24m5,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m6">
    <td>${teams[11].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[6],r24m6,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m7">
    <td>${teams[10].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[7],r24m7,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m8">
    <td>${teams[9].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[9],r24m8,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m9">
    <td>${teams[17].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[19],r24m9,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m10">
    <td>${teams[0].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[18],r24m10,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 25: </th></tr>
    <tr id="r25"><td colspan="4"><button onclick="play(teams[1],teams[15],r25m1,r25), play(teams[2],teams[14],r25m2,r25), play(teams[3],teams[13],r25m3,r25), play(teams[4],teams[12],r25m4,r25), play(teams[5],teams[11],r25m5,r25), play(teams[6],teams[10],r25m6,r25), play(teams[7],teams[9],r25m7,r25), play(teams[8],teams[0],r25m8,r25), play(teams[19],teams[16],r25m9,r25), play(teams[18],teams[17],r25m10,r25)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r25m1">
    <td>${teams[1].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[15],r25m1,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m2">
    <td>${teams[2].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[14],r25m2,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m3">
    <td>${teams[3].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[13],r25m3,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m4">
    <td>${teams[4].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[12],r25m4,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m5">
    <td>${teams[5].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[11],r25m5,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m6">
    <td>${teams[6].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[10],r25m6,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m7">
    <td>${teams[7].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[9],r25m7,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m8">
    <td>${teams[8].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[0],r25m8,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m9">
    <td>${teams[19].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[16],r25m9,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m10">
    <td>${teams[18].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[17],r25m10,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 26: </th></tr>
    <tr id="r26"><td colspan="4"><button onclick="play(teams[14],teams[1],r26m1,r26), play(teams[13],teams[2],r26m2,r26), play(teams[12],teams[3],r26m3,r26), play(teams[11],teams[4],r26m4,r26), play(teams[10],teams[5],r26m5,r26), play(teams[9],teams[6],r26m6,r26), play(teams[8],teams[7],r26m7,r26), play(teams[15],teams[19],r26m8,r26), play(teams[16],teams[18],r26m9,r26), play(teams[0],teams[17],r26m10,r26)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r26m1">
    <td>${teams[14].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[1],r26m1,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m2">
    <td>${teams[13].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[2],r26m2,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m3">
    <td>${teams[12].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[3],r26m3,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m4">
    <td> ${teams[11].name} </td><td>${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[4],r26m4,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m5">
    <td> ${teams[10].name} </td><td>${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[5],r26m5,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m6">
    <td>${teams[9].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[6],r26m6,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m7">
    <td> ${teams[8].name} </td><td>${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[7],r26m7,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m8">
    <td>${teams[15].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[19],r26m8,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m9">
    <td>${teams[16].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[18],r26m9,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m10">
    <td>${teams[0].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[17],r26m10,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 27: </th></tr>
    <tr id="r27"><td colspan="4"><button onclick="play(teams[1],teams[13],r27m1,r27), play(teams[2],teams[12],r27m2,r27), play(teams[3],teams[11],r27m3,r27), play(teams[4],teams[10],r27m4,r27), play(teams[5],teams[9],r27m5,r27), play(teams[6],teams[8],r27m6,r27), play(teams[7],teams[0],r27m7,r27), play(teams[19],teams[14],r27m8,r27), play(teams[18],teams[15],r27m9,r27), play(teams[17],teams[16],r27m10,r27)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r27m1">
    <td>${teams[1].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[13],r27m1,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m2">
    <td>${teams[2].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[12],r27m2,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m3">
    <td>${teams[3].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r27m3,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m4">
    <td>${teams[4].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[10],r27m4,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m5">
    <td>${teams[5].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[9],r27m5,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m6">
    <td>${teams[6].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[8],r27m6,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m7">
    <td>${teams[7].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[0],r27m7,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m8">
    <td>${teams[19].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[14],r27m8,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m9">
    <td>${teams[18].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[15],r27m9,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m10">
    <td>${teams[17].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[16],r27m10,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 28: </th></tr>
    <tr id="r28"><td colspan="4"><button onclick="play(teams[12],teams[1],r28m1,r28), play(teams[11],teams[2],r28m2,r28), play(teams[10],teams[3],r28m3,r28), play(teams[9],teams[4],r28m4,r28), play(teams[8],teams[5],r28m5,r28), play(teams[7],teams[6],r28m6,r28), play(teams[13],teams[19],r28m7,r28), play(teams[14],teams[18],r28m8,r28), play(teams[15],teams[17],r28m9,r28), play(teams[0],teams[16],r28m10,r28)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r28m1">
    <td>${teams[12].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[1],r28m1,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m2">
    <td>${teams[11].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[2],r28m2,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m3">
    <td>${teams[10].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[3],r28m3,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m4">
    <td>${teams[9].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[4],r28m4,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m5">
    <td>${teams[8].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[5],r28m5,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m6">
    <td>${teams[7].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[6],r28m6,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m7">
    <td>${teams[13].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[19],r28m7,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m8">
    <td>${teams[14].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[18],r28m8,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m9">
    <td>${teams[15].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[17],r28m9,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m10">
    <td>${teams[0].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[16],r28m10,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 29: </th></tr>
    <tr id="r29"><td colspan="4"><button onclick="play(teams[1],teams[11],r29m1,r29), play(teams[2],teams[10],r29m2,r29), play(teams[3],teams[9],r29m3,r29), play(teams[4],teams[8],r29m4,r29), play(teams[5],teams[7],r29m5,r29), play(teams[6],teams[0],r29m6,r29), play(teams[19],teams[12],r29m7,r29), play(teams[18],teams[13],r29m8,r29), play(teams[17],teams[14],r29m9,r29), play(teams[16],teams[15],r29m10,r29)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r29m1">
    <td>${teams[1].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[11],r29m1,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m2">
    <td>${teams[2].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[10],r29m2,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m3">
    <td>${teams[3].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[9],r29m3,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m4">
    <td>${teams[4].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[8],r29m4,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m5">
    <td>${teams[5].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[7],r29m5,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m6">
    <td>${teams[6].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[0],r29m6,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m7">
    <td>${teams[19].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[12],r29m7,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m8">
    <td>${teams[18].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[13],r29m8,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m9">
    <td>${teams[17].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[14],r29m9,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m10">
    <td>${teams[16].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[15],r29m10,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 30: </th></tr>
    <tr id="r30"><td colspan="4"><button onclick="play(teams[10],teams[1],r30m1,r30), play(teams[9],teams[2],r30m2,r30), play(teams[8],teams[3],r30m3,r30), play(teams[7],teams[4],r30m4,r30), play(teams[6],teams[5],r30m5,r30), play(teams[11],teams[19],r30m6,r30), play(teams[12],teams[18],r30m7,r30), play(teams[13],teams[17],r30m8,r30), play(teams[14],teams[16],r30m9,r30), play(teams[0],teams[15],r30m10,r30)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r30m1">
    <td>${teams[10].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[1],r30m1,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m2">
    <td>${teams[9].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[2],r30m2,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m3">
    <td>${teams[8].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[3],r30m3,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m4">
    <td>${teams[7].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[4],r30m4,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m5">
    <td>${teams[6].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[5],r30m5,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m6">
    <td>${teams[11].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[19],r30m6,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m7">
    <td>${teams[12].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[18],r30m7,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m8">
    <td>${teams[13].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[17],r30m8,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m9">
    <td>${teams[14].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[16],r30m9,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m10">
    <td>${teams[0].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[15],r30m10,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 31: </th></tr>
    <tr id="r31"><td colspan="4"><button onclick="play(teams[1],teams[9],r31m1,r31), play(teams[2],teams[8],r31m2,r31), play(teams[3],teams[7],r31m3,r31), play(teams[4],teams[6],r31m4,r31), play(teams[5],teams[0],r31m5,r31), play(teams[19],teams[10],r31m6,r31), play(teams[18],teams[11],r31m7,r31), play(teams[17],teams[12],r31m8,r31), play(teams[16],teams[13],r31m9,r31), play(teams[15],teams[14],r31m10,r31)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r31m1">
    <td>${teams[1].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[9],r31m1,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m2">
    <td>${teams[2].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[8],r31m2,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m3">
    <td>${teams[3].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[7],r31m3,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m4">
    <td>${teams[4].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[6],r31m4,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m5">
    <td>${teams[5].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[0],r31m5,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m6">
    <td>${teams[19].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[10],r31m6,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m7">
    <td>${teams[18].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[11],r31m7,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m8">
    <td>${teams[17].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[12],r31m8,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m9">
    <td>${teams[16].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[13],r31m9,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m10">
    <td>${teams[15].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[14],r31m10,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 32: </th></tr>
    <tr id="r32"><td colspan="4"><button onclick="play(teams[8],teams[1],r32m1,r32), play(teams[7],teams[2],r32m2,r32), play(teams[6],teams[3],r32m3,r32), play(teams[5],teams[4],r32m4,r32), play(teams[9],teams[19],r32m5,r32), play(teams[10],teams[18],r32m6,r32), play(teams[11],teams[17],r32m7,r32), play(teams[12],teams[16],r32m8,r32), play(teams[13],teams[15],r32m9,r32), play(teams[0],teams[14],r32m10,r32)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r32m1">
    <td>${teams[8].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[1],r32m1,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m2">
    <td>${teams[7].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[2],r32m2,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m3">
    <td>${teams[6].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[3],r32m3,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m4">
    <td>${teams[5].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[4],r32m4,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m5">
    <td>${teams[9].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[19],r32m5,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m6">
    <td>${teams[10].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[18],r32m6,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m7">
    <td>${teams[11].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[17],r32m7,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m8">
    <td>${teams[12].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[16],r32m8,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m9">
    <td>${teams[13].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[15],r32m9,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m10">
    <td>${teams[0].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[14],r32m10,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 33: </th></tr>
    <tr id="r33"><td colspan="4"><button onclick="play(teams[1],teams[7],r33m1,r33), play(teams[2],teams[6],r33m2,r33), play(teams[3],teams[5],r33m3,r33), play(teams[4],teams[0],r33m4,r33), play(teams[19],teams[8],r33m5,r33), play(teams[18],teams[9],r33m6,r33), play(teams[17],teams[10],r33m7,r33), play(teams[16],teams[11],r33m8,r33), play(teams[15],teams[12],r33m9,r33), play(teams[14],teams[13],r33m10,r33)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r33m1">
    <td>${teams[1].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[7],r33m1,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m2">
    <td>${teams[2].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[6],r33m2,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m3">
    <td>${teams[3].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[5],r33m3,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m4">
    <td>${teams[4].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[0],r33m4,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m5">
    <td>${teams[19].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[8],r33m5,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m6">
    <td>${teams[18].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[9],r33m6,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m7">
    <td>${teams[17].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[10],r33m7,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m8">
    <td>${teams[16].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[11],r33m8,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m9">
    <td>${teams[15].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[12],r33m9,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m10">
    <td>${teams[14].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[13],r33m10,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 34: </th></tr>
    <tr id="r34"><td colspan="4"><button onclick="play(teams[6],teams[1],r34m1,r34), play(teams[5],teams[2],r34m2,r34), play(teams[4],teams[3],r34m3,r34), play(teams[7],teams[19],r34m4,r34), play(teams[8],teams[18],r34m5,r34), play(teams[9],teams[17],r34m6,r34), play(teams[10],teams[16],r34m7,r34), play(teams[11],teams[15],r34m8,r34), play(teams[12],teams[14],r34m9,r34), play(teams[0],teams[13],r34m10,r34)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r34m1">
    <td>${teams[6].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[1],r34m1,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m2">
    <td>${teams[5].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[2],r34m2,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m3">
    <td>${teams[4].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[3],r34m3,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m4">
    <td>${teams[7].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[19],r34m4,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m5">
    <td>${teams[8].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[18],r34m5,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m6">
    <td>${teams[9].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[17],r34m6,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m7">
    <td>${teams[10].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[16],r34m7,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m8">
    <td>${teams[11].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[15],r34m8,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m9">
    <td>${teams[12].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[13],r34m9,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m10">
    <td>${teams[0].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[13],r34m10,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 35: </th></tr>
    <tr id="r35"><td colspan="4"><button onclick="play(teams[1],teams[5],r35m1,r35), play(teams[2],teams[4],r35m2,r35), play(teams[3],teams[0],r35m3,r35), play(teams[19],teams[6],r35m4,r35), play(teams[18],teams[7],r35m5,r35), play(teams[17],teams[8],r35m6,r35), play(teams[16],teams[9],r35m7,r35), play(teams[15],teams[10],r35m8,r35), play(teams[14],teams[11],r35m9,r35), play(teams[13],teams[12],r35m10,r35)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r35m1">
    <td>${teams[1].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[5],r35m1,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m2">
    <td>${teams[2].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[4],r35m2,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m3">
    <td>${teams[3].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[0],r35m3,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m4">
    <td>${teams[19].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[6],r35m4,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m5">
    <td>${teams[18].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[7],r35m5,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m6">
    <td>${teams[17].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[8],r35m6,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m7">
    <td>${teams[16].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[7],r35m7,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m8">
    <td>${teams[15].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[10],r35m8,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m9">
    <td>${teams[14].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[11],r35m9,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r35m10">
    <td>${teams[13].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[12],r35m10,r35)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,//skonczone

    `<tr><th colspan="4">Round 36: </th></tr>
    <tr id="r36"><td colspan="4"><button onclick="play(teams[4],teams[1],r36m1,r36), play(teams[3],teams[2],r36m2,r36), play(teams[5],teams[19],r36m3,r36), play(teams[6],teams[18],r36m4,r36), play(teams[7],teams[17],r36m5,r36), play(teams[8],teams[16],r36m6,r36), play(teams[9],teams[15],r36m7,r36), play(teams[10],teams[14],r36m8,r36), play(teams[11],teams[13],r36m9,r36), play(teams[0],teams[12],r36m10,r36)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r36m1">
    <td>${teams[4].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[1],r36m1,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m2">
    <td>${teams[3].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[2],r36m2,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m3">
    <td>${teams[5].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[19],r36m3,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m4">
    <td>${teams[6].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[18],r36m4,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m5">
    <td>${teams[7].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[17],r36m5,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m6">
    <td>${teams[8].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[16],r36m6,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m7">
    <td>${teams[9].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[15],r36m7,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m8">
    <td>${teams[10].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[14],r36m8,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m9">
    <td>${teams[11].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[13],r36m9,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r36m10">
    <td>${teams[0].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[12],r36m10,r36)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 37: </th></tr>
    <tr id="r37"><td colspan="4"><button onclick="play(teams[1],teams[3],r37m1,r37), play(teams[2],teams[0],r37m2,r37), play(teams[19],teams[4],r37m3,r37), play(teams[18],teams[5],r37m4,r37), play(teams[17],teams[6],r37m5,r37), play(teams[16],teams[7],r37m6,r37), play(teams[15],teams[8],r37m7,r37), play(teams[14],teams[9],r37m8,r37), play(teams[13],teams[10],r37m9,r37), play(teams[12],teams[11],r37m10,r37)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r37m1">
    <td>${teams[1].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[3],r37m1,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m2">
    <td>${teams[2].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[0],r37m2,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m3">
    <td>${teams[19].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[4],r37m3,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m4">
    <td>${teams[18].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[5],r37m4,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m5">
    <td>${teams[17].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[6],r37m5,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m6">
    <td>${teams[16].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[7],r37m6,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m7">
    <td>${teams[15].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[8],r37m7,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m8">
    <td>${teams[14].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[9],r37m8,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m9">
    <td>${teams[13].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[10],r37m9,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r37m10">
    <td>${teams[12].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[11],r37m10,r37)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 38: </th></tr>
    <tr id="r38"><td colspan="4"><button onclick="play(teams[2],teams[1],r38m1,r38), play(teams[3],teams[19],r38m2,r38), play(teams[4],teams[18],r38m3,r38), play(teams[5],teams[17],r38m4,r38), play(teams[6],teams[16],r38m5,r38), play(teams[7],teams[15],r38m6,r38), play(teams[8],teams[14],r38m7,r38), play(teams[9],teams[13],r38m8,r38), play(teams[10],teams[12],r38m9,r38), play(teams[0],teams[11],r38m10,r38)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r38m1">
    <td>${teams[2].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[1],r38m1,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m2">
    <td>${teams[3].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[19],r38m2,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m3">
    <td>${teams[4].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[18],r38m3,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m4">
    <td>${teams[5].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[17],r38m4,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m5">
    <td>${teams[6].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[16],r38m5,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m6">
    <td>${teams[7].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[15],r38m6,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m7">
    <td>${teams[8].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[14],r38m7,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m8">
    <td>${teams[9].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[13],r38m8,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m9">
    <td>${teams[10].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[12],r38m9,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r38m10">
    <td>${teams[0].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[11],r38m10,r38)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`

                ]}
    
     if (n == 16) {
        round = ['',
 `<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[5],r1m1,r1), play(teams[2],teams[6],r1m2,r1), play(teams[3],teams[7],r1m3,r1), play(teams[4],teams[0],r1m4,r1), play(teams[9],teams[13],r1m5,r1), play(teams[10],teams[14],r1m6,r1), play(teams[11],teams[15],r1m7,r1), play(teams[12],teams[8],r1m8,r1)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r1m1">
<td>${teams[1].name}</td>  <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[5],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m2">
    <td>${teams[2].name}</td>  <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[6],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m3">
    <td>${teams[3].name}</td>  <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[7],r1m3,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m4">
    <td>${teams[4].name}</td>  <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[0],r1m4,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m5">
    <td>${teams[9].name}</td>  <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[13],r1m5,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m6">
    <td>${teams[10].name}</td>  <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[14],r1m6,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m7">
    <td>${teams[11].name}</td>  <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[15],r1m7,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m8">
    <td>${teams[12].name}</td>  <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[8],r1m8,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[6],teams[1],r2m1,r2), play(teams[7],teams[2],r2m2,r2), play(teams[0],teams[3],r2m3,r2), play(teams[5],teams[4],r2m4,r2), play(teams[14],teams[9],r2m5,r2), play(teams[15],teams[10],r2m6,r2), play(teams[8],teams[11],r2m7,r2), play(teams[13],teams[12],r2m8,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td>${teams[6].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[1],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[7].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[2],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m3">
    <td>${teams[0].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r2m3,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m4">
    <td>${teams[5].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[4],r2m4,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m5">
    <td>${teams[14].name}</td> <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[9],r2m5,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m6">
    <td>${teams[15].name}</td> <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[10],r2m6,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m7">
    <td>${teams[8].name}</td> <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[11],r2m7,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m8">
    <td>${teams[13].name}</td> <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[12],r2m8,r2)" class="play_button btn_effect">Play</button></td>
</tr>

<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 3: </th></tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[7],r3m1,r3), play(teams[2],teams[0],r3m2,r3), play(teams[3],teams[5],r3m3,r3), play(teams[4],teams[6],r3m4,r3), play(teams[9],teams[15],r3m5,r3), play(teams[10],teams[8],r3m6,r3), play(teams[11],teams[13],r3m7,r3), play(teams[12],teams[14],r3m8,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r3m1">
    <td>${teams[1].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[7],r3m1,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m2">
    <td>${teams[2].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[0],r3m2,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m3">
   <td>${teams[3].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[5],r3m3,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m4">
    <td>${teams[4].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[6],r3m4,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m5">
    <td>${teams[9].name}</td><td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[15],r3m5,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m6">
    <td>${teams[10].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[8],r3m6,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m7">
    <td>${teams[11].name}</td><td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[13],r3m7,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m8"> 
    <td>${teams[12].name}</td><td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[14],r3m8,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 4: </th></tr>
    <tr id="r4"><td colspan="4"><button onclick="play(teams[0], teams[1],r4m1,r4), play(teams[5], teams[2],r4m2,r4), play(teams[6], teams[3],r4m3,r4), play(teams[7], teams[4],r4m4,r4), play(teams[8], teams[9],r4m5,r4), play(teams[13],teams[10],r4m6,r4), play(teams[14], teams[11],r4m7,r4), play(teams[15], teams[12],r4m8,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r4m1">
    <td>${teams[0].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[0], teams[1],r4m1,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m2">
    <td>${teams[5].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[5], teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m3">
    <td>${teams[6].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[6], teams[3],r4m3,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m4">
    <td>${teams[7].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[7], teams[4],r4m4,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m5">
    <td>${teams[8].name}</td> <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[8], teams[9],r4m5,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m6">
    <td>${teams[13].name}</td> <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[13], teams[10],r4m6,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m7">
    <td>${teams[14].name}</td> <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[14], teams[11],r4m7,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m8">  
    <td>${teams[15].name}</td> <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[15], teams[12],r4m8,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 5: </th></tr>
    <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[2],r5m1,r5), play(teams[3],teams[4],r5m2,r5), play(teams[5],teams[6],r5m3,r5), play(teams[7],teams[0],r5m4,r5), play(teams[9],teams[10],r5m5,r5), play(teams[11],teams[12],r5m6,r5), play(teams[13],teams[14],r5m7,r5), play(teams[15],teams[8],r5m8,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r5m1">
    <td>${teams[1].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r5m1,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m2">
    <td>${teams[3].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[4],r5m2,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m3">
    <td>${teams[5].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[6],r5m3,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m4">
    <td>${teams[7].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[0],r5m4,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m5">
    <td>${teams[9].name}</td><td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[10],r5m5,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m6">
    <td>${teams[11].name}</td><td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[12],r5m6,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m7">
    <td>${teams[13].name}</td><td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[14],r5m7,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m8">
    <td>${teams[15].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[8],r5m8,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 6: </th></tr>
    <tr id="r6"><td colspan="4"><button onclick="play(teams[4],teams[1],r6m1,r6), play(teams[2],teams[3],r6m2,r6), play(teams[0],teams[5],r6m3,r6), play(teams[6],teams[7],r6m4,r6), play(teams[12],teams[9],r6m5,r6), play(teams[10],teams[11],r6m6,r6), play(teams[8],teams[13],r6m7,r6), play(teams[14],teams[15],r6m8,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r6m1">
    <td>${teams[4].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m2">
    <td>${teams[2].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r6m2,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m3">
    <td>${teams[0].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[5],r6m3,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m4">
    <td>${teams[6].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[7],r6m4,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m5">
    <td>${teams[12].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[9],r6m5,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m6">
    <td>${teams[10].name}</td><td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[11],r6m6,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m7">
    <td>${teams[8].name}</td><td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[13],r6m7,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m8">
    <td>${teams[14].name}</td><td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[15],r6m8,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 7: </th></tr>
    <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[3],r7m1,r7), play(teams[2],teams[4],r7m2,r7), play(teams[5],teams[7],r7m3,r7), play(teams[6],teams[0],r7m4,r7), play(teams[9],teams[11],r7m5,r7), play(teams[10],teams[12],r7m6,r7), play(teams[13],teams[15],r7m7,r7), play(teams[14],teams[8],r7m8,r7)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r7m1">
    <td>${teams[1].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[3],r7m1,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m2">
    <td>${teams[2].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[4],r7m2,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m3">
    <td>${teams[5].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[7],r7m3,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m4">
    <td>${teams[6].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[0],r7m4,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m5">
    <td>${teams[9].name}</td> <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[11],r7m5,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m6">   
    <td>${teams[10].name}</td> <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[12],r7m6,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m7">
    <td>${teams[13].name}</td> <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[15],r7m7,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m8">
    <td>${teams[14].name}</td> <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[8],r7m8,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 8: </th></tr>
    <tr id="r8"><td colspan="4"><button onclick="play(teams[1],teams[8],r8m1,r8), play(teams[2],teams[9],r8m2,r8), play(teams[3],teams[10],r8m3,r8), play(teams[4],teams[11],r8m4,r8), play(teams[5],teams[12],r8m5,r8), play(teams[6],teams[13],r8m6,r8), play(teams[7],teams[14],r8m7,r8), play(teams[0],teams[15],r8m8,r8)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r8m1">
    <td>${teams[1].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[8],r8m1,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m2">
    <td>${teams[2].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[9],r8m2,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m3">
    <td>${teams[3].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[10],r8m3,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m4">
    <td>${teams[4].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[11],r8m4,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m5">
    <td>${teams[5].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[12],r8m5,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m6">
    <td>${teams[6].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[13],r8m6,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m7">
    <td>${teams[7].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[14],r8m7,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m8">
    <td>${teams[0].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[15],r8m8,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 9: </th></tr>
    <tr id="r9"><td colspan="4"><button onclick="play(teams[8],teams[2],r9m1,r9), play(teams[9],teams[3],r9m2,r9), play(teams[10],teams[4],r9m3,r9), play(teams[11],teams[5],r9m4,r9), play(teams[12],teams[6],r9m5,r9), play(teams[13],teams[7],r9m6,r9), play(teams[14],teams[0],r9m7,r9), play(teams[15],teams[1],r9m8,r9)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r9m1">
    <td>${teams[8].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[2],r9m1,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m2">
    <td>${teams[9].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[3],r9m2,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m3">
    <td>${teams[10].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[4],r9m3,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m4">
    <td>${teams[11].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[5],r9m4,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m5">
    <td>${teams[12].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[6],r9m5,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m6">
    <td>${teams[13].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[7],r9m6,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m7">
    <td>${teams[14].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[0],r9m7,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m8">
    <td>${teams[15].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[1],r9m8,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    
    `<tr><th colspan="4">Round 10: </th></tr>
    <tr id="r10"><td colspan="4"><button onclick="play(teams[3],teams[8],r10m1,r10), play(teams[4],teams[9],r10m2,r10), play(teams[5],teams[10],r10m3,r10), play(teams[6],teams[11],r10m4,r10), play(teams[7],teams[12],r10m5,r10), play(teams[0],teams[13],r10m6,r10), play(teams[1],teams[14],r10m7,r10), play(teams[2],teams[15],r10m8,r10)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r10m1">
    <td>${teams[3].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[8],r10m1,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m2">
    <td>${teams[4].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[9],r10m2,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m3">
    <td>${teams[5].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[10],r10m3,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m4">
    <td>${teams[6].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[11],r10m4,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m5">
    <td>${teams[7].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[12],r10m5,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m6">
    <td>${teams[0].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[13],r10m6,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m7">
    <td>${teams[1].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[14],r10m7,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m8">
    <td>${teams[2].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[15],r10m8,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 11: </th></tr>
    <tr id="r11"><td colspan="4"><button onclick="play(teams[8],teams[4],r11m1,r11), play(teams[9],teams[5],r11m2,r11), play(teams[10],teams[6],r11m3,r11), play(teams[11],teams[7],r11m4,r11), play(teams[12],teams[0],r11m5,r11), play(teams[13],teams[1],r11m6,r11), play(teams[14],teams[2],r11m7,r11), play(teams[15],teams[3],r11m8,r11)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r11m1">
    <td>${teams[8].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[4],r11m1,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m2">
    <td>${teams[9].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[5],r11m2,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m3">
    <td>${teams[10].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[6],r11m3,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m4">
    <td>${teams[11].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[7],r11m4,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m5">
    <td>${teams[12].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[0],r11m5,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m6">
    <td>${teams[13].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[1],r11m6,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m7">
    <td>${teams[14].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[2],r11m7,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m8">
    <td>${teams[15].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[3],r11m8,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 
     `<tr><th colspan="4">Round 12: </th></tr>
    <tr id="r12"><td colspan="4"><button onclick="play(teams[5],teams[8],r12m1,r12), play(teams[6],teams[9],r12m2,r12), play(teams[7],teams[10],r12m3,r12), play(teams[0],teams[11],r12m4,r12), play(teams[1],teams[12],r12m5,r12), play(teams[2],teams[13],r12m6,r12), play(teams[3],teams[14],r12m7,r12), play(teams[4],teams[15],r12m8,r12)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r12m1">
    <td>${teams[5].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[8],r12m1,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m2">
    <td>${teams[6].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[9],r12m2,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m3">
    <td>${teams[7].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[10],r12m3,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m4">
    <td>${teams[0].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[11],r12m4,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m5">
    <td>${teams[1].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[12],r12m5,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m6">
    <td>${teams[2].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[13],r12m6,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m7">
    <td>${teams[3].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[14],r12m7,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m8">
    <td>${teams[4].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[15],r12m8,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 13: </th></tr>
    <tr id="r13"><td colspan="4"><button onclick="play(teams[8],teams[6],r13m1,r13), play(teams[9],teams[7],r13m2,r13), play(teams[10],teams[0],r13m3,r13), play(teams[11],teams[1],r13m4,r13), play(teams[12],teams[2],r13m5,r13), play(teams[13],teams[3],r13m6,r13), play(teams[14],teams[4],r13m7,r13), play(teams[15],teams[5],r13m8,r13)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r13m1">
    <td>${teams[8].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[6],r13m1,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m2">
    <td>${teams[9].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[7],r13m2,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m3">
    <td>${teams[10].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[0],r13m3,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m4">
    <td>${teams[11].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[1],r13m4,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m5">
    <td>${teams[12].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[2],r13m5,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m6">
    <td>${teams[13].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[3],r13m6,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m7">
    <td>${teams[14].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[4],r13m7,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m8">
    <td>${teams[15].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[5],r13m8,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 14: </th></tr>
    <tr id="r14"><td colspan="4"><button onclick="play(teams[7],teams[8],r14m1,r14), play(teams[0],teams[9],r14m2,r14), play(teams[1],teams[10],r14m3,r14), play(teams[2],teams[11],r14m4,r14), play(teams[3],teams[12],r14m5,r14), play(teams[4],teams[13],r14m6,r14), play(teams[5],teams[14],r14m7,r14), play(teams[6],teams[15],r14m8,r14)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r14m1">
    <td>${teams[7].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[8],r14m1,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m2">
    <td>${teams[0].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[9],r14m2,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m3">
    <td>${teams[1].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[10],r14m3,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m4">
    <td>${teams[2].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[11],r14m4,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m5">
    <td>${teams[3].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[12],r14m5,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m6">
    <td>${teams[4].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[13],r14m6,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m7">
    <td>${teams[5].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[14],r14m7,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m8">
    <td>${teams[6].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[15],r14m8,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 15: </th></tr>
    <tr id="r15"><td colspan="4"><button onclick="play(teams[8],teams[0],r15m1,r15), play(teams[9],teams[1],r15m2,r15), play(teams[10],teams[2],r15m3,r15), play(teams[11],teams[3],r15m4,r15), play(teams[12],teams[4],r15m5,r15), play(teams[13],teams[5],r15m6,r15), play(teams[14],teams[6],r15m7,r15), play(teams[15],teams[7],r15m8,r15)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r15m1">
    <td>${teams[8].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[0],r15m1,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m2">
    <td>${teams[9].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[1],r15m2,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m3">
    <td>${teams[10].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[2],r15m3,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m4">
    <td>${teams[11].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[3],r15m4,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m5">
    <td>${teams[12].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[4],r15m5,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m6">
    <td>${teams[13].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[5],r15m6,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m7">
    <td>${teams[14].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[6],r15m7,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m8">
    <td>${teams[15].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[7],r15m8,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 
    `<tr>
    <th colspan="4">Round 16</th>
</tr>
<tr id="r16"><td colspan="4"><button onclick="play(teams[5],teams[1],r16m1,r16), play(teams[6],teams[2],r16m2,r16), play(teams[7],teams[3],r16m3,r16), play(teams[0],teams[4],r16m4,r16), play(teams[13],teams[9],r16m5,r16), play(teams[14],teams[10],r16m6,r16), play(teams[15],teams[11],r16m7,r16), play(teams[8],teams[12],r16m8,r16)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r16m1">
<td>${teams[5].name}</td>  <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[1],r16m1,r16)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r16m2">
    <td>${teams[6].name}</td>  <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[2],r16m2,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m3">
    <td>${teams[7].name}</td>  <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[3],r16m3,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m4">
    <td>${teams[0].name}</td>  <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[4],r16m4,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m5">
    <td>${teams[13].name}</td>  <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[9],r16m5,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m6">
    <td>${teams[14].name}</td>  <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[10],r16m6,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m7">
    <td>${teams[15].name}</td>  <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[11],r16m7,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m8">
    <td>${teams[8].name}</td>  <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[12],r16m8,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 17</th>
</tr>
<tr id="r17"><td colspan="4"><button onclick="play(teams[1],teams[6],r17m1,r17), play(teams[2],teams[7],r17m2,r17), play(teams[3],teams[0],r17m3,r17), play(teams[4],teams[5],r17m4,r17), play(teams[9],teams[14],r17m5,r17), play(teams[10],teams[15],r17m6,r17), play(teams[11],teams[8],r17m7,r17), play(teams[12],teams[13],r17m8,r17)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r17m1">
    <td>${teams[1].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[6],r17m1,r17)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r17m2">
    <td>${teams[2].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[7],r17m2,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m3">
    <td>${teams[3].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[0],r17m3,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m4">
    <td>${teams[4].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[5],r17m4,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m5">
    <td>${teams[9].name}</td> <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[14],r17m5,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m6">
    <td>${teams[10].name}</td> <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[15],r17m6,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m7">
    <td>${teams[11].name}</td> <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[8],r17m7,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m8">
    <td>${teams[12].name}</td> <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[13],r17m8,r17)" class="play_button btn_effect">Play</button></td>
</tr>

<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 18: </th></tr>
<tr id="r18"><td colspan="4"><button onclick="play(teams[7],teams[1],r18m1,r18), play(teams[0],teams[2],r18m2,r18), play(teams[5],teams[3],r18m3,r18), play(teams[6],teams[4],r18m4,r18), play(teams[15],teams[9],r18m5,r18), play(teams[8],teams[10],r18m6,r18), play(teams[13],teams[11],r18m7,r18), play(teams[14],teams[12],r18m8,r18)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r18m1">
    <td>${teams[7].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[1],r18m1,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m2">
    <td>${teams[0].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r18m2,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m3">
   <td>${teams[5].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[3],r18m3,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m4">
    <td>${teams[6].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[4],r18m4,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m5">
    <td>${teams[15].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[9],r18m5,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m6">
    <td>${teams[8].name}</td><td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[10],r18m6,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m7">
    <td>${teams[13].name}</td><td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[11],r18m7,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m8"> 
    <td>${teams[14].name}</td><td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[12],r18m8,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 19: </th></tr>
    <tr id="r19"><td colspan="4"><button onclick="play(teams[1], teams[0],r19m1,r19), play(teams[2], teams[5],r19m2,r19), play(teams[3], teams[6],r19m3,r19), play(teams[4], teams[7],r19m4,r19), play(teams[9], teams[8],r19m5,r19), play(teams[10],teams[13],r19m6,r19), play(teams[11], teams[14],r19m7,r19), play(teams[12], teams[15],r19m8,r19)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r19m1">
    <td>${teams[1].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1], teams[0],r19m1,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m2">
    <td>${teams[2].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[2], teams[5],r19m2,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m3">
    <td>${teams[3].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[3], teams[6],r19m3,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m4">
    <td>${teams[4].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[4], teams[7],r19m4,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m5">
    <td>${teams[9].name}</td> <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[9 teams[8],r19m5,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m6">
    <td>${teams[10].name}</td> <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[10], teams[13],r19m6,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m7">
    <td>${teams[11].name}</td> <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[11], teams[14],r19m7,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m8">  
    <td>${teams[12].name}</td> <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[12], teams[15],r19m8,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 20: </th></tr>
    <tr id="r20"><td colspan="4"><button onclick="play(teams[2],teams[1],r20m1,r20), play(teams[4],teams[3],r20m2,r20), play(teams[5],teams[6],r20m3,r20), play(teams[0],teams[7],r20m4,r20), play(teams[10],teams[9],r20m5,r20), play(teams[12],teams[11],r20m6,r20), play(teams[14],teams[13],r20m7,r20), play(teams[8],teams[15],r20m8,r20)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r20m1">
    <td>${teams[2].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[1],r20m1,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m2">
    <td>${teams[4].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[3],r20m2,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m3">
    <td>${teams[6].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[5],r20m3,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m4">
    <td>${teams[0].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[7],r20m4,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m5">
    <td>${teams[10].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[9],r20m5,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m6">
    <td>${teams[12].name}</td><td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[11],r20m6,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m7">
    <td>${teams[14].name}</td><td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[13],r20m7,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m8">
    <td>${teams[8].name}</td><td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[15],r20m8,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 21: </th></tr>
    <tr id="r21"><td colspan="4"><button onclick="play(teams[1],teams[4],r21m1,r21), play(teams[3],teams[2],r21m2,r21), play(teams[5],teams[0],r21m3,r21), play(teams[7],teams[6],r21m4,r21), play(teams[9],teams[12],r21m5,r21), play(teams[11],teams[10],r21m6,r21), play(teams[13],teams[8],r21m7,r21), play(teams[15],teams[14],r21m8,r21)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r21m1">
    <td>${teams[1].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[4],r21m1,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m2">
    <td>${teams[3].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[2],r21m2,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m3">
    <td>${teams[5].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[0],r21m3,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m4">
    <td>${teams[7].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[6],r21m4,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m5">
    <td>${teams[9].name}</td><td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[12],r21m5,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m6">
    <td>${teams[11].name}</td><td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[10],r21m6,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m7">
    <td>${teams[13].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[8],r21m7,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m8">
    <td>${teams[15].name}</td><td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[14],r21m8,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 22: </th></tr>
    <tr id="r22"><td colspan="4"><button onclick="play(teams[3],teams[1],r22m1,r22), play(teams[4],teams[2],r22m2,r22), play(teams[7],teams[5],r22m3,r22), play(teams[0],teams[6],r22m4,r22), play(teams[11],teams[9],r22m5,r22), play(teams[12],teams[10],r22m6,r22), play(teams[15],teams[13],r22m7,r22), play(teams[8],teams[14],r22m8,r22)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r22m1">
    <td>${teams[3].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r22m1,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m2">
    <td>${teams[4].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[2],r22m2,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m3">
    <td>${teams[7].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[5],r22m3,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m4">
    <td>${teams[0].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[6],r22m4,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m5">
    <td>${teams[11].name}</td> <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[9],r22m5,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m6">   
    <td>${teams[12].name}</td> <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[10],r22m6,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m7">
    <td>${teams[15].name}</td> <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[13],r22m7,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m8">
    <td>${teams[8].name}</td> <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[14],r22m8,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 23: </th></tr>
    <tr id="r23"><td colspan="4"><button onclick="play(teams[8],teams[1],r23m1,r23), play(teams[9],teams[2],r23m2,r23), play(teams[10],teams[3],r23m3,r23), play(teams[11],teams[4],r23m4,r23), play(teams[12],teams[5],r23m5,r23), play(teams[13],teams[6],r23m6,r23), play(teams[14],teams[7],r23m7,r23), play(teams[15],teams[0],r23m8,r23)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r23m1">
    <td>${teams[8].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[1],r23m1,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m2">
    <td>${teams[9].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[2],r23m2,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m3">
    <td>${teams[10].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[3],r23m3,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m4">
    <td>${teams[11].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[4],r23m4,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m5">
    <td>${teams[12].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[5],r23m5,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m6">
    <td>${teams[13].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[6],r23m6,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m7">
    <td>${teams[14].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[7],r23m7,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m8">
    <td>${teams[15].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[0],r23m8,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 24: </th></tr>
    <tr id="r24"><td colspan="4"><button onclick="play(teams[2],teams[8],r24m1,r24), play(teams[3],teams[9],r24m2,r24), play(teams[4],teams[10],r24m3,r24), play(teams[5],teams[11],r24m4,r24), play(teams[6],teams[12],r24m5,r24), play(teams[7],teams[13],r24m6,r24), play(teams[0],teams[14],r24m7,r24), play(teams[1],teams[15],r24m8,r24)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r24m1">
    <td>${teams[2].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[8],r24m1,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m2">
    <td>${teams[3].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[9],r24m2,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m3">
    <td>${teams[4].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[10],r24m3,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m4">
    <td>${teams[5].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[11],r24m4,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m5">
    <td>${teams[6].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[12],r24m5,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m6">
    <td>${teams[7].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[13],r24m6,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m7">
    <td>${teams[0].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[14],r24m7,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m8">
    <td>${teams[1].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[15],r24m8,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
         `<tr><th colspan="4">Round 25: </th></tr>
    <tr id="r25"><td colspan="4"><button onclick="play(teams[8],teams[3],r25m1,r25), play(teams[9],teams[4],r25m2,r25), play(teams[10],teams[5],r25m3,r25), play(teams[11],teams[6],r25m4,r25), play(teams[12],teams[7],r25m5,r25), play(teams[13],teams[0],r25m6,r25), play(teams[14],teams[1],r25m7,r25), play(teams[15],teams[2],r25m8,r25)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r25m1">
    <td>${teams[8].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[3],r25m1,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m2">
    <td>${teams[9].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[4],r25m2,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m3">
    <td>${teams[10].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[5],r25m3,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m4">
    <td>${teams[11].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[6],r25m4,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m5">
    <td>${teams[12].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[7],r25m5,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m6">
    <td>${teams[13].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[0],r25m6,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m7">
    <td>${teams[14].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[1],r25m7,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m8">
    <td>${teams[15].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[2],r25m8,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 26: </th></tr>
    <tr id="r26"><td colspan="4"><button onclick="play(teams[4],teams[8],r26m1,r26), play(teams[5],teams[9],r26m2,r26), play(teams[6],teams[10],r26m3,r26), play(teams[7],teams[11],r26m4,r26), play(teams[0],teams[12],r26m5,r26), play(teams[1],teams[13],r26m6,r26), play(teams[2],teams[14],r26m7,r26), play(teams[3],teams[15],r26m8,r26)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r26m1">
    <td>${teams[4].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[8],r26m1,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m2">
    <td>${teams[5].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[9],r26m2,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m3">
    <td>${teams[6].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[10],r26m3,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m4">
    <td>${teams[7].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[11],r26m4,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m5">
    <td>${teams[0].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[12],r26m5,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m6">
    <td>${teams[1].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[13],r26m6,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m7">
    <td>${teams[2].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[14],r26m7,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m8">
    <td>${teams[3].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[15],r26m8,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,     
                 
     `<tr><th colspan="4">Round 27: </th></tr>
    <tr id="r27"><td colspan="4"><button onclick="play(teams[8],teams[5],r27m1,r27), play(teams[9],teams[6],r27m2,r27), play(teams[10],teams[7],r27m3,r27), play(teams[11],teams[0],r27m4,r27), play(teams[12],teams[1],r27m5,r27), play(teams[13],teams[2],r27m6,r27), play(teams[14],teams[3],r27m7,r27), play(teams[15],teams[4],r27m8,r27)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r27m1">
    <td>${teams[8].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[5],r27m1,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m2">
    <td>${teams[9].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[6],r27m2,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m3">
    <td>${teams[10].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[7],r27m3,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m4">
    <td>${teams[11].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[0],r27m4,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m5">
    <td>${teams[12].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[1],r27m5,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m6">
    <td>${teams[13].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[2],r27m6,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m7">
    <td>${teams[14].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[3],r27m7,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m8">
    <td>${teams[15].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[4],r27m8,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 28: </th></tr>
    <tr id="r28"><td colspan="4"><button onclick="play(teams[6],teams[8],r28m1,r28), play(teams[7],teams[9],r28m2,r28), play(teams[0],teams[10],r28m3,r28), play(teams[1],teams[11],r28m4,r28), play(teams[2],teams[12],r28m5,r28), play(teams[3],teams[13],r28m6,r28), play(teams[4],teams[14],r28m7,r28), play(teams[5],teams[15],r28m8,r28)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r28m1">
    <td>${teams[6].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[8],r28m1,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m2">
    <td>${teams[7].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[9],r28m2,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m3">
    <td>${teams[0].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[10],r28m3,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m4">
    <td>${teams[1].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[11],r28m4,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m5">
    <td>${teams[2].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[12],r28m5,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m6">
    <td>${teams[3].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[13],r28m6,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m7">
    <td>${teams[4].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[14],r28m7,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m8">
    <td>${teams[5].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[15],r28m8,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,    
                 
      `<tr><th colspan="4">Round 29: </th></tr>
    <tr id="r29"><td colspan="4"><button onclick="play(teams[8],teams[7],r29m1,r29), play(teams[9],teams[0],r29m2,r29), play(teams[10],teams[1],r29m3,r29), play(teams[11],teams[2],r29m4,r29), play(teams[12],teams[3],r29m5,r29), play(teams[13],teams[4],r29m6,r29), play(teams[14],teams[5],r29m7,r29), play(teams[15],teams[6],r29m8,r29)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r29m1">
    <td>${teams[8].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[7],r29m1,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m2">
    <td>${teams[9].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[0],r29m2,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m3">
    <td>${teams[10].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[1],r29m3,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m4">
    <td>${teams[11].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[2],r29m4,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m5">
    <td>${teams[12].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[3],r29m5,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m6">
    <td>${teams[13].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[4],r29m6,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m7">
    <td>${teams[14].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[5],r29m7,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m8">
    <td>${teams[15].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[6],r29m8,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 30: </th></tr>
    <tr id="r30"><td colspan="4"><button onclick="play(teams[0],teams[8],r30m1,r30), play(teams[1],teams[9],r30m2,r30), play(teams[2],teams[10],r30m3,r30), play(teams[3],teams[11],r30m4,r30), play(teams[4],teams[12],r30m5,r30), play(teams[5],teams[13],r30m6,r30), play(teams[6],teams[14],r30m7,r30), play(teams[7],teams[15],r30m8,r30)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r30m1">
    <td>${teams[0].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[8],r30m1,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m2">
    <td>${teams[1].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[9],r30m2,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m3">
    <td>${teams[2].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[10],r30m3,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m4">
    <td>${teams[3].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[11],r30m4,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m5">
    <td>${teams[4].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[12],r30m5,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m6">
    <td>${teams[5].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[13],r30m6,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m7">
    <td>${teams[6].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[14],r30m7,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m8">
    <td>${teams[7].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[15],r30m8,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`       
                ]}
    
     if (n == 8) {
        round = ['', 
                 
`<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[5],r1m1,r1), play(teams[2],teams[6],r1m2,r1), play(teams[3],teams[7],r1m3,r1), play(teams[4],teams[0],r1m4,r1)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r1m1">
<td>${teams[1].name}</td>  <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[5],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m2">
    <td>${teams[2].name}</td>  <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[6],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m3">
    <td>${teams[3].name}</td>  <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[7],r1m3,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m4">
    <td>${teams[4].name}</td>  <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[0],r1m4,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
                 
   `<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[6],teams[1],r2m1,r2), play(teams[7],teams[2],r2m2,r2), play(teams[0],teams[3],r2m3,r2), play(teams[5],teams[4],r2m4,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td>${teams[6].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[1],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[7].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[2],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m3">
    <td>${teams[0].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r2m3,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m4">
    <td>${teams[5].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[4],r2m4,r2)" class="play_button btn_effect">Play</button></td>
</tr>              
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>` ,
                 
    `<tr><th colspan="4">Round 3: </th></tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[7],r3m1,r3), play(teams[2],teams[0],r3m2,r3), play(teams[3],teams[5],r3m3,r3), play(teams[4],teams[6],r3m4,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r3m1">
    <td>${teams[1].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[7],r3m1,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m2">
    <td>${teams[2].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[0],r3m2,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m3">
   <td>${teams[3].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[5],r3m3,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m4">
    <td>${teams[4].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[6],r3m4,r3)" class="play_button btn_effect">Play</button></td>
    </tr>             
         <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 
       `<tr><th colspan="4">Round 4: </th></tr>
    <tr id="r4"><td colspan="4"><button onclick="play(teams[0], teams[1],r4m1,r4), play(teams[5], teams[2],r4m2,r4), play(teams[6], teams[3],r4m3,r4), play(teams[7], teams[4],r4m4,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r4m1">
    <td>${teams[0].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[0], teams[1],r4m1,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m2">
    <td>${teams[5].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[5], teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m3">
    <td>${teams[6].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[6], teams[3],r4m3,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m4">
    <td>${teams[7].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[7], teams[4],r4m4,r4)" class="play_button btn_effect">Play</button></td>
    </tr>          
          <tr>
    <th colspan="4" class="end_round">X</th>
    </tr> ` ,
   
    `<tr><th colspan="4">Round 5: </th></tr>
    <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[2],r5m1,r5), play(teams[3],teams[4],r5m2,r5), play(teams[5],teams[6],r5m3,r5), play(teams[7],teams[0],r5m4,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r5m1">
    <td>${teams[1].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r5m1,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m2">
    <td>${teams[3].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[4],r5m2,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m3">
    <td>${teams[5].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[6],r5m3,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m4">
    <td>${teams[7].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[0],r5m4,r5)" class="play_button btn_effect">Play</button></td>
    </tr>    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
           `<tr><th colspan="4">Round 6: </th></tr>
    <tr id="r6"><td colspan="4"><button onclick="play(teams[4],teams[1],r6m1,r6), play(teams[2],teams[3],r6m2,r6), play(teams[0],teams[5],r6m3,r6), play(teams[6],teams[7],r6m4,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r6m1">
    <td>${teams[4].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m2">
    <td>${teams[2].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r6m2,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m3">
    <td>${teams[0].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[5],r6m3,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m4">
    <td>${teams[6].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[7],r6m4,r6)" class="play_button btn_effect">Play</button></td>
    </tr>    
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
 `<tr><th colspan="4">Round 7: </th></tr>
    <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[3],r7m1,r7), play(teams[2],teams[4],r7m2,r7), play(teams[5],teams[7],r7m3,r7), play(teams[6],teams[0],r7m4,r7)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r7m1">
    <td>${teams[1].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[3],r7m1,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m2">
    <td>${teams[2].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[4],r7m2,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m3">
    <td>${teams[5].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[7],r7m3,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m4">
    <td>${teams[6].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[0],r7m4,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 
     `<tr>
    <th colspan="4">Round 8</th>
</tr>
<tr id="r8"><td colspan="4"><button onclick="play(teams[5],teams[1],r8m1,r8), play(teams[6],teams[2],r8m2,r8), play(teams[7],teams[3],r8m3,r8), play(teams[0],teams[4],r8m4,r8)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r8m1">
<td>${teams[5].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[1],r8m1,r8)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r8m2">
    <td>${teams[6].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[2],r8m2,r8)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r8m3">
    <td>${teams[7].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[3],r8m3,r8)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r8m4">
    <td>${teams[0].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[4],r8m4,r8)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
    `<tr>
    <th colspan="4">Round 9</th>
</tr>
<tr id="r9"><td colspan="4"><button onclick="play(teams[1],teams[6],r9m1,r9), play(teams[2],teams[7],r9m2,r9), play(teams[3],teams[0],r9m3,r9), play(teams[4],teams[5],r9m4,r9)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r9m1">
    <td>${teams[1].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[6],r9m1,r9)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r9m2">
    <td>${teams[2].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[7],r9m2,r9)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r9m3">
    <td>${teams[3].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[0],r9m3,r9)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r9m4">
    <td>${teams[4].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[5],r9m4,r9)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 10: </th></tr>
<tr id="r10"><td colspan="4"><button onclick="play(teams[7],teams[1],r10m1,r10), play(teams[0],teams[2],r10m2,r10), play(teams[5],teams[3],r10m3,r10), play(teams[6],teams[4],r10m4,r10)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r10m1">
    <td>${teams[7].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[1],r10m1,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m2">
    <td>${teams[0].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r10m2,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m3">
   <td>${teams[5].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[3],r10m3,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m4">
    <td>${teams[6].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[4],r10m4,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
 <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 11: </th></tr>
    <tr id="r11"><td colspan="4"><button onclick="play(teams[1], teams[0],r11m1,r11), play(teams[2], teams[5],r11m2,r11), play(teams[3], teams[6],r11m3,r11), play(teams[4], teams[7],r11m4,r11)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r11m1">
    <td>${teams[1].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1], teams[0],r11m1,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m2">
    <td>${teams[2].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[2], teams[5],r11m2,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m3">
    <td>${teams[3].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[3], teams[6],r11m3,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m4">
    <td>${teams[4].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[4], teams[7],r11m4,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
 <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 12: </th></tr>
    <tr id="r12"><td colspan="4"><button onclick="play(teams[2],teams[1],r12m1,r12), play(teams[4],teams[3],r12m2,r12), play(teams[5],teams[6],r12m3,r12), play(teams[0],teams[7],r12m4,r12)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r12m1">
    <td>${teams[2].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[1],r12m1,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m2">
    <td>${teams[4].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[3],r12m2,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m3">
    <td>${teams[6].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[5],r12m3,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m4">
    <td>${teams[0].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[7],r12m4,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
 <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 13: </th></tr>
    <tr id="r13"><td colspan="4"><button onclick="play(teams[1],teams[4],r13m1,r13), play(teams[3],teams[2],r13m2,r13), play(teams[5],teams[0],r13m3,r13), play(teams[7],teams[6],r13m4,r13)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r13m1">
    <td>${teams[1].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[4],r13m1,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m2">
    <td>${teams[3].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[2],r13m2,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m3">
    <td>${teams[5].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[0],r13m3,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m4">
    <td>${teams[7].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[6],r13m4,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 14: </th></tr>
    <tr id="r14"><td colspan="4"><button onclick="play(teams[3],teams[1],r14m1,r14), play(teams[4],teams[2],r14m2,r14), play(teams[7],teams[5],r14m3,r14), play(teams[0],teams[6],r14m4,r14)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r14m1">
    <td>${teams[3].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r14m1,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m2">
    <td>${teams[4].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[2],r14m2,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m3">
    <td>${teams[7].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[5],r14m3,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m4">
    <td>${teams[0].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[6],r14m4,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
<tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    ` ]}
    if (n == 10) {
        round = ['',
 `<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[0],r1m1,r1), play(teams[2],teams[9],r1m2,r1), play(teams[3],teams[8],r1m3,r1), play(teams[4],teams[7],r1m4,r1), play(teams[5],teams[6],r1m5,r1)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r1m1">
<td>${teams[1].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[0],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m2">
    <td>${teams[2].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[9],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m3">
    <td>${teams[3].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[8],r1m3,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m4">
    <td>${teams[4].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[7],r1m4,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m5">
    <td>${teams[5].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[6],r1m5,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[9],teams[1],r2m1,r2), play(teams[8],teams[2],r2m2,r2), play(teams[7],teams[3],r2m3,r2), play(teams[6],teams[4],r2m4,r2), play(teams[0],teams[5],r2m5,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td>${teams[9].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[1],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[8].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[2],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m3">
    <td>${teams[7].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[3],r2m3,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m4">
    <td>${teams[6].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[4],r2m4,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m5">
    <td>${teams[0].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[5],r2m5,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 3: </th></tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[8],r3m1,r3), play(teams[2],teams[7],r3m2,r3), play(teams[3],teams[6],r3m3,r3), play(teams[4],teams[5],r3m4,r3), play(teams[9],teams[0],r3m5,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r3m1">
    <td>${teams[1].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[8],r3m1,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m2">
    <td>${teams[2].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[7],r3m2,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m3">
   <td>${teams[3].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[6],r3m3,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m4">
    <td>${teams[4].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[5],r3m4,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m5">
    <td>${teams[9].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[0],r3m5,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 4: </th></tr>
    <tr id="r4"><td colspan="4"><button onclick="play(teams[7], teams[1],r4m1,r4), play(teams[6], teams[2],r4m2,r4), play(teams[5], teams[3],r4m3,r4), play(teams[0], teams[4],r4m4,r4), play(teams[8], teams[9],r4m5,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r4m1">
    <td>${teams[7].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[7], teams[1],r4m1,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m2">
    <td>${teams[6].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[6], teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m3">
    <td>${teams[5].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[5], teams[3],r4m3,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m4">
    <td>${teams[0].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[0], teams[4],r4m4,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m5">
    <td>${teams[8].name}</td> <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[8], teams[9],r4m5,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 5: </th></tr>
    <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[6],r5m1,r5), play(teams[2],teams[5],r5m2,r5), play(teams[3],teams[4],r5m3,r5), play(teams[9],teams[7],r5m4,r5), play(teams[8],teams[0],r5m5,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r5m1">
    <td>${teams[1].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[6],r5m1,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m2">
    <td>${teams[2].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[5],r5m2,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m3">
    <td>${teams[3].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[4],r5m3,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m4">
    <td>${teams[9].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[7],r5m4,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m5">
    <td>${teams[8].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[0],r5m5,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 6: </th></tr>
    <tr id="r6"><td colspan="4"><button onclick="play(teams[5],teams[1],r6m1,r6), play(teams[4],teams[2],r6m2,r6), play(teams[0],teams[3],r6m3,r6), play(teams[6],teams[9],r6m4,r6), play(teams[7],teams[8],r6m5,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r6m1">
    <td>${teams[5].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m2">
    <td>${teams[4].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[2],r6m2,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m3">
    <td>${teams[0].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r6m3,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m4">
    <td>${teams[6].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[9],r6m4,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m5">
    <td>${teams[7].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[8],r6m5,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 7: </th></tr>
    <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[4],r7m1,r7), play(teams[2],teams[3],r7m2,r7), play(teams[9],teams[5],r7m3,r7), play(teams[8],teams[6],r7m4,r7), play(teams[7],teams[0],r7m5,r7)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r7m1">
    <td>${teams[1].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[4],r7m1,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m2">
    <td>${teams[2].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r7m2,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m3">
    <td>${teams[9].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[5],r7m3,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m4">
    <td>${teams[8].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[6],r7m4,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m5">
    <td>${teams[7].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[0],r7m5,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 8: </th></tr>
    <tr id="r8"><td colspan="4"><button onclick="play(teams[3],teams[1],r8m1,r8), play(teams[0],teams[2],r8m2,r8), play(teams[4],teams[9],r8m3,r8), play(teams[5],teams[8],r8m4,r8), play(teams[6],teams[7],r8m5,r8)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r8m1">
    <td>${teams[3].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r8m1,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m2">
    <td>${teams[0].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r8m2,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m3">
    <td>${teams[4].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[9],r8m3,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m4">
    <td>${teams[5].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[8],r8m4,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m5">
    <td>${teams[6].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[7],r8m5,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 9: </th></tr>
    <tr id="r9"><td colspan="4"><button onclick="play(teams[1],teams[2],r9m1,r9), play(teams[9],teams[3],r9m2,r9), play(teams[5],teams[4],r9m3,r9), play(teams[4],teams[5],r9m4,r9), play(teams[6],teams[0],r9m5,r9)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r9m1">
    <td>${teams[1].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r9m1,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m2">
    <td>${teams[9].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[3],r9m2,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m3">
    <td>${teams[8].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[4],r9m3,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m4">
    <td>${teams[7].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[5],r9m4,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m5">
    <td>${teams[6].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[0],r9m5,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    
    `<tr><th colspan="4">Round 10: </th></tr>
    <tr id="r10"><td colspan="4"><button onclick="play(teams[0],teams[1],r10m1,r10), play(teams[9],teams[2],r10m2,r10), play(teams[8],teams[3],r10m3,r10), play(teams[7],teams[4],r10m4,r10), play(teams[6],teams[5],r10m5,r10)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r10m1">
    <td>${teams[0].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[1],r10m1,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m2">
    <td>${teams[9].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[2],r10m2,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m3">
    <td>${teams[8].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[3],r10m3,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m4">
    <td>${teams[7].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[4],r10m4,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m5">
    <td>${teams[6].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[5],r10m5,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 11: </th></tr>
    <tr id="r11"><td colspan="4"><button onclick="play(teams[1],teams[9],r11m1,r11), play(teams[2],teams[8],r11m2,r11), play(teams[3],teams[7],r11m3,r11), play(teams[4],teams[6],r11m4,r11), play(teams[5],teams[0],r11m5,r11)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r11m1">
    <td>${teams[1].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[9],r11m1,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m2">
    <td>${teams[2].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[8],r11m2,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m3">
    <td>${teams[3].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[7],r11m3,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m4">
    <td>${teams[4].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[6],r11m4,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m5">
    <td>${teams[5].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[0],r11m5,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
 `<tr><th colspan="4">Round 12: </th></tr>
    <tr id="r12"><td colspan="4"><button onclick="play(teams[8],teams[1],r12m1,r12), play(teams[7],teams[2],r12m2,r12), play(teams[6],teams[3],r12m3,r12), play(teams[5],teams[4],r12m4,r12), play(teams[0],teams[9],r12m5,r12)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r12m1">
    <td>${teams[8].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[1],r12m1,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m2">
    <td>${teams[7].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[2],r12m2,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m3">
    <td>${teams[6].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[3],r12m3,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m4">
    <td>${teams[5].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[4],r12m4,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m5">
    <td>${teams[0].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[9],r12m5,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 13: </th></tr>
    <tr id="r13"><td colspan="4"><button onclick="play(teams[1],teams[7],r13m1,r13), play(teams[2],teams[6],r13m2,r13), play(teams[3],teams[5],r13m3,r13), play(teams[4],teams[0],r13m4,r13), play(teams[9],teams[8],r13m5,r13)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r13m1">
    <td>${teams[1].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[7],r13m1,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m2">
    <td>${teams[2].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[6],r13m2,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m3">
    <td>${teams[3].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[5],r13m3,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m4">
    <td>${teams[4].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[0],r13m4,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m5">
    <td>${teams[9].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[8],r13m5,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 `<tr><th colspan="4">Round 14: </th></tr>
    <tr id="r14"><td colspan="4"><button onclick="play(teams[6],teams[1],r14m1,r14), play(teams[5],teams[2],r14m2,r14), play(teams[4],teams[3],r14m3,r14), play(teams[7],teams[9],r14m4,r14), play(teams[0],teams[8],r14m5,r14)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r14m1">
    <td>${teams[6].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[1],r14m1,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m2">
    <td>${teams[5].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[2],r14m2,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m3">
    <td>${teams[4].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[3],r14m3,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m4">
    <td>${teams[7].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[9],r14m4,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m5">
    <td>${teams[0].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[8],r14m5,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 15: </th></tr>
    <tr id="r15"><td colspan="4"><button onclick="play(teams[1],teams[5],r15m1,r15), play(teams[2],teams[4],r15m2,r15), play(teams[3],teams[0],r15m3,r15), play(teams[9],teams[6],r15m4,r15), play(teams[8],teams[7],r15m5,r15)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r15m1">
    <td>${teams[1].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[5],r15m1,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m2">
    <td>${teams[2].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[4],r15m2,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m3">
    <td>${teams[3].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[0],r15m3,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m4">
    <td>${teams[9].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[6],r15m4,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m5">
    <td>${teams[8].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[7],r15m5,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
 `<tr><th colspan="4">Round 16: </th></tr>
    <tr id="r16"><td colspan="4"><button onclick="play(teams[4],teams[1],r16m1,r16), play(teams[3],teams[2],r16m2,r16), play(teams[5],teams[9],r16m3,r16), play(teams[6],teams[8],r16m4,r16), play(teams[0],teams[7],r16m5,r16)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r16m1">
    <td>${teams[4].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[1],r16m1,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m2">
    <td>${teams[3].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[2],r16m2,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m3">
    <td>${teams[5].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[9],r16m3,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m4">
    <td>${teams[6].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[8],r16m4,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m5">
    <td>${teams[0].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[7],r16m5,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 17: </th></tr>
    <tr id="r17"><td colspan="4"><button onclick="play(teams[1],teams[3],r17m1,r17), play(teams[2],teams[0],r17m2,r17), play(teams[9],teams[4],r17m3,r17), play(teams[8],teams[5],r17m4,r17), play(teams[7],teams[6],r17m5,r17)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r17m1">
    <td>${teams[1].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[3],r17m1,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m2">
    <td>${teams[2].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[0],r17m2,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m3">
    <td>${teams[9].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[4],r17m3,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m4">
    <td>${teams[8].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[5],r17m4,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m5">
    <td>${teams[7].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[6],r17m5,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
`<tr><th colspan="4">Round 18: </th></tr>
    <tr id="r18"><td colspan="4"><button onclick="play(teams[2],teams[1],r18m1,r18), play(teams[3],teams[9],r18m2,r18), play(teams[4],teams[8],r18m3,r18), play(teams[5],teams[7],r18m4,r18), play(teams[0],teams[6],r18m5,r18)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r18m1">
    <td>${teams[2].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[1],r18m1,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m2">
    <td>${teams[3].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[9],r18m2,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m3">
    <td>${teams[4].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[8],r18m3,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m4">
    <td>${teams[5].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[7],r18m4,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m5">
    <td>${teams[0].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[6],r18m5,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `   ]}
    if (n == 12) {
        round = ['',
 `<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[0],r1m1,r1), play(teams[2],teams[11],r1m2,r1), play(teams[3],teams[10],r1m3,r1), play(teams[4],teams[9],r1m4,r1), play(teams[5],teams[8],r1m5,r1), play(teams[6],teams[7],r1m6,r1)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r1m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[0],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m2">
    <td>${teams[2].name}</td>
    <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[11],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m3">
    <td>${teams[3].name}</td>
    <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[10],r1m3,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m4">
    <td>${teams[4].name}</td>
    <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[9],r1m4,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m5">
    <td>${teams[5].name}</td>
    <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[8],r1m5,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m6">
    <td>${teams[6].name}</td>
    <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[7],r1m6,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[11],teams[1],r2m1,r2), play(teams[10],teams[2],r2m2,r2), play(teams[9],teams[3],r2m3,r2), play(teams[8],teams[4],r2m4,r2), play(teams[7],teams[5],r2m5,r2), play(teams[0],teams[6],r2m6,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td id="host">${teams[11].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[1],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[10].name}</td>
    <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[2],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m3">
    <td>${teams[9].name}</td>
    <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[3],r2m3,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m4">
    <td>${teams[8].name}</td>
    <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[4],r2m4,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m5">
    <td>${teams[7].name}</td>
    <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[5],r2m5,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m6">
    <td>${teams[0].name}</td>
    <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[6],r2m6,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 3: </th></tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[10],r3m1,r3), play(teams[2],teams[9],r3m2,r3), play(teams[3],teams[8],r3m3,r3), play(teams[4],teams[7],r3m4,r3), play(teams[5],teams[6],r3m5,r3), play(teams[11],teams[0],r3m6,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r3m1">
    <td>${teams[1].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[10],r3m1,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m2">
    <td>${teams[2].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[9],r3m2,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m3">
    <td>${teams[3].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[8],r3m3,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m4">
    <td>${teams[4].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[7],r3m4,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m5">
    <td>${teams[5].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[6],r3m5,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m6">
    <td>${teams[11].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[0],r3m6,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 4: </th></tr>
    <tr id="r4"><td colspan="4"><button onclick="play(teams[9],teams[1],r4m1,r4), play(teams[8],teams[2],r4m2,r4), play(teams[7],teams[3],r4m3,r4), play(teams[6],teams[4],r4m4,r4), play(teams[0],teams[5],r4m5,r4), play(teams[10],teams[11],r4m6,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r4m1">
    <td>${teams[9].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[1],r4m1,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m2">
    <td>${teams[8].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m3">
    <td>${teams[7].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[3],r4m3,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m4">
    <td>${teams[6].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[4],r4m4,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m5">
    <td>${teams[0].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[5],r4m5,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m6">
    <td>${teams[10].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[11],r4m6,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 5: </th></tr>
    <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[8],r5m1,r5), play(teams[2],teams[7],r5m2,r5), play(teams[3],teams[6],r5m3,r5), play(teams[4],teams[5],r5m4,r5), play(teams[11],teams[9],r5m5,r5), play(teams[10],teams[0],r5m6,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r5m1">
    <td>${teams[1].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[8],r5m1,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m2">
    <td>${teams[2].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[7],r5m2,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m3">
    <td>${teams[3].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[6],r5m3,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m4">
    <td>${teams[4].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[5],r5m4,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m5">
    <td>${teams[11].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[9],r5m5,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m6">
    <td>${teams[10].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[0],r5m6,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 6: </th></tr>
    <tr id="r6"><td colspan="4"><button onclick="play(teams[7],teams[1],r6m1,r6), play(teams[6],teams[2],r6m2,r6), play(teams[5],teams[3],r6m3,r6), play(teams[0],teams[4],r6m4,r6), play(teams[8],teams[11],r6m5,r6), play(teams[9],teams[10],r6m6,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r6m1">
    <td>${teams[7].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m2">
    <td>${teams[6].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[2],r6m2,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m3">
    <td>${teams[5].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[3],r6m3,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m4">
    <td>${teams[0].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[4],r6m4,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m5">
    <td>${teams[8].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[11],r6m5,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m6">
    <td>${teams[9].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[10],r6m6,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 7: </th></tr>
    <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[6],r7m1,r7), play(teams[2],teams[5],r7m2,r7), play(teams[3],teams[4],r7m3,r7), play(teams[11],teams[7],r7m4,r7), play(teams[10],teams[8],r7m5,r7), play(teams[9],teams[0],r7m6,r7)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r7m1">
    <td>${teams[1].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[6],r7m1,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m2">
    <td>${teams[2].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[5],r7m2,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m3">
    <td>${teams[3].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[4],r7m3,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m4">
    <td>${teams[11].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[7],r7m4,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m5">
    <td>${teams[10].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[8],r7m5,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m6">
    <td>${teams[9].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[0],r7m6,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 8: </th></tr>
    <tr id="r8"><td colspan="4"><button onclick="play(teams[5],teams[1],r8m1,r8), play(teams[4],teams[2],r8m2,r8), play(teams[0],teams[3],r8m3,r8), play(teams[6],teams[11],r8m4,r8), play(teams[7],teams[10],r8m5,r8), play(teams[8],teams[9],r8m6,r8)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r8m1">
    <td>${teams[5].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[1],r8m1,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m2">
    <td>${teams[4].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[2],r8m2,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m3">
    <td>${teams[0].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r8m3,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m4">
    <td>${teams[6].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[11],r8m4,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m5">
    <td>${teams[7].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[10],r8m5,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m6">
    <td>${teams[8].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[9],r8m6,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 9: </th></tr>
    <tr id="r9"><td colspan="4"><button onclick="play(teams[1],teams[4],r9m1,r9), play(teams[2],teams[3],r9m2,r9), play(teams[11],teams[5],r9m3,r9), play(teams[10],teams[6],r9m4,r9), play(teams[9],teams[7],r9m5,r9), play(teams[8],teams[0],r9m6,r9)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r9m1">
    <td>${teams[1].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[4],r9m1,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m2">
    <td>${teams[2].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r9m2,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m3">
    <td>${teams[11].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[5],r9m3,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m4">
    <td>${teams[10].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[6],r9m4,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m5">
    <td>${teams[9].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[7],r9m5,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m6">
    <td>${teams[8].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[0],r9m6,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 10: </th></tr>
    <tr id="r10"><td colspan="4"><button onclick="play(teams[3],teams[1],r10m1,r10), play(teams[0],teams[2],r10m2,r10), play(teams[4],teams[11],r10m3,r10), play(teams[5],teams[10],r10m4,r10), play(teams[6],teams[9],r10m5,r10), play(teams[7],teams[8],r10m6,r10)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r10m1">
    <td>${teams[3].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r10m1,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m2">
    <td>${teams[0].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r10m2,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m3">
    <td>${teams[4].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[11],r10m3,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m4">
    <td>${teams[5].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[10],r10m4,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m5">
    <td>${teams[6].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[9],r10m5,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m6">
    <td>${teams[7].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[8],r10m6,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 11: </th></tr>
    <tr id="r11"><td colspan="4"><button onclick="play(teams[1],teams[2],r11m1,r11), play(teams[11],teams[3],r11m2,r11), play(teams[10],teams[4],r11m3,r11), play(teams[9],teams[5],r11m4,r11), play(teams[8],teams[6],r11m5,r11), play(teams[7],teams[0],r11m6,r11)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r11m1">
    <td>${teams[1].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r11m1,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m2">
    <td>${teams[11].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[3],r11m2,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m3">
    <td>${teams[10].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[4],r11m3,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m4">
    <td>${teams[9].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[5],r11m4,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m5">
    <td>${teams[8].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[6],r11m5,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m6">
    <td>${teams[7].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[0],r11m6,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 12: </th></tr>
    <tr id="r12"><td colspan="4"><button onclick="play(teams[0],teams[1],r12m1,r12), play(teams[11],teams[2],r12m2,r12), play(teams[10],teams[3],r12m3,r12), play(teams[9],teams[4],r12m4,r12), play(teams[8],teams[5],r12m5,r12), play(teams[7],teams[6],r12m6,r12)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r12m1">
    <td>${teams[0].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[1],r12m1,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m2">
    <td>${teams[11].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[2],r12m2,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m3">
    <td>${teams[10].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[3],r12m3,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m4">
    <td>${teams[9].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[4],r12m4,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m5">
    <td>${teams[8].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[5],r12m5,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m6">
    <td>${teams[7].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[6],r12m6,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 13: </th></tr>
    <tr id="r13"><td colspan="4"><button onclick="play(teams[1],teams[11],r13m1,r13), play(teams[2],teams[10],r13m2,r13), play(teams[3],teams[9],r13m3,r13), play(teams[4],teams[8],r13m4,r13), play(teams[5],teams[7],r13m5,r13), play(teams[6],teams[0],r13m6,r13)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r13m1">
    <td>${teams[1].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[11],r13m1,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m2">
    <td>${teams[2].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[10],r13m2,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m3">
    <td>${teams[3].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[9],r13m3,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m4">
    <td>${teams[4].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[8],r13m4,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m5">
    <td>${teams[5].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[7],r13m5,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m6">
    <td>${teams[6].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[0],r13m6,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 
    `<tr><th colspan="4">Round 14: </th></tr>
    <tr id="r14"><td colspan="4"><button onclick="play(teams[10],teams[1],r14m1,r14), play(teams[9],teams[2],r14m2,r14), play(teams[8],teams[3],r14m3,r14), play(teams[7],teams[4],r14m4,r14), play(teams[6],teams[5],r14m5,r14), play(teams[0],teams[11],r14m6,r14)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r14m1">
    <td>${teams[10].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[1],r14m1,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m2">
    <td>${teams[9].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[2],r14m2,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m3">
    <td>${teams[8].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[3],r14m3,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m4">
    <td>${teams[7].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[4],r42m4,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m5">
    <td>${teams[6].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[5],r14m5,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m6">
    <td>${teams[0].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[11],r14m6,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 15: </th></tr>
    <tr id="r15"><td colspan="4"><button onclick="play(teams[1],teams[9],r15m1,r15), play(teams[2],teams[8],r15m2,r15), play(teams[3],teams[7],r15m3,r15), play(teams[4],teams[6],r15m4,r15), play(teams[5],teams[0],r15m5,r15), play(teams[11],teams[10],r15m6,r15)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r15m1">
    <td>${teams[1].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[9],r15m1,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m2">
    <td>${teams[2].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[8],r15m2,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m3">
    <td>${teams[3].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[7],r15m3,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m4">
    <td>${teams[4].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[6],r15m4,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m5">
    <td>${teams[5].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[0],r15m5,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m6">
    <td>${teams[11].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[10],r15m6,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,


    `<tr><th colspan="4">Round 16: </th></tr>
    <tr id="r16"><td colspan="4"><button onclick="play(teams[8],teams[1],r16m1,r16), play(teams[7],teams[2],r16m2,r16), play(teams[6],teams[3],r16m3,r16), play(teams[5],teams[4],r16m4,r16), play(teams[9],teams[11],r16m5,r16), play(teams[0],teams[10],r16m6,r16)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r16m1">
    <td>${teams[8].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[1],r16m1,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m2">
    <td>${teams[7].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[2],r16m2,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m3">
    <td>${teams[6].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[3],r16m3,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m4">
    <td>${teams[5].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[4],r16m4,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m5">
    <td>${teams[9].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[11],r16m5,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r16m6">
    <td>${teams[0].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[10],r16m6,r16)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 17: </th></tr>
    <tr id="r17"><td colspan="4"><button onclick="play(teams[1],teams[7],r17m1,r17), play(teams[2],teams[6],r17m2,r17), play(teams[3],teams[5],r17m3,r17), play(teams[4],teams[0],r17m4,r17), play(teams[11],teams[8],r17m5,r17), play(teams[10],teams[9],r17m6,r17)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r17m1">
    <td>${teams[1].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[7],r17m1,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m2">
    <td>${teams[2].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[6],r17m2,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m3">
    <td>${teams[3].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[5],r17m3,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m4">
    <td>${teams[4].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[0],r17m4,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m5">
    <td>${teams[11].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[8],r17m5,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r17m6">
    <td>${teams[10].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[9],r17m6,r17)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 18: </th></tr>
    <tr id="r18"><td colspan="4"><button onclick="play(teams[6],teams[1],r18m1,r18), play(teams[5],teams[2],r18m2,r18), play(teams[4],teams[3],r18m3,r18), play(teams[7],teams[11],r18m4,r18), play(teams[8],teams[10],r18m5,r18), play(teams[0],teams[9],r18m6,r18)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r18m1">
    <td>${teams[6].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[1],r18m1,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m2">
    <td>${teams[5].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[2],r18m2,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m3">
    <td>${teams[4].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[3],r18m3,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m4">
    <td>${teams[7].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[11],r18m4,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m5">
    <td>${teams[8].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[10],r18m5,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m6">
    <td>${teams[0].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[9],r18m6,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 19: </th></tr>
    <tr id="r19"><td colspan="4"><button onclick="play(teams[1],teams[5],r19m1,r19), play(teams[2],teams[4],r19m2,r19), play(teams[3],teams[0],r19m3,r19), play(teams[11],teams[6],r19m4,r19), play(teams[10],teams[7],r19m5,r19), play(teams[9],teams[8],r19m6,r19)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r19m1">
    <td>${teams[1].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[5],r19m1,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m2">
    <td>${teams[2].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[4],r19m2,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m3">
    <td>${teams[3].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[0],r19m3,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m4">
    <td>${teams[11].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[6],r19m4,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m5">
    <td>${teams[10].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[7],r19m5,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m6">
    <td>${teams[9].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[8],r19m6,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr>
    <th colspan="4">Round 20</th>
</tr>
<tr id="r20"><td colspan="4"><button onclick="play(teams[4],teams[1],r20m1,r20), play(teams[3],teams[2],r20m2,r20), play(teams[5],teams[11],r20m3,r20), play(teams[6],teams[10],r20m4,r20), play(teams[7],teams[9],r20m5,r20), play(teams[0],teams[8],r20m6,r20)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r20m1">
    <td id="host">${teams[4].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[1],r20m1,r20)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r20m2">
    <td>${teams[3].name}</td>
    <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[2],r20m2,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m3">
    <td>${teams[5].name}</td>
    <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[11],r20m3,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m4">
    <td>${teams[6].name}</td>
    <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[10],r20m4,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m5">
    <td>${teams[7].name}</td>
    <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[9],r20m5,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m6">
    <td>${teams[0].name}</td>
    <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[8],r20m6,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 21</th>
</tr>
<tr id="r21"><td colspan="4"><button onclick="play(teams[1],teams[3],r21m1,r21), play(teams[2],teams[0],r21m2,r21), play(teams[11],teams[4],r21m3,r21), play(teams[10],teams[5],r21m4,r21), play(teams[9],teams[6],r21m5,r21), play(teams[8],teams[7],r21m6,r21)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r21m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[3],r21m1,r21)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r21m2">
    <td>${teams[2].name}</td>
    <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[0],r21m2,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m3">
    <td>${teams[11].name}</td>
    <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[4],r21m3,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m4">
    <td>${teams[10].name}</td>
    <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[5],r21m4,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m5">
    <td>${teams[9].name}</td>
    <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[6],r21m5,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m6">
    <td>${teams[8].name}</td>
    <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[7],r21m6,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 22: </th></tr>
<tr id="r22"><td colspan="4"><button onclick="play(teams[2],teams[1],r22m1,r22), play(teams[3],teams[11],r22m2,r22), play(teams[4],teams[10],r22m3,r22), play(teams[5],teams[9],r22m4,r22), play(teams[6],teams[8],r22m5,r22), play(teams[0],teams[7],r22m6,r22)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r22m1">
    <td>${teams[2].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[1],r22m1,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m2">
    <td>${teams[3].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[11],r22m2,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m3">
    <td>${teams[4].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[10],r22m3,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m4">
    <td>${teams[5].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[9],r22m4,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m5">
    <td>${teams[6].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[8],r22m5,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m6">
    <td>${teams[0].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[7],r22m6,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`

                ]}

                if (n == 14) {
                    round = ['',
             `<tr>
                <th colspan="4">Round 1</th>
            </tr>
            <tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[0],r1m1,r1), play(teams[2],teams[13],r1m2,r1), play(teams[3],teams[12],r1m3,r1), play(teams[4],teams[11],r1m4,r1), play(teams[5],teams[10],r1m5,r1), play(teams[6],teams[9],r1m6,r1), play(teams[7],teams[8],r1m7,r1)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
            <tr id="r1m1">
                <td id="host">${teams[1].name}</td>
                <td id="guest">${teams[0].name}</td>
                <td colspan="2"><button onclick="play(teams[1],teams[0],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
            </tr>
            <tr id="r1m2">
                <td>${teams[2].name}</td>
                <td>${teams[13].name}</td>
                <td colspan="2"><button onclick="play(teams[2],teams[13],r1m2,r1)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r1m3">
                <td>${teams[3].name}</td>
                <td>${teams[12].name}</td>
                <td colspan="2"><button onclick="play(teams[3],teams[12],r1m3,r1)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r1m4">
                <td>${teams[4].name}</td>
                <td>${teams[11].name}</td>
                <td colspan="2"><button onclick="play(teams[4],teams[11],r1m4,r1)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r1m5">
                <td>${teams[5].name}</td>
                <td>${teams[10].name}</td>
                <td colspan="2"><button onclick="play(teams[5],teams[10],r1m5,r1)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r1m6">
                <td>${teams[6].name}</td>
                <td>${teams[9].name}</td>
                <td colspan="2"><button onclick="play(teams[6],teams[9],r1m6,r1)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r1m7">
                <td>${teams[7].name}</td>
                <td>${teams[8].name}</td>
                <td colspan="2"><button onclick="play(teams[7],teams[8],r1m7,r1)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr>
                <th colspan="4" class="end_round">X</th>
            </tr>`,
            `<tr>
                <th colspan="4">Round 2</th>
            </tr>
            <tr id="r2"><td colspan="4"><button onclick="play(teams[13],teams[1],r2m1,r2), play(teams[12],teams[2],r2m2,r2), play(teams[11],teams[3],r2m3,r2), play(teams[10],teams[4],r2m4,r2), play(teams[9],teams[5],r2m5,r2), play(teams[8],teams[6],r2m6,r2), play(teams[0],teams[7],r2m7,r2)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
            <tr id="r2m1">
                <td id="host">${teams[13].name}</td>
                <td id="guest">${teams[1].name}</td>
                <td colspan="2"><button onclick="play(teams[13],teams[1],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
            </tr>
            <tr id="r2m2">
                <td>${teams[12].name}</td>
                <td>${teams[2].name}</td>
                <td colspan="2"><button onclick="play(teams[12],teams[2],r2m2,r2)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r2m3">
                <td>${teams[11].name}</td>
                <td>${teams[3].name}</td>
                <td colspan="2"><button onclick="play(teams[11],teams[3],r2m3,r2)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r2m4">
                <td>${teams[10].name}</td>
                <td>${teams[4].name}</td>
                <td colspan="2"><button onclick="play(teams[10],teams[4],r2m4,r2)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r2m5">
                <td>${teams[9].name}</td>
                <td>${teams[5].name}</td>
                <td colspan="2"><button onclick="play(teams[9],teams[5],r2m5,r2)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r2m6">
                <td>${teams[8].name}</td>
                <td>${teams[6].name}</td>
                <td colspan="2"><button onclick="play(teams[8],teams[6],r2m6,r2)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r2m7">
                <td>${teams[0].name}</td>
                <td>${teams[7].name}</td>
                <td colspan="2"><button onclick="play(teams[0],teams[7],r2m7,r2)" class="play_button btn_effect">Play</button></td>
            </tr>
            
            <tr>
                <th colspan="4" class="end_round">X</th>
            </tr>`,
            `<tr><th colspan="4">Round 3: </th></tr>
            <tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[12],r3m1,r3), play(teams[2],teams[11],r3m2,r3), play(teams[3],teams[10],r3m3,r3), play(teams[4],teams[9],r3m4,r3), play(teams[5],teams[8],r3m5,r3), play(teams[6],teams[7],r3m6,r3), play(teams[13],teams[0],r3m7,r3)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r3m1">
                <td>${teams[1].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[12],r3m1,r3)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r3m2">
                <td>${teams[2].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[11],r3m2,r3)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r3m3">
                <td>${teams[3].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[10],r3m3,r3)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r3m4">
                <td>${teams[4].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[9],r3m4,r3)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r3m5">
                <td>${teams[5].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[8],r3m5,r3)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r3m6">
                <td>${teams[6].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[7],r3m6,r3)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r3m7">
                <td>${teams[13].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[0],r3m7,r3)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
                `<tr><th colspan="4">Round 4: </th></tr>
                <tr id="r4"><td colspan="4"><button onclick="play(teams[11],teams[1],r4m1,r4), play(teams[10],teams[2],r4m2,r4), play(teams[9],teams[3],r4m3,r4), play(teams[8],teams[4],r4m4,r4), play(teams[7],teams[5],r4m5,r4), play(teams[0],teams[6],r4m6,r4), play(teams[12],teams[13],r4m7,r4)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r4m1">
                <td>${teams[11].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[1],r4m1,r4)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r4m2">
                <td>${teams[10].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r4m3">
                <td>${teams[9].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[3],r4m3,r4)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r4m4">
                <td>${teams[8].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[4],r4m4,r4)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r4m5">
                <td>${teams[7].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[5],r4m5,r4)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r4m6">
                <td>${teams[0].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[6],r4m6,r4)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r4m7">
                <td>${teams[12].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[13],r4m7,r4)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `, `
                <tr><th colspan="4">Round 5: </th></tr>
                <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[10],r5m1,r5), play(teams[2],teams[9],r5m2,r5), play(teams[3],teams[8],r5m3,r5), play(teams[4],teams[7],r5m4,r5), play(teams[5],teams[6],r5m5,r5), play(teams[13],teams[11],r5m6,r5), play(teams[12],teams[0],r5m7,r5)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r5m1">
                <td>${teams[1].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[10],r5m1,r5)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r5m2">
                <td>${teams[2].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[9],r5m2,r5)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r5m3">
                <td>${teams[3].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[8],r5m3,r5)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r5m4">
                <td>${teams[4].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[7],r5m4,r5)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r5m5">
                <td>${teams[5].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[6],r5m5,r5)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r5m6">
                <td>${teams[13].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[11],r5m6,r5)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r5m7">
                <td>${teams[12].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[0],r5m7,r5)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 6: </th></tr>
                <tr id="r6"><td colspan="4"><button onclick="play(teams[9],teams[1],r6m1,r6), play(teams[8],teams[2],r6m2,r6), play(teams[7],teams[3],r6m3,r6), play(teams[6],teams[4],r6m4,r6), play(teams[0],teams[5],r6m5,r6), play(teams[10],teams[13],r6m6,r6), play(teams[11],teams[12],r6m7,r6)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r6m1">
                <td>${teams[9].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r6m2">
                <td>${teams[8].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[2],r6m2,r6)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r6m3">
                <td>${teams[7].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[3],r6m3,r6)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r6m4">
                <td>${teams[6].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[4],r6m4,r6)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r6m5">
                <td>${teams[0].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[5],r6m5,r6)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r6m6">
                <td>${teams[10].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[13],r6m6,r6)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r6m7">
                <td>${teams[11].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[12],r6m7,r6)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `,
                `<tr><th colspan="4">Round 7: </th></tr>
                <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[8],r7m1,r7), play(teams[2],teams[7],r7m2,r7), play(teams[3],teams[6],r7m3,r7), play(teams[4],teams[5],r7m4,r7), play(teams[13],teams[9],r7m5,r7), play(teams[12],teams[10],r7m6,r7), play(teams[11],teams[0],r7m7,r7)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r7m1">
                <td>${teams[1].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[8],r7m1,r7)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r7m2">
                <td>${teams[2].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[7],r7m2,r7)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r7m3">
                <td>${teams[3].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[6],r7m3,r7)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r7m4">
                <td>${teams[4].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[5],r7m4,r7)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r7m5">
                <td>${teams[13].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[9],r7m5,r7)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r7m6">
                <td>${teams[12].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[10],r7m6,r7)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r7m7">
                <td>${teams[11].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[0],r7m7,r7)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 8: </th></tr>
                <tr id="r8"><td colspan="4"><button onclick="play(teams[7],teams[1],r8m1,r8), play(teams[6],teams[2],r8m2,r8), play(teams[5],teams[3],r8m3,r8), play(teams[0],teams[4],r8m4,r8), play(teams[8],teams[13],r8m5,r8), play(teams[9],teams[12],r8m6,r8), play(teams[10],teams[11],r8m7,r8)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r8m1">
                <td>${teams[7].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[1],r8m1,r8)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r8m2">
                <td>${teams[6].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[2],r8m2,r8)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r8m3">
                <td>${teams[5].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[3],r8m3,r8)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r8m4">
                <td>${teams[0].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[4],r8m4,r8)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r8m5">
                <td>${teams[8].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[13],r8m5,r8)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r8m6">
                <td>${teams[9].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[12],r8m6,r8)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r8m7">
                <td>${teams[10].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[11],r8m7,r8)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `,
            
                `<tr><th colspan="4">Round 9: </th></tr>
                <tr id="r9"><td colspan="4"><button onclick="play(teams[1],teams[6],r9m1,r9), play(teams[2],teams[5],r9m2,r9), play(teams[3],teams[4],r9m3,r9), play(teams[13],teams[7],r9m4,r9), play(teams[12],teams[8],r9m5,r9), play(teams[11],teams[9],r9m6,r9), play(teams[10],teams[0],r9m7,r9)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r9m1">
                <td>${teams[1].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[6],r9m1,r9)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r9m2">
                <td>${teams[2].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[5],r9m2,r9)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r9m3">
                <td>${teams[3].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[4],r9m3,r9)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r9m4">
                <td>${teams[13].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[7],r9m4,r9)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r9m5">
                <td>${teams[12].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[8],r9m5,r9)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r9m6">
                <td>${teams[11].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[9],r9m6,r9)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r9m7">
                <td>${teams[10].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[0],r9m7,r9)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 10: </th></tr>
                <tr id="r10"><td colspan="4"><button onclick="play(teams[5],teams[1],r10m1,r10), play(teams[4],teams[2],r10m2,r10), play(teams[0],teams[3],r10m3,r10), play(teams[6],teams[13],r10m4,r10), play(teams[7],teams[12],r10m5,r10), play(teams[8],teams[11],r10m6,r10), play(teams[9],teams[10],r10m7,r10)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r10m1">
                <td>${teams[5].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[1],r10m1,r10)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r10m2">
                <td>${teams[4].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[2],r10m2,r10)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r10m3">
                <td>${teams[0].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[3],r10m3,r10)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r10m4">
                <td>${teams[6].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[13],r10m4,r10)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r10m5">
                <td>${teams[7].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[12],r10m5,r10)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r10m6">
                <td>${teams[8].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[11],r10m6,r10)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r10m7">
                <td>${teams[9].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[10],r10m7,r10)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 11: </th></tr>
                <tr id="r11"><td colspan="4"><button onclick="play(teams[1],teams[4],r11m1,r11), play(teams[2],teams[3],r11m2,r11), play(teams[13],teams[5],r11m3,r11), play(teams[12],teams[6],r11m4,r11), play(teams[11],teams[7],r11m5,r11), play(teams[10],teams[8],r11m6,r11), play(teams[9],teams[0],r11m7,r11)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r11m1">
                <td>${teams[1].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[4],r11m1,r11)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r11m2">
                <td>${teams[2].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[3],r11m2,r11)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r11m3">
                <td>${teams[13].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[5],r11m3,r11)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r11m4">
                <td>${teams[12].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[6],r11m4,r11)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r11m5">
                <td>${teams[11].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[7],r11m5,r11)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r11m6">
                <td>${teams[10].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[8],r11m6,r11)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r11m7">
                <td>${teams[9].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[0],r11m7,r11)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 12: </th></tr>
                <tr id="r12"><td colspan="4"><button onclick="play(teams[3],teams[1],r12m1,r12), play(teams[0],teams[2],r12m2,r12), play(teams[4],teams[13],r12m3,r12), play(teams[5],teams[12],r12m4,r12), play(teams[6],teams[11],r12m5,r12), play(teams[7],teams[10],r12m6,r12), play(teams[8],teams[9],r12m7,r12)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r12m1">
                <td>${teams[3].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[1],r12m1,r12)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r12m2">
                <td>${teams[0].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[2],r12m2,r12)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r12m3">
                <td>${teams[4].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[13],r12m3,r12)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r12m4">
                <td>${teams[5].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[12],r12m4,r12)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r12m5">
                <td>${teams[6].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[11],r12m5,r12)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r12m6">
                <td>${teams[7].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[10],r12m6,r12)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r12m7">
                <td>${teams[8].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[9],r12m7,r12)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `,
            
                `<tr><th colspan="4">Round 13: </th></tr>
                <tr id="r13"><td colspan="4"><button onclick="play(teams[1],teams[2],r13m1,r13), play(teams[13],teams[3],r13m2,r13), play(teams[12],teams[4],r13m3,r13), play(teams[11],teams[5],r13m4,r13), play(teams[10],teams[6],r13m5,r13), play(teams[9],teams[7],r13m6,r13), play(teams[8],teams[0],r13m7,r13)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r13m1">
                <td>${teams[1].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[2],r13m1,r13)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r13m2">
                <td>${teams[13].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[3],r13m2,r13)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r13m3">
                <td>${teams[12].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[4],r13m3,r13)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r13m4">
                <td>${teams[11].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[5],r13m4,r13)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r13m5">
                <td>${teams[10].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[6],r13m5,r13)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r13m6">
                <td>${teams[9].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[7],r13m6,r13)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r13m7">
                <td>${teams[8].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[0],r13m7,r13)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 14: </th></tr>
                <tr id="r14"><td colspan="4"><button onclick="play(teams[0],teams[1],r14m1,r14), play(teams[13],teams[2],r14m2,r14), play(teams[12],teams[3],r14m3,r14), play(teams[11],teams[4],r14m4,r14), play(teams[10],teams[5],r14m5,r14), play(teams[9],teams[6],r14m6,r14), play(teams[8],teams[7],r14m7,r14)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r14m1">
                <td>${teams[0].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[1],r14m1,r14)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r14m2">
                <td>${teams[13].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[2],r14m2,r14)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r14m3">
                <td>${teams[12].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[3],r14m3,r14)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r14m4">
                <td>${teams[11].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[4],r14m4,r14)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r14m5">
                <td>${teams[10].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[5],r14m5,r14)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r14m6">
                <td>${teams[9].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[6],r14m6,r14)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r14m7">
                <td>${teams[8].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[7],r14m7,r14)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `,
            
                `<tr><th colspan="4">Round 15: </th></tr>
                <tr id="r15"><td colspan="4"><button onclick="play(teams[1],teams[13],r15m1,r15), play(teams[2],teams[12],r15m2,r15), play(teams[3],teams[11],r15m3,r15), play(teams[4],teams[10],r15m4,r15), play(teams[5],teams[9],r15m5,r15), play(teams[6],teams[8],r15m6,r15), play(teams[7],teams[0],r15m7,r15)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r15m1">
                <td>${teams[1].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[13],r15m1,r15)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r15m2">
                <td>${teams[2].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[12],r15m2,r15)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r15m3">
                <td>${teams[3].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[11],r15m3,r15)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r15m4">
                <td>${teams[4].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[10],r15m4,r15)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r15m5">
                <td>${teams[5].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[9],r15m5,r15)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r15m6">
                <td>${teams[6].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[8],r15m6,r15)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r15m7">
                <td>${teams[7].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[0],r15m7,r15)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 16: </th></tr>
                <tr id="r16"><td colspan="4"><button onclick="play(teams[12],teams[1],r16m1,r16), play(teams[11],teams[2],r16m2,r16), play(teams[10],teams[3],r16m3,r16), play(teams[9],teams[4],r16m4,r16), play(teams[8],teams[5],r16m5,r16), play(teams[7],teams[6],r16m6,r16), play(teams[0],teams[13],r16m7,r16)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r16m1">
                <td>${teams[12].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[1],r16m1,r16)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r16m2">
                <td>${teams[11].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[2],r16m2,r16)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r16m3">
                <td>${teams[10].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[3],r16m3,r16)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r16m4">
                <td>${teams[9].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[4],r16m4,r16)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r16m5">
                <td>${teams[8].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[5],r16m5,r16)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r16m6">
                <td>${teams[7].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[6],r16m6,r16)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r16m7">
                <td>${teams[0].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[13],r16m7,r16)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `,
            
                `<tr><th colspan="4">Round 17: </th></tr>
                <tr id="r17"><td colspan="4"><button onclick="play(teams[1],teams[11],r17m1,r17), play(teams[2],teams[10],r17m2,r17), play(teams[3],teams[9],r17m3,r17), play(teams[4],teams[8],r17m4,r17), play(teams[5],teams[7],r17m5,r17), play(teams[6],teams[0],r17m6,r17), play(teams[13],teams[12],r17m7,r17)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r17m1">
                <td>${teams[1].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[11],r17m1,r17)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r17m2">
                <td>${teams[2].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[10],r17m2,r17)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r17m3">
                <td>${teams[3].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[9],r17m3,r17)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r17m4">
                <td>${teams[4].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[8],r17m4,r17)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r17m5">
                <td>${teams[5].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[7],r17m5,r17)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r17m6">
                <td>${teams[6].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[0],r17m6,r17)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r17m7">
                <td>${teams[13].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[12],r17m7,r17)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 18: </th></tr>
                <tr id="r18"><td colspan="4"><button onclick="play(teams[10],teams[1],r18m1,r18), play(teams[9],teams[2],r18m2,r18), play(teams[8],teams[3],r18m3,r18), play(teams[7],teams[4],r18m4,r18), play(teams[6],teams[5],r18m5,r18), play(teams[11],teams[13],r18m6,r18), play(teams[0],teams[12],r18m7,r18)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r18m1">
                <td>${teams[10].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[1],r18m1,r18)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r18m2">
                <td>${teams[9].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[2],r18m2,r18)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r18m3">
                <td>${teams[8].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[3],r18m3,r18)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r18m4">
                <td>${teams[7].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[4],r18m4,r18)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r18m5">
                <td>${teams[6].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[5],r18m5,r18)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r18m6">
                <td>${teams[11].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[13],r18m6,r18)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r18m7">
                <td>${teams[0].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[12],r18m7,r18)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `,
            
                `<tr><th colspan="4">Round 19: </th></tr>
                <tr id="r19"><td colspan="4"><button onclick="play(teams[1],teams[9],r19m1,r19), play(teams[2],teams[8],r19m2,r19), play(teams[3],teams[7],r19m3,r19), play(teams[6],teams[4],r19m4,r19), play(teams[0],teams[5],r19m5,r19), play(teams[13],teams[10],r19m6,r19), play(teams[12],teams[11],r19m7,r19)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r19m1">
                <td>${teams[1].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[9],r19m1,r19)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r19m2">
                <td>${teams[2].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[8],r19m2,r19)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r19m3">
                <td>${teams[3].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[7],r19m3,r19)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r19m4">
                <td>${teams[6].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[4],r19m4,r19)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r19m5">
                <td>${teams[0].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[5],r19m5,r19)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r19m6">
                <td>${teams[13].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[10],r19m6,r19)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r19m7">
                <td>${teams[12].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[11],r19m7,r19)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr>
                <th colspan="4">Round 20</th>
            </tr>
            <tr id="r20"><td colspan="4"><button onclick="play(teams[8],teams[1],r20m1,r20), play(teams[7],teams[2],r20m2,r20), play(teams[6],teams[3],r20m3,r20), play(teams[5],teams[4],r20m4,r20), play(teams[9],teams[13],r20m5,r20), play(teams[10],teams[12],r20m6,r20), play(teams[0],teams[11],r20m7,r20)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
            <tr id="r20m1">
                <td id="host">${teams[8].name}</td>
                <td id="guest">${teams[1].name}</td>
                <td colspan="2"><button onclick="play(teams[8],teams[1],r20m1,r20)" class="play_button btn_effect">Play</button></td> 
            </tr>
            <tr id="r20m2">
                <td>${teams[7].name}</td>
                <td>${teams[2].name}</td>
                <td colspan="2"><button onclick="play(teams[7],teams[2],r20m2,r20)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r20m3">
                <td>${teams[6].name}</td>
                <td>${teams[3].name}</td>
                <td colspan="2"><button onclick="play(teams[6],teams[3],r20m3,r20)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r20m4">
                <td>${teams[5].name}</td>
                <td>${teams[4].name}</td>
                <td colspan="2"><button onclick="play(teams[5],teams[4],r20m4,r20)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r20m5">
                <td>${teams[9].name}</td>
                <td>${teams[13].name}</td>
                <td colspan="2"><button onclick="play(teams[9],teams[13],r20m5,r20)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r20m6">
                <td>${teams[10].name}</td>
                <td>${teams[12].name}</td>
                <td colspan="2"><button onclick="play(teams[10],teams[12],r20m6,r20)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r20m7">
                <td>${teams[0].name}</td>
                <td>${teams[11].name}</td>
                <td colspan="2"><button onclick="play(teams[0],teams[11],r20m7,r20)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr>
                <th colspan="4" class="end_round">X</th>
            </tr>`,
            `<tr>
                <th colspan="4">Round 21</th>
            </tr>
            <tr id="r21"><td colspan="4"><button onclick="play(teams[1],teams[7],r21m1,r21), play(teams[2],teams[6],r21m2,r21), play(teams[3],teams[5],r21m3,r21), play(teams[4],teams[0],r21m4,r21), play(teams[13],teams[8],r21m5,r21), play(teams[12],teams[9],r21m6,r21), play(teams[11],teams[10],r21m7,r21)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
            <tr id="r21m1">
                <td id="host">${teams[1].name}</td>
                <td id="guest">${teams[7].name}</td>
                <td colspan="2"><button onclick="play(teams[1],teams[7],r21m1,r21)" class="play_button btn_effect">Play</button></td> 
            </tr>
            <tr id="r21m2">
                <td>${teams[2].name}</td>
                <td>${teams[6].name}</td>
                <td colspan="2"><button onclick="play(teams[2],teams[6],r21m2,r21)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r21m3">
                <td>${teams[3].name}</td>
                <td>${teams[5].name}</td>
                <td colspan="2"><button onclick="play(teams[3],teams[5],r21m3,r21)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r21m4">
                <td>${teams[4].name}</td>
                <td>${teams[0].name}</td>
                <td colspan="2"><button onclick="play(teams[4],teams[0],r21m4,r21)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r21m5">
                <td>${teams[13].name}</td>
                <td>${teams[8].name}</td>
                <td colspan="2"><button onclick="play(teams[13],teams[8],r21m5,r21)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r21m6">
                <td>${teams[12].name}</td>
                <td>${teams[9].name}</td>
                <td colspan="2"><button onclick="play(teams[12],teams[9],r21m6,r21)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr id="r21m7">
                <td>${teams[11].name}</td>
                <td>${teams[10].name}</td>
                <td colspan="2"><button onclick="play(teams[11],teams[10],r21m7,r21)" class="play_button btn_effect">Play</button></td>
            </tr>
            <tr>
                <th colspan="4" class="end_round">X</th>
            </tr>`,
            `<tr><th colspan="4">Round 22: </th></tr>
            <tr id="r22"><td colspan="4"><button onclick="play(teams[6],teams[1],r22m1,r22), play(teams[5],teams[2],r22m2,r22), play(teams[4],teams[3],r22m3,r22), play(teams[7],teams[13],r22m4,r22), play(teams[8],teams[12],r22m5,r22), play(teams[9],teams[11],r22m6,r22), play(teams[0],teams[10],r22m7,r22)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r22m1">
                <td>${teams[6].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[1],r22m1,r22)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r22m2">
                <td>${teams[5].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[2],r22m2,r22)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r22m3">
                <td>${teams[4].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[3],r22m3,r22)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r22m4">
                <td>${teams[7].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[13],r22m4,r22)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r22m5">
                <td>${teams[8].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[12],r22m5,r22)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r22m6">
                <td>${teams[9].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[11],r22m6,r22)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r22m7">
                <td>${teams[0].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[10],r22m7,r22)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
                `<tr><th colspan="4">Round 23: </th></tr>
                <tr id="r23"><td colspan="4"><button onclick="play(teams[1],teams[5],r23m1,r23), play(teams[2],teams[4],r23m2,r23), play(teams[3],teams[0],r23m3,r23), play(teams[13],teams[6],r23m4,r23), play(teams[12],teams[7],r23m5,r23), play(teams[11],teams[8],r23m6,r23), play(teams[10],teams[9],r23m7,r23)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r23m1">
                <td>${teams[1].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[5],r23m1,r23)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r23m2">
                <td>${teams[2].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[4],r23m2,r23)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r23m3">
                <td>${teams[3].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[0],r23m3,r23)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r23m4">
                <td>${teams[13].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[6],r23m4,r23)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r23m5">
                <td>${teams[12].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[7],r23m5,r23)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r23m6">
                <td>${teams[11].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[8],r23m6,r23)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r23m7">
                <td>${teams[10].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[9],r23m7,r23)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `, 
                ` 
                <tr><th colspan="4">Round 24: </th></tr>
                <tr id="r24"><td colspan="4"><button onclick="play(teams[4],teams[1],r24m1,r24), play(teams[3],teams[2],r24m2,r24), play(teams[5],teams[13],r24m3,r24), play(teams[6],teams[12],r24m4,r24), play(teams[7],teams[11],r24m5,r24), play(teams[8],teams[10],r24m6,r24), play(teams[0],teams[9],r24m7,r24)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r24m1">
                <td>${teams[4].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[1],r24m1,r24)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r24m2">
                <td>${teams[3].name} </td><td> ${teams[2].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[2],r24m2,r24)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r24m3">
                <td>${teams[5].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[13],r24m3,r24)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r24m4">
                <td>${teams[6].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[12],r24m4,r24)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r24m5">
                <td>${teams[7].name} </td><td> ${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[11],r24m5,r24)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r24m6">
                <td>${teams[8].name} </td><td> ${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[8],teams[10],r24m6,r24)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r24m7">
                <td>${teams[0].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[9],r24m7,r24)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`,
            
                `<tr><th colspan="4">Round 25: </th></tr>
                <tr id="r25"><td colspan="4"><button onclick="play(teams[1],teams[3],r25m1,r25), play(teams[2],teams[0],r25m2,r25), play(teams[13],teams[4],r25m3,r25), play(teams[12],teams[5],r25m4,r25), play(teams[11],teams[6],r25m5,r25), play(teams[10],teams[7],r25m6,r25), play(teams[9],teams[8],r25m7,r25)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r25m1">
                <td>${teams[1].name} </td><td> ${teams[3].name} </td>
                <td colspan="2"><button onclick="play(teams[1],teams[3],r25m1,r25)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r25m2">
                <td>${teams[2].name} </td><td> ${teams[0].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[0],r25m2,r25)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r25m3">
                <td>${teams[13].name} </td><td> ${teams[4].name} </td>
                <td colspan="2"><button onclick="play(teams[13],teams[4],r25m3,r25)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r25m4">
                <td>${teams[12].name} </td><td> ${teams[5].name} </td>
                <td colspan="2"><button onclick="play(teams[12],teams[5],r25m4,r25)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r25m5">
                <td>${teams[11].name} </td><td> ${teams[6].name} </td>
                <td colspan="2"><button onclick="play(teams[11],teams[6],r25m5,r25)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r25m6">
                <td>${teams[10].name} </td><td> ${teams[7].name} </td>
                <td colspan="2"><button onclick="play(teams[10],teams[7],r25m6,r25)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r25m7">
                <td>${teams[9].name} </td><td> ${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[9],teams[8],r25m7,r25)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>
                `,
                `<tr><th colspan="4">Round 26: </th></tr>
                <tr id="r26"><td colspan="4"><button onclick="play(teams[2],teams[1],r26m1,r26), play(teams[3],teams[13],r26m2,r26), play(teams[4],teams[12],r26m3,r26), play(teams[5],teams[11],r26m4,r26), play(teams[6],teams[10],r26m5,r26), play(teams[7],teams[9],r26m6,r26), play(teams[0],teams[8],r26m7,r26)" class="play_button btn_effect">Play ALL</button></td>
                </tr>
                <tr id="r26m1">
                <td>${teams[2].name} </td><td> ${teams[1].name} </td>
                <td colspan="2"><button onclick="play(teams[2],teams[1],r26m1,r26)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r26m2">
                <td>${teams[3].name} </td><td> ${teams[13].name} </td>
                <td colspan="2"><button onclick="play(teams[3],teams[13],r26m2,r26)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r26m3">
                <td>${teams[4].name} </td><td> ${teams[12].name} </td>
                <td colspan="2"><button onclick="play(teams[4],teams[12],r26m3,r26)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r26m4">
                <td> ${teams[5].name} </td><td>${teams[11].name} </td>
                <td colspan="2"><button onclick="play(teams[5],teams[11],r26m4,r26)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r26m5">
                <td> ${teams[6].name} </td><td>${teams[10].name} </td>
                <td colspan="2"><button onclick="play(teams[6],teams[10],r26m5,r26)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r26m6">
                <td>${teams[7].name} </td><td> ${teams[9].name} </td>
                <td colspan="2"><button onclick="play(teams[7],teams[9],r26m6,r26)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr id="r26m7">
                <td> ${teams[0].name} </td><td>${teams[8].name} </td>
                <td colspan="2"><button onclick="play(teams[0],teams[8],r26m7,r26)" class="play_button btn_effect">Play</button></td>
                </tr>
                <tr>
                <th colspan="4" class="end_round">X</th>
                </tr>`
            
                            ]}

    if (cn == 32) {

        round = ['',
`<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>

<tr id="ra1m1">
    <td id="host">${teamsA[0].name}</td>
    <td id="guest">${teamsA[1].name}</td>
    <td colspan="2"><button onclick="play(teamsA[0],teamsA[1],ra1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra1m2">
    <td>${teamsA[2].name}</td>
    <td>${teamsA[3].name}</td>
    <td colspan="2"><button onclick="play(teamsA[2],teamsA[3],ra1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>

<tr id="rb1m1">
    <td id="host">${teamsB[0].name}</td>
    <td id="guest">${teamsB[1].name}</td>
    <td colspan="2"><button onclick="play(teamsB[0],teamsB[1],rb1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb1m2">
    <td>${teamsB[2].name}</td>
    <td>${teamsB[3].name}</td>
    <td colspan="2"><button onclick="play(teamsB[2],teamsB[3],rb1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>

<tr id="rc1m1">
    <td id="host">${teamsC[0].name}</td>
    <td id="guest">${teamsC[1].name}</td>
    <td colspan="2"><button onclick="play(teamsC[0],teamsC[1],rc1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc1m2">
    <td>${teamsC[2].name}</td>
    <td>${teamsC[3].name}</td>
    <td colspan="2"><button onclick="play(teamsC[2],teamsC[3],rc1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>

<tr id="rd1m1">
    <td id="host">${teamsD[0].name}</td>
    <td id="guest">${teamsD[1].name}</td>
    <td colspan="2"><button onclick="play(teamsD[0],teamsD[1],rd1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd1m2">
    <td>${teamsD[2].name}</td>
    <td>${teamsD[3].name}</td>
    <td colspan="2"><button onclick="play(teamsD[2],teamsD[3],rd1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group E</td></tr>

<tr id="re1m1">
    <td id="host">${teamsE[0].name}</td>
    <td id="guest">${teamsE[1].name}</td>
    <td colspan="2"><button onclick="play(teamsE[0],teamsE[1],re1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="re1m2">
    <td>${teamsE[2].name}</td>
    <td>${teamsE[3].name}</td>
    <td colspan="2"><button onclick="play(teamsE[2],teamsE[3],re1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group F</td></tr>

<tr id="rf1m1">
    <td id="host">${teamsF[0].name}</td>
    <td id="guest">${teamsF[1].name}</td>
    <td colspan="2"><button onclick="play(teamsF[0],teamsF[1],rf1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rf1m2">
    <td>${teamsF[2].name}</td>
    <td>${teamsF[3].name}</td>
    <td colspan="2"><button onclick="play(teamsF[2],teamsF[3],rf1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group G</td></tr>

<tr id="rg1m1">
    <td id="host">${teamsG[0].name}</td>
    <td id="guest">${teamsG[1].name}</td>
    <td colspan="2"><button onclick="play(teamsG[0],teamsG[1],rg1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rg1m2">
    <td>${teamsG[2].name}</td>
    <td>${teamsG[3].name}</td>
    <td colspan="2"><button onclick="play(teamsG[2],teamsG[3],rg1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group H</td></tr>

<tr id="rh1m1">
    <td id="host">${teamsH[0].name}</td>
    <td id="guest">${teamsH[1].name}</td>
    <td colspan="2"><button onclick="play(teamsH[0],teamsH[1],rh1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rh1m2">
    <td>${teamsH[2].name}</td>
    <td>${teamsH[3].name}</td>
    <td colspan="2"><button onclick="play(teamsH[2],teamsH[3],rh1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`
<tr>
<th colspan="4">Round 2</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>

<tr id="ra2m1">
<td id="host">${teamsA[1].name}</td>
<td id="guest">${teamsA[2].name}</td>
<td colspan="2"><button onclick="play(teamsA[1],teamsA[2],ra2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra2m2">
<td>${teamsA[3].name}</td>
<td>${teamsA[0].name}</td>
<td colspan="2"><button onclick="play(teamsA[3],teamsA[0],ra2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>

<tr id="rb2m1">
<td id="host">${teamsB[1].name}</td>
<td id="guest">${teamsB[2].name}</td>
<td colspan="2"><button onclick="play(teamsB[1],teamsB[2],rb2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb2m2">
<td>${teamsB[3].name}</td>
<td>${teamsB[0].name}</td>
<td colspan="2"><button onclick="play(teamsB[3],teamsB[0],rb2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>

<tr id="rc2m1">
<td id="host">${teamsC[1].name}</td>
<td id="guest">${teamsC[2].name}</td>
<td colspan="2"><button onclick="play(teamsC[1],teamsC[2],rc2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc2m2">
<td>${teamsC[3].name}</td>
<td>${teamsC[0].name}</td>
<td colspan="2"><button onclick="play(teamsC[3],teamsC[0],rc2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>

<tr id="rd2m1">
<td id="host">${teamsD[1].name}</td>
<td id="guest">${teamsD[2].name}</td>
<td colspan="2"><button onclick="play(teamsD[1],teamsD[2],rd2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd2m2">
<td>${teamsD[3].name}</td>
<td>${teamsD[0].name}</td>
<td colspan="2"><button onclick="play(teamsD[3],teamsD[0],rd2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group E</td></tr>

<tr id="re2m1">
<td id="host">${teamsE[1].name}</td>
<td id="guest">${teamsE[2].name}</td>
<td colspan="2"><button onclick="play(teamsE[1],teamsE[2],re2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="re2m2">
<td>${teamsE[3].name}</td>
<td>${teamsE[0].name}</td>
<td colspan="2"><button onclick="play(teamsE[3],teamsE[0],re2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group F</td></tr>

<tr id="rf2m1">
<td id="host">${teamsF[1].name}</td>
<td id="guest">${teamsF[2].name}</td>
<td colspan="2"><button onclick="play(teamsF[1],teamsF[2],rf2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rf2m2">
<td>${teamsF[3].name}</td>
<td>${teamsF[0].name}</td>
<td colspan="2"><button onclick="play(teamsF[3],teamsF[0],rf2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group G</td></tr>

<tr id="rg2m1">
<td id="host">${teamsG[1].name}</td>
<td id="guest">${teamsG[2].name}</td>
<td colspan="2"><button onclick="play(teamsG[1],teamsG[2],rg2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rg2m2">
<td>${teamsG[3].name}</td>
<td>${teamsG[0].name}</td>
<td colspan="2"><button onclick="play(teamsG[3],teamsG[0],rg2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group H</td></tr>

<tr id="rh2m1">
<td id="host">${teamsH[1].name}</td>
<td id="guest">${teamsH[2].name}</td>
<td colspan="2"><button onclick="play(teamsH[1],teamsH[2],rh2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rh2m2">
<td>${teamsH[3].name}</td>
<td>${teamsH[0].name}</td>
<td colspan="2"><button onclick="play(teamsH[3],teamsH[0],rh2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
`,
`<tr>
<th colspan="4">Round 3</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
<tr id="ra3m1">
<td id="host">${teamsA[0].name}</td>
<td id="guest">${teamsA[2].name}</td>
<td colspan="2"><button onclick="play(teamsA[0],teamsA[2],ra3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra3m2">
<td>${teamsA[1].name}</td>
<td>${teamsA[3].name}</td>
<td colspan="2"><button onclick="play(teamsA[1],teamsA[3],ra3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
<tr id="rb3m1">
<td id="host">${teamsB[0].name}</td>
<td id="guest">${teamsB[2].name}</td>
<td colspan="2"><button onclick="play(teamsB[0],teamsB[2],rb3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb3m2">
<td>${teamsB[1].name}</td>
<td>${teamsB[3].name}</td>
<td colspan="2"><button onclick="play(teamsB[1],teamsB[3],rb3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
<tr id="rc3m1">
<td id="host">${teamsC[0].name}</td>
<td id="guest">${teamsC[2].name}</td>
<td colspan="2"><button onclick="play(teamsC[0],teamsC[2],rc3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc3m2">
<td>${teamsC[1].name}</td>
<td>${teamsC[3].name}</td>
<td colspan="2"><button onclick="play(teamsC[1],teamsC[3],rc3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
<tr id="rd3m1">
<td id="host">${teamsD[0].name}</td>
<td id="guest">${teamsD[2].name}</td>
<td colspan="2"><button onclick="play(teamsD[0],teamsD[2],rd3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd3m2">
<td>${teamsD[1].name}</td>
<td>${teamsD[3].name}</td>
<td colspan="2"><button onclick="play(teamsD[1],teamsD[3],rd3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group E</td></tr>
<tr id="re3m1">
<td id="host">${teamsE[0].name}</td>
<td id="guest">${teamsE[2].name}</td>
<td colspan="2"><button onclick="play(teamsE[0],teamsE[2],re3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="re3m2">
<td>${teamsE[1].name}</td>
<td>${teamsE[3].name}</td>
<td colspan="2"><button onclick="play(teamsE[1],teamsE[3],re3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group F</td></tr>
<tr id="rf3m1">
<td id="host">${teamsF[0].name}</td>
<td id="guest">${teamsF[2].name}</td>
<td colspan="2"><button onclick="play(teamsF[0],teamsF[2],rf3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rf3m2">
<td>${teamsF[1].name}</td>
<td>${teamsF[3].name}</td>
<td colspan="2"><button onclick="play(teamsF[1],teamsF[3],rf3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group G</td></tr>
<tr id="rg3m1">
<td id="host">${teamsG[0].name}</td>
<td id="guest">${teamsG[2].name}</td>
<td colspan="2"><button onclick="play(teamsG[0],teamsG[2],rg3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rg3m2">
<td>${teamsG[1].name}</td>
<td>${teamsG[3].name}</td>
<td colspan="2"><button onclick="play(teamsG[1],teamsG[3],rg3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group H</td></tr>
<tr id="rh3m1">
<td id="host">${teamsH[0].name}</td>
<td id="guest">${teamsH[2].name}</td>
<td colspan="2"><button onclick="play(teamsH[0],teamsH[2],rh3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rh3m2">
<td>${teamsH[1].name}</td>
<td>${teamsH[3].name}</td>
<td colspan="2"><button onclick="play(teamsH[1],teamsH[3],rh3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
<th colspan="4">Round 4</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
</tr>
<tr id="ra4m1">
<td id="host">${teamsA[1].name}</td>
<td id="guest">${teamsA[0].name}</td>
<td colspan="2"><button onclick="play(teamsA[1],teamsA[0],ra4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra4m2">
<td>${teamsA[3].name}</td>
<td>${teamsA[2].name}</td>
<td colspan="2"><button onclick="play(teamsA[3],teamsA[2],ra4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
</tr>
<tr id="rb4m1">
<td id="host">${teamsB[1].name}</td>
<td id="guest">${teamsB[0].name}</td>
<td colspan="2"><button onclick="play(teamsB[1],teamsB[0],rb4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb4m2">
<td>${teamsB[3].name}</td>
<td>${teamsB[2].name}</td>
<td colspan="2"><button onclick="play(teamsB[3],teamsB[2],rb4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
</tr>
<tr id="rc4m1">
<td id="host">${teamsC[1].name}</td>
<td id="guest">${teamsC[0].name}</td>
<td colspan="2"><button onclick="play(teamsC[1],teamsC[0],rc4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc4m2">
<td>${teamsC[3].name}</td>
<td>${teamsC[2].name}</td>
<td colspan="2"><button onclick="play(teamsC[3],teamsC[2],rc4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
</tr>
<tr id="rd4m1">
<td id="host">${teamsD[1].name}</td>
<td id="guest">${teamsD[0].name}</td>
<td colspan="2"><button onclick="play(teamsD[1],teamsD[0],rd4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd4m2">
<td>${teamsD[3].name}</td>
<td>${teamsD[2].name}</td>
<td colspan="2"><button onclick="play(teamsD[3],teamsD[2],rd4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group E</td></tr>
</tr>
<tr id="re4m1">
<td id="host">${teamsE[1].name}</td>
<td id="guest">${teamsE[0].name}</td>
<td colspan="2"><button onclick="play(teamsE[1],teamsE[0],re4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="re4m2">
<td>${teamsE[3].name}</td>
<td>${teamsE[2].name}</td>
<td colspan="2"><button onclick="play(teamsE[3],teamsE[2],re4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group F</td></tr>
</tr>
<tr id="rf4m1">
<td id="host">${teamsF[1].name}</td>
<td id="guest">${teamsF[0].name}</td>
<td colspan="2"><button onclick="play(teamsF[1],teamsF[0],rf4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rf4m2">
<td>${teamsF[3].name}</td>
<td>${teamsF[2].name}</td>
<td colspan="2"><button onclick="play(teamsF[3],teamsF[2],rf4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group G</td></tr>
</tr>
<tr id="rg4m1">
<td id="host">${teamsG[1].name}</td>
<td id="guest">${teamsG[0].name}</td>
<td colspan="2"><button onclick="play(teamsG[1],teamsG[0],rg4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rg4m2">
<td>${teamsG[3].name}</td>
<td>${teamsG[2].name}</td>
<td colspan="2"><button onclick="play(teamsG[3],teamsG[2],rg4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group H</td></tr>
</tr>
<tr id="rh4m1">
<td id="host">${teamsH[1].name}</td>
<td id="guest">${teamsH[0].name}</td>
<td colspan="2"><button onclick="play(teamsH[1],teamsH[0],rh4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rh4m2">
<td>${teamsH[3].name}</td>
<td>${teamsH[2].name}</td>
<td colspan="2"><button onclick="play(teamsH[3],teamsH[2],rh4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
<th colspan="4">Round 5</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
<tr id="ra5m1">
<td id="host">${teamsA[2].name}</td>
<td id="guest">${teamsA[1].name}</td>
<td colspan="2"><button onclick="play(teamsA[2],teamsA[1],ra5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra5m2">
<td>${teamsA[0].name}</td>
<td>${teamsA[3].name}</td>
<td colspan="2"><button onclick="play(teamsA[0],teamsA[3],ra5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
<tr id="rb5m1">
<td id="host">${teamsB[2].name}</td>
<td id="guest">${teamsB[1].name}</td>
<td colspan="2"><button onclick="play(teamsB[2],teamsB[1],rb5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb5m2">
<td>${teamsB[0].name}</td>
<td>${teamsB[3].name}</td>
<td colspan="2"><button onclick="play(teamsB[0],teamsB[3],rb5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
<tr id="rc5m1">
<td id="host">${teamsC[2].name}</td>
<td id="guest">${teamsC[1].name}</td>
<td colspan="2"><button onclick="play(teamsC[2],teamsC[1],rc5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc5m2">
<td>${teamsC[0].name}</td>
<td>${teamsC[3].name}</td>
<td colspan="2"><button onclick="play(teamsC[0],teamsC[3],rc5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
<tr id="rd5m1">
<td id="host">${teamsD[2].name}</td>
<td id="guest">${teamsD[1].name}</td>
<td colspan="2"><button onclick="play(teamsD[2],teamsD[1],rd5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd5m2">
<td>${teamsD[0].name}</td>
<td>${teamsD[3].name}</td>
<td colspan="2"><button onclick="play(teamsD[0],teamsD[3],rd5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group E</td></tr>
<tr id="re5m1">
<td id="host">${teamsE[2].name}</td>
<td id="guest">${teamsE[1].name}</td>
<td colspan="2"><button onclick="play(teamsE[2],teamsE[1],re5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="re5m2">
<td>${teamsE[0].name}</td>
<td>${teamsE[3].name}</td>
<td colspan="2"><button onclick="play(teamsE[0],teamsE[3],re5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group F</td></tr>
<tr id="rf5m1">
<td id="host">${teamsF[2].name}</td>
<td id="guest">${teamsF[1].name}</td>
<td colspan="2"><button onclick="play(teamsF[2],teamsF[1],rf5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rf5m2">
<td>${teamsF[0].name}</td>
<td>${teamsF[3].name}</td>
<td colspan="2"><button onclick="play(teamsF[0],teamsF[3],rf5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group G</td></tr>
<tr id="rg5m1">
<td id="host">${teamsG[2].name}</td>
<td id="guest">${teamsG[1].name}</td>
<td colspan="2"><button onclick="play(teamsG[2],teamsG[1],rg5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rg5m2">
<td>${teamsG[0].name}</td>
<td>${teamsG[3].name}</td>
<td colspan="2"><button onclick="play(teamsG[0],teamsG[3],rg5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group H</td></tr>
<tr id="rh5m1">
<td id="host">${teamsH[2].name}</td>
<td id="guest">${teamsH[1].name}</td>
<td colspan="2"><button onclick="play(teamsH[2],teamsH[1],rh5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rh5m2">
<td>${teamsH[0].name}</td>
<td>${teamsH[3].name}</td>
<td colspan="2"><button onclick="play(teamsH[0],teamsH[3],rh5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
<th colspan="4">Round 6</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
<tr id="ra6m1">
<td id="host">${teamsA[2].name}</td>
<td id="guest">${teamsA[0].name}</td>
<td colspan="2"><button onclick="play(teamsA[2],teamsA[0],ra6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra6m2">
<td>${teamsA[3].name}</td>
<td>${teamsA[1].name}</td>
<td colspan="2"><button onclick="play(teamsA[3],teamsA[1],ra6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
<tr id="rb6m1">
<td id="host">${teamsB[2].name}</td>
<td id="guest">${teamsB[0].name}</td>
<td colspan="2"><button onclick="play(teamsB[2],teamsB[0],rb6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb6m2">
<td>${teamsB[3].name}</td>
<td>${teamsB[1].name}</td>
<td colspan="2"><button onclick="play(teamsB[3],teamsB[1],rb6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
<tr id="rc6m1">
<td id="host">${teamsC[2].name}</td>
<td id="guest">${teamsC[0].name}</td>
<td colspan="2"><button onclick="play(teamsC[2],teamsC[0],rc6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc6m2">
<td>${teamsC[3].name}</td>
<td>${teamsC[1].name}</td>
<td colspan="2"><button onclick="play(teamsC[3],teamsC[1],rc6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
<tr id="rd6m1">
<td id="host">${teamsD[2].name}</td>
<td id="guest">${teamsD[0].name}</td>
<td colspan="2"><button onclick="play(teamsD[2],teamsD[0],rd6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd6m2">
<td>${teamsD[3].name}</td>
<td>${teamsD[1].name}</td>
<td colspan="2"><button onclick="play(teamsD[3],teamsD[1],rd6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group E</td></tr>
<tr id="re6m1">
<td id="host">${teamsE[2].name}</td>
<td id="guest">${teamsE[0].name}</td>
<td colspan="2"><button onclick="play(teamsE[2],teamsE[0],re6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="re6m2">
<td>${teamsE[3].name}</td>
<td>${teamsE[1].name}</td>
<td colspan="2"><button onclick="play(teamsE[3],teamsE[1],re6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group F</td></tr>
<tr id="rf6m1">
<td id="host">${teamsF[2].name}</td>
<td id="guest">${teamsF[0].name}</td>
<td colspan="2"><button onclick="play(teamsF[2],teamsF[0],rf6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rf6m2">
<td>${teamsF[3].name}</td>
<td>${teamsF[1].name}</td>
<td colspan="2"><button onclick="play(teamsF[3],teamsF[1],rf6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group G</td></tr>
<tr id="rg6m1">
<td id="host">${teamsG[2].name}</td>
<td id="guest">${teamsG[0].name}</td>
<td colspan="2"><button onclick="play(teamsG[2],teamsG[0],rg6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rg6m2">
<td>${teamsG[3].name}</td>
<td>${teamsG[1].name}</td>
<td colspan="2"><button onclick="play(teamsG[3],teamsG[1],rg6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group H</td></tr>
<tr id="rh6m1">
<td id="host">${teamsH[2].name}</td>
<td id="guest">${teamsH[0].name}</td>
<td colspan="2"><button onclick="play(teamsH[2],teamsH[0],rh6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rh6m2">
<td>${teamsH[3].name}</td>
<td>${teamsH[1].name}</td>
<td colspan="2"><button onclick="play(teamsH[3],teamsH[1],rh6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`


]}

if (cn == 16) {

    round = ['',
`<tr>
<th colspan="4">Round 1</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>

<tr id="ra1m1">
<td id="host">${teamsA[0].name}</td>
<td id="guest">${teamsA[1].name}</td>
<td colspan="2"><button onclick="play(teamsA[0],teamsA[1],ra1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra1m2">
<td>${teamsA[2].name}</td>
<td>${teamsA[3].name}</td>
<td colspan="2"><button onclick="play(teamsA[2],teamsA[3],ra1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>

<tr id="rb1m1">
<td id="host">${teamsB[0].name}</td>
<td id="guest">${teamsB[1].name}</td>
<td colspan="2"><button onclick="play(teamsB[0],teamsB[1],rb1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb1m2">
<td>${teamsB[2].name}</td>
<td>${teamsB[3].name}</td>
<td colspan="2"><button onclick="play(teamsB[2],teamsB[3],rb1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>

<tr id="rc1m1">
<td id="host">${teamsC[0].name}</td>
<td id="guest">${teamsC[1].name}</td>
<td colspan="2"><button onclick="play(teamsC[0],teamsC[1],rc1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc1m2">
<td>${teamsC[2].name}</td>
<td>${teamsC[3].name}</td>
<td colspan="2"><button onclick="play(teamsC[2],teamsC[3],rc1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>

<tr id="rd1m1">
<td id="host">${teamsD[0].name}</td>
<td id="guest">${teamsD[1].name}</td>
<td colspan="2"><button onclick="play(teamsD[0],teamsD[1],rd1m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd1m2">
<td>${teamsD[2].name}</td>
<td>${teamsD[3].name}</td>
<td colspan="2"><button onclick="play(teamsD[2],teamsD[3],rd1m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`
<tr>
<th colspan="4">Round 2</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>

<tr id="ra2m1">
<td id="host">${teamsA[1].name}</td>
<td id="guest">${teamsA[2].name}</td>
<td colspan="2"><button onclick="play(teamsA[1],teamsA[2],ra2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra2m2">
<td>${teamsA[3].name}</td>
<td>${teamsA[0].name}</td>
<td colspan="2"><button onclick="play(teamsA[3],teamsA[0],ra2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>

<tr id="rb2m1">
<td id="host">${teamsB[1].name}</td>
<td id="guest">${teamsB[2].name}</td>
<td colspan="2"><button onclick="play(teamsB[1],teamsB[2],rb2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb2m2">
<td>${teamsB[3].name}</td>
<td>${teamsB[0].name}</td>
<td colspan="2"><button onclick="play(teamsB[3],teamsB[0],rb2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>

<tr id="rc2m1">
<td id="host">${teamsC[1].name}</td>
<td id="guest">${teamsC[2].name}</td>
<td colspan="2"><button onclick="play(teamsC[1],teamsC[2],rc2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc2m2">
<td>${teamsC[3].name}</td>
<td>${teamsC[0].name}</td>
<td colspan="2"><button onclick="play(teamsC[3],teamsC[0],rc2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>

<tr id="rd2m1">
<td id="host">${teamsD[1].name}</td>
<td id="guest">${teamsD[2].name}</td>
<td colspan="2"><button onclick="play(teamsD[1],teamsD[2],rd2m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd2m2">
<td>${teamsD[3].name}</td>
<td>${teamsD[0].name}</td>
<td colspan="2"><button onclick="play(teamsD[3],teamsD[0],rd2m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
`,
`<tr>
<th colspan="4">Round 3</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
<tr id="ra3m1">
<td id="host">${teamsA[0].name}</td>
<td id="guest">${teamsA[2].name}</td>
<td colspan="2"><button onclick="play(teamsA[0],teamsA[2],ra3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra3m2">
<td>${teamsA[1].name}</td>
<td>${teamsA[3].name}</td>
<td colspan="2"><button onclick="play(teamsA[1],teamsA[3],ra3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
<tr id="rb3m1">
<td id="host">${teamsB[0].name}</td>
<td id="guest">${teamsB[2].name}</td>
<td colspan="2"><button onclick="play(teamsB[0],teamsB[2],rb3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb3m2">
<td>${teamsB[1].name}</td>
<td>${teamsB[3].name}</td>
<td colspan="2"><button onclick="play(teamsB[1],teamsB[3],rb3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
<tr id="rc3m1">
<td id="host">${teamsC[0].name}</td>
<td id="guest">${teamsC[2].name}</td>
<td colspan="2"><button onclick="play(teamsC[0],teamsC[2],rc3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc3m2">
<td>${teamsC[1].name}</td>
<td>${teamsC[3].name}</td>
<td colspan="2"><button onclick="play(teamsC[1],teamsC[3],rc3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
<tr id="rd3m1">
<td id="host">${teamsD[0].name}</td>
<td id="guest">${teamsD[2].name}</td>
<td colspan="2"><button onclick="play(teamsD[0],teamsD[2],rd3m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd3m2">
<td>${teamsD[1].name}</td>
<td>${teamsD[3].name}</td>
<td colspan="2"><button onclick="play(teamsD[1],teamsD[3],rd3m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
<th colspan="4">Round 4</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
</tr>
<tr id="ra4m1">
<td id="host">${teamsA[1].name}</td>
<td id="guest">${teamsA[0].name}</td>
<td colspan="2"><button onclick="play(teamsA[1],teamsA[0],ra4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra4m2">
<td>${teamsA[3].name}</td>
<td>${teamsA[2].name}</td>
<td colspan="2"><button onclick="play(teamsA[3],teamsA[2],ra4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
</tr>
<tr id="rb4m1">
<td id="host">${teamsB[1].name}</td>
<td id="guest">${teamsB[0].name}</td>
<td colspan="2"><button onclick="play(teamsB[1],teamsB[0],rb4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb4m2">
<td>${teamsB[3].name}</td>
<td>${teamsB[2].name}</td>
<td colspan="2"><button onclick="play(teamsB[3],teamsB[2],rb4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
</tr>
<tr id="rc4m1">
<td id="host">${teamsC[1].name}</td>
<td id="guest">${teamsC[0].name}</td>
<td colspan="2"><button onclick="play(teamsC[1],teamsC[0],rc4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc4m2">
<td>${teamsC[3].name}</td>
<td>${teamsC[2].name}</td>
<td colspan="2"><button onclick="play(teamsC[3],teamsC[2],rc4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
</tr>
<tr id="rd4m1">
<td id="host">${teamsD[1].name}</td>
<td id="guest">${teamsD[0].name}</td>
<td colspan="2"><button onclick="play(teamsD[1],teamsD[0],rd4m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd4m2">
<td>${teamsD[3].name}</td>
<td>${teamsD[2].name}</td>
<td colspan="2"><button onclick="play(teamsD[3],teamsD[2],rd4m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
<th colspan="4">Round 5</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
<tr id="ra5m1">
<td id="host">${teamsA[2].name}</td>
<td id="guest">${teamsA[1].name}</td>
<td colspan="2"><button onclick="play(teamsA[2],teamsA[1],ra5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra5m2">
<td>${teamsA[0].name}</td>
<td>${teamsA[3].name}</td>
<td colspan="2"><button onclick="play(teamsA[0],teamsA[3],ra5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
<tr id="rb5m1">
<td id="host">${teamsB[2].name}</td>
<td id="guest">${teamsB[1].name}</td>
<td colspan="2"><button onclick="play(teamsB[2],teamsB[1],rb5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb5m2">
<td>${teamsB[0].name}</td>
<td>${teamsB[3].name}</td>
<td colspan="2"><button onclick="play(teamsB[0],teamsB[3],rb5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
<tr id="rc5m1">
<td id="host">${teamsC[2].name}</td>
<td id="guest">${teamsC[1].name}</td>
<td colspan="2"><button onclick="play(teamsC[2],teamsC[1],rc5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc5m2">
<td>${teamsC[0].name}</td>
<td>${teamsC[3].name}</td>
<td colspan="2"><button onclick="play(teamsC[0],teamsC[3],rc5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
<tr id="rd5m1">
<td id="host">${teamsD[2].name}</td>
<td id="guest">${teamsD[1].name}</td>
<td colspan="2"><button onclick="play(teamsD[2],teamsD[1],rd5m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd5m2">
<td>${teamsD[0].name}</td>
<td>${teamsD[3].name}</td>
<td colspan="2"><button onclick="play(teamsD[0],teamsD[3],rd5m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
<th colspan="4">Round 6</th>
</tr>
<tr class="group"><td colspan="4">Group A</td></tr>
<tr id="ra6m1">
<td id="host">${teamsA[2].name}</td>
<td id="guest">${teamsA[0].name}</td>
<td colspan="2"><button onclick="play(teamsA[2],teamsA[0],ra6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="ra6m2">
<td>${teamsA[3].name}</td>
<td>${teamsA[1].name}</td>
<td colspan="2"><button onclick="play(teamsA[3],teamsA[1],ra6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group B</td></tr>
<tr id="rb6m1">
<td id="host">${teamsB[2].name}</td>
<td id="guest">${teamsB[0].name}</td>
<td colspan="2"><button onclick="play(teamsB[2],teamsB[0],rb6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rb6m2">
<td>${teamsB[3].name}</td>
<td>${teamsB[1].name}</td>
<td colspan="2"><button onclick="play(teamsB[3],teamsB[1],rb6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group C</td></tr>
<tr id="rc6m1">
<td id="host">${teamsC[2].name}</td>
<td id="guest">${teamsC[0].name}</td>
<td colspan="2"><button onclick="play(teamsC[2],teamsC[0],rc6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rc6m2">
<td>${teamsC[3].name}</td>
<td>${teamsC[1].name}</td>
<td colspan="2"><button onclick="play(teamsC[3],teamsC[1],rc6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr class="group"><td colspan="4">Group D</td></tr>
<tr id="rd6m1">
<td id="host">${teamsD[2].name}</td>
<td id="guest">${teamsD[0].name}</td>
<td colspan="2"><button onclick="play(teamsD[2],teamsD[0],rd6m1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="rd6m2">
<td>${teamsD[3].name}</td>
<td>${teamsD[1].name}</td>
<td colspan="2"><button onclick="play(teamsD[3],teamsD[1],rd6m2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`


]}

    const button = document.querySelector('.button')
    //console.log(but_value);
    //console.log(n);
    schedule.classList.toggle('toggle');
    if(n>1){
        for(let i = 1; i<(n*2)-1; i++){
            //for(let i = 1; i<(n*2)-1; i++){
            // if (but_value === `Runda ${i}`) {
            // button.innerHTML = `<button onclick="start()" class="btn_start">Runda ${i+1}</button><br>`
            // schedule.innerHTML += round[i];
            // }
            //wszystkie razem rundy zrobic bez ifa i dodac button
            //button.innerHTML = `<button onclick="start()" class="btn_start">Runda ${i+1}</button><br>`
            button.innerHTML = '';
            schedule.innerHTML += round[i];

        }
    }
    else{
        for(let i = 1; i<7; i++){

            button.innerHTML = '';
            schedule.innerHTML += round[i];
            
       
        }
    }

    if(teams.length>13){
        schedule.innerHTML += `<tr><td colspan="4"><button onclick="quarter()" class="play_button btn_effect">PlayOff</button></td></tr>`;
        schedule.innerHTML += `<tr><td colspan="4"><button onclick="start2()" class="play_button btn_effect">2 ROUND</button></td></tr>`;
    }else if(teams.length>4){
        schedule.innerHTML += `<tr><td colspan="4"><button onclick="semi()" class="play_button btn_effect">PlayOff</button></td></tr>`;
    }else{
        if(teams_cup.length>17){
            schedule.innerHTML += `<tr><td colspan="4"><button onclick="sixteen()" class="play_button btn_effect">PlayOff</button></td></tr>`;
        }
        else if(teams_cup.length<17){
            schedule.innerHTML += `<tr><td colspan="4"><button onclick="eight()" class="play_button btn_effect">PlayOff</button></td></tr>`;
        }
    }

    schedule.innerHTML += `<tr><td colspan="4"><button onclick="reload()" class="play_button btn_effect">Finish</button></td></tr>`;


}

// 2 RUNDA /////////////////////

function start2(){
    schedule.innerHTML += '';
    let n = teams.length;
    let cn = teams_cup.length;
    console.log(cn + ' team A')
    let round = [];
    console.log(n + "liczba pobrana so f start")
    if (n == 16) {
    //rundy
        round = ['',
 `<tr>
    <th colspan="4">Round 31</th>
</tr>
<tr id="r31"><td colspan="4"><button onclick="play(teams[1],teams[5],r31m1,r31), play(teams[2],teams[6],r31m2,r31), play(teams[3],teams[7],r31m3,r31), play(teams[4],teams[0],r31m4,r31), play(teams[9],teams[13],r31m5,r31), play(teams[10],teams[14],r31m6,r31), play(teams[11],teams[15],r31m7,r31), play(teams[12],teams[8],r31m8,r31)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r31m1">
<td>${teams[1].name}</td>  <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[5],r1m1,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r31m2">
    <td>${teams[2].name}</td>  <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[6],r1m2,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r31m3">
    <td>${teams[3].name}</td>  <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[7],r1m3,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r31m4">
    <td>${teams[4].name}</td>  <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[0],r1m4,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r31m5">
    <td>${teams[9].name}</td>  <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[13],r1m5,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r31m6">
    <td>${teams[10].name}</td>  <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[14],r1m6,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r31m7">
    <td>${teams[11].name}</td>  <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[15],r1m7,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r31m8">
    <td>${teams[12].name}</td>  <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[8],r1m8,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[6],teams[1],r2m1,r2), play(teams[7],teams[2],r2m2,r2), play(teams[0],teams[3],r2m3,r2), play(teams[5],teams[4],r2m4,r2), play(teams[14],teams[9],r2m5,r2), play(teams[15],teams[10],r2m6,r2), play(teams[8],teams[11],r2m7,r2), play(teams[13],teams[12],r2m8,r2)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r2m1">
    <td>${teams[6].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[1],r2m1,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m2">
    <td>${teams[7].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[2],r2m2,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m3">
    <td>${teams[0].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r2m3,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m4">
    <td>${teams[5].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[4],r2m4,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m5">
    <td>${teams[14].name}</td> <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[9],r2m5,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m6">
    <td>${teams[15].name}</td> <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[10],r2m6,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m7">
    <td>${teams[8].name}</td> <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[11],r2m7,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m8">
    <td>${teams[13].name}</td> <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[12],r2m8,r2)" class="play_button btn_effect">Play</button></td>
</tr>

<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 3: </th></tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[7],r3m1,r3), play(teams[2],teams[0],r3m2,r3), play(teams[3],teams[5],r3m3,r3), play(teams[4],teams[6],r3m4,r3), play(teams[9],teams[15],r3m5,r3), play(teams[10],teams[8],r3m6,r3), play(teams[11],teams[13],r3m7,r3), play(teams[12],teams[14],r3m8,r3)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r3m1">
    <td>${teams[1].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[7],r3m1,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m2">
    <td>${teams[2].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[0],r3m2,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m3">
   <td>${teams[3].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[5],r3m3,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m4">
    <td>${teams[4].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[6],r3m4,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m5">
    <td>${teams[9].name}</td><td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[15],r3m5,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m6">
    <td>${teams[10].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[8],r3m6,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m7">
    <td>${teams[11].name}</td><td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[13],r3m7,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m8"> 
    <td>${teams[12].name}</td><td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[14],r3m8,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 4: </th></tr>
    <tr id="r4"><td colspan="4"><button onclick="play(teams[0], teams[1],r4m1,r4), play(teams[5], teams[2],r4m2,r4), play(teams[6], teams[3],r4m3,r4), play(teams[7], teams[4],r4m4,r4), play(teams[8], teams[9],r4m5,r4), play(teams[13],teams[10],r4m6,r4), play(teams[14], teams[11],r4m7,r4), play(teams[15], teams[12],r4m8,r4)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r4m1">
    <td>${teams[0].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[0], teams[1],r4m1,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m2">
    <td>${teams[5].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[5], teams[2],r4m2,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m3">
    <td>${teams[6].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[6], teams[3],r4m3,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m4">
    <td>${teams[7].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[7], teams[4],r4m4,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m5">
    <td>${teams[8].name}</td> <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[8], teams[9],r4m5,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m6">
    <td>${teams[13].name}</td> <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[13], teams[10],r4m6,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m7">
    <td>${teams[14].name}</td> <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[14], teams[11],r4m7,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m8">  
    <td>${teams[15].name}</td> <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[15], teams[12],r4m8,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 5: </th></tr>
    <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[2],r5m1,r5), play(teams[3],teams[4],r5m2,r5), play(teams[5],teams[6],r5m3,r5), play(teams[7],teams[0],r5m4,r5), play(teams[9],teams[10],r5m5,r5), play(teams[11],teams[12],r5m6,r5), play(teams[13],teams[14],r5m7,r5), play(teams[15],teams[8],r5m8,r5)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r5m1">
    <td>${teams[1].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r5m1,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m2">
    <td>${teams[3].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[4],r5m2,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m3">
    <td>${teams[5].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[6],r5m3,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m4">
    <td>${teams[7].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[0],r5m4,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m5">
    <td>${teams[9].name}</td><td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[10],r5m5,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m6">
    <td>${teams[11].name}</td><td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[12],r5m6,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m7">
    <td>${teams[13].name}</td><td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[14],r5m7,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m8">
    <td>${teams[15].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[8],r5m8,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 6: </th></tr>
    <tr id="r6"><td colspan="4"><button onclick="play(teams[4],teams[1],r6m1,r6), play(teams[2],teams[3],r6m2,r6), play(teams[0],teams[5],r6m3,r6), play(teams[6],teams[7],r6m4,r6), play(teams[12],teams[9],r6m5,r6), play(teams[10],teams[11],r6m6,r6), play(teams[8],teams[13],r6m7,r6), play(teams[14],teams[15],r6m8,r6)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r6m1">
    <td>${teams[4].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[1],r6m1,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m2">
    <td>${teams[2].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r6m2,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m3">
    <td>${teams[0].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[5],r6m3,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m4">
    <td>${teams[6].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[7],r6m4,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m5">
    <td>${teams[12].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[9],r6m5,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m6">
    <td>${teams[10].name}</td><td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[11],r6m6,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m7">
    <td>${teams[8].name}</td><td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[13],r6m7,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m8">
    <td>${teams[14].name}</td><td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[15],r6m8,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 7: </th></tr>
    <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[3],r7m1,r7), play(teams[2],teams[4],r7m2,r7), play(teams[5],teams[7],r7m3,r7), play(teams[6],teams[0],r7m4,r7), play(teams[9],teams[11],r7m5,r7), play(teams[10],teams[12],r7m6,r7), play(teams[13],teams[15],r7m7,r7), play(teams[14],teams[8],r7m8,r7)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r7m1">
    <td>${teams[1].name}</td> <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[3],r7m1,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m2">
    <td>${teams[2].name}</td> <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[4],r7m2,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m3">
    <td>${teams[5].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[7],r7m3,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m4">
    <td>${teams[6].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[0],r7m4,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m5">
    <td>${teams[9].name}</td> <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[11],r7m5,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m6">   
    <td>${teams[10].name}</td> <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[12],r7m6,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m7">
    <td>${teams[13].name}</td> <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[15],r7m7,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m8">
    <td>${teams[14].name}</td> <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[8],r7m8,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 8: </th></tr>
    <tr id="r8"><td colspan="4"><button onclick="play(teams[1],teams[8],r8m1,r8), play(teams[2],teams[9],r8m2,r8), play(teams[3],teams[10],r8m3,r8), play(teams[4],teams[11],r8m4,r8), play(teams[5],teams[12],r8m5,r8), play(teams[6],teams[13],r8m6,r8), play(teams[7],teams[14],r8m7,r8), play(teams[0],teams[15],r8m8,r8)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r8m1">
    <td>${teams[1].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[8],r8m1,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m2">
    <td>${teams[2].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[9],r8m2,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m3">
    <td>${teams[3].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[10],r8m3,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m4">
    <td>${teams[4].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[11],r8m4,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m5">
    <td>${teams[5].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[12],r8m5,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m6">
    <td>${teams[6].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[13],r8m6,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m7">
    <td>${teams[7].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[14],r8m7,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m8">
    <td>${teams[0].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[15],r8m8,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 9: </th></tr>
    <tr id="r9"><td colspan="4"><button onclick="play(teams[8],teams[2],r9m1,r9), play(teams[9],teams[3],r9m2,r9), play(teams[10],teams[4],r9m3,r9), play(teams[11],teams[5],r9m4,r9), play(teams[12],teams[6],r9m5,r9), play(teams[13],teams[7],r9m6,r9), play(teams[14],teams[0],r9m7,r9), play(teams[15],teams[1],r9m8,r9)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r9m1">
    <td>${teams[8].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[2],r9m1,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m2">
    <td>${teams[9].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[3],r9m2,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m3">
    <td>${teams[10].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[4],r9m3,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m4">
    <td>${teams[11].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[5],r9m4,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m5">
    <td>${teams[12].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[6],r9m5,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m6">
    <td>${teams[13].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[7],r9m6,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m7">
    <td>${teams[14].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[0],r9m7,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m8">
    <td>${teams[15].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[1],r9m8,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    
    `<tr><th colspan="4">Round 10: </th></tr>
    <tr id="r10"><td colspan="4"><button onclick="play(teams[3],teams[8],r10m1,r10), play(teams[4],teams[9],r10m2,r10), play(teams[5],teams[10],r10m3,r10), play(teams[6],teams[11],r10m4,r10), play(teams[7],teams[12],r10m5,r10), play(teams[0],teams[13],r10m6,r10), play(teams[1],teams[14],r10m7,r10), play(teams[2],teams[15],r10m8,r10)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r10m1">
    <td>${teams[3].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[8],r10m1,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m2">
    <td>${teams[4].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[9],r10m2,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m3">
    <td>${teams[5].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[10],r10m3,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m4">
    <td>${teams[6].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[11],r10m4,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m5">
    <td>${teams[7].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[12],r10m5,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m6">
    <td>${teams[0].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[13],r10m6,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m7">
    <td>${teams[1].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[14],r10m7,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m8">
    <td>${teams[2].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[15],r10m8,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 11: </th></tr>
    <tr id="r11"><td colspan="4"><button onclick="play(teams[8],teams[4],r11m1,r11), play(teams[9],teams[5],r11m2,r11), play(teams[10],teams[6],r11m3,r11), play(teams[11],teams[7],r11m4,r11), play(teams[12],teams[0],r11m5,r11), play(teams[13],teams[1],r11m6,r11), play(teams[14],teams[2],r11m7,r11), play(teams[15],teams[3],r11m8,r11)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r11m1">
    <td>${teams[8].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[4],r11m1,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m2">
    <td>${teams[9].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[5],r11m2,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m3">
    <td>${teams[10].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[6],r11m3,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m4">
    <td>${teams[11].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[7],r11m4,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m5">
    <td>${teams[12].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[0],r11m5,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m6">
    <td>${teams[13].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[1],r11m6,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m7">
    <td>${teams[14].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[2],r11m7,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m8">
    <td>${teams[15].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[3],r11m8,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 
     `<tr><th colspan="4">Round 12: </th></tr>
    <tr id="r12"><td colspan="4"><button onclick="play(teams[5],teams[8],r12m1,r12), play(teams[6],teams[9],r12m2,r12), play(teams[7],teams[10],r12m3,r12), play(teams[0],teams[11],r12m4,r12), play(teams[1],teams[12],r12m5,r12), play(teams[2],teams[13],r12m6,r12), play(teams[3],teams[14],r12m7,r12), play(teams[4],teams[15],r12m8,r12)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r12m1">
    <td>${teams[5].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[8],r12m1,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m2">
    <td>${teams[6].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[9],r12m2,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m3">
    <td>${teams[7].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[10],r12m3,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m4">
    <td>${teams[0].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[11],r12m4,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m5">
    <td>${teams[1].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[12],r12m5,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m6">
    <td>${teams[2].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[13],r12m6,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m7">
    <td>${teams[3].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[14],r12m7,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r12m8">
    <td>${teams[4].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[15],r12m8,r12)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 13: </th></tr>
    <tr id="r13"><td colspan="4"><button onclick="play(teams[8],teams[6],r13m1,r13), play(teams[9],teams[7],r13m2,r13), play(teams[10],teams[0],r13m3,r13), play(teams[11],teams[1],r13m4,r13), play(teams[12],teams[2],r13m5,r13), play(teams[13],teams[3],r13m6,r13), play(teams[14],teams[4],r13m7,r13), play(teams[15],teams[5],r13m8,r13)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r13m1">
    <td>${teams[8].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[6],r13m1,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m2">
    <td>${teams[9].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[7],r13m2,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m3">
    <td>${teams[10].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[0],r13m3,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m4">
    <td>${teams[11].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[1],r13m4,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m5">
    <td>${teams[12].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[2],r13m5,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m6">
    <td>${teams[13].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[3],r13m6,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m7">
    <td>${teams[14].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[4],r13m7,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r13m8">
    <td>${teams[15].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[5],r13m8,r13)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 14: </th></tr>
    <tr id="r14"><td colspan="4"><button onclick="play(teams[7],teams[8],r14m1,r14), play(teams[0],teams[9],r14m2,r14), play(teams[1],teams[10],r14m3,r14), play(teams[2],teams[11],r14m4,r14), play(teams[3],teams[12],r14m5,r14), play(teams[4],teams[13],r14m6,r14), play(teams[5],teams[14],r14m7,r14), play(teams[6],teams[15],r14m8,r14)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r14m1">
    <td>${teams[7].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[8],r14m1,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m2">
    <td>${teams[0].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[9],r14m2,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m3">
    <td>${teams[1].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[10],r14m3,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m4">
    <td>${teams[2].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[11],r14m4,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m5">
    <td>${teams[3].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[12],r14m5,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m6">
    <td>${teams[4].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[13],r14m6,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m7">
    <td>${teams[5].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[14],r14m7,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r14m8">
    <td>${teams[6].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[15],r14m8,r14)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 15: </th></tr>
    <tr id="r15"><td colspan="4"><button onclick="play(teams[8],teams[0],r15m1,r15), play(teams[9],teams[1],r15m2,r15), play(teams[10],teams[2],r15m3,r15), play(teams[11],teams[3],r15m4,r15), play(teams[12],teams[4],r15m5,r15), play(teams[13],teams[5],r15m6,r15), play(teams[14],teams[6],r15m7,r15), play(teams[15],teams[7],r15m8,r15)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r15m1">
    <td>${teams[8].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[0],r15m1,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m2">
    <td>${teams[9].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[1],r15m2,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m3">
    <td>${teams[10].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[2],r15m3,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m4">
    <td>${teams[11].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[3],r15m4,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m5">
    <td>${teams[12].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[4],r15m5,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m6">
    <td>${teams[13].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[5],r15m6,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m7">
    <td>${teams[14].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[6],r15m7,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r15m8">
    <td>${teams[15].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[7],r15m8,r15)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
                 
    `<tr>
    <th colspan="4">Round 16</th>
</tr>
<tr id="r16"><td colspan="4"><button onclick="play(teams[5],teams[1],r16m1,r16), play(teams[6],teams[2],r16m2,r16), play(teams[7],teams[3],r16m3,r16), play(teams[0],teams[4],r16m4,r16), play(teams[13],teams[9],r16m5,r16), play(teams[14],teams[10],r16m6,r16), play(teams[15],teams[11],r16m7,r16), play(teams[8],teams[12],r16m8,r16)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r16m1">
<td>${teams[5].name}</td>  <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[1],r16m1,r16)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r16m2">
    <td>${teams[6].name}</td>  <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[2],r16m2,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m3">
    <td>${teams[7].name}</td>  <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[3],r16m3,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m4">
    <td>${teams[0].name}</td>  <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[4],r16m4,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m5">
    <td>${teams[13].name}</td>  <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[9],r16m5,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m6">
    <td>${teams[14].name}</td>  <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[10],r16m6,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m7">
    <td>${teams[15].name}</td>  <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[11],r16m7,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m8">
    <td>${teams[8].name}</td>  <td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[12],r16m8,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 17</th>
</tr>
<tr id="r17"><td colspan="4"><button onclick="play(teams[1],teams[6],r17m1,r17), play(teams[2],teams[7],r17m2,r17), play(teams[3],teams[0],r17m3,r17), play(teams[4],teams[5],r17m4,r17), play(teams[9],teams[14],r17m5,r17), play(teams[10],teams[15],r17m6,r17), play(teams[11],teams[8],r17m7,r17), play(teams[12],teams[13],r17m8,r17)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r17m1">
    <td>${teams[1].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[6],r17m1,r17)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r17m2">
    <td>${teams[2].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[7],r17m2,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m3">
    <td>${teams[3].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[0],r17m3,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m4">
    <td>${teams[4].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[5],r17m4,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m5">
    <td>${teams[9].name}</td> <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[14],r17m5,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m6">
    <td>${teams[10].name}</td> <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[15],r17m6,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m7">
    <td>${teams[11].name}</td> <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[8],r17m7,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m8">
    <td>${teams[12].name}</td> <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[13],r17m8,r17)" class="play_button btn_effect">Play</button></td>
</tr>

<tr>
    <th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 18: </th></tr>
<tr id="r18"><td colspan="4"><button onclick="play(teams[7],teams[1],r18m1,r18), play(teams[0],teams[2],r18m2,r18), play(teams[5],teams[3],r18m3,r18), play(teams[6],teams[4],r18m4,r18), play(teams[15],teams[9],r18m5,r18), play(teams[8],teams[10],r18m6,r18), play(teams[13],teams[11],r18m7,r18), play(teams[14],teams[12],r18m8,r18)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r18m1">
    <td>${teams[7].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[1],r18m1,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m2">
    <td>${teams[0].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r18m2,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m3">
   <td>${teams[5].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[3],r18m3,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m4">
    <td>${teams[6].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[4],r18m4,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m5">
    <td>${teams[15].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[9],r18m5,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m6">
    <td>${teams[8].name}</td><td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[10],r18m6,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m7">
    <td>${teams[13].name}</td><td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[11],r18m7,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r18m8"> 
    <td>${teams[14].name}</td><td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[12],r18m8,r18)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 19: </th></tr>
    <tr id="r19"><td colspan="4"><button onclick="play(teams[1], teams[0],r19m1,r19), play(teams[2], teams[5],r19m2,r19), play(teams[3], teams[6],r19m3,r19), play(teams[4], teams[7],r19m4,r19), play(teams[9], teams[8],r19m5,r19), play(teams[10],teams[13],r19m6,r19), play(teams[11], teams[14],r19m7,r19), play(teams[12], teams[15],r19m8,r19)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r19m1">
    <td>${teams[1].name}</td> <td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1], teams[0],r19m1,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m2">
    <td>${teams[2].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[2], teams[5],r19m2,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m3">
    <td>${teams[3].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[3], teams[6],r19m3,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m4">
    <td>${teams[4].name}</td> <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[4], teams[7],r19m4,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m5">
    <td>${teams[9].name}</td> <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[9 teams[8],r19m5,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m6">
    <td>${teams[10].name}</td> <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[10], teams[13],r19m6,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m7">
    <td>${teams[11].name}</td> <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[11], teams[14],r19m7,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r19m8">  
    <td>${teams[12].name}</td> <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[12], teams[15],r19m8,r19)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `, `
    <tr><th colspan="4">Round 20: </th></tr>
    <tr id="r20"><td colspan="4"><button onclick="play(teams[2],teams[1],r20m1,r20), play(teams[4],teams[3],r20m2,r20), play(teams[5],teams[6],r20m3,r20), play(teams[0],teams[7],r20m4,r20), play(teams[10],teams[9],r20m5,r20), play(teams[12],teams[11],r20m6,r20), play(teams[14],teams[13],r20m7,r20), play(teams[8],teams[15],r20m8,r20)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r20m1">
    <td>${teams[2].name}</td><td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[1],r20m1,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m2">
    <td>${teams[4].name}</td><td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[3],r20m2,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m3">
    <td>${teams[6].name}</td><td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[5],r20m3,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m4">
    <td>${teams[0].name}</td><td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[7],r20m4,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m5">
    <td>${teams[10].name}</td><td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[9],r20m5,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m6">
    <td>${teams[12].name}</td><td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[11],r20m6,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m7">
    <td>${teams[14].name}</td><td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[14],teams[13],r20m7,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r20m8">
    <td>${teams[8].name}</td><td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[15],r20m8,r20)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 21: </th></tr>
    <tr id="r21"><td colspan="4"><button onclick="play(teams[1],teams[4],r21m1,r21), play(teams[3],teams[2],r21m2,r21), play(teams[5],teams[0],r21m3,r21), play(teams[7],teams[6],r21m4,r21), play(teams[9],teams[12],r21m5,r21), play(teams[11],teams[10],r21m6,r21), play(teams[13],teams[8],r21m7,r21), play(teams[15],teams[14],r21m8,r21)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r21m1">
    <td>${teams[1].name}</td><td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[4],r21m1,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m2">
    <td>${teams[3].name}</td><td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[2],r21m2,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m3">
    <td>${teams[5].name}</td><td>${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[0],r21m3,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m4">
    <td>${teams[7].name}</td><td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[6],r21m4,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m5">
    <td>${teams[9].name}</td><td>${teams[12].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[12],r21m5,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m6">
    <td>${teams[11].name}</td><td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[10],r21m6,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m7">
    <td>${teams[13].name}</td><td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[13],teams[8],r21m7,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r21m8">
    <td>${teams[15].name}</td><td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[14],r21m8,r21)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 22: </th></tr>
    <tr id="r22"><td colspan="4"><button onclick="play(teams[3],teams[1],r22m1,r22), play(teams[4],teams[2],r22m2,r22), play(teams[7],teams[5],r22m3,r22), play(teams[0],teams[6],r22m4,r22), play(teams[11],teams[9],r22m5,r22), play(teams[12],teams[10],r22m6,r22), play(teams[15],teams[13],r22m7,r22), play(teams[8],teams[14],r22m8,r22)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r22m1">
    <td>${teams[3].name}</td> <td>${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r22m1,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m2">
    <td>${teams[4].name}</td> <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[2],r22m2,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m3">
    <td>${teams[7].name}</td> <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[5],r22m3,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m4">
    <td>${teams[0].name}</td> <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[6],r22m4,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m5">
    <td>${teams[11].name}</td> <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[9],r22m5,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m6">   
    <td>${teams[12].name}</td> <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[10],r22m6,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m7">
    <td>${teams[15].name}</td> <td>${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[15],teams[13],r22m7,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r22m8">
    <td>${teams[8].name}</td> <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[14],r22m8,r22)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,

    `<tr><th colspan="4">Round 23: </th></tr>
    <tr id="r23"><td colspan="4"><button onclick="play(teams[8],teams[1],r23m1,r23), play(teams[9],teams[2],r23m2,r23), play(teams[10],teams[3],r23m3,r23), play(teams[11],teams[4],r23m4,r23), play(teams[12],teams[5],r23m5,r23), play(teams[13],teams[6],r23m6,r23), play(teams[14],teams[7],r23m7,r23), play(teams[15],teams[0],r23m8,r23)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r23m1">
    <td>${teams[8].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[1],r23m1,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m2">
    <td>${teams[9].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[2],r23m2,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m3">
    <td>${teams[10].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[3],r23m3,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m4">
    <td>${teams[11].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[4],r23m4,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m5">
    <td>${teams[12].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[5],r23m5,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m6">
    <td>${teams[13].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[6],r23m6,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m7">
    <td>${teams[14].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[7],r23m7,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r23m8">
    <td>${teams[15].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[0],r23m8,r23)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 24: </th></tr>
    <tr id="r24"><td colspan="4"><button onclick="play(teams[2],teams[8],r24m1,r24), play(teams[3],teams[9],r24m2,r24), play(teams[4],teams[10],r24m3,r24), play(teams[5],teams[11],r24m4,r24), play(teams[6],teams[12],r24m5,r24), play(teams[7],teams[13],r24m6,r24), play(teams[0],teams[14],r24m7,r24), play(teams[1],teams[15],r24m8,r24)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r24m1">
    <td>${teams[2].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[8],r24m1,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m2">
    <td>${teams[3].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[9],r24m2,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m3">
    <td>${teams[4].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[10],r24m3,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m4">
    <td>${teams[5].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[11],r24m4,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m5">
    <td>${teams[6].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[12],r24m5,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m6">
    <td>${teams[7].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[13],r24m6,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m7">
    <td>${teams[0].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[14],r24m7,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r24m8">
    <td>${teams[1].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[15],r24m8,r24)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
         `<tr><th colspan="4">Round 25: </th></tr>
    <tr id="r25"><td colspan="4"><button onclick="play(teams[8],teams[3],r25m1,r25), play(teams[9],teams[4],r25m2,r25), play(teams[10],teams[5],r25m3,r25), play(teams[11],teams[6],r25m4,r25), play(teams[12],teams[7],r25m5,r25), play(teams[13],teams[0],r25m6,r25), play(teams[14],teams[1],r25m7,r25), play(teams[15],teams[2],r25m8,r25)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r25m1">
    <td>${teams[8].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[3],r25m1,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m2">
    <td>${teams[9].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[4],r25m2,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m3">
    <td>${teams[10].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[5],r25m3,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m4">
    <td>${teams[11].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[6],r25m4,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m5">
    <td>${teams[12].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[7],r25m5,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m6">
    <td>${teams[13].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[0],r25m6,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m7">
    <td>${teams[14].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[1],r25m7,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r25m8">
    <td>${teams[15].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[2],r25m8,r25)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 26: </th></tr>
    <tr id="r26"><td colspan="4"><button onclick="play(teams[4],teams[8],r26m1,r26), play(teams[5],teams[9],r26m2,r26), play(teams[6],teams[10],r26m3,r26), play(teams[7],teams[11],r26m4,r26), play(teams[0],teams[12],r26m5,r26), play(teams[1],teams[13],r26m6,r26), play(teams[2],teams[14],r26m7,r26), play(teams[3],teams[15],r26m8,r26)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r26m1">
    <td>${teams[4].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[8],r26m1,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m2">
    <td>${teams[5].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[9],r26m2,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m3">
    <td>${teams[6].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[10],r26m3,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m4">
    <td>${teams[7].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[11],r26m4,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m5">
    <td>${teams[0].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[12],r26m5,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m6">
    <td>${teams[1].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[13],r26m6,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m7">
    <td>${teams[2].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[14],r26m7,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m8">
    <td>${teams[3].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[15],r26m8,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,     
                 
     `<tr><th colspan="4">Round 27: </th></tr>
    <tr id="r27"><td colspan="4"><button onclick="play(teams[8],teams[5],r27m1,r27), play(teams[9],teams[6],r27m2,r27), play(teams[10],teams[7],r27m3,r27), play(teams[11],teams[0],r27m4,r27), play(teams[12],teams[1],r27m5,r27), play(teams[13],teams[2],r27m6,r27), play(teams[14],teams[3],r27m7,r27), play(teams[15],teams[4],r27m8,r27)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r27m1">
    <td>${teams[8].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[5],r27m1,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m2">
    <td>${teams[9].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[6],r27m2,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m3">
    <td>${teams[10].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[7],r27m3,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m4">
    <td>${teams[11].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[0],r27m4,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m5">
    <td>${teams[12].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[1],r27m5,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m6">
    <td>${teams[13].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[2],r27m6,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m7">
    <td>${teams[14].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[3],r27m7,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m8">
    <td>${teams[15].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[4],r27m8,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 28: </th></tr>
    <tr id="r28"><td colspan="4"><button onclick="play(teams[6],teams[8],r28m1,r28), play(teams[7],teams[9],r28m2,r28), play(teams[0],teams[10],r28m3,r28), play(teams[1],teams[11],r28m4,r28), play(teams[2],teams[12],r28m5,r28), play(teams[3],teams[13],r28m6,r28), play(teams[4],teams[14],r28m7,r28), play(teams[5],teams[15],r28m8,r28)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r28m1">
    <td>${teams[6].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[8],r28m1,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m2">
    <td>${teams[7].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[9],r28m2,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m3">
    <td>${teams[0].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[10],r28m3,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m4">
    <td>${teams[1].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[11],r28m4,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m5">
    <td>${teams[2].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[12],r28m5,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m6">
    <td>${teams[3].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[13],r28m6,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m7">
    <td>${teams[4].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[14],r28m7,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m8">
    <td>${teams[5].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[15],r28m8,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,    
                 
      `<tr><th colspan="4">Round 29: </th></tr>
    <tr id="r29"><td colspan="4"><button onclick="play(teams[8],teams[7],r29m1,r29), play(teams[9],teams[0],r29m2,r29), play(teams[10],teams[1],r29m3,r29), play(teams[11],teams[2],r29m4,r29), play(teams[12],teams[3],r29m5,r29), play(teams[13],teams[4],r29m6,r29), play(teams[14],teams[5],r29m7,r29), play(teams[15],teams[6],r29m8,r29)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r29m1">
    <td>${teams[8].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[7],r29m1,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m2">
    <td>${teams[9].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[0],r29m2,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m3">
    <td>${teams[10].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[1],r29m3,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m4">
    <td>${teams[11].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[2],r29m4,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m5">
    <td>${teams[12].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[3],r29m5,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m6">
    <td>${teams[13].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[4],r29m6,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m7">
    <td>${teams[14].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[5],r29m7,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m8">
    <td>${teams[15].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[6],r29m8,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,

    `<tr><th colspan="4">Round 30: </th></tr>
    <tr id="r30"><td colspan="4"><button onclick="play(teams[0],teams[8],r30m1,r30), play(teams[1],teams[9],r30m2,r30), play(teams[2],teams[10],r30m3,r30), play(teams[3],teams[11],r30m4,r30), play(teams[4],teams[12],r30m5,r30), play(teams[5],teams[13],r30m6,r30), play(teams[6],teams[14],r30m7,r30), play(teams[7],teams[15],r30m8,r30)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r30m1">
    <td>${teams[0].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[8],r30m1,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m2">
    <td>${teams[1].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[9],r30m2,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m3">
    <td>${teams[2].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[10],r30m3,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m4">
    <td>${teams[3].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[11],r30m4,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m5">
    <td>${teams[4].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[12],r30m5,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m6">
    <td>${teams[5].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[13],r30m6,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m7">
    <td>${teams[6].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[14],r30m7,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m8">
    <td>${teams[7].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[15],r30m8,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`       
                ]};
    

                const button = document.querySelector('.button')
                //console.log(but_value);
                //console.log(n);

                if(n>1){
                    for(let i = 1; i<(n*2)-1; i++){
                        //for(let i = 1; i<(n*2)-1; i++){
                        // if (but_value === `Runda ${i}`) {
                        // button.innerHTML = `<button onclick="start()" class="btn_start">Runda ${i+1}</button><br>`
                        // schedule.innerHTML += round[i];
                        // }
                        //wszystkie razem rundy zrobic bez ifa i dodac button
                        //button.innerHTML = `<button onclick="start()" class="btn_start">Runda ${i+1}</button><br>`
                        button.innerHTML = '';
                        schedule.innerHTML += round[i];
            
                    }
                }
                else{
                    for(let i = 1; i<7; i++){
            
                        button.innerHTML = '';
                        schedule.innerHTML += round[i];
                        
                   
                    }
                }
            
                if(teams.length>13){
                    schedule.innerHTML += `<tr><td colspan="4"><button onclick="quarter()" class="play_button btn_effect">PlayOff</button></td></tr>`;
 
                }else if(teams.length>4){
                    schedule.innerHTML += `<tr><td colspan="4"><button onclick="semi()" class="play_button btn_effect">PlayOff</button></td></tr>`;
                }else{
                    if(teams_cup.length>17){
                        schedule.innerHTML += `<tr><td colspan="4"><button onclick="sixteen()" class="play_button btn_effect">PlayOff</button></td></tr>`;
                    }
                    else if(teams_cup.length<17){
                        schedule.innerHTML += `<tr><td colspan="4"><button onclick="eight()" class="play_button btn_effect">PlayOff</button></td></tr>`;
                    }
                }
            
                schedule.innerHTML += `<tr><td colspan="4"><button onclick="reload()" class="play_button btn_effect">Finish</button></td></tr>`;
            
            

}











































