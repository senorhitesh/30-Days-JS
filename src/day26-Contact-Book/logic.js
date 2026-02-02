function removeDuplicates(arr) {
    let removeDuplicator = new Set(arr);
    return removeDuplicatesss = [...removeDuplicator];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 5, 5]));
console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"]));
console.log(removeDuplicates([1, 1, 1, 1]));


function countCharacters(str) {
    if (typeof str !== "string") {
        throw new Error("Expected an String");
    }
    let counts = new Map();
    for (let character of str) {
        if (counts.has(character)) {
            counts.set(character, counts.get(character) + 1)
        }
        else {
            counts.set(character, 1)
        }
    }
    return counts
}
console.log(countCharacters("hello"));
console.log(countCharacters("javascript"));

let naccho = "LULULUU"

function firstUnique(str) {
    if (typeof str !== "string") {
        throw new Error("Expected an String");
    }  
    let counts = new Map();
    for(let characters of str) {
        if(counts.has(characters)){
            counts.set(characters, counts.get(characters)+1)
        }
        else{
            counts.set(characters,1)
        }
    }
    
    for(let chara of str){
        if(counts.get(chara) === 1){
            return chara;
        }
    }
  
}
console.log(firstUnique("leetcode"));     // "l"
console.log(firstUnique("loveleetcode")); // "v"
console.log(firstUnique("aabb"));         // null (all repeat)

function hasCommonElement(arr1, arr2) {
 let set1 = new Set(arr1);
 for(let item of arr2){
    if(set1.has(item)){
        return true;
    }
 }
}

console.log(hasCommonElement([1, 2, 3], [3, 4, 5]));  // true
console.log(hasCommonElement([1, 2, 3], [4, 5, 6]));  // false
console.log(hasCommonElement(['a', 'b'], ['b', 'c'])); // true

