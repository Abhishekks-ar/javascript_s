// let a = 20;
// if (a == 12 || a == 20) {
//   console.log("the values are equal");
// } else if (a == 30) {
//   console.log("value is 30");
// } else {
//   console.log("not wqual");
// }

// //switch case
// switch(ch):
// {
//     case 1:
//         stmt 1;
//         break;
//     case 2:
//         stmt 2;
//         break;
//     case 1:
//         stmt 1;
//         break;
// }

// let day = 3;
// let dayname;
// switch (day) {
//   case 1:
//     dayname = "sunday";
//     break;
//   case 2:
//     dayname = "monday";
//     break;
//   case 3:
//     dayname = "tuesday";
//     break;
//   case 4:
//     dayname = "wednesday";
//     break;
//   case 5:
//     dayname = "thursday";
//     break;
//   case 6:
//     dayname = "friday";
//     break;
//   case 7:
//     dayname = "saturday";
//     break;
//   default:
//     console.log("wrong");
// }
// console.log(dayname);

//for loop

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// const person = {
//   name: "john",
//   age: 25,
//   place: "ekm",
// };
// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }
// console.log(txt);
// let txt = "";
// const numbers = [66, 21, 654, 45, 84];
// for (let x in numbers) {
//   txt += numbers[x] + " ";
// }
// console.log(txt);

// var person1 = {
//   firstname: "john",
//   lastname: "Doe",
// };
// for (var prop in person1) {
//   console.log(person1[prop]);
// }

//for of

// const cars = ["bmw", "volvo", "mini"];
// let text = "";
// for (let x of cars) {
//   text += x + "\n";
// }
// console.log(text);

// let txt = "";
// let l = "javascript";
// for (let x in l) {
//   txt += x + "\n";
// }
// console.log(txt);

//while
// let count = 1;
// while (count < 10) {
//   console.log(count);
//   count += 2;
// }

// let fruits = ["Apple", "banana", "cherry"];
// let a = 0;
// while (a < fruits.length) {
//   console.log(`${a + i},${fruits[i]}`);
//   a++;
// }
let fruits = ["Apple", "banana", "cherry"];
let a = 0;
while (a < fruits.length) {
  console.log(`${a + 1},${fruits[a]}`); // Use 'a' instead of 'i'
  a++;
}

let text = "";
let i = 0;
do {
  text += i + "\n";
  i++;
} while (i < 10);
console.log(text);
