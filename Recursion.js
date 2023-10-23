function isPalindrome(word) {
    // Convert the word to lowercase to ignore case sensitivity
    word = word.toLowerCase();
  
    // Check if the word is empty or contains only one character
    if (word.length <= 1) {
      return true;
    }
  
    // Compare characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
      // Recursively check the rest of the word
      return isPalindrome(word.slice(1, word.length - 1));
    } else {
      return false;
    }
  }
  
  // Example usage
  console.log(isPalindrome("gag")); // true
  console.log(isPalindrome("kayak")); // true
  console.log(isPalindrome("php")); // true
  console.log(isPalindrome("radar")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome("world")); // false






//   This JavaScript code defines a function isPalindrome that takes a word as input and returns true if it is a palindrome, and false otherwise. The function follows the instructions provided in the checkpoint description.

// Alternatively, here's the same logic in pseudocode:


// function isPalindrome(word):
//   convert word to lowercase
//   if length of word <= 1:
//     return true
//   if first character of word is equal to last character of word:
//     return isPalindrome(substring of word without first and last characters)
//   else:
//     return false
  