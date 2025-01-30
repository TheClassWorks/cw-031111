//سوال دما

let temp = prompt("دما را وارد کنید:");

if (temp <= 0) {
  console.log("یخبندان");
} else if (temp > 0 && temp < 10) {
  console.log("خیلی سرد");
} else if (temp >= 10 && temp < 20) {
  console.log("خیلی سرد");
} else if (temp >= 20 && temp < 40) {
  console.log("معتدل - گرم");
} else {
  console.log("خیلی گرم");
}
