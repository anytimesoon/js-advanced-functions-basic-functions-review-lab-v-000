// Your code here
function saturdayFun(str){
  return `This Saturday, I want to ${str}`;
}

function wrapAdjective(flair = '*'){
  return function(adj = 'special'){
    `You are ${adj}`;
  };
}