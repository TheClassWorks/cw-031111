let num1 = Number(prompt("Enter Number 1: "));
let num2 = +prompt("Enter Number 2: ");
let num3 = +prompt("Enter Number 3: ");

// if (num1 > num2 && num1 > num3) {
//   console.log("max:" + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("max:" + num2);
// } else if (num3 > num1 && num3 > num2) {
//   console.log("max:" + num3);
// }

// راه دوم
let max = num1;

if (num2 > max) {
  max = num2;
}

if (num3 > max) {
  max = num3;
}

console.log("maximum=" + max);
