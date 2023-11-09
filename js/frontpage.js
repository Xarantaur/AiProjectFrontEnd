const wizards = [
    {
        name: "Gandalf",
        backgroundImages: [
            'url(../Pictures/Gandalf.webp)',
            'url(../Pictures/Gandalf2.png)',
            'url(../Pictures/Gandalf3.png)',
            'url(../Pictures/Gandalf4.png)'
        ],
        role: "gandalf"
    },
    {
        name: "Saruman",
        backgroundImages: [
            'url(../Pictures/saruman.png)',
            'url(../Pictures/saruman2.png)',
            'url(../Pictures/saruman3.png)',
            'url(../Pictures/saruman4.png)'
        ],
        role: "saruman"
    },
    {
         name: "Dumbledore",
         backgroundImages: [
             'url(../Pictures/dumbledore.png)',
             'url(../Pictures/dumbledore2.png)',
             'url(../Pictures/dumbledore3.png)',
             'url(../Pictures/dumbledore4.png)'
             ],
        role: "dumbledore"
     },
    {
        name: "Voldemort",
        backgroundImages: [
            'url(../Pictures/voldemort.webp)',
            'url(../Pictures/voldemort2.png)',
            'url(../Pictures/voldemort3.png)',
            'url(../Pictures/voldemort4.png)'
        ],
        role: "voldemort"
    }

];
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
let responseField = document.getElementById('responseField');
const title = document.getElementById('title');

const gandalfButton = document.getElementById('gandalfButton');
const sarumanButton = document.getElementById('sarumanButton');
const dumbledoreButton = document.getElementById('dumbledoreButton');
const voldemortButton = document.getElementById('voldemortButton');
let wizardContainer = document.querySelector('.wizardContainer');
let currentImageIndex = 0
let wizardArray = wizards[0]
const body = document.body;

function updateUI() {
    document.body.style.backgroundImage =wizardArray.backgroundImages[currentImageIndex]
    responseField.innerHTML = wizardArray.message;
}
function changeWizard(index){
    wizardArray = wizards[index]
    chosenWizard = wizardArray.role;
    updateUI()
}

function sarumanScene() {
    changeWizard(1)
    wizardContainer.style.backgroundImage = wizardArray.backgroundImages[currentImageIndex][1];
    document.body.style.backgroundImage = "url('../Pictures/isengard.jpg')";
    responseField.innerHTML = "(Saruman will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
    chosenWizard = "saruman";
}

function dumbledoreScene() {
    changeWizard(2)
    wizardContainer.style.backgroundImage = wizardArray.backgroundImages[currentImageIndex][2];
    document.body.style.backgroundImage = "url('../Pictures/hogwarts.jpg')";
    responseField.innerHTML = "(Dumbledore will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
    chosenWizard = "dumbledore"
}

function gandalfScene() {
    changeWizard(0)
    wizardContainer.style.backgroundImage = wizardArray.backgroundImages[currentImageIndex][0];
    document.body.style.backgroundImage = "url('../Pictures/theShire.jpg')";
    responseField.innerHTML = "(Gandalf will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
}

function voldemortScene() {
    changeWizard(3)
    wizardContainer.style.backgroundImage = wizardArray.backgroundImages[currentImageIndex][3]
    document.body.style.backgroundImage = "url('../Pictures/chamber.jpeg')";
    responseField.innerHTML = "(Voldemort will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
    chosenWizard = "voldemort";
}

function textTypingEffect(element, text, i = 0) {
    if(i == 0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if(i == text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 30)
}

async function getGandalfResponse(message, chosenWizard) {
    fetch(`http://localhost:8080/chat?message=${encodeURIComponent(message)}&chosenwizard=${encodeURIComponent(chosenWizard)}`)
        .then(response => response.json())
        .then(data => {
            // Process the response data
            console.log(data);
            const messageContent = data[0].message.content;
            console.log(messageContent);
            // Perform any desired actions with the message content
            textTypingEffect(responseField, messageContent)
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        });
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const userInput = inputField.value;
    console.log('User input: ', userInput);
    getGandalfResponse(userInput, chosenWizard);
});

sarumanButton.addEventListener('click',
    sarumanScene)
gandalfButton.addEventListener('click',
    gandalfScene)
dumbledoreButton.addEventListener('click', dumbledoreScene)
voldemortButton.addEventListener('click', voldemortScene)

gandalfButton.addEventListener('mouseover', () => {
    gandalfButton.style.backgroundColor = 'darkgray';
});

gandalfButton.addEventListener('mouseout', () => {
    gandalfButton.style.backgroundColor = 'white';
});

sarumanButton.addEventListener('mouseover', () => {
    sarumanButton.style.backgroundColor = 'darkgray';
});

sarumanButton.addEventListener('mouseout', () => {
    sarumanButton.style.backgroundColor = 'white';
});

dumbledoreButton.addEventListener('mouseover', () => {
    dumbledoreButton.style.backgroundColor = 'darkgray';
});

dumbledoreButton.addEventListener('mouseout', () => {
    dumbledoreButton.style.backgroundColor = 'white';
});

voldemortButton.addEventListener('mouseover', () => {
    voldemortButton.style.backgroundColor = 'darkgray';
});

voldemortButton.addEventListener('mouseout', () => {
    voldemortButton.style.backgroundColor = 'white';
});
<!--  wizard anime -->

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % wizardArray.backgroundImages.length;
    const wizardContainer = document.querySelector('.wizardContainer');
    wizardContainer.style.backgroundImage = wizardArray.backgroundImages[currentImageIndex];
    console.log("Background changed");
}

const observer = new MutationObserver(changeBackground)

const observerConfig = {childList: true}

observer.observe(responseField, observerConfig)
console.log("MutationObserver is active.");

//responseField.addEventListener("DOMSubtreeModified", changeBackground)
body.style.backgroundImage = 'url(../Pictures/theShire.jpg)'
console.log("Initial background set.");





