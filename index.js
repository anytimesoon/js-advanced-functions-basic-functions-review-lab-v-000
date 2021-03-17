// Your code here
function saturdayFun(str = "roller-skate"){
  return `This Saturday, I want to ${str}`;
}

function wrapAdjective(flair = '*'){
  return function(adj = 'special'){
    `You are ${adj}`;
  };
}