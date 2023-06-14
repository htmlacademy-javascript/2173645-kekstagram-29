// Функция для проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;
// console.log(stringLength('проверяемая строка', 20));
// console.log(stringLength('проверяемая строка', 18));
// console.log(stringLength('проверяемая строка', 10));

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === string.split('').reverse('').join('');
};
// console.log(isPalindrome('топот'));
// console.log(isPalindrome('ДовОд'));
// console.log(isPalindrome('Кекс'));
// console.log(isPalindrome('Лёша на полке клопа нашёл '));

// Функция для извлечения чисел
const returnNumbers = (string) => {
  string = String(string) .replace(/\D/g, '');
  return parseInt(string, 10);
};
// console.log(returnNumbers('2023 год'));
// console.log(returnNumbers('ECMAScript 2022'));
// console.log(returnNumbers('1 кефир, 0.5 батона'));
// console.log(returnNumbers('агент 007'));
// console.log(returnNumbers('а я томат'));
// console.log(returnNumbers(2023));
// console.log(returnNumbers(-1));
// console.log(returnNumbers(1.5));
