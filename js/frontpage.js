const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
let responseField = document.getElementById('responseField');
const title = document.getElementById('title');

const gandalfButton = document.getElementById('gandalfButton');
const sarumanButton = document.getElementById('sarumanButton');
const dumbledoreButton = document.getElementById('dumbledoreButton');
let chosenWizard = "gandalf";


function sarumanScene() {
    document.body.style.backgroundImage = "url('https://qph.cf2.quoracdn.net/main-qimg-c9f526cd88564f3a6f0cfdb5ec845af2')";
    sarumanButton.style.backgroundColor = 'darkgray';
    gandalfButton.style.backgroundColor = 'white';
    dumbledoreButton.style.backgroundColor = 'white';
    responseField.innerHTML = "(Saruman will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
    chosenWizard = "saruman";
}

function dumbledoreScene() {
    document.body.style.backgroundImage = "url('https://images.ctfassets.net/usf1vwtuqyxm/10gV2CRra9nixY63MQGgvA/6748ddb5f4269e2fc5ce59cccd6e05de/HP-F6-half-blood-prince-dumbledore-office-memory-cabinet-web-landscape?fm=jpg&q=70&w=2560')";
    dumbledoreButton.style.backgroundColor = 'darkgray';
    gandalfButton.style.backgroundColor = 'white';
    sarumanButton.style.backgroundColor = 'white';
    responseField.innerHTML = "(Dumbledore will reply to you here)";
    responseField.style.color = 'white';
    title.style.color = 'white';
    chosenWizard = "dumbledore"
}

function gandalfScene() {
    document.body.style.backgroundImage = "url('https://berlingske.bmcdn.dk/media/cache/resolve/image_x_large_lg/image/14/145326/14464568-gandalf---10_20160822065043115.jpeg')";
    gandalfButton.style.backgroundColor = 'darkgray';
    dumbledoreButton.style.backgroundColor = 'white';
    sarumanButton.style.backgroundColor = 'white';
    responseField.innerHTML = "(Gandalf will reply to you here)";
    responseField.style.color = 'black';
    title.style.color = 'black';
    chosenWizard = "gandalf";
}

function textTypingEffect(element, text, i = 0) {
    if(i == 0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if(i == text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 50)
}

async function getGandalfResponse(message, chosenWizard) {
    fetch(`http://localhost:8080/chat?message=${encodeURIComponent(message)}?chosenwizard=${encodeURIComponent(chosenWizard)}`)
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
    getGandalfResponse(userInput);
});

sarumanButton.addEventListener('click', sarumanScene);
gandalfButton.addEventListener('click', gandalfScene)
dumbledoreButton.addEventListener('click', dumbledoreScene)

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






