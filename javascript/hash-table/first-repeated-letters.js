function firstRepeatedLetter(string) {
  let arr = string.split("");
  let letters = {};

  for (let letter of arr) {
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter]++;
    }
  }

  for (let key in letters) {
    if (letters[key] > 1) {
      return key;
    }
  }
  return -1;
}
console.log(
  firstRepeatedLetter("Once upon a time, there was a brave princess who...")
);

module.exports = firstRepeatedLetter;
