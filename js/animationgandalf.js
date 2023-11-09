const imagePath = [
    'url(../Pictures/Gandalf.webp)',
    'url(../Pictures/Gandalf2.png)',
    'url(../Pictures/Gandalf3.png)',
    'url(../Pictures/Gandalf4.png)'
];
let currentImageIndex = 0;
const body = document.body;
const responseField = document.getElementById("responseField")

function changeBackground(){
    currentImageIndex = (currentImageIndex + 1) % imagePath.length;
    body.style.backgroundImage  = imagePath[currentImageIndex]

}
const observer = new MutationObserver(changeBackground)

const observerConfig = {childList: true}

observer.observe(responseField, observerConfig)
console.log("MutationObserver is active.");

//responseField.addEventListener("DOMSubtreeModified", changeBackground)
body.style.backgroundImage = imagePath[currentImageIndex]
console.log("Initial background set.");