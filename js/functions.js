// Функция для проверки длины строки
const stringLength = (string, maxLength) => string.length <= maxLength;
stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    newString += normalString[i];
  }
  return normalString === newString;
}
isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');

// Функция для извлечения чисел
function returnNumbers(string) {
  string = string.toString();
  let newString = '';
  for (let i = 0; i <= string.length - 1; i++) {
    const number = parseInt(string[i], 10);
    if (!Number.isNaN(number)) {
      newString += number;
    }
  }
  return parseInt(newString, 10);
}
returnNumbers('2023 год');
returnNumbers('ECMAScript 2022');
returnNumbers('1 кефир, 0.5 батона');
returnNumbers('агент 007');
returnNumbers('а я томат');
returnNumbers(2023);
returnNumbers(-1);
returnNumbers(1.5);
