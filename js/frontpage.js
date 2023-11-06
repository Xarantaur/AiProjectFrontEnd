



const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
let responseField = document.getElementById('responseField');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const userInput = inputField.value;
    console.log('User input: ', userInput);
    getGandalfResponse(userInput);
});

async function getGandalfResponse(message) {
    fetch(`http://localhost:8080/chat?message=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            // Process the response data
            console.log(data);
            const messageContent = data[0].message.content;
            console.log(messageContent);
            // Perform any desired actions with the message content
            responseField.innerHTML = messageContent;
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        });
}




