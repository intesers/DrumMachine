function playSound(e) {

    const keyCode = e.keyCode ? e.keyCode : e.currentTarget.getAttribute('data-key');

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);


    if(!audio) return; //If there is corresponding key, it stops the function.
    audio.currentTime = 0; // Rewinds the audio. 
    audio.play(); //plays the audio


    key.classList.add('play'); //adds the css class play when the key is pressed (for visual effects)

    setTimeout(function(){
        key.classList.remove('play');
    }, 100);
}




window.addEventListener('keydown', playSound); // executes function playSound when keys are pressed.
window.addEventListener('touchdown', playSound); // executes function playSound when keys are pressed.
