//برنامه ای بنویسید که یک عدد را از کاربر بگیرد و مشخص کند عدد مثبت است یا منفی یا صفر

let num = Number(prompt("عدد را وارد کنید")); // "123" ==> 123

// if(شرط)
// {
//     بدنه if
// }

if (num > 0) {
  console.log("عدد مثبت است");
}

if (num < 0) {
  console.log("عدد منفی است");
}

if (num == 0) {
  console.log("عدد صفر است");
}
