
exports.min = function min(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let answer = 0
  array.forEach(element => {
    if (answer > element) {
      answer = element
    }
  });
  return answer;
}

exports.max = function max(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let answer = 0
  array.forEach(element => {
    if (answer < element) {
      answer = element
    }
  });
  return answer;
}

exports.avg = function avg(array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  if (!Array.isArray(array)) {
    return 0;
  }
  let answer = array.reduce((sum, element) => {
    return sum + element;
  }, 0);
  return answer / array.length;
}