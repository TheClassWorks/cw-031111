let n = prompt("عدد را وارد کنید");
let mohit;

if (n == 1) {
  let r = prompt("شعاع را وارد کنید");
  mohit = 2 * r * 3.14;
  console.log("محیط" + mohit);
} else if (n == 2) {
  let tool = +prompt("طول را وارد کنید");
  let arz = +prompt("عرض را وارد کنید");
  mohit = (tool + arz) * 2;
  console.log("محیط" + mohit);
} else if (n == 3) {
  let gh = prompt("قاعده را وارد کنید");
  let ert = prompt("ارتفاع را وارد کنید");
  mohit = (gh * ert) / 2;
  console.log("محیط" + mohit);
} else {
  console.log("خطا");
}

