// let marks = [10 , 20 , 30 , 40 ];
// marks [0]
// //modify
// let arr = [1, 2, 3, 5]
// arr[4]=1000
// console.log(arr)

// //-----------------------------------------------------METHOD------------------------------------------------------//

// // 1.Push, Pop, Unshift & Shift
// let arr1 = [1,3,4,5]
// arr1.push(700, 800);//add Form last
// console.log(arr1)
// arr1.unshift(700, 800);//add Form Start
// console.log(arr1)
// arr1.pop() //remove Form last
// console.log(arr1);
// arr1.shift();//remove Form Start
// console.log(arr1);

// // 2.Splice & Slice(Original Array: 🛡️ Safe)

// let letters2 = ["A", "B", "C", "D", "E"];

// //   0    1    2    3    4   <-- Index
// // ["A", "B", "C", "D", "E"]
// //             ^
// //             |
// //        Start here (2)
// //        Delete 2 items ("C", "D")
// //   ["A", "B", "E"]
// let removed = letters2.splice(2, 2);
// let letters = ["A", "B", "C", "D", "E"];

// //   0    1    2    3    4   <-- Index (for Sencond)
// // ["A", "B", "C", "D", "E"]
// //        |---------|
// //   1     2   3    4    5 (for first)
// //      start      end
// //       (1)       (4)

// let result22 = letters.slice(1, 4);
// //Output :-["B", "C", "D"]
// let newarr2 = arr2.splice(0,2)
// console.log(arr2);

// // 3. Reverse & Sort 
// let arr3 = [423,2231,3443,1254,2455]
// arr3.reverse()
// console.log(arr3);
// let newarr3 = arr3.sort(function(a, b){
//     return a-b;//acending order
// })
// console.log(newarr3);
// let newarr13 = arr3.sort(function(a, b){
//     return b-a;//decending  order
// })
// console.log(newarr13);



// //-------------------------------------------------Important Topics--------------------------------------------//
// // (map, filter, reduce,find,every,foreach)


// // 1. map

// let first = [100, 200, 300, 400, 500]
// first.forEach(function(val){
//    console.log(val)   //koi bhi action karege toh har ek value par apply hoga
// }) // first ke each value ke liye function val har ek ke liye alag chalega result:-100
// //  200
// //  300
// //  400
// //  500

// let newfirst = first.forEach(function(val){
//     console.log(val + 100);
// })

// //map sirf tab use karna hai jab ek naya arr banana ho pichle arr ke data ke basis par

// //map dikhte hi mind me ek blank arr bana lo

// // Input: [ 🐔, 🥔, 🌽 ] (Raw Array)
// // The Map Function: "Cook it" ( 🔥 )
// // Output: [ 🍗, 🍟, 🍿 ] (New Array) 

// let newfirst2 = first.map(function(val){
//     return 100;
// })
// console.log(newfirst2)
// let newfirst3 = first.map(function(val){
//     if(val>= 300) return val;
//     else {
//      return 100
//     }
// })
// console.log(newfirst3)

// // When to use :- Jab isa lage ki ek arr se naya arry banega and vo kuch value ko rakhega



// //Output:-[10, 8, 9, 20, 10]
//  let newscore2= newscore.reverse(function(a,b){
//     return a-b;
// })
// console.log(newscore2)

// // 3. Reduce (ek bade arry ko ek single value me reduce kar dena)

// let laggayi = [10000, 10002, 10003]
// let newlagayi = laggayi.reduce(function(accumulator,val){
//     return accumulator + val
// }, 0)
// console.log(newlagayi)

// // 4. Find(You can only get one value)

// let dhoodh = [55,66,77,88,99,100]
// let dud = dhoodh.find(function(val){
//     return val === 77;
// })

// // 5. Some & Every (some opposite)

// let result = [100,99,98,97,96]
// let topper = result.some(function(marks){
//     return marks >= 98;
// })

// let resul2 = [100,99,98,97,96]
// let topper2 = resul2.every(function(marks){
//     return marks >= 95; //agar ek bhi value satisfy nahi hui to `False`
// })


// //---------------------------------------Destructring and Spread Operators-----------------------------------------//

// // Destructring

// const user = { name: "Risal", role: "Developer", city: "Udaipur" };

// // ✨ Magic Unpacking
// const { name1, role } = user; 

// console.log(name1); // "Risal"

// //Spread Operators
// const frontend = ["HTML", "CSS", "JS"];
// const backend = ["Node", "Supabase"];

// // Dump both into a new "fullStack" array
// const fullStack = [...frontend, ...backend]; 

// // Result: ["HTML", "CSS", "JS", "Node", "Supabase"]


// 2. Filter

let score = [{name:`hitesh`, stock:1},{name:`hit`, stock:2}]
let box = []
let newscore = score.filter(function(val){
    if (val.stock<3){
        return val;
        

    };
})
console.log(newscore)

let morescore = newscore.map((names)=>{
    return names.name
})
console.log(morescore);


function ok(){
    return [100,10]
}