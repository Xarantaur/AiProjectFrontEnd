const wizards = [
    {
        name: "Gandalf",
        backgroundImages: [
            'url(../Pictures/Gandalf.webp)',
            'url(../Pictures/Gandalf2.png)',
            'url(../Pictures/Gandalf3.png)',
            'url(../Pictures/Gandalf4.png)'
        ],
    },
    {
        name: "Saruman",
        backgroundImages: [
            'url(../Pictures/saruman.png)',
            'url(../Pictures/saruman2.png)',
            'url(../Pictures/saruman3.png)',
            'url(../Pictures/saruman4.png)'
        ],
    },
    /* {
         name: "Dumbledore",
         backgroundImages: [
             'url("../Pictures/Dumbledore1.jpg")',
             'url("../Pictures/Dumbledore2.jpg")',
             'url("../Pictures/Dumbledore3.jpg")',
             ''
     },
 },*/
];

const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
let responseField = document.getElementById('responseField');
const title = document.getElementById('title');

const gandalfButton = document.getElementById('gandalfButton');
const sarumanButton = document.getElementById('sarumanButton');
const dumbledoreButton = document.getElementById('dumbledoreButton');
const voldemortButton = document.getElementById('voldemortButton');
let chosenWizardIndex = 0
let currentImageIndex = 0;
let chosenWizard = wizards[0]

function updateUI() {
    document.body.style.backgroundImage = chosenWizard.backgroundImages[currentImageIndex];
    responseField.innerHTML = chosenWizard.message;
}

function changeWizard(index) {
    chosenWizardIndex = index;
    chosenWizard = wizards[chosenWizardIndex];
    updateUI();
    responseField.innerHTML = `(${chosenWizard.name} will reply to you here)`;
    responseField.style.color = 'white';
    title.style.color = 'white';
}
updateUI()


function sarumanScene() {
    changeWizard(1)
    document.body.style.backgroundImage = "url('../Pictures/isengard.jpg')";
    responseField.innerHTML = "(Saruman will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
    chosenWizard = "saruman";
}

function dumbledoreScene() {
    document.body.style.backgroundImage = "url('https://images.ctfassets.net/usf1vwtuqyxm/10gV2CRra9nixY63MQGgvA/6748ddb5f4269e2fc5ce59cccd6e05de/HP-F6-half-blood-prince-dumbledore-office-memory-cabinet-web-landscape?fm=jpg&q=70&w=2560')";
    responseField.innerHTML = "(Dumbledore will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
    chosenWizard = "dumbledore"
}

function gandalfScene() {
    changeWizard(0);

    document.body.style.backgroundImage = "url('../Pictures/theShire.jpg')";
    responseField.innerHTML = "(Gandalf will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
}

function voldemortScene() {
    document.body.style.backgroundImage = "url('https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/voldemort-feature.jpg')";
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

updateUI()
/*const gandalfImagePath = [
    'url(../Pictures/Gandalf.webp)',
    'url(../Pictures/Gandalf2.png)',
    'url(../Pictures/Gandalf3.png)',
    'url(../Pictures/Gandalf4.png)'
];*/
const body = document.body;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % chosenWizard.backgroundImages.length;
    const gandalfContainer = document.querySelector('.gandalfContainer');
    gandalfContainer.style.backgroundImage = chosenWizard.backgroundImages[currentImageIndex];
    console.log("Background changed");
}

function setChosenWizard(wizard) {
    chosenWizard = wizard
}
const observer = new MutationObserver(changeBackground)

const observerConfig = {childList: true}

observer.observe(responseField, observerConfig)
console.log("MutationObserver is active.");

//responseField.addEventListener("DOMSubtreeModified", changeBackground)
body.style.backgroundImage = chosenWizard.backgroundImages[currentImageIndex];
console.log("Initial background set.");





