// function validParanthesis(str) {
//     var pairs = {
//     "\(" : "\)",
//     "\{" : "\}",
//     "\[" : "\]"
//     }
//     var open = [];
//     for(var i=0;i<str.length; i++){
//         if(pairs[str[i]]){
//             open.push(str[i]);
//         } else {
//             var current = open.pop();
//             if(pairs[current] !== str[i]){
//                 return false;
//             }
//         }
//     }
//     return open.length === 0;
// }


// console.log(validParanthesis("[[]]"));


/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(str) {

    if (str.length <= 1)
      return false
  
    let matchingOpeningBracket, ch
    let stack = []
  
    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']
  
    for (let i = 0; i < str.length; i++) {
      ch = str[i]
  
      if (closingBrackets.indexOf(ch) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          return false;
        }
      } else {
        stack.push(ch);
      }
    }
    console.log(str.length);

    return (stack.length === 0)
  };
  console.log(isValid("([()])")); // false
  