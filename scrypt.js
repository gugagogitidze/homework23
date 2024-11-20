// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.

let numbers = [30, 16, 18, 50, 32];

let result = sum(numbers);

function sum(numbers) {
  return numbers.reduce((total, current) => (total += current), 0);
}

console.log(result);

// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.

let num = [16, 38, 27, 44, 36];

function hightnum(num) {
  return num.reduce((max, current) => (current > max ? current : max));
}
console.log(hightnum(num));

// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.

let words = ["ჩემი", "სახელი", "არის", "გუგა"];

function combinewords(words) {
  return words.reduce((result, current) => result + " " + current);
}

console.log(combinewords(words));

// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.

let number = [10, 4, 16, 24, 9];

function multiply(number) {
  return number.reduce(function (total, current) {
    return total * current;
  }, 1);
}

console.log(multiply(number));

// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.

let num1 = [30, 16, 4];

let result2 = difference(num1);

function difference(num1) {
  return num1.reduce((total, current) => total - current);
}

console.log(result2);

// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.

let num2 = [24, 6, 3, 49];

function multiply(num2) {
  return num2.map(function (num) {
    return num * 2;
  });
}

console.log(multiply(num2));

// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.

let sentence = ["I", "Study", "In", "Re-educate"];

function smallletters(sentence) {
  return sentence.map(function (sentence) {
    return sentence.toLowerCase();
  });
}

console.log(smallletters(sentence));

// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.

let num3 = [24, 14, 16, 9];

function squarenummber(num3) {
  return num3.map(function (num3) {
    return num3 * num3;
  });
}

console.log(squarenummber(num3));

// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.
let students = [
  { name: "liza", score: 95 },
  { name: "teo", score: 77 },
  { name: "ani", score: 80 },
  { name: "dato", score: 68 },
];

students.forEach(function (student) {
  student.score += 5;
});

console.log(students);

// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.

let numbers2 = [5, 12, 8, 20, 7, 15, 3, 25];

function filterbacktthanten(arr) {
  return arr.filter(function (number) {
    return number > 10;
  });
}

let filteredNumbers = filterbacktthanten(numbers);
console.log(filteredNumbers);
