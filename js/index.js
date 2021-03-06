//Log out a message to show you've got JavaScript running

console.log("script running!");


//Define a variable `myName` and log it out

let myName = "Abbie Thacher";

console.log("myName");


//Define a function `getVowelCount()`

function getVowelCount(aString) {
    let lowerCaseString = aString.toLowerCase();
    let modifiedString = lowerCaseString.replaceAll("a", "");
    modifiedString = modifiedString.replaceAll("e", "");
    modifiedString = modifiedString.replaceAll("i", "");
    modifiedString = modifiedString.replaceAll("o", "");
    modifiedString = modifiedString.replaceAll("u", "");
    modifiedString = modifiedString.replaceAll("y", "");
    let count = lowerCaseString.length - modifiedString.length;

    return count;
}




//Define a variable `numVowelsInName` and log it out

let numVowelsInName=getVowelCount(myName);
console.log(numVowelsInName);

//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
//Then change the text of that element

let h1Element= $("h1")
console.log(h1Element);
h1Element.text("Interactive Pet Viewer");



//Create a variable `footerElement` that refers to the `<footer>`, then
//change the HTML content of that element

let footerElement= $("footer");
console.log(footerElement);
footerElement.html("<small>All images from <a href='https://unsplash.com/'>unsplash.com</a></small>");




//hints


//Change the CSS `display` property of the `#cats` element
//Add the `active` class to the `#btnShowDogs` element

$("#cats").css("display", "none");
$("#btnShowDogs").addClass("active")


//Add an event listener to the buttons to respond to click events.
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class

$(".btn-group").on("click", function (event) {
    $("#dogs, #cats").toggle("fast");
    $("#btnShowDogs, #btnShowCats").toggleClass("active");
});





//Change the `cursor` CSS property of the images

$("img").css("cursor", "pointer");



//Add the `data-bs-toggle` and `data-bs-target` attributes to the images




//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.