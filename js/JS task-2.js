function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    }
    return message.slice(0, maxLength) + "...";
}

// task-2-results in HTML
document.getElementById("task-2-results").innerHTML = `
    <p>${formatMessage("Curabitur ligula sapien", 16)}</p>
    <p>${formatMessage("Curabitur ligula sapien", 23)}</p>
    <p>${formatMessage("Vestibulum facilisis purus nec", 20)}</p>
    <p>${formatMessage("Vestibulum facilisis purus nec", 30)}</p>
    <p>${formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)}</p>
    <p>${formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)}</p>
`;



// task-2-results
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
