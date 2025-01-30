//برنامه ای بنویسید که نمرات ریاضی فارسی شیمی یک دانش آموز را از ورودی گرفته در صورتیکه میانگین این سه درس از 18
//بیشتر باشد بگه نمره الف
//اگر بین 15 تا 18 باشه بگه نمره ب
//بین 10 تا 15 باشه بگه نمره c
//و اگر زیر 10 باشه بگه مردود

let farsi = Number(prompt("نمره فارسی را وارد کنید"));
let riazi = Number(prompt("نمره ریاضی را وارد کنید"));
let shimi = Number(prompt("نمره شیمی را وارد کنید"));

let avg = (farsi + shimi + riazi) / 3;

console.log("moadel=" + avg);

if (avg >= 18) {
  console.log("grade A");
} else if (avg >= 15 && avg < 18) {
  console.log("grade B");
} else if (avg >= 10 && avg < 15) {
  console.log("grade C");
} else {
  console.log("Fail");
}

