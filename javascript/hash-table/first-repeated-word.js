function firstRepeatedWord(string) {
  let arr = string.split(" ");
  let words = {};

  for (let word of arr) {
    if (!words[word]) {
      words[word] = 1;
    } else {
      words[word]++;
    }
  }

  for (let key in words) {
    if (words[key] > 1) {
      return key;
    }
  }
  return -1;
}

module.exports = firstRepeatedWord;
