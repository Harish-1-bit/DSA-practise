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

// Check if a number is Armstrong Number or not.
// const armStrong = (n) => {
//     let string = String(n)
//     let list = string.split('')
//     let sum=0
//     for(i=0;i<string.length;i++){
//         sum = sum + (list[i]**string.length)
//     }
//     if(n===sum){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// const armStrong = (n) => {
//     let length = n.toString().length
//     let sum = 0
//     let num =n
//     while(n>0){
//         let lastDigit = n % 10
//         sum +=Math.pow(lastDigit, length)
//         n=Math.floor(n/10)  
//     }
//     return sum===num
// }

// console.log(armStrong(153))


//Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.

// Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in any order.

// class Solution {
//     twoSum=(ar,target)=>{
//     let result = []
// for(let i=0;i<=ar.length;i++){
//     for(let j=i+1;j<=ar.length;j++){
//         if(ar[i]+ar[j]===target){
//             result.push(i)
//             result.push(j)
//         }
//     }
// }
// console.log(result)
// return result
// }
// }

// let ob =new Solution()
// ob.twoSum( [1, 6, 2, 10, 3],7)

// class Solution {
//     twoSum= (ar,target) =>{
//         let map = new Map()
//         for(let i=0;i<ar.length;i++){
//             let difference = target - ar[i]
//             if(map.has(difference)){
//                 return [map.get(difference),i]
//             }
//             map.set(ar[i],i)
//         }
//         return []
//     }
// }

// let obj = new Solution()
// console.log(
// obj.twoSum([1, 6, 2, 10, 3],7)
// )

//     twoSum = (ar, target) => {
//         let map = new Map();

//         for (let i = 0; i < ar.length; i++) {
//             let complement = target - ar[i];

//             if (map.has(complement)) {
//                 return [map.get(complement), i];
//             }

//             map.set(ar[i], i);
//         }

//         return [];
//     }
// }

// let ob = new Solution();
// console.log(ob.twoSum([1, 6, 2, 10, 3], 7));

// Given the head of a singly linked list. Reverse the given linked list and return the head of the modified list.

// class Node{
//     constructor (value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//     }
    
//     append(value){
//         let newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode
//             return
//         }

//         let current = this.head
//         while(current.next !== null ){
//             current=current.next
//         }
//         current.next = newNode
//     }

//     preAppend(value){
//         let newNode = new Node(value)
//             newNode.next = this.head
//             this.head = newNode
//     }

//     printLinkedList(){
//         if(this.head === null){
//             console.log("Linked list is empty")
//         }

//         let current = this.head
//         let result = []
//         while(current !== null){
//             console.log(current)
//             result.push(current)
//             current = current.next
//         }
//         console.log(result)
//     }

//     search(targer){
//         let current = this.head
//         let index = 0
//         while(current !==null ){
//             if(current.value === targer){
//                 console.log(index)
//                 return
//             }
                
//             current = current.next
//             index++
//         }
//     }

//     update(oldValue, newValue){
//         let current = this.head
//         while(current !==null ){
//             if(current.value === oldValue){
//                 current.value = newValue
//                 return true
//             }
//             current = current.next
//         }
//         return false
//     }

//     delete(target){
//         if(this.head === null ){
//             return
//         }

//         if(this.head.value === target ){
//             this.head === this.head.next
//             return true
//         }

//         let current = this.head
//         while (current !== null && current.next.value !== target){
//             current = current.next
//         }
//         current.next = current.next.next
//         return
//     }

// }

// let ll = new linkedList()
// ll.append(10)
// ll.preAppend(5)
// ll.search(10)
// console.log("Updated:", ll.update(10, 11));
// ll.delete(11)
// ll.printLinkedList()

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
    }

    append(num){
        let newNode = new Node(num)
        if(this.head === null){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    reverse(){
        let prev = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }

    display(){
        if(this.head === null){
            console.log('Data structure is empty')
            return
        }

        let current = this.head
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result)
    }
}

let ll = new linkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)
ll.reverse()
ll.display()