document.addEventListener(`keydown`, (e) => {
	const keyCode = e.keyCode;
	document
		.querySelector(`div[data-key="${keyCode}"]`)
		.classList.toggle(`playing`);
});
