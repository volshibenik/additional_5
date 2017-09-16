module.exports = function check(str, bracketsConfig) {
     var pairs = [],
         twin = []; 
     
     for (var i = 0; i < str.length; i++) {
       
        if (twin.indexOf(str[i]) !==-1) {
          
          twin.splice(twin.indexOf(str[i]),1);
          if (!isPair(str[i], pairs[pairs.length-1], bracketsConfig)) {
            return false;
          }
          pairs.pop();
          
        }else if (isTwin(str[i],bracketsConfig)) {
          
          twin.push(str[i]);
          pairs.push(str[i]);
          
        }else if (isOpening(str[i], bracketsConfig)) {
          
          pairs.push(str[i]);
          
        } else {
          
          if (!isPair(str[i], pairs[pairs.length-1], bracketsConfig)) {
            return false;
          }
          pairs.pop();
          
        }
     }

     return pairs.length === 0;
  
}

function isTwin(symbol,arr) {
  
  for (var i = 0; i < arr.length; i++) {
    if (symbol === arr[i][0] && symbol === arr[i][1]) {
      return true;
    }
  }
  return false;
}

function isOpening(symbol,arr) {
  for (var i = 0; i < arr.length; i++) {
    if (symbol === arr[i][0]) {
      return true;
    }
  }
  return false;
}

function isPair(symbol, goal, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (symbol === arr[i][1] &&  goal === arr[i][0] ) {
      return true;
    }
  }
  return false;
}

