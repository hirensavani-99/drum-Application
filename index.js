// now lets write javascript for our app
window.addEventListener('keydown', event => {
    // now let's select the audio tag with data-key attrs
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const drum = document.querySelector(`.drum[data-key="${event.keyCode}"]`)
    // if there is no audio tag stop the code
    if (!audio) return;
    // else play the audio
    audio.currentTime = 0;
    audio.play()
    drum.classList.add('playing')

})

function removetransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('transitionend', removetransition));


  // lets test it