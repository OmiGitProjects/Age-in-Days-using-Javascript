// Start Coding Here 

// FOR CLICK ME BUTTON
function ageinDays() {
    let birthYear = prompt("In Which Year do you Born?");
    let CURRENT_YEAR = 2020;
    let ageInDays = (CURRENT_YEAR - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You Are ' + ageInDays + ' Days Old...');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

// FOR RESET Button
function reset() {
    document.getElementById('ageInDays').remove();
}
