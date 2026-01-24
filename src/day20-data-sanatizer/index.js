class NumberStats {
  constructor(numbers) {
    this.numbers = numbers;
  }
  
  getMin () {
    let min = this.numbers[0];
    for(let chota of this.numbers){
        if (chota < min){
            min = chota;
        }
    }
    return min
  }
  
  getMax () {
    let max = this.numbers[0];
    for(let bada of this.numbers){
        if (bada > max){
            max = bada;
        }
    }
    return max
  }
  
  getSum () {
   let sum = 0;
   for(let num of  this.numbers){
    sum += num
   }
   return sum
  }
  
  getAverage() {
    let sum = 0;
   for(let i of this.numbers){
    sum +=i 
   }
   return sum/this.numbers.length
  }
  
  getRange() {
    let min = this.numbers[0];
    for(let chota of this.numbers){
        if (chota < min){
            min = chota;
        }
    }
        let max = this.numbers[0];
    for(let bada of this.numbers){
        if (bada > max){
            max = bada;
        }
    }
    return max-min
  }
  
  countEven() {
    let count = 0;
    for(let num of this.numbers){
        if(num%2 === 0 ){
            count++
        }
    }
    return count
  }
  
  countOdd() {
   let count = 0;
    for(let num of this.numbers){
        if(num%2 !== 0 ){
             count++
        }
    }
    return count
  }
  
  getReport() {
    // Return a formatted string with all stats
    return `
Statistics for [${this.numbers.join(', ')}]:
- Count: ${this.numbers.length}
- Sum: ${this.getSum()}
- Average: ${this.getAverage()}
- Min: ${this.getMin()}
- Max: ${this.getMax()}
- Range: ${this.getRange()}
- Even numbers: ${this.countEven()}
- Odd numbers: ${this.countOdd()}
    `;
  }
}

// Test it!
const stats = new NumberStats([5, 2, 8, 1, 9, 3, 7]);
console.log(stats.getReport());