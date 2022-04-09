function compare(a,b) {
    var c = a.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    var d = b.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
        return (c ===d) ? "True":"false";
}
console.log(compare("abc","cbda"));