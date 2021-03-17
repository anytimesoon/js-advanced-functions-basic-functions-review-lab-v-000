// Your code here
function wrapAdjective(flair = '*'){
  return function(adj = 'special'){
    `You are ${adj}`;
  };
}