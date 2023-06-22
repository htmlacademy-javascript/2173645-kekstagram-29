const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength(10, 10);

const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === string.split('').reverse('').join('');
};
isPalindrome('иди');

const returnNumbers = (string) => {
  string = String(string) .replace(/\D/g, '');
  return parseInt(string, 10);
};
returnNumbers('dffd10');
