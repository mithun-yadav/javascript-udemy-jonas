'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


  /*
  🔴 Delayed Departure from FAQ to TXL (11h25)
                Arrival from BRU to FAO (11h45)
    🔴 Delayed Arrival from HEL to FAO (12h05)  
              Departure from FAO to LIS (12h30)     
  */

    const splitByPlus = flights.split('+');
    //console.log(splitByPlus);
    
    for(const item of splitByPlus){
      //console.log(item);
      const replaceFirstUnderScore = item.replace('_',' ');
      const itemSplit = replaceFirstUnderScore.split(';');
      //console.log(itemSplit);

      const [delay,from,to,time] = itemSplit;
      const delayStatus = delay.replace('_',' ');

      const firstCity = from.slice(0,3).toUpperCase();
      const secondCity = to.slice(0,3).toUpperCase();

      const flightTime = time.replace(':','h');
      // // console.log(replaceFirstUnderScore);
      // const replaceAllUnderScore = item.replaceAll('_',' ');
      // const replaceAllUnNecessity = replaceAllUnderScore.replaceAll(';',' ');
      // console.log(replaceAllUnNecessity);
      // // const [a] = replaceAllUnNecessity;
      // // console.log(a);
      // const includeDelayed = replaceAllUnNecessity.includes('Delayed');
      // //const replaceUnderScore = item.replace('_',' ');
      // //console.log(replaceUnderScore);
      // const addRedBall = includeDelayed ? '🔴'+replaceAllUnNecessity:replaceAllUnNecessity;
      // const addPad = addRedBall.padStart(52)


      //console.log(addPad);

      //const cities
      // const replaceAllUnderScore = replaceFirstUnderScore.replaceAll('_',' ');
      // console.log(replaceAllUnderScore);

      const addingBall = delayStatus.includes('Delayed');
      const finalStr = addingBall?`🔴 ${delayStatus} from ${firstCity} to ${secondCity} (${flightTime})`:`${delayStatus} from ${firstCity} to ${secondCity} (${flightTime})`;
      console.log(finalStr.padStart(45));
    }