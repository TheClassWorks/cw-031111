//برنامه ای بنویسید که یک عدد را از ورودی بگیرد و مثبت یا منفی یا صفر بودن عدد را معین کند

let num = prompt("عدد را وارد کنید");

//if(شرط)  //در صورت درست بودن شرط بلوک اگر انجام میشود
// {

// }

if (num > 0) {
  console.log("عدد مثبت است");
}

if (num == 0) {
  console.log("عدد صفره");
}

if (num < 0) {
  console.log("عدد منفی است");
}
