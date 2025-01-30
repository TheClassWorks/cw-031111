//برنامه ای بنویسید که نمرات سه درس یک دانشجو را از ورودی گرفته معدل او را حساب کند و در صورتیکه معدل زیر 12 بود
//اعلام کند مشروط شدی در غیر اینصورت بنویسه حالت عادی

let farsi = Number(prompt("نمره فارسی؟ "));
let shimi = Number(prompt("نمره شیمی "));
let riazi = Number(prompt("نمره ریاضی "));

let avg = (farsi + shimi + riazi) / 3;

console.log(avg);

if (avg < 12) {
  console.log("متاسفانه مشروط شده اید");
}
else{
    console.log("عادی");
}





// if (avg >= 12) {
//   console.log("عادی");
// }
