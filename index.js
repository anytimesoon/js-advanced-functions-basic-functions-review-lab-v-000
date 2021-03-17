// Your code here
function saturdayFun(str="roller-skate"){
  return `This Saturday, I want to ${str}!`;
}

function mondayWork(str="go to the office"){
  return `This Monday, I will ${str}.`
}

function wrapAdjective(flair='*'){
  return function(adj = 'special'){
    return `You are ${flair}${adj}${flair}!`;
  };
}

const Calculator = {

  function add(){
    return 1 + 3;
  }
  
  function subtract(){
    return 1 - 3;
  }
  
  function multiply(){
    return 1 * 3;
  }
  
  function divide(){
    return 10 / 5;
  }
}