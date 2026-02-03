function calculateArea(length, width) {
  let area = length * width;
  return area;
}

console.log(calculateArea(5, 10));
console.log(calculateArea(7, 3));
console.log(calculateArea(4, 4));

const calculatePerimeter = function (length, width) {
  return 2 * length + 2 * width;
};

console.log(calculatePerimeter(5, 10));
console.log(calculatePerimeter(7, 3));
console.log(calculatePerimeter(4, 4));
