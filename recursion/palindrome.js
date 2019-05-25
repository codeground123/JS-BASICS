function isPalindrome(str){
    var length = str.length;
    if(length ===0 || length === 1){
        return true;
    }
    if(str[0] === str[length-1]){
        return isPalindrome(str.substring(1, length-1));
    }
    return false;
}

var res = isPalindrome("madam");
console.log(res);