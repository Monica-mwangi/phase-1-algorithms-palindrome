function isPalindrome(word) {
  // Write your algorithm here
   // Convert the word to lowercase
   const lowercaseWord = word.toLowerCase();

   // Reverse the word using an iterative approach
   let reversedWord = "";
   for (let i = lowercaseWord.length - 1; i >= 0; i--) {
     reversedWord += lowercaseWord[i];
   }
 
   // Check if the reversed word is the same as the original word
   return lowercaseWord === reversedWord;
 }
 


/* 
  Add your pseudocode here
  1. Convert the word to lowercase.
  2. Initialize an empty string to store the reversed word.
  3. Iterate through each character of the lowercase word in reverse order.
  4. Append each character to the reversed word.
  5. Check if the reversed word is equal to the original word.
  6. Return true if they are equal, indicating that the word is a palindrome.
  7. Otherwise, return false
*/

/*
  Add written explanation of your solution here
    The isPalindrome function checks if a given word is a palindrome. It follows the following steps:
  1. It converts the word to lowercase to make it case-insensitive.
  2.loop through the reversed word,by the end of the loop, reversedWord will contain the reversed version of the lowercaseWord.
  3. It then compares the reversed word with the original word.
  4. If the two words are equal, it returns true, indicating that the word is a palindrome.
  5. If they are not equal, it returns false, indicating that the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
