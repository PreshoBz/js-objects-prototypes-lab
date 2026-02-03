const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => { 
  return num * num
});
  
const evens = numbers.filter(num => {
  return num % 2 === 0;
});

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(squared);
console.log(evens);
console.log(sum);