function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	
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
