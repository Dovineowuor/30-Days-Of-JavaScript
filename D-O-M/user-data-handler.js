// This fumction Querries an event of input and handles user data displaying it to the user.

let answer = prompt("Enter your Full Name:");// This function querries users to enter their names for handling
if (typeof(answer)) === "string"{
    var h1 = document.createElement("h1");
    h1.innerText = answer;
    document.body.innerText = "";
    document.body.appendChild(h1);
	// This is the quickest way of capturing user data on a website
}
