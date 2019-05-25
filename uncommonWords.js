
//https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/
//
//

var uncommonFromSentences = function(A, B) {
    const unique = {}
    const answer = [] 
    const merged = A.concat(' ' + B).split(' ')
    merged.forEach(x => {
      if (unique[x] === undefined) {
        unique[x] = true
      } else if (unique[x]) {
        unique[x] = false
      }
    })
    unique.forEach(([key, isUnique]) =>{
      if (isUnique) answer.push(key)
    })
    return answer
  };

console.log(uncommonFromSentences("apple", "apple banana"));