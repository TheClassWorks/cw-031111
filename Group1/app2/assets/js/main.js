//برنامه ای بنویسید که نمرات درسی یک دانش آموز را گرفته و معدل او را حساب کند. در صورتیکه معدل
//زیر 12 باشد پیغام مشروط شدید را در خروجی اعلام کند. در غیر اینصورت اعلام وضعیت عادی کند.
// سه درس کافیه

let farsi = Number(prompt("فارسی چند شدی؟ "));
let riazi = Number(prompt("ریاضی چند شدی؟ "));
let shimi = Number(prompt("شیمی چند شدی؟ "));

let avg = (farsi + riazi + shimi) / 3;

console.log(avg);

if (avg < 12) {
  console.log("مشروط شدی");
} else {
  console.log("عادی");
}

// alert("معدل" + avg);
