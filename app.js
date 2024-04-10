// References to DOM elements
const buzzerButton = document.getElementById("buzzerButton"); // The button players press
const cookieContainer = document.getElementById("cookieJar"); // Container for cookie images
const message = document.getElementById("message"); // Container for messages and the recipe image
let cookieCount = 0; // Counter for the number of cookies given
const cookieSound = new Audio("ping.mp3"); // Sound played on button press

// Add event listener to the buzzer button
buzzerButton.addEventListener("click", () => {
    if (cookieCount < 12) { // Check if less than 12 cookies have been given
        buzzerButton.disabled = true; // Disable the button to prevent multiple clicks
        cookieSound.play(); // Play the click sound

        // Function to run when the sound finishes playing
        cookieSound.onended = () => {
            if (cookieCount < 12) { // Check again to ensure we haven't exceeded the count
                const cookieImg = document.createElement("img"); // Create a new image element for the cookie
                cookieImg.src = "cookie.png"; // Set the source of the cookie image
                cookieContainer.appendChild(cookieImg); // Add the cookie image to the container
                cookieCount++; // Increment the cookie counter

                // Check if we should re-enable the button or show the message and recipe
                if (cookieCount < 12) {
                    buzzerButton.disabled = false; // Re-enable the button for more cookies
                } else {
                    showMessageAndRecipe(); // Show the final message and recipe
                }
            }
        };
    } else {
        showMessageAndRecipe(); // If already 12 cookies, show the message and recipe directly
    }
});

// Function to display the "Sorry" message and recipe image
function showMessageAndRecipe() {
    message.innerHTML = ""; // Clear any existing content in the message container

    const textNode = document.createElement("div"); // Create a new div for the text message
    textNode.textContent = "Sorry out of Cookies make your own"; // Set the text content
    message.appendChild(textNode); // Add the text message to the message container

    const recipeImg = document.createElement("img"); // Create a new image element for the recipe
    recipeImg.src = "cccRecipe.png"; // Set the source of the recipe image
    recipeImg.alt = "Cookie Recipe"; // Set an alt text for accessibility
    recipeImg.style.display = "block"; // Make the image a block element to ensure it appears on a new line
    recipeImg.style.margin = "auto"; // Center the image
    message.appendChild(recipeImg); // Add the recipe image to the message container
}
