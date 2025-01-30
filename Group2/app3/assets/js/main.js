//برنامه ای بنویسید که نمرات ریاضی فارسی شیمی یک دانش آموز را از ورودی گرفته در صورتیکه میانگین این سه درس از 18
//بیشتر باشد بگه نمره الف
//اگر بین 15 تا 18 باشه بگه نمره ب
//بین 10 تا 15 باشه بگه نمره پ
//و اگر زیر 10 باشه بگه مردود

let farsi = Number(prompt("نمره فارسی؟ "));
let shimi = Number(prompt("نمره شیمی "));
let riazi = Number(prompt("نمره ریاضی "));

let avg = (farsi + shimi + riazi) / 3;

console.log(avg);

if (avg >= 18) {
  console.log("نمره الف شدید");
} else if (15 <= avg && avg < 18) {
  console.log("نمره ب شدید");
} else if (10 <= avg && avg < 15) {
  console.log("نمره C شدید");
} else {
  console.log("مردود");
}
