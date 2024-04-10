const buzzerButton = document.getElementById("buzzerButton");
const cookieContainer = document.getElementById("cookieJar");
const message = document.getElementById("message");
let cookieCount = 0;
const cookieSound = new Audio("ping.mp3");

buzzerButton.addEventListener("click", () => {
    if (cookieCount < 12) {
        buzzerButton.disabled = true;
        cookieSound.play();

        cookieSound.onended = () => {
            if (cookieCount < 12) {
                const cookieImg = document.createElement("img");
                cookieImg.src = "cookie.png";
                cookieContainer.appendChild(cookieImg);
                cookieCount++;

                if (cookieCount < 12) {
                    buzzerButton.disabled = false;
                } else {
                    showMessageAndRecipe();
                }
            }
        };
    } else {
        showMessageAndRecipe();
    }
});

function showMessageAndRecipe() {
    message.innerHTML = "";

    const textNode = document.createElement("div");
    textNode.textContent = "Sorry out of Cookies make your own";
    message.appendChild(textNode);
    const recipeImg = document.createElement("img");
    recipeImg.src = "cccRecipe.png";
    recipeImg.alt = "Cookie Recipe";
    recipeImg.style.display = "block";
    recipeImg.style.margin = "auto";
    message.appendChild(recipeImg);
}
