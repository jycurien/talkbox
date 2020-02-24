window.addEventListener('DOMContentLoaded', () => {

    const utterThis = new SpeechSynthesisUtterance();
    // DOM Elements
    const speakButton = document.querySelector('#speak_button');
    const messageInput = document.querySelector('#message_input');
    const pitchInput = document.querySelector('#pitch_input');
    const rateInput = document.querySelector('#rate_input');
    const rangeInputs =document.querySelectorAll('.range_input');
    
    let texts = [
        'Mais t\'es malade',
        'On est pas mal là'
    ];

    function getRandomElt(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    rangeInputs.forEach(input => {
        input.addEventListener('change', function() {
            this.parentNode.querySelector('span').textContent = parseFloat(this.value).toFixed(2);   
        });        
    });

    speakButton.addEventListener('click', () => {
        let message;
        if ('' !== messageInput.value) {
            message = messageInput.value;    
        } else {
            message = getRandomElt(texts);   
        }
        utterThis.text = message;
        utterThis.pitch = pitchInput.value;
        utterThis.rate = rateInput.value;
        window.speechSynthesis.speak(utterThis);
    });
    
});

