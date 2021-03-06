
function start24(){
    let n = teams.length;
    let cn = teams_cup.length;
    console.log(cn + ' team A')
    let round = [];
    console.log(n + "liczba pobrana so f start")

if (n == 24) {
    round = ['',
`
<tr>
    <th colspan="4">Round 1</th>
</tr>
<tr id="r1"><td colspan="4"><button onclick="play(teams[1],teams[0],r1m1,r1), play(teams[2],teams[11],r1m2,r1), play(teams[3],teams[10],r1m3,r1), play(teams[4],teams[9],r1m4,r1), play(teams[5],teams[8],r1m5,r1), play(teams[6],teams[7],r1m6,r1), play(teams[13],teams[12],r1m7,r1), play(teams[14],teams[23],r1m8,r1), play(teams[15],teams[22],r1m9,r1), play(teams[16],teams[21],r1m10,r1), play(teams[17],teams[20],r1m11,r1), play(teams[18],teams[19],r1m12,r1)" class="play_button btn_effect">Play ALL</button></td>
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
</tr>

<tr id="r1m7">
<td id="host">${teams[13].name}</td>
<td id="guest">${teams[12].name}</td>
<td colspan="2"><button onclick="play(teams[13],teams[12],r1m7,r1)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r1m8">
<td>${teams[14].name}</td>
<td>${teams[23].name}</td>
<td colspan="2"><button onclick="play(teams[14],teams[23],r1m8,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m9">
<td>${teams[15].name}</td>
<td>${teams[22].name}</td>
<td colspan="2"><button onclick="play(teams[15],teams[22],r1m9,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m10">
<td>${teams[16].name}</td>
<td>${teams[21].name}</td>
<td colspan="2"><button onclick="play(teams[16],teams[21],r1m10,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m11">
<td>${teams[17].name}</td>
<td>${teams[20].name}</td>
<td colspan="2"><button onclick="play(teams[17],teams[20],r1m11,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r1m12">
<td>${teams[18].name}</td>
<td>${teams[19].name}</td>
<td colspan="2"><button onclick="play(teams[18],teams[19],r1m12,r1)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 2</th>
</tr>
<tr id="r2"><td colspan="4"><button onclick="play(teams[11],teams[1],r2m1,r2), play(teams[10],teams[2],r2m2,r2), play(teams[9],teams[3],r2m3,r2), play(teams[8],teams[4],r2m4,r2), play(teams[7],teams[5],r2m5,r2), play(teams[0],teams[6],r2m6,r2), play(teams[23],teams[13],r2m7,r2), play(teams[22],teams[14],r2m8,r2), play(teams[21],teams[15],r2m9,r2), play(teams[20],teams[16],r2m10,r2), play(teams[19],teams[17],r2m11,r2), play(teams[12],teams[18],r2m12,r2)" class="play_button btn_effect">Play ALL</button></td>
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
</tr>
<tr id="r2m7">
    <td id="host">${teams[23].name}</td>
    <td id="guest">${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[23],teams[13],r2m7,r2)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r2m8">
    <td>${teams[22].name}</td>
    <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[22],teams[14],r2m8,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m9">
    <td>${teams[21].name}</td>
    <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[21],teams[15],r2m9,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m10">
    <td>${teams[20].name}</td>
    <td>${teams[16].name}</td>
    <td colspan="2"><button onclick="play(teams[20],teams[16],r2m10,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m11">
    <td>${teams[19].name}</td>
    <td>${teams[17].name}</td>
    <td colspan="2"><button onclick="play(teams[19],teams[17],r2m11,r2)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r2m12">
    <td>${teams[12].name}</td>
    <td>${teams[18].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[18],r2m12,r2)" class="play_button btn_effect">Play</button></td>
</tr>`,
`<tr><th colspan="4">Round 3: </th></tr>
<tr id="r3"><td colspan="4"><button onclick="play(teams[1],teams[10],r3m1,r3), play(teams[2],teams[9],r3m2,r3), play(teams[3],teams[8],r3m3,r3), play(teams[4],teams[7],r3m4,r3), play(teams[5],teams[6],r3m5,r3), play(teams[11],teams[0],r3m6,r3), play(teams[13],teams[22],r3m7,r3), play(teams[14],teams[21],r3m8,r3), play(teams[15],teams[20],r3m9,r3), play(teams[16],teams[19],r3m10,r3), play(teams[17],teams[18],r3m11,r3), play(teams[23],teams[12],r3m12,r3)" class="play_button btn_effect">Play ALL</button></td>
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
    </tr>
    <tr id="r3m7">
    <td>${teams[13].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[22],r3m7,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m8">
    <td>${teams[14].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[21],r3m8,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m9">
    <td>${teams[15].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[20],r3m9,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m10">
    <td>${teams[16].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[19],r3m10,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m11">
    <td>${teams[17].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[18],r3m11,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r3m12">
    <td>${teams[23].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[12],r3m12,r3)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 4: </th></tr>
    <tr id="r4"><td colspan="4"><button onclick="play(teams[9],teams[1],r4m1,r4), play(teams[8],teams[2],r4m2,r4), play(teams[7],teams[3],r4m3,r4), play(teams[6],teams[4],r4m4,r4), play(teams[0],teams[5],r4m5,r4), play(teams[10],teams[11],r4m6,r4), play(teams[21],teams[13],r4m7,r4), play(teams[20],teams[14],r4m8,r4), play(teams[19],teams[15],r4m9,r4), play(teams[18],teams[16],r4m10,r4), play(teams[12],teams[17],r4m11,r4), play(teams[22],teams[23],r4m12,r4)" class="play_button btn_effect">Play ALL</button></td>
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
    <tr id="r4m7">
    <td>${teams[21].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[13],r4m7,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m8">
    <td>${teams[20].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[14],r4m8,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m9">
    <td>${teams[19].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[15],r4m9,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m10">
    <td>${teams[18].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[16],r4m10,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m11">
    <td>${teams[12].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[17],r4m11,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r4m12">
    <td>${teams[22].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[23],r4m12,r4)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 5: </th></tr>
    <tr id="r5"><td colspan="4"><button onclick="play(teams[1],teams[8],r5m1,r5), play(teams[2],teams[7],r5m2,r5), play(teams[3],teams[6],r5m3,r5), play(teams[4],teams[5],r5m4,r5), play(teams[11],teams[9],r5m5,r5), play(teams[10],teams[0],r5m6,r5), play(teams[13],teams[20],r5m7,r5), play(teams[14],teams[19],r5m8,r5), play(teams[15],teams[18],r5m9,r5), play(teams[16],teams[17],r5m10,r5), play(teams[23],teams[21],r5m11,r5), play(teams[22],teams[12],r5m12,r5)" class="play_button btn_effect">Play ALL</button></td>
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
    </tr>
    <tr id="r5m7">
    <td>${teams[13].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[20],r5m7,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m8">
    <td>${teams[14].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[19],r5m8,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m9">
    <td>${teams[15].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[18],r5m9,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m10">
    <td>${teams[16].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[17],r5m10,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m11">
    <td>${teams[23].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[21],r5m11,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r5m12">
    <td>${teams[22].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[12],r5m12,r5)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 6: </th></tr>
    <tr id="r6"><td colspan="4"><button onclick="play(teams[7],teams[1],r6m1,r6), play(teams[6],teams[2],r6m2,r6), play(teams[5],teams[3],r6m3,r6), play(teams[0],teams[4],r6m4,r6), play(teams[8],teams[11],r6m5,r6), play(teams[9],teams[10],r6m6,r6), play(teams[19],teams[13],r6m7,r6), play(teams[18],teams[14],r6m8,r6), play(teams[17],teams[15],r6m9,r6), play(teams[12],teams[16],r6m10,r6), play(teams[20],teams[23],r6m11,r6), play(teams[21],teams[22],r6m12,r6)" class="play_button btn_effect">Play ALL</button></td>
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
    <tr id="r6m7">
    <td>${teams[19].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[13],r6m7,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m8">
    <td>${teams[18].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[14],r6m8,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m9">
    <td>${teams[17].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[15],r6m9,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m10">
    <td>${teams[12].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[16],r6m10,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m11">
    <td>${teams[20].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[23],r6m11,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r6m12">
    <td>${teams[21].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[22],r6m12,r6)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 7: </th></tr>
    <tr id="r7"><td colspan="4"><button onclick="play(teams[1],teams[6],r7m1,r7), play(teams[2],teams[5],r7m2,r7), play(teams[3],teams[4],r7m3,r7), play(teams[11],teams[7],r7m4,r7), play(teams[10],teams[8],r7m5,r7), play(teams[9],teams[0],r7m6,r7), play(teams[13],teams[18],r7m7,r7), play(teams[14],teams[17],r7m8,r7), play(teams[15],teams[16],r7m9,r7), play(teams[23],teams[19],r7m10,r7), play(teams[22],teams[20],r7m11,r7), play(teams[21],teams[12],r7m12,r7)" class="play_button btn_effect">Play ALL</button></td>
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
    </tr>
    <tr id="r7m7">
    <td>${teams[13].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[18],r7m7,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m8">
    <td>${teams[14].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[17],r7m8,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m9">
    <td>${teams[15].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[16],r7m9,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m10">
    <td>${teams[23].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[19],r7m10,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m11">
    <td>${teams[22].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[20],r7m11,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r7m12">
    <td>${teams[21].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[12],r7m12,r7)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 8: </th></tr>
    <tr id="r8"><td colspan="4"><button onclick="play(teams[5],teams[1],r8m1,r8), play(teams[4],teams[2],r8m2,r8), play(teams[0],teams[3],r8m3,r8), play(teams[6],teams[11],r8m4,r8), play(teams[7],teams[10],r8m5,r8), play(teams[8],teams[9],r8m6,r8), play(teams[17],teams[13],r8m7,r8), play(teams[16],teams[14],r8m8,r8), play(teams[12],teams[15],r8m9,r8), play(teams[18],teams[23],r8m10,r8), play(teams[19],teams[22],r8m11,r8), play(teams[20],teams[21],r8m12,r8)" class="play_button btn_effect">Play ALL</button></td>
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
    <tr id="r8m7">
    <td>${teams[17].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[13],r8m7,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m8">
    <td>${teams[16].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[14],r8m8,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m9">
    <td>${teams[12].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[15],r8m9,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m10">
    <td>${teams[18].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[23],r8m10,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m11">
    <td>${teams[19].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[22],r8m11,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r8m12">
    <td>${teams[20].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[21],r8m12,r8)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 9: </th></tr>
    <tr id="r9"><td colspan="4"><button onclick="play(teams[1],teams[4],r9m1,r9), play(teams[2],teams[3],r9m2,r9), play(teams[11],teams[5],r9m3,r9), play(teams[10],teams[6],r9m4,r9), play(teams[9],teams[7],r9m5,r9), play(teams[8],teams[0],r9m6,r9), play(teams[13],teams[16],r9m7,r9), play(teams[14],teams[15],r9m8,r9), play(teams[23],teams[17],r9m9,r9), play(teams[22],teams[18],r9m10,r9), play(teams[21],teams[19],r9m11,r9), play(teams[20],teams[12],r9m12,r9)" class="play_button btn_effect">Play ALL</button></td>
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
    </tr>
    <tr id="r9m7">
    <td>${teams[13].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[16],r9m7,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m8">
    <td>${teams[14].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[15],r9m8,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m9">
    <td>${teams[23].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[17],r9m9,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m10">
    <td>${teams[22].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[18],r9m10,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m11">
    <td>${teams[21].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[19],r9m11,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r9m12">
    <td>${teams[20].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[12],r9m12,r9)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 10: </th></tr>
    <tr id="r10"><td colspan="4"><button onclick="play(teams[3],teams[1],r10m1,r10), play(teams[0],teams[2],r10m2,r10), play(teams[4],teams[11],r10m3,r10), play(teams[5],teams[10],r10m4,r10), play(teams[6],teams[9],r10m5,r10), play(teams[7],teams[8],r10m6,r10),play(teams[15],teams[13],r10m7,r10), play(teams[12],teams[14],r10m8,r10), play(teams[16],teams[23],r10m9,r10), play(teams[17],teams[22],r10m10,r10), play(teams[18],teams[21],r10m11,r10), play(teams[19],teams[20],r10m12,r10)" class="play_button btn_effect">Play ALL</button></td>
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
    </tr>
    <tr id="r10m7">
    <td>${teams[15].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[13],r10m7,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m8">
    <td>${teams[12].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[14],r10m8,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m9">
    <td>${teams[16].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[23],r10m9,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m10">
    <td>${teams[17].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[22],r10m10,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m11">
    <td>${teams[18].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[21],r10m11,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r10m12">
    <td>${teams[19].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[20],r10m12,r10)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 11: </th></tr>
    <tr id="r11"><td colspan="4"><button onclick="play(teams[1],teams[2],r11m1,r11), play(teams[11],teams[3],r11m2,r11), play(teams[10],teams[4],r11m3,r11), play(teams[9],teams[5],r11m4,r11), play(teams[8],teams[6],r11m5,r11), play(teams[7],teams[0],r11m6,r11), play(teams[13],teams[14],r11m7,r11), play(teams[23],teams[15],r11m8,r11), play(teams[22],teams[16],r11m9,r11), play(teams[21],teams[17],r11m10,r11), play(teams[20],teams[18],r11m11,r11), play(teams[19],teams[12],r11m12,r11)" class="play_button btn_effect">Play ALL</button></td>
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
    </tr>
    <tr id="r11m7">
    <td>${teams[13].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[14],r11m7,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m8">
    <td>${teams[23].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[15],r11m8,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m9">
    <td>${teams[22].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[16],r11m9,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m10">
    <td>${teams[21].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[17],r11m10,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m11">
    <td>${teams[20].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[18],r11m11,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r11m12">
    <td>${teams[19].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[12],r11m12,r11)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
   
    `<tr><th colspan="4">Round 12: </th></tr>
<tr id="r12"><td colspan="4"><button onclick="play(teams[1],teams[12],r12m1,r12), play(teams[2],teams[13],r12m2,r12), play(teams[3],teams[14],r12m3,r12), play(teams[4],teams[15],r12m4,r12), play(teams[5],teams[16],r12m5,r12), play(teams[6],teams[17],r12m6,r12), play(teams[7],teams[18],r12m7,r12), play(teams[8],teams[19],r12m8,r12), play(teams[9],teams[20],r12m9,r12), play(teams[10],teams[21],r12m10,r12), play(teams[11],teams[22],r12m11,r12), play(teams[0],teams[23],r12m12,r12)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r12m1">
<td>${teams[1].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[12],r12m1,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m2">
<td>${teams[2].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[13],r12m2,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m3">
<td>${teams[3].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[14],r12m3,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m4">
<td>${teams[4].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[15],r12m4,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m5">
<td>${teams[5].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[16],r12m5,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m6">
<td>${teams[6].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[17],r12m6,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r12m7">
<td>${teams[7].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[18],r12m7,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m8">
<td>${teams[8].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[19],r12m8,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m9">
<td>${teams[9].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[20],r12m9,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m10">
<td>${teams[10].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[21],r12m10,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m11">
<td>${teams[11].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[22],r12m11,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r12m12">
<td>${teams[0].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[23],r12m12,r12)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 13: </th></tr>
<tr id="r13"><td colspan="4"><button onclick="play(teams[1],teams[13],r13m1,r13), play(teams[2],teams[14],r13m2,r13), play(teams[3],teams[15],r13m3,r13), play(teams[4],teams[16],r13m4,r13), play(teams[5],teams[17],r13m5,r13), play(teams[6],teams[18],r13m6,r13), play(teams[7],teams[19],r13m7,r13), play(teams[8],teams[20],r13m8,r13), play(teams[9],teams[21],r13m9,r13), play(teams[10],teams[22],r13m10,r13), play(teams[11],teams[23],r13m11,r13), play(teams[0],teams[12],r13m12,r13)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r13m1">
<td>${teams[1].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[13],r13m1,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m2">
<td>${teams[2].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[14],r13m2,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m3">
<td>${teams[3].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[15],r13m3,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m4">
<td>${teams[4].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[16],r13m4,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m5">
<td>${teams[5].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[17],r13m5,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m6">
<td>${teams[6].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[18],r13m6,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r13m7">
<td>${teams[7].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[19],r13m7,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m8">
<td>${teams[8].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[20],r13m8,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m9">
<td>${teams[9].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[21],r13m9,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m10">
<td>${teams[10].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[22],r13m10,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m11">
<td>${teams[11].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[23],r13m11,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r13m12">
<td>${teams[0].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[12],r13m12,r13)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 14: </th></tr>
<tr id="r14"><td colspan="4"><button onclick="play(teams[1],teams[14],r14m1,r14), play(teams[2],teams[15],r14m2,r14), play(teams[3],teams[16],r14m3,r14), play(teams[4],teams[17],r14m4,r14), play(teams[5],teams[18],r14m5,r14), play(teams[6],teams[19],r14m6,r14), play(teams[7],teams[20],r14m7,r14), play(teams[8],teams[21],r14m8,r14), play(teams[9],teams[22],r14m9,r14), play(teams[10],teams[23],r14m10,r14), play(teams[11],teams[12],r14m11,r14), play(teams[0],teams[13],r14m12,r14)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r14m1">
<td>${teams[1].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[14],r14m1,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m2">
<td>${teams[2].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[15],r14m2,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m3">
<td>${teams[3].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[16],r14m3,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m4">
<td>${teams[4].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[17],r14m4,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m5">
<td>${teams[5].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[18],r14m5,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m6">
<td>${teams[6].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[19],r14m6,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r14m7">
<td>${teams[7].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[20],r14m7,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m8">
<td>${teams[8].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[21],r14m8,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m9">
<td>${teams[9].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[22],r14m9,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m10">
<td>${teams[10].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[23],r14m10,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m11">
<td>${teams[11].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[12],r14m11,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r14m12">
<td>${teams[0].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[13],r14m12,r14)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 15: </th></tr>
<tr id="r15"><td colspan="4"><button onclick="play(teams[1],teams[15],r15m1,r15), play(teams[2],teams[16],r15m2,r15), play(teams[3],teams[17],r15m3,r15), play(teams[4],teams[18],r15m4,r15), play(teams[5],teams[19],r15m5,r15), play(teams[6],teams[20],r15m6,r15), play(teams[7],teams[21],r15m7,r15), play(teams[8],teams[22],r15m8,r15), play(teams[9],teams[23],r15m9,r15), play(teams[10],teams[12],r15m10,r15), play(teams[11],teams[13],r15m11,r15), play(teams[0],teams[14],r15m12,r15)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r15m1">
<td>${teams[1].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[15],r15m1,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m2">
<td>${teams[2].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[16],r15m2,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m3">
<td>${teams[3].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[17],r15m3,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m4">
<td>${teams[4].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[18],r15m4,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m5">
<td>${teams[5].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[19],r15m5,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m6">
<td>${teams[6].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[20],r15m6,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r15m7">
<td>${teams[7].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[21],r15m7,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m8">
<td>${teams[8].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[22],r15m8,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m9">
<td>${teams[9].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[23],r15m9,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m10">
<td>${teams[10].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[12],r15m10,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m11">
<td>${teams[11].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[13],r15m11,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r15m12">
<td>${teams[0].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[14],r15m12,r15)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 16: </th></tr>
<tr id="r16"><td colspan="4"><button onclick="play(teams[1],teams[16],r16m1,r16), play(teams[2],teams[17],r16m2,r16), play(teams[3],teams[18],r16m3,r16), play(teams[4],teams[19],r16m4,r16), play(teams[5],teams[20],r16m5,r16), play(teams[6],teams[21],r16m6,r16), play(teams[7],teams[22],r16m7,r16), play(teams[8],teams[23],r16m8,r16), play(teams[9],teams[12],r16m9,r16), play(teams[10],teams[13],r16m10,r16), play(teams[11],teams[14],r16m11,r16), play(teams[0],teams[15],r16m12,r16)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r16m1">
<td>${teams[1].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[16],r16m1,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m2">
<td>${teams[2].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[17],r16m2,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m3">
<td>${teams[3].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[18],r16m3,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m4">
<td>${teams[4].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[19],r16m4,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m5">
<td>${teams[5].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[20],r16m5,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m6">
<td>${teams[6].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[21],r16m6,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r16m7">
<td>${teams[7].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[22],r16m7,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m8">
<td>${teams[8].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[23],r16m8,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m9">
<td>${teams[9].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[12],r16m9,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m10">
<td>${teams[10].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[13],r16m10,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m11">
<td>${teams[11].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[14],r16m11,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r16m12">
<td>${teams[0].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[15],r16m12,r16)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 17: </th></tr>
<tr id="r17"><td colspan="4"><button onclick="play(teams[1],teams[17],r17m1,r17), play(teams[2],teams[18],r17m2,r17), play(teams[3],teams[19],r17m3,r17), play(teams[4],teams[20],r17m4,r17), play(teams[5],teams[21],r17m5,r17), play(teams[6],teams[22],r17m6,r17), play(teams[7],teams[23],r17m7,r17), play(teams[8],teams[12],r17m8,r17), play(teams[9],teams[13],r17m9,r17), play(teams[10],teams[14],r17m10,r17), play(teams[11],teams[15],r17m11,r17), play(teams[0],teams[16],r17m12,r17)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r17m1">
<td>${teams[1].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[17],r17m1,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m2">
<td>${teams[2].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[18],r17m2,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m3">
<td>${teams[3].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[19],r17m3,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m4">
<td>${teams[4].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[20],r17m4,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m5">
<td>${teams[5].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[21],r17m5,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m6">
<td>${teams[6].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[22],r17m6,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r17m7">
<td>${teams[7].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[23],r17m7,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m8">
<td>${teams[8].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[12],r17m8,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m9">
<td>${teams[9].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[13],r17m9,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m10">
<td>${teams[10].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[14],r17m10,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m11">
<td>${teams[11].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[15],r17m11,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r17m12">
<td>${teams[0].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[16],r17m12,r17)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 18: </th></tr>
<tr id="r18"><td colspan="4"><button onclick="play(teams[1],teams[18],r18m1,r18), play(teams[2],teams[19],r18m2,r18), play(teams[3],teams[20],r18m3,r18), play(teams[4],teams[21],r18m4,r18), play(teams[5],teams[22],r18m5,r18), play(teams[6],teams[23],r18m6,r18), play(teams[7],teams[12],r18m7,r18), play(teams[8],teams[13],r18m8,r18), play(teams[9],teams[14],r18m9,r18), play(teams[10],teams[15],r18m10,r18), play(teams[11],teams[16],r18m11,r18), play(teams[0],teams[17],r18m12,r18)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r18m1">
<td>${teams[1].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[18],r18m1,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m2">
<td>${teams[2].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[19],r18m2,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m3">
<td>${teams[3].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[20],r18m3,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m4">
<td>${teams[4].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[21],r18m4,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m5">
<td>${teams[5].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[22],r18m5,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m6">
<td>${teams[6].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[23],r18m6,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r18m7">
<td>${teams[7].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[12],r18m7,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m8">
<td>${teams[8].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[13],r18m8,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m9">
<td>${teams[9].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[14],r18m9,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m10">
<td>${teams[10].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[15],r18m10,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m11">
<td>${teams[11].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[16],r18m11,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r18m12">
<td>${teams[0].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[17],r18m12,r18)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 19: </th></tr>
<tr id="r19"><td colspan="4"><button onclick="play(teams[1],teams[19],r19m1,r19), play(teams[2],teams[20],r19m2,r19), play(teams[3],teams[21],r19m3,r19), play(teams[4],teams[22],r19m4,r19), play(teams[5],teams[23],r19m5,r19), play(teams[6],teams[12],r19m6,r19), play(teams[7],teams[13],r19m7,r19), play(teams[8],teams[14],r19m8,r19), play(teams[9],teams[15],r19m9,r19), play(teams[10],teams[16],r19m10,r19), play(teams[11],teams[17],r19m11,r19), play(teams[0],teams[18],r19m12,r19)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r19m1">
<td>${teams[1].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[19],r19m1,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m2">
<td>${teams[2].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[20],r19m2,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m3">
<td>${teams[3].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[21],r19m3,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m4">
<td>${teams[4].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[22],r19m4,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m5">
<td>${teams[5].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[23],r19m5,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m6">
<td>${teams[6].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[12],r19m6,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r19m7">
<td>${teams[7].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[13],r19m7,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m8">
<td>${teams[8].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[14],r19m8,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m9">
<td>${teams[9].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[15],r19m9,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m10">
<td>${teams[10].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[16],r19m10,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m11">
<td>${teams[11].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[17],r19m11,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r19m12">
<td>${teams[0].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[18],r19m12,r19)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 20: </th></tr>
<tr id="r20"><td colspan="4"><button onclick="play(teams[1],teams[20],r20m1,r20), play(teams[2],teams[21],r20m2,r20), play(teams[3],teams[22],r20m3,r20), play(teams[4],teams[23],r20m4,r20), play(teams[5],teams[12],r20m5,r20), play(teams[6],teams[13],r20m6,r20), play(teams[7],teams[14],r20m7,r20), play(teams[8],teams[15],r20m8,r20), play(teams[9],teams[16],r20m9,r20), play(teams[10],teams[17],r20m10,r20), play(teams[11],teams[18],r20m11,r20), play(teams[0],teams[19],r20m12,r20)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r20m1">
<td>${teams[1].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[20],r20m1,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m2">
<td>${teams[2].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[21],r20m2,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m3">
<td>${teams[3].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[22],r20m3,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m4">
<td>${teams[4].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[23],r20m4,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m5">
<td>${teams[5].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[12],r20m5,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m6">
<td>${teams[6].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[13],r20m6,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r20m7">
<td>${teams[7].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[14],r20m7,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m8">
<td>${teams[8].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[15],r20m8,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m9">
<td>${teams[9].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[16],r20m9,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m10">
<td>${teams[10].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[17],r20m10,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m11">
<td>${teams[11].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[18],r20m11,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r20m12">
<td>${teams[0].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[19],r20m12,r20)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 21: </th></tr>
<tr id="r21"><td colspan="4"><button onclick="play(teams[1],teams[21],r21m1,r21), play(teams[2],teams[22],r21m2,r21), play(teams[3],teams[23],r21m3,r21), play(teams[4],teams[12],r21m4,r21), play(teams[5],teams[13],r21m5,r21), play(teams[6],teams[14],r21m6,r21), play(teams[7],teams[15],r21m7,r21), play(teams[8],teams[16],r21m8,r21), play(teams[9],teams[17],r21m9,r21), play(teams[10],teams[18],r21m10,r21), play(teams[11],teams[19],r21m11,r21), play(teams[0],teams[20],r21m12,r21)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r21m1">
<td>${teams[1].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[21],r21m1,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m2">
<td>${teams[2].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[22],r21m2,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m3">
<td>${teams[3].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[23],r21m3,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m4">
<td>${teams[4].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[12],r21m4,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m5">
<td>${teams[5].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[13],r21m5,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m6">
<td>${teams[6].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[14],r21m6,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r21m7">
<td>${teams[7].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[15],r21m7,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m8">
<td>${teams[8].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[16],r21m8,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m9">
<td>${teams[9].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[17],r21m9,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m10">
<td>${teams[10].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[18],r21m10,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m11">
<td>${teams[11].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[19],r21m11,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r21m12">
<td>${teams[0].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[20],r21m12,r21)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 22: </th></tr>
<tr id="r22"><td colspan="4"><button onclick="play(teams[1],teams[22],r22m1,r22), play(teams[2],teams[23],r22m2,r22), play(teams[3],teams[12],r22m3,r22), play(teams[4],teams[13],r22m4,r22), play(teams[5],teams[14],r22m5,r22), play(teams[6],teams[15],r22m6,r22), play(teams[7],teams[16],r22m7,r22), play(teams[8],teams[17],r22m8,r22), play(teams[9],teams[18],r22m9,r22), play(teams[10],teams[19],r22m10,r22), play(teams[11],teams[20],r22m11,r22), play(teams[0],teams[21],r22m12,r22)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r22m1">
<td>${teams[1].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[22],r22m1,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m2">
<td>${teams[2].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[23],r22m2,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m3">
<td>${teams[3].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[12],r22m3,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m4">
<td>${teams[4].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[13],r22m4,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m5">
<td>${teams[5].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[14],r22m5,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m6">
<td>${teams[6].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[15],r22m6,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r22m7">
<td>${teams[7].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[16],r22m7,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m8">
<td>${teams[8].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[17],r22m8,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m9">
<td>${teams[9].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[18],r22m9,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m10">
<td>${teams[10].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[19],r22m10,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m11">
<td>${teams[11].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[20],r22m11,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r22m12">
<td>${teams[0].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[21],r22m12,r22)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,`<tr><th colspan="4">Round 23: </th></tr>
<tr id="r23"><td colspan="4"><button onclick="play(teams[1],teams[23],r23m1,r23), play(teams[2],teams[12],r23m2,r23), play(teams[3],teams[13],r23m3,r23), play(teams[4],teams[14],r23m4,r23), play(teams[5],teams[15],r23m5,r23), play(teams[6],teams[16],r23m6,r23), play(teams[7],teams[17],r23m7,r23), play(teams[8],teams[18],r23m8,r23), play(teams[9],teams[19],r23m9,r23), play(teams[10],teams[20],r23m10,r23), play(teams[11],teams[21],r23m11,r23), play(teams[0],teams[22],r23m12,r23)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r23m1">
<td>${teams[1].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[23],r23m1,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m2">
<td>${teams[2].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[12],r23m2,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m3">
<td>${teams[3].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[13],r23m3,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m4">
<td>${teams[4].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[14],r23m4,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m5">
<td>${teams[5].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[15],r23m5,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m6">
<td>${teams[6].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[16],r23m6,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r23m7">
<td>${teams[7].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[17],r23m7,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m8">
<td>${teams[8].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[18],r23m8,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m9">
<td>${teams[9].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[19],r23m9,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m10">
<td>${teams[10].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[20],r23m10,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m11">
<td>${teams[11].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[21],r23m11,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r23m12">
<td>${teams[0].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[22],r23m12,r23)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`
<tr>
    <th colspan="4">Round 24</th>
</tr>
<tr id="r24"><td colspan="4"><button onclick="play(teams[1],teams[0],r24m1,r24), play(teams[2],teams[11],r24m2,r24), play(teams[3],teams[10],r24m3,r24), play(teams[4],teams[9],r24m4,r24), play(teams[5],teams[8],r24m5,r24), play(teams[6],teams[7],r24m6,r24), play(teams[13],teams[12],r24m7,r24), play(teams[14],teams[23],r24m8,r24), play(teams[15],teams[22],r24m9,r24), play(teams[16],teams[21],r24m10,r24), play(teams[17],teams[20],r24m11,r24), play(teams[18],teams[19],r24m12,r24)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r24m1">
    <td id="host">${teams[1].name}</td>
    <td id="guest">${teams[0].name}</td>
    <td colspan="2"><button onclick="play(teams[1],teams[0],r24m1,r24)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r24m2">
    <td>${teams[2].name}</td>
    <td>${teams[11].name}</td>
    <td colspan="2"><button onclick="play(teams[2],teams[11],r24m2,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m3">
    <td>${teams[3].name}</td>
    <td>${teams[10].name}</td>
    <td colspan="2"><button onclick="play(teams[3],teams[10],r24m3,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m4">
    <td>${teams[4].name}</td>
    <td>${teams[9].name}</td>
    <td colspan="2"><button onclick="play(teams[4],teams[9],r24m4,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m5">
    <td>${teams[5].name}</td>
    <td>${teams[8].name}</td>
    <td colspan="2"><button onclick="play(teams[5],teams[8],r24m5,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m6">
    <td>${teams[6].name}</td>
    <td>${teams[7].name}</td>
    <td colspan="2"><button onclick="play(teams[6],teams[7],r24m6,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>

<tr id="r24m7">
<td id="host">${teams[13].name}</td>
<td id="guest">${teams[12].name}</td>
<td colspan="2"><button onclick="play(teams[13],teams[12],r24m7,r24)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r24m8">
<td>${teams[14].name}</td>
<td>${teams[23].name}</td>
<td colspan="2"><button onclick="play(teams[14],teams[23],r24m8,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m9">
<td>${teams[15].name}</td>
<td>${teams[22].name}</td>
<td colspan="2"><button onclick="play(teams[15],teams[22],r24m9,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m10">
<td>${teams[16].name}</td>
<td>${teams[21].name}</td>
<td colspan="2"><button onclick="play(teams[16],teams[21],r24m10,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m11">
<td>${teams[17].name}</td>
<td>${teams[20].name}</td>
<td colspan="2"><button onclick="play(teams[17],teams[20],r24m11,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r24m12">
<td>${teams[18].name}</td>
<td>${teams[19].name}</td>
<td colspan="2"><button onclick="play(teams[18],teams[19],r24m12,r24)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr>
    <th colspan="4">Round 25</th>
</tr>
<tr id="r25"><td colspan="4"><button onclick="play(teams[11],teams[1],r25m1,r25), play(teams[10],teams[2],r25m2,r25), play(teams[9],teams[3],r25m3,r25), play(teams[8],teams[4],r25m4,r25), play(teams[7],teams[5],r25m5,r25), play(teams[0],teams[6],r25m6,r25), play(teams[23],teams[13],r25m7,r25), play(teams[22],teams[14],r25m8,r25), play(teams[21],teams[15],r25m9,r25), play(teams[20],teams[16],r25m10,r25), play(teams[19],teams[17],r25m11,r25), play(teams[12],teams[18],r25m12,r25)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
<tr id="r25m1">
    <td id="host">${teams[11].name}</td>
    <td id="guest">${teams[1].name}</td>
    <td colspan="2"><button onclick="play(teams[11],teams[1],r25m1,r25)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r25m2">
    <td>${teams[10].name}</td>
    <td>${teams[2].name}</td>
    <td colspan="2"><button onclick="play(teams[10],teams[2],r25m2,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m3">
    <td>${teams[9].name}</td>
    <td>${teams[3].name}</td>
    <td colspan="2"><button onclick="play(teams[9],teams[3],r25m3,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m4">
    <td>${teams[8].name}</td>
    <td>${teams[4].name}</td>
    <td colspan="2"><button onclick="play(teams[8],teams[4],r25m4,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m5">
    <td>${teams[7].name}</td>
    <td>${teams[5].name}</td>
    <td colspan="2"><button onclick="play(teams[7],teams[5],r25m5,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m6">
    <td>${teams[0].name}</td>
    <td>${teams[6].name}</td>
    <td colspan="2"><button onclick="play(teams[0],teams[6],r25m6,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
    <th colspan="4" class="end_round">X</th>
</tr>
<tr id="r25m7">
    <td id="host">${teams[23].name}</td>
    <td id="guest">${teams[13].name}</td>
    <td colspan="2"><button onclick="play(teams[23],teams[13],r25m7,r25)" class="play_button btn_effect">Play</button></td> 
</tr>
<tr id="r25m8">
    <td>${teams[22].name}</td>
    <td>${teams[14].name}</td>
    <td colspan="2"><button onclick="play(teams[22],teams[14],r25m8,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m9">
    <td>${teams[21].name}</td>
    <td>${teams[15].name}</td>
    <td colspan="2"><button onclick="play(teams[21],teams[15],r25m9,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m10">
    <td>${teams[20].name}</td>
    <td>${teams[16].name}</td>
    <td colspan="2"><button onclick="play(teams[20],teams[16],r25m10,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m11">
    <td>${teams[19].name}</td>
    <td>${teams[17].name}</td>
    <td colspan="2"><button onclick="play(teams[19],teams[17],r25m11,r25)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r25m12">
    <td>${teams[12].name}</td>
    <td>${teams[18].name}</td>
    <td colspan="2"><button onclick="play(teams[12],teams[18],r25m12,r25)" class="play_button btn_effect">Play</button></td>
</tr>`,
`<tr><th colspan="4">Round 26: </th></tr>
<tr id="r26"><td colspan="4"><button onclick="play(teams[1],teams[10],r26m1,r26), play(teams[2],teams[9],r26m2,r26), play(teams[3],teams[8],r26m3,r26), play(teams[4],teams[7],r26m4,r26), play(teams[5],teams[6],r26m5,r26), play(teams[11],teams[0],r26m6,r26), play(teams[13],teams[22],r26m7,r26), play(teams[14],teams[21],r26m8,r26), play(teams[15],teams[20],r26m9,r26), play(teams[16],teams[19],r26m10,r26), play(teams[17],teams[18],r26m11,r26), play(teams[23],teams[12],r26m12,r26)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r26m1">
    <td>${teams[1].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[10],r26m1,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m2">
    <td>${teams[2].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[9],r26m2,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m3">
    <td>${teams[3].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[8],r26m3,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m4">
    <td>${teams[4].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[7],r26m4,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m5">
    <td>${teams[5].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[6],r26m5,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m6">
    <td>${teams[11].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[0],r26m6,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r26m7">
    <td>${teams[13].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[22],r26m7,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m8">
    <td>${teams[14].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[21],r26m8,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m9">
    <td>${teams[15].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[20],r26m9,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m10">
    <td>${teams[16].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[19],r26m10,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m11">
    <td>${teams[17].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[18],r26m11,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r26m12">
    <td>${teams[23].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[12],r26m12,r26)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 27: </th></tr>
    <tr id="r27"><td colspan="4"><button onclick="play(teams[9],teams[1],r27m1,r27), play(teams[8],teams[2],r27m2,r27), play(teams[7],teams[3],r27m3,r27), play(teams[6],teams[4],r27m4,r27), play(teams[0],teams[5],r27m5,r27), play(teams[10],teams[11],r27m6,r27), play(teams[21],teams[13],r27m7,r27), play(teams[20],teams[14],r27m8,r27), play(teams[19],teams[15],r27m9,r27), play(teams[18],teams[16],r27m10,r27), play(teams[12],teams[17],r27m11,r27), play(teams[22],teams[23],r27m12,r27)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r27m1">
    <td>${teams[9].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[1],r27m1,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m2">
    <td>${teams[8].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[2],r27m2,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m3">
    <td>${teams[7].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[3],r27m3,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m4">
    <td>${teams[6].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[4],r27m4,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m5">
    <td>${teams[0].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[5],r27m5,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m6">
    <td>${teams[10].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[11],r27m6,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r27m7">
    <td>${teams[21].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[13],r27m7,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m8">
    <td>${teams[20].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[14],r27m8,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m9">
    <td>${teams[19].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[15],r27m9,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m10">
    <td>${teams[18].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[16],r27m10,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m11">
    <td>${teams[12].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[17],r27m11,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r27m12">
    <td>${teams[22].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[23],r27m12,r27)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 28: </th></tr>
    <tr id="r28"><td colspan="4"><button onclick="play(teams[1],teams[8],r28m1,r28), play(teams[2],teams[7],r28m2,r28), play(teams[3],teams[6],r28m3,r28), play(teams[4],teams[5],r28m4,r28), play(teams[11],teams[9],r28m5,r28), play(teams[10],teams[0],r28m6,r28), play(teams[13],teams[20],r28m7,r28), play(teams[14],teams[19],r28m8,r28), play(teams[15],teams[18],r28m9,r28), play(teams[16],teams[17],r28m10,r28), play(teams[23],teams[21],r28m11,r28), play(teams[22],teams[12],r28m12,r28)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r28m1">
    <td>${teams[1].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[8],r28m1,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m2">
    <td>${teams[2].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[7],r28m2,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m3">
    <td>${teams[3].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[6],r28m3,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m4">
    <td>${teams[4].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[5],r28m4,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m5">
    <td>${teams[11].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[9],r28m5,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m6">
    <td>${teams[10].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[0],r28m6,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r28m7">
    <td>${teams[13].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[20],r28m7,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m8">
    <td>${teams[14].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[19],r28m8,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m9">
    <td>${teams[15].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[18],r28m9,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m10">
    <td>${teams[16].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[17],r28m10,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m11">
    <td>${teams[23].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[21],r28m11,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r28m12">
    <td>${teams[22].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[12],r28m12,r28)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 29: </th></tr>
    <tr id="r29"><td colspan="4"><button onclick="play(teams[7],teams[1],r29m1,r29), play(teams[6],teams[2],r29m2,r29), play(teams[5],teams[3],r29m3,r29), play(teams[0],teams[4],r29m4,r29), play(teams[8],teams[11],r29m5,r29), play(teams[9],teams[10],r29m6,r29), play(teams[19],teams[13],r29m7,r29), play(teams[18],teams[14],r29m8,r29), play(teams[17],teams[15],r29m9,r29), play(teams[12],teams[16],r29m10,r29), play(teams[20],teams[23],r29m11,r29), play(teams[21],teams[22],r29m12,r29)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r29m1">
    <td>${teams[7].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[1],r29m1,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m2">
    <td>${teams[6].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[2],r29m2,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m3">
    <td>${teams[5].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[3],r29m3,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m4">
    <td>${teams[0].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[4],r29m4,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m5">
    <td>${teams[8].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[11],r29m5,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m6">
    <td>${teams[9].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[10],r29m6,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r29m7">
    <td>${teams[19].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[13],r29m7,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m8">
    <td>${teams[18].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[14],r29m8,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m9">
    <td>${teams[17].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[15],r29m9,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m10">
    <td>${teams[12].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[16],r29m10,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m11">
    <td>${teams[20].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[23],r29m11,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r29m12">
    <td>${teams[21].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[22],r29m12,r29)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 30: </th></tr>
    <tr id="r30"><td colspan="4"><button onclick="play(teams[1],teams[6],r30m1,r30), play(teams[2],teams[5],r30m2,r30), play(teams[3],teams[4],r30m3,r30), play(teams[11],teams[7],r30m4,r30), play(teams[10],teams[8],r30m5,r30), play(teams[9],teams[0],r30m6,r30), play(teams[13],teams[18],r30m7,r30), play(teams[14],teams[17],r30m8,r30), play(teams[15],teams[16],r30m9,r30), play(teams[23],teams[19],r30m10,r30), play(teams[22],teams[20],r30m11,r30), play(teams[21],teams[12],r30m12,r30)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r30m1">
    <td>${teams[1].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[6],r30m1,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m2">
    <td>${teams[2].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[5],r30m2,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m3">
    <td>${teams[3].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[4],r30m3,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m4">
    <td>${teams[11].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[7],r30m4,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m5">
    <td>${teams[10].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[8],r30m5,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m6">
    <td>${teams[9].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[0],r30m6,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r30m7">
    <td>${teams[13].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[18],r30m7,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m8">
    <td>${teams[14].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[17],r30m8,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m9">
    <td>${teams[15].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[16],r30m9,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m10">
    <td>${teams[23].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[19],r30m10,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m11">
    <td>${teams[22].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[20],r30m11,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r30m12">
    <td>${teams[21].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[12],r30m12,r30)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 31: </th></tr>
    <tr id="r31"><td colspan="4"><button onclick="play(teams[5],teams[1],r31m1,r31), play(teams[4],teams[2],r31m2,r31), play(teams[0],teams[3],r31m3,r31), play(teams[6],teams[11],r31m4,r31), play(teams[7],teams[10],r31m5,r31), play(teams[8],teams[9],r31m6,r31), play(teams[17],teams[13],r31m7,r31), play(teams[16],teams[14],r31m8,r31), play(teams[12],teams[15],r31m9,r31), play(teams[18],teams[23],r31m10,r31), play(teams[19],teams[22],r31m11,r31), play(teams[20],teams[21],r31m12,r31)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r31m1">
    <td>${teams[5].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[1],r31m1,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m2">
    <td>${teams[4].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[2],r31m2,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m3">
    <td>${teams[0].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[3],r31m3,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m4">
    <td>${teams[6].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[11],r31m4,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m5">
    <td>${teams[7].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[10],r31m5,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m6">
    <td>${teams[8].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[9],r31m6,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r31m7">
    <td>${teams[17].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[13],r31m7,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m8">
    <td>${teams[16].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[14],r31m8,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m9">
    <td>${teams[12].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[15],r31m9,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m10">
    <td>${teams[18].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[23],r31m10,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m11">
    <td>${teams[19].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[22],r31m11,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r31m12">
    <td>${teams[20].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[21],r31m12,r31)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    `,
    `<tr><th colspan="4">Round 32: </th></tr>
    <tr id="r32"><td colspan="4"><button onclick="play(teams[1],teams[4],r32m1,r32), play(teams[2],teams[3],r32m2,r32), play(teams[11],teams[5],r32m3,r32), play(teams[10],teams[6],r32m4,r32), play(teams[9],teams[7],r32m5,r32), play(teams[8],teams[0],r32m6,r32), play(teams[13],teams[16],r32m7,r32), play(teams[14],teams[15],r32m8,r32), play(teams[23],teams[17],r32m9,r32), play(teams[22],teams[18],r32m10,r32), play(teams[21],teams[19],r32m11,r32), play(teams[20],teams[12],r32m12,r32)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r32m1">
    <td>${teams[1].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[4],r32m1,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m2">
    <td>${teams[2].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[2],teams[3],r32m2,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m3">
    <td>${teams[11].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[5],r32m3,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m4">
    <td>${teams[10].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[6],r32m4,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m5">
    <td>${teams[9].name} </td><td> ${teams[7].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[7],r32m5,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m6">
    <td>${teams[8].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[0],r32m6,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r32m7">
    <td>${teams[13].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[16],r32m7,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m8">
    <td>${teams[14].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[14],teams[15],r32m8,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m9">
    <td>${teams[23].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[17],r32m9,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m10">
    <td>${teams[22].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[18],r32m10,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m11">
    <td>${teams[21].name} </td><td> ${teams[19].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[19],r32m11,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r32m12">
    <td>${teams[20].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[12],r32m12,r32)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 33: </th></tr>
    <tr id="r33"><td colspan="4"><button onclick="play(teams[3],teams[1],r33m1,r33), play(teams[0],teams[2],r33m2,r33), play(teams[4],teams[11],r33m3,r33), play(teams[5],teams[10],r33m4,r33), play(teams[6],teams[9],r33m5,r33), play(teams[7],teams[8],r33m6,r33),play(teams[15],teams[13],r33m7,r33), play(teams[12],teams[14],r33m8,r33), play(teams[16],teams[23],r33m9,r33), play(teams[17],teams[22],r33m10,r33), play(teams[18],teams[21],r33m11,r33), play(teams[19],teams[20],r33m12,r33)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r33m1">
    <td>${teams[3].name} </td><td> ${teams[1].name} </td>
    <td colspan="2"><button onclick="play(teams[3],teams[1],r33m1,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m2">
    <td>${teams[0].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[0],teams[2],r33m2,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m3">
    <td>${teams[4].name} </td><td> ${teams[11].name} </td>
    <td colspan="2"><button onclick="play(teams[4],teams[11],r33m3,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m4">
    <td>${teams[5].name} </td><td> ${teams[10].name} </td>
    <td colspan="2"><button onclick="play(teams[5],teams[10],r33m4,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m5">
    <td>${teams[6].name} </td><td> ${teams[9].name} </td>
    <td colspan="2"><button onclick="play(teams[6],teams[9],r33m5,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m6">
    <td>${teams[7].name} </td><td> ${teams[8].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[8],r33m6,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r33m7">
    <td>${teams[15].name} </td><td> ${teams[13].name} </td>
    <td colspan="2"><button onclick="play(teams[15],teams[13],r33m7,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m8">
    <td>${teams[12].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[12],teams[14],r33m8,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m9">
    <td>${teams[16].name} </td><td> ${teams[23].name} </td>
    <td colspan="2"><button onclick="play(teams[16],teams[23],r33m9,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m10">
    <td>${teams[17].name} </td><td> ${teams[22].name} </td>
    <td colspan="2"><button onclick="play(teams[17],teams[22],r33m10,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m11">
    <td>${teams[18].name} </td><td> ${teams[21].name} </td>
    <td colspan="2"><button onclick="play(teams[18],teams[21],r33m11,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r33m12">
    <td>${teams[19].name} </td><td> ${teams[20].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[20],r33m12,r33)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
    `<tr><th colspan="4">Round 34: </th></tr>
    <tr id="r34"><td colspan="4"><button onclick="play(teams[1],teams[2],r34m1,r34), play(teams[11],teams[3],r34m2,r34), play(teams[10],teams[4],r34m3,r34), play(teams[9],teams[5],r34m4,r34), play(teams[8],teams[6],r34m5,r34), play(teams[7],teams[0],r34m6,r34), play(teams[13],teams[14],r34m7,r34), play(teams[23],teams[15],r34m8,r34), play(teams[22],teams[16],r34m9,r34), play(teams[21],teams[17],r34m10,r34), play(teams[20],teams[18],r34m11,r34), play(teams[19],teams[12],r34m12,r34)" class="play_button btn_effect">Play ALL</button></td>
    </tr>
    <tr id="r34m1">
    <td>${teams[1].name} </td><td> ${teams[2].name} </td>
    <td colspan="2"><button onclick="play(teams[1],teams[2],r34m1,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m2">
    <td>${teams[11].name} </td><td> ${teams[3].name} </td>
    <td colspan="2"><button onclick="play(teams[11],teams[3],r34m2,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m3">
    <td>${teams[10].name} </td><td> ${teams[4].name} </td>
    <td colspan="2"><button onclick="play(teams[10],teams[4],r34m3,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m4">
    <td>${teams[9].name} </td><td> ${teams[5].name} </td>
    <td colspan="2"><button onclick="play(teams[9],teams[5],r34m4,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m5">
    <td>${teams[8].name} </td><td> ${teams[6].name} </td>
    <td colspan="2"><button onclick="play(teams[8],teams[6],r34m5,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m6">
    <td>${teams[7].name} </td><td> ${teams[0].name} </td>
    <td colspan="2"><button onclick="play(teams[7],teams[0],r34m6,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>
    <tr id="r34m7">
    <td>${teams[13].name} </td><td> ${teams[14].name} </td>
    <td colspan="2"><button onclick="play(teams[13],teams[14],r34m7,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m8">
    <td>${teams[23].name} </td><td> ${teams[15].name} </td>
    <td colspan="2"><button onclick="play(teams[23],teams[15],r34m8,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m9">
    <td>${teams[22].name} </td><td> ${teams[16].name} </td>
    <td colspan="2"><button onclick="play(teams[22],teams[16],r34m9,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m10">
    <td>${teams[21].name} </td><td> ${teams[17].name} </td>
    <td colspan="2"><button onclick="play(teams[21],teams[17],r34m10,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m11">
    <td>${teams[20].name} </td><td> ${teams[18].name} </td>
    <td colspan="2"><button onclick="play(teams[20],teams[18],r34m11,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr id="r34m12">
    <td>${teams[19].name} </td><td> ${teams[12].name} </td>
    <td colspan="2"><button onclick="play(teams[19],teams[12],r34m12,r34)" class="play_button btn_effect">Play</button></td>
    </tr>
    <tr>
    <th colspan="4" class="end_round">X</th>
    </tr>`,
   
    `<tr><th colspan="4">Round 35: </th></tr>
<tr id="r35"><td colspan="4"><button onclick="play(teams[1],teams[12],r35m1,r35), play(teams[2],teams[13],r35m2,r35), play(teams[3],teams[14],r35m3,r35), play(teams[4],teams[15],r35m4,r35), play(teams[5],teams[16],r35m5,r35), play(teams[6],teams[17],r35m6,r35), play(teams[7],teams[18],r35m7,r35), play(teams[8],teams[19],r35m8,r35), play(teams[9],teams[20],r35m9,r35), play(teams[10],teams[21],r35m10,r35), play(teams[11],teams[22],r35m11,r35), play(teams[0],teams[23],r35m12,r35)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r35m1">
<td>${teams[1].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[12],r35m1,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m2">
<td>${teams[2].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[13],r35m2,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m3">
<td>${teams[3].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[14],r35m3,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m4">
<td>${teams[4].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[15],r35m4,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m5">
<td>${teams[5].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[16],r35m5,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m6">
<td>${teams[6].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[17],r35m6,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r35m7">
<td>${teams[7].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[18],r35m7,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m8">
<td>${teams[8].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[19],r35m8,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m9">
<td>${teams[9].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[20],r35m9,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m10">
<td>${teams[10].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[21],r35m10,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m11">
<td>${teams[11].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[22],r35m11,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r35m12">
<td>${teams[0].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[23],r35m12,r35)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 36: </th></tr>
<tr id="r36"><td colspan="4"><button onclick="play(teams[1],teams[13],r36m1,r36), play(teams[2],teams[14],r36m2,r36), play(teams[3],teams[15],r36m3,r36), play(teams[4],teams[16],r36m4,r36), play(teams[5],teams[17],r36m5,r36), play(teams[6],teams[18],r36m6,r36), play(teams[7],teams[19],r36m7,r36), play(teams[8],teams[20],r36m8,r36), play(teams[9],teams[21],r36m9,r36), play(teams[10],teams[22],r36m10,r36), play(teams[11],teams[23],r36m11,r36), play(teams[0],teams[12],r36m12,r36)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r36m1">
<td>${teams[1].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[13],r36m1,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m2">
<td>${teams[2].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[14],r36m2,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m3">
<td>${teams[3].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[15],r36m3,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m4">
<td>${teams[4].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[16],r36m4,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m5">
<td>${teams[5].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[17],r36m5,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m6">
<td>${teams[6].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[18],r36m6,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r36m7">
<td>${teams[7].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[19],r36m7,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m8">
<td>${teams[8].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[20],r36m8,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m9">
<td>${teams[9].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[21],r36m9,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m10">
<td>${teams[10].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[22],r36m10,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m11">
<td>${teams[11].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[23],r36m11,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r36m12">
<td>${teams[0].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[12],r36m12,r36)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 37: </th></tr>
<tr id="r37"><td colspan="4"><button onclick="play(teams[1],teams[14],r37m1,r37), play(teams[2],teams[15],r37m2,r37), play(teams[3],teams[16],r37m3,r37), play(teams[4],teams[17],r37m4,r37), play(teams[5],teams[18],r37m5,r37), play(teams[6],teams[19],r37m6,r37), play(teams[7],teams[20],r37m7,r37), play(teams[8],teams[21],r37m8,r37), play(teams[9],teams[22],r37m9,r37), play(teams[10],teams[23],r37m10,r37), play(teams[11],teams[12],r37m11,r37), play(teams[0],teams[13],r37m12,r37)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r37m1">
<td>${teams[1].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[14],r37m1,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m2">
<td>${teams[2].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[15],r37m2,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m3">
<td>${teams[3].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[16],r37m3,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m4">
<td>${teams[4].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[17],r37m4,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m5">
<td>${teams[5].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[18],r37m5,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m6">
<td>${teams[6].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[19],r37m6,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r37m7">
<td>${teams[7].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[20],r37m7,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m8">
<td>${teams[8].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[21],r37m8,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m9">
<td>${teams[9].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[22],r37m9,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m10">
<td>${teams[10].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[23],r37m10,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m11">
<td>${teams[11].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[12],r37m11,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r37m12">
<td>${teams[0].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[13],r37m12,r37)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 38: </th></tr>
<tr id="r38"><td colspan="4"><button onclick="play(teams[1],teams[15],r38m1,r38), play(teams[2],teams[16],r38m2,r38), play(teams[3],teams[17],r38m3,r38), play(teams[4],teams[18],r38m4,r38), play(teams[5],teams[19],r38m5,r38), play(teams[6],teams[20],r38m6,r38), play(teams[7],teams[21],r38m7,r38), play(teams[8],teams[22],r38m8,r38), play(teams[9],teams[23],r38m9,r38), play(teams[10],teams[12],r38m10,r38), play(teams[11],teams[13],r38m11,r38), play(teams[0],teams[14],r38m12,r38)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r38m1">
<td>${teams[1].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[15],r38m1,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m2">
<td>${teams[2].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[16],r38m2,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m3">
<td>${teams[3].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[17],r38m3,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m4">
<td>${teams[4].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[18],r38m4,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m5">
<td>${teams[5].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[19],r38m5,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m6">
<td>${teams[6].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[20],r38m6,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r38m7">
<td>${teams[7].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[21],r38m7,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m8">
<td>${teams[8].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[22],r38m8,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m9">
<td>${teams[9].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[23],r38m9,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m10">
<td>${teams[10].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[12],r38m10,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m11">
<td>${teams[11].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[13],r38m11,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r38m12">
<td>${teams[0].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[14],r38m12,r38)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 39: </th></tr>
<tr id="r39"><td colspan="4"><button onclick="play(teams[1],teams[16],r39m1,r39), play(teams[2],teams[17],r39m2,r39), play(teams[3],teams[18],r39m3,r39), play(teams[4],teams[19],r39m4,r39), play(teams[5],teams[20],r39m5,r39), play(teams[6],teams[21],r39m6,r39), play(teams[7],teams[22],r39m7,r39), play(teams[8],teams[23],r39m8,r39), play(teams[9],teams[12],r39m9,r39), play(teams[10],teams[13],r39m10,r39), play(teams[11],teams[14],r39m11,r39), play(teams[0],teams[15],r39m12,r39)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r39m1">
<td>${teams[1].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[16],r39m1,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m2">
<td>${teams[2].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[17],r39m2,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m3">
<td>${teams[3].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[18],r39m3,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m4">
<td>${teams[4].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[19],r39m4,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m5">
<td>${teams[5].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[20],r39m5,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m6">
<td>${teams[6].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[21],r39m6,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r39m7">
<td>${teams[7].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[22],r39m7,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m8">
<td>${teams[8].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[23],r39m8,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m9">
<td>${teams[9].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[12],r39m9,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m10">
<td>${teams[10].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[13],r39m10,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m11">
<td>${teams[11].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[14],r39m11,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r39m12">
<td>${teams[0].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[15],r39m12,r39)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 40: </th></tr>
<tr id="r40"><td colspan="4"><button onclick="play(teams[1],teams[17],r40m1,r40), play(teams[2],teams[18],r40m2,r40), play(teams[3],teams[19],r40m3,r40), play(teams[4],teams[20],r40m4,r40), play(teams[5],teams[21],r40m5,r40), play(teams[6],teams[22],r40m6,r40), play(teams[7],teams[23],r40m7,r40), play(teams[8],teams[12],r40m8,r40), play(teams[9],teams[13],r40m9,r40), play(teams[10],teams[14],r40m10,r40), play(teams[11],teams[15],r40m11,r40), play(teams[0],teams[16],r40m12,r40)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r40m1">
<td>${teams[1].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[17],r40m1,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m2">
<td>${teams[2].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[18],r40m2,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m3">
<td>${teams[3].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[19],r40m3,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m4">
<td>${teams[4].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[20],r40m4,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m5">
<td>${teams[5].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[21],r40m5,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m6">
<td>${teams[6].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[22],r40m6,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r40m7">
<td>${teams[7].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[23],r40m7,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m8">
<td>${teams[8].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[12],r40m8,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m9">
<td>${teams[9].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[13],r40m9,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m10">
<td>${teams[10].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[14],r40m10,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m11">
<td>${teams[11].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[15],r40m11,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r40m12">
<td>${teams[0].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[16],r40m12,r40)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 41: </th></tr>
<tr id="r41"><td colspan="4"><button onclick="play(teams[1],teams[18],r41m1,r41), play(teams[2],teams[19],r41m2,r41), play(teams[3],teams[20],r41m3,r41), play(teams[4],teams[21],r41m4,r41), play(teams[5],teams[22],r41m5,r41), play(teams[6],teams[23],r41m6,r41), play(teams[7],teams[12],r41m7,r41), play(teams[8],teams[13],r41m8,r41), play(teams[9],teams[14],r41m9,r41), play(teams[10],teams[15],r41m10,r41), play(teams[11],teams[16],r41m11,r41), play(teams[0],teams[17],r41m12,r41)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r41m1">
<td>${teams[1].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[18],r41m1,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m2">
<td>${teams[2].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[19],r41m2,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m3">
<td>${teams[3].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[20],r41m3,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m4">
<td>${teams[4].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[21],r41m4,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m5">
<td>${teams[5].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[22],r41m5,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m6">
<td>${teams[6].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[23],r41m6,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r41m7">
<td>${teams[7].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[12],r41m7,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m8">
<td>${teams[8].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[13],r41m8,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m9">
<td>${teams[9].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[14],r41m9,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m10">
<td>${teams[10].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[15],r41m10,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m11">
<td>${teams[11].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[16],r41m11,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r41m12">
<td>${teams[0].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[17],r41m12,r41)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 42: </th></tr>
<tr id="r42"><td colspan="4"><button onclick="play(teams[1],teams[19],r42m1,r42), play(teams[2],teams[20],r42m2,r42), play(teams[3],teams[21],r42m3,r42), play(teams[4],teams[22],r42m4,r42), play(teams[5],teams[23],r42m5,r42), play(teams[6],teams[12],r42m6,r42), play(teams[7],teams[13],r42m7,r42), play(teams[8],teams[14],r42m8,r42), play(teams[9],teams[15],r42m9,r42), play(teams[10],teams[16],r42m10,r42), play(teams[11],teams[17],r42m11,r42), play(teams[0],teams[18],r42m12,r42)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r42m1">
<td>${teams[1].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[19],r42m1,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m2">
<td>${teams[2].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[20],r42m2,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m3">
<td>${teams[3].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[21],r42m3,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m4">
<td>${teams[4].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[22],r42m4,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m5">
<td>${teams[5].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[23],r42m5,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m6">
<td>${teams[6].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[12],r42m6,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r42m7">
<td>${teams[7].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[13],r42m7,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m8">
<td>${teams[8].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[14],r42m8,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m9">
<td>${teams[9].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[15],r42m9,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m10">
<td>${teams[10].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[16],r42m10,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m11">
<td>${teams[11].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[17],r42m11,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r42m12">
<td>${teams[0].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[18],r42m12,r42)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 43: </th></tr>
<tr id="r43"><td colspan="4"><button onclick="play(teams[1],teams[20],r43m1,r43), play(teams[2],teams[21],r43m2,r43), play(teams[3],teams[22],r43m3,r43), play(teams[4],teams[23],r43m4,r43), play(teams[5],teams[12],r43m5,r43), play(teams[6],teams[13],r43m6,r43), play(teams[7],teams[14],r43m7,r43), play(teams[8],teams[15],r43m8,r43), play(teams[9],teams[16],r43m9,r43), play(teams[10],teams[17],r43m10,r43), play(teams[11],teams[18],r43m11,r43), play(teams[0],teams[19],r43m12,r43)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r43m1">
<td>${teams[1].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[20],r43m1,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m2">
<td>${teams[2].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[21],r43m2,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m3">
<td>${teams[3].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[22],r43m3,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m4">
<td>${teams[4].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[23],r43m4,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m5">
<td>${teams[5].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[12],r43m5,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m6">
<td>${teams[6].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[13],r43m6,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r43m7">
<td>${teams[7].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[14],r43m7,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m8">
<td>${teams[8].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[15],r43m8,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m9">
<td>${teams[9].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[16],r43m9,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m10">
<td>${teams[10].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[17],r43m10,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m11">
<td>${teams[11].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[18],r43m11,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r43m12">
<td>${teams[0].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[19],r43m12,r43)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 44: </th></tr>
<tr id="r44"><td colspan="4"><button onclick="play(teams[1],teams[21],r44m1,r44), play(teams[2],teams[22],r44m2,r44), play(teams[3],teams[23],r44m3,r44), play(teams[4],teams[12],r44m4,r44), play(teams[5],teams[13],r44m5,r44), play(teams[6],teams[14],r44m6,r44), play(teams[7],teams[15],r44m7,r44), play(teams[8],teams[16],r44m8,r44), play(teams[9],teams[17],r44m9,r44), play(teams[10],teams[18],r44m10,r44), play(teams[11],teams[19],r44m11,r44), play(teams[0],teams[20],r44m12,r44)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r44m1">
<td>${teams[1].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[21],r44m1,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m2">
<td>${teams[2].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[22],r44m2,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m3">
<td>${teams[3].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[23],r44m3,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m4">
<td>${teams[4].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[12],r44m4,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m5">
<td>${teams[5].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[13],r44m5,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m6">
<td>${teams[6].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[14],r44m6,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r44m7">
<td>${teams[7].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[15],r44m7,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m8">
<td>${teams[8].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[16],r44m8,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m9">
<td>${teams[9].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[17],r44m9,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m10">
<td>${teams[10].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[18],r44m10,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m11">
<td>${teams[11].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[19],r44m11,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r44m12">
<td>${teams[0].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[20],r44m12,r44)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
`<tr><th colspan="4">Round 45: </th></tr>
<tr id="r45"><td colspan="4"><button onclick="play(teams[1],teams[22],r45m1,r45), play(teams[2],teams[23],r45m2,r45), play(teams[3],teams[12],r45m3,r45), play(teams[4],teams[13],r45m4,r45), play(teams[5],teams[14],r45m5,r45), play(teams[6],teams[15],r45m6,r45), play(teams[7],teams[16],r45m7,r45), play(teams[8],teams[17],r45m8,r45), play(teams[9],teams[18],r45m9,r45), play(teams[10],teams[19],r45m10,r45), play(teams[11],teams[20],r45m11,r45), play(teams[0],teams[21],r45m12,r45)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r45m1">
<td>${teams[1].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[22],r45m1,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m2">
<td>${teams[2].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[23],r45m2,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m3">
<td>${teams[3].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[12],r45m3,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m4">
<td>${teams[4].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[13],r45m4,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m5">
<td>${teams[5].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[14],r45m5,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m6">
<td>${teams[6].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[15],r45m6,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r45m7">
<td>${teams[7].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[16],r45m7,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m8">
<td>${teams[8].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[17],r45m8,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m9">
<td>${teams[9].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[18],r45m9,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m10">
<td>${teams[10].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[19],r45m10,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m11">
<td>${teams[11].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[20],r45m11,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r45m12">
<td>${teams[0].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[21],r45m12,r45)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,`<tr><th colspan="4">Round 46: </th></tr>
<tr id="r46"><td colspan="4"><button onclick="play(teams[1],teams[23],r46m1,r46), play(teams[2],teams[12],r46m2,r46), play(teams[3],teams[13],r46m3,r46), play(teams[4],teams[14],r46m4,r46), play(teams[5],teams[15],r46m5,r46), play(teams[6],teams[16],r46m6,r46), play(teams[7],teams[17],r46m7,r46), play(teams[8],teams[18],r46m8,r46), play(teams[9],teams[19],r46m9,r46), play(teams[10],teams[20],r46m10,r46), play(teams[11],teams[21],r46m11,r46), play(teams[0],teams[22],r46m12,r46)" class="play_button btn_effect">Play ALL</button></td>
</tr>
<tr id="r46m1">
<td>${teams[1].name} </td><td> ${teams[23].name} </td>
<td colspan="2"><button onclick="play(teams[1],teams[23],r46m1,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m2">
<td>${teams[2].name} </td><td> ${teams[12].name} </td>
<td colspan="2"><button onclick="play(teams[2],teams[12],r46m2,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m3">
<td>${teams[3].name} </td><td> ${teams[13].name} </td>
<td colspan="2"><button onclick="play(teams[3],teams[13],r46m3,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m4">
<td>${teams[4].name} </td><td> ${teams[14].name} </td>
<td colspan="2"><button onclick="play(teams[4],teams[14],r46m4,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m5">
<td>${teams[5].name} </td><td> ${teams[15].name} </td>
<td colspan="2"><button onclick="play(teams[5],teams[15],r46m5,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m6">
<td>${teams[6].name} </td><td> ${teams[16].name} </td>
<td colspan="2"><button onclick="play(teams[6],teams[16],r46m6,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>
<tr id="r46m7">
<td>${teams[7].name} </td><td> ${teams[17].name} </td>
<td colspan="2"><button onclick="play(teams[7],teams[17],r46m7,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m8">
<td>${teams[8].name} </td><td> ${teams[18].name} </td>
<td colspan="2"><button onclick="play(teams[8],teams[18],r46m8,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m9">
<td>${teams[9].name} </td><td> ${teams[19].name} </td>
<td colspan="2"><button onclick="play(teams[9],teams[19],r46m9,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m10">
<td>${teams[10].name} </td><td> ${teams[20].name} </td>
<td colspan="2"><button onclick="play(teams[10],teams[20],r46m10,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m11">
<td>${teams[11].name} </td><td> ${teams[21].name} </td>
<td colspan="2"><button onclick="play(teams[11],teams[21],r46m11,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr id="r46m12">
<td>${teams[0].name} </td><td> ${teams[22].name} </td>
<td colspan="2"><button onclick="play(teams[0],teams[22],r46m12,r46)" class="play_button btn_effect">Play</button></td>
</tr>
<tr>
<th colspan="4" class="end_round">X</th>
</tr>`,
]}

if(n>1){
    for(let i = 1; i<47; i++){

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

}