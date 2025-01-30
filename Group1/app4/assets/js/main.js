//تشخیص زوج یا فرد بودن عدد

let num = Number(prompt("عدد را وارد کنید"));

// if (num % 2 == 0) {
//   console.log("عدد زوج است");
// } else {
//   console.log("عدد فرد است");
// }

if (num == 0) {
  console.log("عدد صفر است");
} else if (num % 2 == 0) {
  console.log("عدد زوج است");
} else {
  console.log("عدد فرد است");
}
