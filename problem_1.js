/* Given a string, reverse each word in the string while maintaining the original order of words and spaces.

Examples
reverseEachWord("Hello World");
// Expected output: "olleH dlroW"

reverseEachWord("JavaScript is fun");
// Expected output: "tpircSavaJ si nuf"
Example 1
Input: str = "Hello World"

Output: "olleH dlroW"

Example 2
Input: str = "JavaScript is fun"

Output: "tpircSavaJ si nuf"

Constraints
The input `str` will always be a string.

Hints
Hint 1. Consider how to break the string into words, reverse each word, and then combine them back.
Hint 2. The `split()`, `map()`, `reverse()`, and `join()` array methods can be very useful here. */


function reverseEachWord(str) {
    const words = str.split(" ");

    const reversedWords = words.map(function (word) {
        return word.split("").reverse().join("");
    });

    return reversedWords.join(" ");
}