// Select the button using its ID
const button = document.getElementById("changeColor");

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
}

// Attach event listener to button
button.addEventListener("click", changeBackgroundColor);