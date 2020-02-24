function loadSelectVoices(voices, voiceSelect) {
    voices.forEach((voice, index) => {
        const optionElt = document.createElement('option');  
        optionElt.value = index;  
        optionElt.textContent = voice.name;
        voiceSelect.appendChild(optionElt);
    });
}

function getRandomElt(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

window.addEventListener('DOMContentLoaded', () => {
    const utterThis = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    
    const voiceSelect = document.querySelector('#voice_select');
    const speakButton = document.querySelector('#speak_button');
    const messageInput = document.querySelector('#message_input');
    const pitchInput = document.querySelector('#pitch_input');
    const rateInput = document.querySelector('#rate_input');
    const rangeInputs =document.querySelectorAll('.range_input');
    
    let texts = [
        'Mais t\'es malade',
        'On est pas mal là'
    ];

    if (Array.isArray(voices) && 0 < voices.length) { // Firefox
        loadSelectVoices(voices, voiceSelect);
    } else { // Chrome
        window.speechSynthesis.addEventListener('voiceschanged', () => {
            if (Array.isArray(voices) && 0 === voices.length) {    
                voices = window.speechSynthesis.getVoices();
                loadSelectVoices(voices, voiceSelect);  
            } 
        });
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
        utterThis.voice = voices[voiceSelect.value];
        window.speechSynthesis.speak(utterThis);
    });
    
});
