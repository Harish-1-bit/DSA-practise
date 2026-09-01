// Given an integer n, build a right-angled triangle made of stars and return it as an array of strings, where each string is one row of the triangle.
// function patern(n){
//     let arr = []
// for(let i=1; i<n; i++){
//     let row= ''
//     for(let j=0; j<i; j++){
//         row+='*'
//     }
//     arr.push(row)
//     console.log(row)
// }
// console.log(arr)
// return arr
// }

// patern(5)

// Given an integer n, build a centered pyramid of stars and return it as an array of strings, where each string is one row.
    // const pyramid = (n)=>{
    //     const result =[]
    //     for(let i=1;i<=n;i++){
    //         let row=''
    //         for(let m=0;m<n-i;m++){
    //             row+=' '
    //         }
    //         for(let m=0;m<2*i-1;m++){
    //             row+='*'
    //         }
    //         // result.push(row)
    //         console.log(row)
    //     }
    //     // console.log(result)
    // }

    // pyramid(4)


// Given an integer n, build an inverted pyramid of stars and return it as an array of strings, where each string is one row.
// const invertedPyramids = (n)=>{
//     for (i=1;i<=n;i++){
//         let row = ''
//         for(s=0; s<i-1; s++){
//             row+=' '
//         }
//         for(s=0;s<2*(n-i)+1;s++){
//             row+='*'
//         }
//         console.log(row)
//     }
// }

// invertedPyramids(4)

// Given an integer n, build an n × n square where the border is drawn with the * character and the inside is left empty. Return the square as an array of n strings, one per row.
// const square = (n)=>{
//     for(let i=0;i<n;i++){
//         let row=''
//         for(let j=0;j<n;j++){
//             if(i===0 || 
//                 i=== n-1 || j===0 || j===n-1){
//                 row+='* '
//             }else{
//                 row+='  '
//             }
//         }
//         console.log(row)
//     }
// }

// square(4)

// Given an integer n, build a diamond of * characters that is 2n - 1 rows tall and 2n - 1 characters wide at its widest point. Return the diamond as an array of strings, one per row.
// const diamond = (n)=>{
//     for(i=1; i<=n;i++){
//         let row=''
//         for(m=0;m<n-i;m++){
//             row+=' '
//         }
//         for(m=0;m<2*i-1;m++){
//             row+='*'
//         }
//         console.log(row)
//     }
//     for(i=2;i<=n;i++){
//         let row=''
//         for(m=0;m<i-1;m++){
//             row+=' '
//         }
//         for(m=0;m<2*(n-i) + 1;m++){
//             row+='*'
//         }
//         console.log(row)
//     }
// }

// diamond(4)

// Given an integer n, build Floyd's Triangle and return its rows. Floyd's Triangle fills consecutive integers starting at 1, one row at a time, from left to right. Row i (counting from 1) holds exactly i numbers.
// const floyd=(n)=>{
//     let num=0
//     let newArr=[]
//     for(i=1;i<=n;i++){
//         let arr=[]
//         for(j=0;j<i;j++){
//             num++
//             arr.push(num)
//         }
//         console.log(arr)
//         newArr.push(arr)
//         // console.log()
//     }
//     console.log(newArr)
// }

// floyd(5)

// Given an integer n, return true if n is a prime number and false otherwise.
// const checkPrime = (n)=>{
//     let isPrime=true
// for(i=2;i<n;i++){
//     if(n%i===0){
//        isPrime=false
//     }
// }
// if(isPrime){
//     console.log('prime')
// }else{
//     console.log('not prime')
// }
// }

// checkPrime(17)

// Given an integer N return the reverse of the given number. If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.
// const reverseNumber = (n) => {
//     let num = String(n)
//     let array= num.split('')
//     console.log(array)
//     let newArray = []
//     for(i=array.length-1;i>=0;i--){
//         newArray.push(array[i])
//     }
//     let result=newArray.join('')
//     console.log(result)
// }

// const reverseNumber = (n)=>{
//     let rev=0
//     while(n>0){
//         let lastDigit = n%10
//         rev=rev*10 + lastDigit
//         n=Math.floor(n/10)
//     }
//     console.log(rev)
// }

// reverseNumber(111012)