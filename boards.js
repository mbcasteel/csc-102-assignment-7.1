// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original clean string is the same as the reversed string
    return cleanStr === reversedStr;
}

// --- While Loop Example (Checking 'madam') ---
function whileLoopFunc()
{
    var i = 0;
    var end = 1; // Only need to run once for a single string check
    var testString = "madam"; 
    
    while (i < end)
    {
        // Palindrome check result
        var result = isPalindrome(testString) ? "IS a palindrome." : "IS NOT a palindrome.";
        
        alert(`While Loop Check: The string "${testString}" ${result}`);
        i++; 
    }
}

// --- Do-While Loop Example (Checking 'level') ---
function doLoopFunc()
{
    var i = 0; // Reset i for this loop, though it only runs once
    var end = 1;
    var testString = "level";
    
    do {
        // Palindrome check result
        var result = isPalindrome(testString) ? "IS a palindrome." : "IS NOT a palindrome.";
        
        alert(`Do-While Loop Check: The string "${testString}" ${result}`);
        i++; // Increment i to make sure the loop condition eventually fails
    } while (i < end);
}

// --- For Loop Example (Checking multiple strings in an array) ---
function forLoopFunc()
{
    // Array of strings to test
    var testStrings = ["A man, a plan, a canal: Panama", "hello", "rotor", "Racecar"];

    // The loop iterates through each element (string) in the array
    for (var i = 0; i < testStrings.length; i++)
    {
        var currentString = testStrings[i];
        
        // Palindrome check result
        var result = isPalindrome(currentString) ? "IS a palindrome." : "IS NOT a palindrome.";
        
        alert(`For Loop Check (String ${i+1}): The string "${currentString}" ${result}`);
    }
}
