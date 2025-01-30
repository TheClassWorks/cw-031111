console.log("برای محاسبه محیط دایره عدد 1، محیط مستطیل عدد 2، و برای مساحت مثلث عدد 3 را وارد کنید");

let num = Number(prompt("عدد را وارد کنید"));
let mohit;

if (num == 1) {
  let r = Number(prompt("شعاع را وارد کنید"));
  mohit = 2 * r * 3.14;
  console.log("محیط دایره" + mohit);
} else if (num == 2) {
  let tool = Number(prompt("طول را وارد کنید"));
  let arz = Number(prompt("عرض را وارد کنید"));
  mohit = (tool + arz) * 2;
  console.log("محیط مستطیل: " + mohit);
} else if (num == 3) {
  let gh = Number(prompt("قاعده را وارد کنید"));
  let ert = Number(prompt("ارتفاع را وارد کنید"));
  let masahat = (gh * ert) / 2;
  console.log("مساحت مثلث: " + masahat);
} else {
  console.log("عدد را به درستی وارد کنید");
}
