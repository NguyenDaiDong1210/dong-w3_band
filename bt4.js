function isPalindrom(string) {
    if (string == string.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
}
console.log('ja');