// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// const styles = ['jazz', 'blues'];
// 
// styles.push('rock-n-roll');
// 
// const index = styles.indexOf('blues');
// 
// if (index !== -1) {
//   styles[index] = 'classic';
// }
// console.log(styles)
// 
// function logItems(array) {
    // for (let i = 0; i < array.length; i++) {
        // console.log(`${i + 1} - ${array[i]}`);
    // }
// }
// logItems(styles);
// 

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array)
// const userName = prompt('Enter name:')
// if (array.includes(userName)) {
    // alert(`Welcome, ${userName}!`)
// } else { 
    // alert "User not found"
// }
// console.log(checkLogin(logins));

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(){
// 
// const numbers = args.filter(arg => typeof arg === 'number');
// 
// if (numbers.length === 0) {
    // return null; // або return 0;
//   }
// 
// const total = numbers.reduce((sum, num) => sum + num, 0);
//   
// return total / numbers.length;
// }
// console.log(1, 2, 3, 'hello')
// 
// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// function caclculateSum(munbers) { 
    // const newArry = [];
    // for (lit i = 0; <numbers.lenght-1; i++1) { 
        // newArry.push(numbers[i] + numbers[i + 1]);
            // }
    // return newArry
// }
// варіант 2
// function sumNeighboringNumbers(arr) {
    // const result = [];
//    
    // for (let i = 1; i < arr.length; i++) {
    //    
        // result.push(arr[i-1] + arr[i]);
    // }
    // return result;
// }