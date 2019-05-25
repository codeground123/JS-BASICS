// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// var findWords = function(words) {

//     var row1 = "qwertyuiop";
//     var row2 = "asdfghjkl";
//     var row3 = "zxcvbnm";
//     var res = [];
 
//     for(var i=0;i<words.length;i++){
//         if(row1.indexOf(words[i][0].toLowerCase()) > -1){
//             var isPresent = checkInRow(row1, words[i].toLowerCase());
//             if(isPresent){
//                 res.push(words[i]);
//             }
//         }
//         if(row2.indexOf(words[i][0].toLowerCase()) > -1){
//             var isPresent = checkInRow(row2, words[i].toLowerCase());
//             if(isPresent){
//                 res.push(words[i]);
//             }
//         }
//         if(row3.indexOf(words[i][0].toLowerCase()) > -1){
//             var isPresent = checkInRow(row3, words[i].toLowerCase());
//             if(isPresent){
//                 res.push(words[i]);
//             }
//         }

//     }
//     return res;
// };

// function checkInRow(row, word){
//     var isPresent = true;
//     for(var i=0;i<word.length;i++){
//         if(row.indexOf(word[i]) < 0 ){
//             isPresent = false;
//         }
//     }
//     return isPresent;
// }

// var res = findWords(["Hello", "Alaska", "Dad", "Peace"]);

// console.log(res);


// *******************************  Approach 2 ******************************* 


//  https://leetcode.com/problems/keyboard-row/discuss/273579/Javascript-Solution
