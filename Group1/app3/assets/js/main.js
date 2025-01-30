//برنامه ای بنویسید که فصل را از ورودی گرفته و نام دو میوه آن فصل را در خروجی چاپ کند

let season = prompt("فصل ؟");

if (season == "بهار") {
  console.log("چغاله");
  console.log("گوجه سبز");
} else if (season == "تابستان") {
  console.log("خربزه و هندوانه");
} else if (season == "پاییز") {
  console.log("انار و نارنگی");
} else if (season == "زمستان") {
  console.log("موز و نارگیل");
} else {
  console.log("نام فصل را درست وارد کنید");
}


