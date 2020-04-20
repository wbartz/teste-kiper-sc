import onlyNumber from './only-numbers';

const isLastChar = (index, str) => index === str.length - 1;

const formatPhone = phone => {
  let phoneLength = 11;

  if (/^[^9]/.test(phone.replace(/\D/g, '').slice(2, 11))) {
    phoneLength = 10;
  }

  const numericPhone = onlyNumber(phone);

  return numericPhone
    .slice(0, phoneLength)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, numericPhone)) {
        if ([0].includes(index)) return `(${result}`;
        if ([1].includes(index)) return `${result}) `;
        if (phoneLength > 10 && [2].includes(index)) return `${result} `;
        if ([phoneLength > 10 ? 6 : 5].includes(index)) return `${result} `;
      }
      return result;
    }, '');
};

export default formatPhone;
