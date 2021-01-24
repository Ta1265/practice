/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  let maxTime = '';
  
  for (let i = 0; i < 5; i++) {
    if (time[i] !== '?') {
      maxTime += time[i];
      continue;
    }
    if (i === 0) {
      maxTime += '2';
      continue;
    } 
    if (i === 1) {
      if(maxTime[0] === '2') {

        maxTime += '3';
        continue;
      
      }
      maxTime += '9';
      continue;
    }
  
    if(i === 2){
      maxTime += ':';
      continue;
    } 
    
    if (i === 3) {
      maxTime += '5';
      continue;
    }

    if (i === 4) {
      maxTime += '9';
    }
  }
  return maxTime
};

const tester = () => {
  console.log(maximumTime('2?:?0'));
  console.log(maximumTime("0?:3?"));
  console.log(maximumTime("1?:22"));
  console.log(maximumTime("??:3?"));
};
tester();
