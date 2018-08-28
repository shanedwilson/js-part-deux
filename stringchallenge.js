const sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";

// Find and output the starting position of the word "orphans". (use a console.log for this)
console.log('index of', sonnet.indexOf('orphans'));
// Output the number of characters in the sonnet.(use a console.log for this)
console.log('# of characters', sonnet.length);
// Replace the first occurance of the string "winter" with "yuletide".
let newSonnet = sonnet.replace('winter', 'yuletide');
// Replace all occurances of the string "the" with "a large".
newSonnet = newSonnet.replace(/ the /g, " a large ");
// Once you have the final string print it to the sonnet div.
const printToDom = document.getElementById('sonnet');

// console.log(newSonnet)

printToDom.innerHTML = `<h3>${newSonnet}</h3>`;

//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += stringToPrint;
// };