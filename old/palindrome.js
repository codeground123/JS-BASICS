function isPalindrome(str){
    var word = str.length;
    if(word === 0 || word === 1){
        return true;
    }
    if(str[0] === str[word-1]){
        return isPalindrome(str.slice(1,word-1));
    }
    return false;
}

var res = isPalindrome("madam");
console.log(res);