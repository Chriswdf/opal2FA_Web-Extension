// ready for takeoff
const idx_Secret = {
    1: "a",
    2: "a",
    3: "a",
    4: "a",
    5: "a",
    6: "a",
    7: "a",
    8: "a",
    9: "a",
    10: "a",
    11: "a",
    12: "a",
    13: "a",
    14: "a",
    15: "a",
    16: "a",
    17: "a",
    18: "a",
    19: "a",
    20: "a",
    21: "a",
    22: "a",
    23: "a",
    24: "a",
    25: "a",
};

console.log("content.js loaded");

const legendElement = document.querySelector("legend");
if(!legendElement) {
    console.error("<legend>-element not found.");
} else {
    const nobrElement = legendElement.querySelector("nobr");     // find data
    if (!nobrElement) { 
        console.error("<nobr>-element not inside of <legend> found.");
    } else {
        // get content
        const text = nobrElement.textContent || "";
        console.log("Found text:", text);
        const cleanedText = text.replace(/\u00a0|&nbsp;/g, " ");        // replace not-breakable spacebar with regular spacebar
        console.log("cleaned text:", cleanedText);
        const numbers = cleanedText.match(/\d+/g);                       // extract numbers in array

        if (!numbers || numbers.length === 0) {
            console.error("no numbers found.");
        } else {
            const col_numbers = numbers.map(Number);                      // convert in real numbers
            console.log("extract col:", col_numbers);
            const output_data = [];

            col_numbers.forEach((col) => {
                const keyValue = idx_Secret[col];

                if (keyValue) {
                    output_data.push(keyValue);                             // adds Key-Value to Array
                    console.log(`Key for col "${col}": "${keyValue}"`);
                } else {
                    console.warn(`no key for col "${col}" found`);
                }
            });
            const inputField = document.querySelector("#fudis_otp_input");

            if (!inputField) {
                console.error("input-field not found.");
            } else {
                inputField.value = output_data.join('');                        // joins all entries to 1 string
                console.log(`following values submitted: ${output_data.join('')}`);
                const submitButton = document.querySelector("button[name='_eventId_proceed']");

                if (submitButton) {
                    submitButton.click();
                    console.log("Button 'Überprüfen' clicked")
                } else {
                    console.error('Button "Überprüfen" not found.');
                }

            }
        }
    }
}
















/*
const submitButton = document.querySelector('button[name="_eventId_proceed"]');
if (submitButton) {
    //submitButton.childNodes[0].nodeValue = 'CS: Überprüfung, bitte warten...';
    submitButton.addEventListener('click', function() {
        this.click();
        console.log('Button "Überprüfen" has been clicked.');
    })
} else {
    console.error('Button "Überprüfen" not found.')
    return;
}
*/