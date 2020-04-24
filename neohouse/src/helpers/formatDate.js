import onlyNumber from './onlyNumbers';

const isLastChar = (index, str) => index === str.length - 1;

const formatDate = date => {
  let dateLength = 11;

  if (/^[^9]/.test(date.replace(/\D/g, '').slice(2, 11))) {
    dateLength = 10;
  }

  const numericDate = onlyNumber(date);

  return numericDate
    .slice(0, dateLength)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, numericDate)) {
        if ([1].includes(index)) return `${result}/`;
        if ([3].includes(index)) return `${result}/`;
      }
      return result;
    }, '');
};

export default formatDate;
