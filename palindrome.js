/**
 * Function to check if a string is a palindrome.
 * It removes spaces and converts to lowercase before checking.
 */
function isPalindrome(str) {
    // 1. Remove all non-alphanumeric characters (including spaces) and convert to lowercase.
    // This makes the check case-insensitive and ignores punctuation/spaces.
    const processedStr = str.replace(/\s/g, '').toLowerCase();

    // 2. Reverse the processed string
    const reversedStr = processedStr.split('').reverse().join('');

    // 3. Compare the processed string with its reverse
    return processedStr === reversedStr;
}

/**
 * Main function called by the button click in HTML.
 * It gets the user input, checks it, and displays the result.
 */
function checkPalindrome() {
    const inputField = document.getElementById('userInput');
    const resultDiv = document.getElementById('result');
    
    // Get the value from the input field
    const word = inputField.value;

    // Clear previous classes
    resultDiv.className = '';

    // Check for empty input
    if (word.trim() === '') {
        resultDiv.textContent = 'Please enter a word or phrase.';
        resultDiv.classList.add('not-palindrome');
        return;
    }

    // Perform the check
    if (isPalindrome(word)) {
        resultDiv.textContent = `'${word}' IS a palindrome! `;
        resultDiv.classList.add('palindrome');
    } else {
        resultDiv.textContent = `'${word}' is NOT a palindrome. `;
        resultDiv.classList.add('not-palindrome');
    }

    // Clear the input field for the next word
    inputField.value = '';
    
    // Focus the input field so the user can immediately type the next word
    inputField.focus(); 
}

