function countRepeatedLetters(string) {
  let arr = string.split(" ");
  let letters = {};

  for (let word of arr) {
    if (!letters[word]) {
      letters[word] = 1;
    } else {
      letters[word]++;
    }
  }

  return letters;
}


module.exports = countRepeatedLetters;
