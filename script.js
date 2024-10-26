// Function to append results to the HTML as an h2 element
function appendResult(divId, text) {
    const resultsDiv = document.getElementById(divId);
    const h2 = document.createElement('h2');
    h2.textContent = text;
    resultsDiv.appendChild(h2);
}

// if/else-if/else statements
let myGrade = 70;
if (myGrade >= 90) {
    console.log("A");
    appendResult("results1", "A");
} else if (myGrade >= 80) {
    console.log("B");
    appendResult("results1", "B");
} else if (myGrade >= 70) {
    console.log("C");
    appendResult("results1", "C");
} else if (myGrade >= 60) {
    console.log("D");
    appendResult("results1", "D");
} else {
    console.log("F");
    appendResult("results1", "F");
}

