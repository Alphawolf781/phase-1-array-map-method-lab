// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {
//   return tutorials
// }


const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];


function titleCased() {
  return tutorials.map(title => {
    // Split the title into words
    const words = title.split(' ');

    // Capitalize each word correctly
    const capitalizedWords = words.map(word => {
      // Check if the word contains a number or internal uppercase letters
      if (/^\d+$/.test(word) || /[A-Z]/.test(word.slice(1))) {
        return word.charAt(0).toUpperCase() + word.slice(1); // Preserve numbers and words with internal uppercase
      } else {
        // Capitalize the first letter and convert the rest to lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });

    // Join capitalized words into a title and return
    return capitalizedWords.join(' ');
  });
}

console.log(titleCased());