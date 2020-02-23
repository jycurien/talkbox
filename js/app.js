const utterThis = new SpeechSynthesisUtterance();
utterThis.pitch = 2;
utterThis.rate = 1.2;
const speakButton = document.querySelector('#speak_button');
const messageInput = document.querySelector('#message_input');
let texts = [
    'Mais t\'es malade',
    'On est pas mal là'
];

function getRandomElt(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

speakButton.addEventListener('click', () => {
    let message;
    if ('' !== messageInput.value) {
        message = messageInput.value;    
    } else {
        message = getRandomElt(texts);   
    }
    utterThis.text = message;
    speechSynthesis.speak(utterThis);
});