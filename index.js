// Your code here
function saturdayFun(str="roller-skate"){
  return `This Saturday, I want to ${str}!`;
}

function mondayWork(str="go to the office"){
  return `This Monday, I will ${str}.`
}

function wrapAdjective(flair='*'){
  return function(adj = 'special'){
    return `You are ${flair}${adj}${flair}`;
  };
}