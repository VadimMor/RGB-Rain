function rain() {
	let quantity = 300;
	let body = document.querySelector('body');
	let index = 0;

	while(index < quantity) {
		let drop = document.createElement('index');
		let size = Math.random() * 5;
		let positionX = Math.floor(Math.random() * window.innerWidth);
		let delay = Math.random() * -20;
		let duration = Math.random() * 5; 

		drop.style.width = 0.2 + size + 'px';
		drop.style.left = positionX + 'px';
		drop.style.animationDelay = delay + 's';
		drop.style.animationDuration = 7 + duration + 's';
		body.appendChild(drop);
		index++
	}
}

rain()