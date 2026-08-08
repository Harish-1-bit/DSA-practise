// Given an integer n, build a right-angled triangle made of stars and return it as an array of strings, where each string is one row of the triangle.
function patern(n){
    let arr = []
for(let i=1; i<n; i++){
    let row= ''
    for(let j=0; j<i; j++){
        row+='*'
    }
    arr.push(row)
    console.log(row)
}
console.log(arr)
return arr
}

patern(5)