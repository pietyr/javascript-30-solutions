document.addEventListener(`keydown`, (e) => {
	const keyCode = e.keyCode;
	const div = document.querySelector(`div[data-key="${keyCode}"]`);
	if (!div) return;
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

	div.classList.toggle(`playing`);
	audio.currentTime = 0;
	audio.play();

	setTimeout(() => {
		div.classList.toggle(`playing`);
	}, 100);
});
