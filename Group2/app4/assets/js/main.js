console.log("کاربر گرامی برای محاسبه محیط دایره عدد 1، محیط مستطیل عدد 2 و مساحت مثلث عدد 3 را وارد کنید");

let num = prompt("عدد را وارد کنید:");
let mohit;

if (num == 1) {
  let r = prompt("شعاع را وارد کنید");
  mohit = 2 * r * 3.14;
  console.log("محیط: " + mohit); //alert("محیط: " + mohit)
} else if (num == 2) {
  let tool = prompt("طول را وارد کن");
  let arz = prompt("عرض را وارد کن");
  mohit = (tool + arz) * 2;
  console.log("محیط: " + mohit);
} else if (num == 3) {
  let ghaede = prompt("قاعده را وارد کن");
  let ertefa = prompt("ارتفاع را وارد کن");
  let masahat = (ghaede * ertefa) / 2;
  console.log("ممساحت: " + masahat);
} else {
  console.log("عدد وارد شده صحیح نیست");
}
