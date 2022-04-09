const arr = ['Nguyen Dai Dong','Hutech 18dthc5','thang 4']


function findLongestStr(arr) {
     const longest = arr.reduce((a, b) => {
         return a.length > b.length ? a : b
    })
    return longest
}

console.log(findLongestStr(arr));


