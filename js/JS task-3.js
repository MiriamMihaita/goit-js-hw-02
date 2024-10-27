function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// task-3-results in HTML
document.getElementById("task-3-results").innerHTML = `
    <p>${checkForSpam("Latest technology news")}</p>
    <p>${checkForSpam("JavaScript weekly newsletter")}</p>
    <p>${checkForSpam("Get best sale offers now!")}</p>
    <p>${checkForSpam("Amazing SalE, only tonight!")}</p>
    <p>${checkForSpam("Trust me, this is not a spam message")}</p>
    <p>${checkForSpam("Get rid of sPaM emails. Our book is on sale!")}</p>
    <p>${checkForSpam("[SPAM] How to earn fast money?")}</p>
`;




// task-3-results
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book is on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

