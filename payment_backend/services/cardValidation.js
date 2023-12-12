const containsOnlyNumbers = (inputString) => {
  const integerPattern = /^[0-9]+$/;
  return integerPattern.test(inputString);
};

const validateCardNumber = (cardNumber) => {
  if (!containsOnlyNumbers(cardNumber)) {
    return false;
  }

  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return false;
  }

  let cardNumberDigits = cardNumber.split("").map(Number);

  for (let i = cardNumberDigits.length - 2; i >= 0; i = i - 2) {
    let currentDigit = cardNumberDigits[i];
    currentDigit = currentDigit * 2;
    if (currentDigit > 9) {
      currentDigit = (currentDigit % 10) + 1;
    }
    cardNumberDigits[i] = currentDigit;
  }

  let total = 0;
  for (let i = 0; i < cardNumberDigits.length; i++) {
    total += cardNumberDigits[i];
  }

  return total % 10 === 0;
};

const validateCardExpiryDate = (expiryDate) => {
  var expiryDateFormat = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiryDateFormat.test(expiryDate)) {
    return false;
  }

  const dateParts = expiryDate.split("/");
  const expirationMonth = Number(dateParts[0]);
  const expirationYear = Number("20" + dateParts[1]);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // January is 0

  if (expirationYear > currentYear) {
    return true;
  } else if (
    expirationYear === currentYear &&
    expirationMonth >= currentMonth
  ) {
    return true;
  }

  return false;
};

const validateCardCvv = (cvv) => {
  const cvvRegex = /^[0-9]{3}$/;
  return cvvRegex.test(cvv);
};

module.exports = {
  validateCardNumber,
  validateCardExpiryDate,
  validateCardCvv
};
