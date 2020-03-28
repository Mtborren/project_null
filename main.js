// JS Form Validation -- blank input fields

let submitButton = document.getElementById("submitButton").addEventListener("click", () => {
    let firstName = document.getElementById("firstName").value;
    if (firstName == "") {
        alert ("First name must be filled out");
        return false;
    }

    let lastName = document.getElementById("lastName").value;
    if (lastName == "") {
        alert ("Last name must be filled out");
        return false;
    }

    let areaCode = document.getElementById("areaCode").value;
    if (areaCode == "") {
        alert ("Area code must be filled out");
    }

    let firstThree = document.getElementById("firstThree").value;
    if (firstThree == "") {
        alert ("Complete phone number must be filled out");
    }

    let lastFour = document.getElementById("lastFour").value;
    if (lastFour == "") {
        alert ("Complete phone number must be filled out");
    }else{
        alert ("Your contact information has been submitted");
    }
});