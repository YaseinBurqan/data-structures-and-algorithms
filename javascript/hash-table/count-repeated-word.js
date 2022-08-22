function countRepeatedWords(string) {
  let arr = string.split(" ");
  let words = [];

  for (let word of arr) {
    if (!words[word]) {
      words[word] = 1;
    } else {
      words[word]++;
    }
  }

  return words;
}


module.exports = countRepeatedWords;
