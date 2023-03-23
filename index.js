// let person = {
//     name: "Sasha",
//     sayHello: function() {
//     console.log("Привет, я " +this.name+"!");
// }
// };

// person.sayHello();

// function isEven (number) {
//     if(number%2 == 0) {
//         //Чётное
//         return true;
//     }else{
//         //Нечётное
//         return false;
//     }
// }
// console.log(isEven(4));

// let person = {
//     name: "Sasha",
//     age: 18,
//     city: "Moscow",
//     sayHello: function() {
//     console.log("Меня зовут " +this.name+". Мне " +this.age+" лет. Я живу в городе " +this.city+".");
// }
// };
// person.sayHello();

// var arr = [5, 6, 7, 8, 9]
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

function reverseStr(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let a = reverseStr("hello");
console.log (a);