// string algorithm

const str = "leatcode";
const target = "e";

function charOccurrence(str, target) {
  let charCount = 0;

  for (let char of str) {
    char = char.toLowerCase();
    if (char == target) {
      charCount++;
    }
  }

  return charCount;
}

function longestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const seenChars = new Set();

  for (let end = 0; end < s.length; end++) {
    while (seenChars.has(s[end])) {
      seenChars.delete(s[start]);
      start++;
    }
    seenChars.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(charOccurrence(str, target));
console.log(longestSubstring("abcabasc"));
