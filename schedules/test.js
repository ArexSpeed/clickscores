let pot1 = ['Unia','Lech','Sparta','crac'];
  let pot2 = ['Liver','Chelsea','Arsenal','ManU'];
  let pot3 = ['Real','Barca','Valencia','Sevilla'];
  let pot4 = ['PSG','OL','Marselie','Reims'];
  let pot5 = ['Juve','Roma','Inter','Milan'];
  let pot6 = ['Bayern','Borrus','schalke','VFL'];
  let groups = [];
  let grA = [];
  let grB = [];
  let grC = [];
  let grD = [];
  let grE = [];
  let grF = [];
  let grG = [];
  let grH = [];
    
  
    for(let i=pot1.length-1;i>=0;i--){
      let rand1 = Math.floor(Math.random()*pot1.length);
      let rand2 = Math.floor(Math.random()*pot2.length);
      let rand3 = Math.floor(Math.random()*pot3.length);
      let rand4 = Math.floor(Math.random()*pot4.length);
      let rand5 = Math.floor(Math.random()*pot4.length);
      let rand6 = Math.floor(Math.random()*pot4.length);
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
  console.log(grA);
  console.log(grB);
  console.log(grC);
  console.log(grD);
  console.log(grE);
  console.log(grF);
  console.log(grG);
  console.log(grH);