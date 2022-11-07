let hexColorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let initialBackColor = "#BDC3C7";
let increaseStaticColor="#C0392B";
let decreaseStaticColor="#34495E";
let count = 0;
document.getElementById("textCounterResult").innerHTML = 0;

//Decrease number
document.getElementById("decreaseButton").onclick = function() {
    let finalArray = [];
    count--;
    document.getElementById("textCounterResult").innerHTML = `${count}`;
    
    finalArray = createHexCodeColor(hexColorCode);

    if(count <= -20) {
        document.body.style.backgroundColor = finalArray;
        document.getElementById("textColorCode").innerHTML = `Color: ${finalArray}`;
    }
    else if(count <= -10) {
        document.body.style.backgroundColor = `${decreaseStaticColor}`;
        document.getElementById("textColorCode").innerHTML = `Color: ${decreaseStaticColor}`;
    }
    else if(count >= 20) {
        document.body.style.backgroundColor = finalArray;
        document.getElementById("textColorCode").innerHTML = `Color: ${finalArray}`;
    }
    else if(count >= 10) {
        document.body.style.backgroundColor = `${increaseStaticColor}`;
        document.getElementById("textColorCode").innerHTML = `Color: ${increaseStaticColor}`;
    }
    else if(count <= 0 || count >= 0){
        document.body.style.backgroundColor = `${initialBackColor}`;
    document.getElementById("textColorCode").innerHTML = `Color: ${initialBackColor}`;
    }
}
//Reset number to zero
document.getElementById("resetButton").onclick = function() {
    count=0;
    document.getElementById("textCounterResult").innerHTML = `${count}`;


    document.body.style.backgroundColor = `${initialBackColor}`;
    document.getElementById("textColorCode").innerHTML = `Color: ${initialBackColor}`;
}
//Increase number
document.getElementById("increaseButton").onclick = function() {
    count++;
    document.getElementById("textCounterResult").innerHTML = `${count}`;

    finalArray = createHexCodeColor(hexColorCode);


    if(count >= 20) {
        document.body.style.backgroundColor = finalArray;
        document.getElementById("textColorCode").innerHTML = `Color: ${finalArray}`;
    }
    else if(count >= 10) {
        document.body.style.backgroundColor = `${increaseStaticColor}`;
        document.getElementById("textColorCode").innerHTML = `Color: ${increaseStaticColor}`;
    }
    else if(count <= -20) {
        document.body.style.backgroundColor = finalArray;
        document.getElementById("textColorCode").innerHTML = `Color: ${finalArray}`;
    }
    else if(count <= -10) {
        document.body.style.backgroundColor = `${decreaseStaticColor}`;
        document.getElementById("textColorCode").innerHTML = `Color: ${decreaseStaticColor}`;
    }
    else if(count <= 0 || count >= 0){
        document.body.style.backgroundColor = `${initialBackColor}`;
    document.getElementById("textColorCode").innerHTML = `Color: ${initialBackColor}`;
    }
}

/* -----------Create random numbers in array function----------- */
function createHexCodeColor(array) {
    let currentIndex = array.length;
    let sizeOfArray = array.length;
    let finalArray = [];

    //Suffle random index between the array
    while(currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * sizeOfArray);
        currentIndex--;
        
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    //Takes the first six elements from array
    for(let i=0; i<6; i++) {
        finalArray[i] = array[i];
    }
    //Return final array without commas
    return `#${finalArray.join('')}`;
}