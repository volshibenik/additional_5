module.exports = function check(str, bracketsConfig) {
   var pairs = [];
 
     
     var twin = []; 
     
     for (var i = 0; i < str.length; i++) {
        if (twin.indexOf(str[i]) !==-1) {
          
          twin.splice(twin.indexOf(str[i]),1);
     //     console.log(str[i]+'= CLO twin'+'_'+twin);
          
          if (!isPair(str[i], pairs[pairs.length-1], bracketsConfig)) {
      //      console.log('!!!');
            return false;
          }
          pairs.pop();
        }else if (isTwin(str[i],bracketsConfig)) {
          
          twin.push(str[i]);
      //    console.log(str[i]+'=twin'+' OPE '+twin);
          pairs.push(str[i]);
          
        }else if (isOpening(str[i], bracketsConfig)) {
          
       //   console.log(str[i]+' OPE ');
          pairs.push(str[i]);
          
        } else {
          
 //         console.log(str[i]+' CLO ');
          if (!isPair(str[i], pairs[pairs.length-1], bracketsConfig)) {
        //    console.log('!!!');
            return false;
          }
          pairs.pop();
          
        }
     }
//     console.log(pairs);
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


    
    