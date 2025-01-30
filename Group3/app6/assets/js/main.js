let num1 = Number(prompt("Number1: "));
let num2 = Number(prompt("Number2: "));
let num3 = Number(prompt("Number3: "));

// if (num1 > num2 && num1 > num3) {
//   console.log("Max=" + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Max=" + num2);
// } else {
//   console.log("Max=" + num3);
// }

//روش دوم
let max = num1;
if (num2 > max) {
  max = num2;
}

if (num3 > max) {
  max = num3;
}
console.log("Max=" + max);
