const validateCredentials = (name, email, password) => {
  // Name validation
  const isNameEmpty = name.length === 0;
  const isNameRightLength = name.length >= 2 && name.length <= 20;

  // Email validation
  const isEmailEmpty = email.length === 0;
  const notStartWithNumber = isNaN(email[0]);
  const notEndWithNumber = isNaN(email[email.length - 1]);
  const includesAtSymbol = email.includes("@");
  const includesDot = email.includes(".");
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  const dotAfterAt = dotIndex > atIndex;
  const atNotFirstOrLast = atIndex > 0 && atIndex < email.length - 1;
  const dotNotLast = dotIndex < email.length - 1;

  // Password validation
  const isPasswordEmpty = password.length === 0;
  const isPasswordLongEnough = password.length >= 8;
  const containsLetter = [...password].some(
    (char) => isNaN(char) && /[a-zA-Z]/.test(char)
  );
  const containsNumber = [...password].some((char) => !isNaN(char));
  const containsSpecialChar = [...password].some(
    (char) => !/[a-zA-Z0-9]/.test(char)
  );

  return {
    isNameEmpty,
    isNameRightLength,
    isEmailEmpty,
    notStartWithNumber,
    notEndWithNumber,
    includesAtSymbol,
    includesDot,
    dotAfterAt,
    atNotFirstOrLast,
    dotNotLast,
    isPasswordEmpty,
    isPasswordLongEnough,
    containsLetter,
    containsNumber,
    containsSpecialChar,
  };
};

export default validateCredentials;
