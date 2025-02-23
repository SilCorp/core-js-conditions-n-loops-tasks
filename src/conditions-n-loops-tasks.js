/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;

  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x: qx, y: qy } = queen;
  const { x: kx, y: ky } = king;

  if (qx === kx || qy === ky) return true;

  return Math.abs(qx - kx) === Math.abs(qy - ky);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;

  if (a === b) return a + b > c;
  if (a === c) return a + c > b;
  if (b === c) return b + c > a;

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';

  const divided = num / 10;
  const dozens = Math.trunc(divided);
  const units = Math.round((divided - dozens) * 10);

  function repeatString(string, count) {
    let res = '';
    for (let i = 0; i < count; i += 1) {
      res += string;
    }

    return res;
  }

  result = repeatString('X', dozens);

  if (units === 9) {
    result += 'IX';
  } else if (units >= 5) {
    const remainder = units % 5;
    result += `V${repeatString('I', remainder)}`;
  } else if (units === 4) {
    result += 'IV';
  } else {
    result += repeatString('I', units);
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const digit = numberStr[i];
    let digitName = '';

    switch (digit) {
      case '0': {
        digitName = 'zero';
        break;
      }
      case '1': {
        digitName = 'one';
        break;
      }
      case '2': {
        digitName = 'two';
        break;
      }
      case '3': {
        digitName = 'three';
        break;
      }
      case '4': {
        digitName = 'four';
        break;
      }
      case '5': {
        digitName = 'five';
        break;
      }
      case '6': {
        digitName = 'six';
        break;
      }
      case '7': {
        digitName = 'seven';
        break;
      }
      case '8': {
        digitName = 'eight';
        break;
      }
      case '9': {
        digitName = 'nine';
        break;
      }
      case ',':
      case '.': {
        digitName = 'point';
        break;
      }
      case '-': {
        digitName = 'minus';
        break;
      }
      default:
        digitName = '';
    }

    result += digitName;

    if (i < numberStr.length - 1) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const strMidIndex = Math.floor(str.length / 2);

  for (let i = 0; i < strMidIndex; i += 1) {
    const charA = str[i];
    const charB = str[str.length - 1 - i];
    if (charA !== charB) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  for (let i = 0; i < numStr.length; i += 1) {
    if (Number(numStr[i]) === digit) return true;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumA = 0;
  let sumB = 0;

  for (let i = 0; i < arr.length - 1; i += 1) {
    sumA += arr[i];
  }

  for (let i = arr.length - 1; i > 0; i -= 1) {
    sumB += arr[i];
    sumA -= arr[i - 1];

    if (sumA === sumB) {
      return i - 1;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = Array(size);

  for (let i = 0; i < size; i += 1) {
    matrix[i] = Array(size);
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = null;
    }
  }

  let currentSize = size;
  let counter = 0;
  let iteration = 0;

  while (iteration < currentSize) {
    if (iteration + 1 === currentSize) {
      counter += 1;
      matrix[iteration][iteration] = counter;
    }

    for (let i = iteration; i < currentSize - 1; i += 1) {
      counter += 1;
      matrix[iteration][i] = counter;
    }

    for (let i = iteration; i < currentSize - 1; i += 1) {
      counter += 1;
      matrix[i][currentSize - 1] = counter;
    }

    for (let i = currentSize - 1; i > iteration; i -= 1) {
      counter += 1;
      matrix[currentSize - 1][i] = counter;
    }

    for (let i = currentSize - 1; i > iteration; i -= 1) {
      counter += 1;
      matrix[i][iteration] = counter;
    }

    iteration += 1;
    currentSize -= 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const myMatrix = matrix;
  const matrixSize = myMatrix.length;
  let currentSize = myMatrix.length;
  let iteration = 0;

  while (iteration < currentSize) {
    for (let i = iteration + 1; i < currentSize; i += 1) {
      const [iA, jA] = [iteration, i];
      const [iB, jB] = [i, currentSize - 1];
      [myMatrix[iA][jA], myMatrix[iB][jB]] = [
        myMatrix[iB][jB],
        myMatrix[iA][jA],
      ];
    }

    for (let i = iteration + 1; i < currentSize; i += 1) {
      const [iA, jA] = [iteration, i];
      const [iB, jB] = [currentSize - 1, matrixSize - 1 - i];

      [myMatrix[iA][jA], myMatrix[iB][jB]] = [
        myMatrix[iB][jB],
        myMatrix[iA][jA],
      ];
    }

    for (let i = iteration + 1; i < currentSize; i += 1) {
      const [iA, jA] = [iteration, i];
      const [iB, jB] = [matrixSize - 1 - i, iteration];

      [myMatrix[iA][jA], myMatrix[iB][jB]] = [
        myMatrix[iB][jB],
        myMatrix[iA][jA],
      ];
    }

    iteration += 1;
    currentSize -= 1;
  }

  return myMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr, left = 0, right = arr.length - 1) {
  function partition(items, l, r) {
    const myItems = items;
    const pivot = myItems[r];
    let i = l - 1;

    for (let j = l; j < r; j += 1) {
      if (myItems[j] < pivot) {
        i += 1;
        [myItems[i], myItems[j]] = [myItems[j], myItems[i]];
      }
    }
    [myItems[i + 1], myItems[r]] = [myItems[r], myItems[i + 1]];

    return i + 1;
  }

  if (left < right) {
    const pi = partition(arr, left, right);

    sortByAsc(arr, left, pi - 1);
    sortByAsc(arr, pi + 1, right);
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const sourceStr = str;
  let resultStr = str;
  let iterationsNum = iterations;

  for (let j = 0; j < iterationsNum; j += 1) {
    let string = '';
    let charBuff = '';
    for (let i = 1; i < resultStr.length; i += 2) {
      string += resultStr[i - 1];
      charBuff += resultStr[i];

      if (i + 1 === resultStr.length - 1) {
        string += resultStr[i + 1];
      }
    }

    resultStr = string + charBuff;

    if (resultStr === sourceStr) {
      const cycledIteration = j + 1;
      const iterationsLeft = iterationsNum % cycledIteration;
      iterationsNum = cycledIteration + iterationsLeft;
    }
  }

  return resultStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const resultStr = String(number);
  const digits = Array.from(resultStr);

  let dIndex;
  let dDigit;
  for (let i = digits.length - 2; i >= 0; i -= 1) {
    const currentDigit = digits[i];
    const prevDigit = digits[i + 1];
    if (currentDigit < prevDigit) {
      dIndex = i;
      dDigit = currentDigit;
      break;
    }
  }

  if (dIndex === undefined) return number;

  let minIndex;
  let minDigit = Infinity;

  for (let i = dIndex + 1; i < digits.length; i += 1) {
    const currentDigit = digits[i];
    if (currentDigit > dDigit && currentDigit < minDigit) {
      minIndex = i;
      minDigit = currentDigit;
    }
  }

  if (minIndex === undefined) return number;

  [digits[minIndex], digits[dIndex]] = [digits[dIndex], digits[minIndex]];

  const sortedPart = digits.splice(dIndex + 1).sort((a, b) => a - b);

  return Number([...digits, ...sortedPart].join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
