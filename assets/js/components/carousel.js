// Vertical carousel logic: click main image to cycle
export function initChampionshipCarousels() {
	document.querySelectorAll('[data-carousel]').forEach(carousel => {
		const imgs = Array.from(carousel.querySelectorAll('.carousel-img'));
		if (imgs.length !== 3) return;
		let order = [0, 1, 2];

		function setClasses(orderArr) {
			imgs[orderArr[0]].className = 'carousel-img main';
			imgs[orderArr[1]].className = 'carousel-img top';
			imgs[orderArr[2]].className = 'carousel-img bottom';
		}
		setClasses(order);

		// Drag/swipe logic: vertical on desktop, horizontal on mobile
		let start = null;
		let dragging = false;

		const isMobile = window.matchMedia('(max-width: 700px)').matches;


		function onDragStart(e) {
			if (!isMobile) return;
			dragging = true;
			start = e.touches ? e.touches[0].clientX : e.clientX;
			if (e.touches) e.preventDefault();
		}
		function onDragMove(e) {
			if (!dragging || !isMobile) return;
			if (e.touches) e.preventDefault();
		}
		function onDragEnd(e) {
			if (!dragging || !isMobile) return;
			let end = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
			let delta = end - start;
			if (Math.abs(delta) > 40) {
				if (delta < 0) {
					order = [order[2], order[0], order[1]];
				} else {
					order = [order[1], order[2], order[0]];
				}
				setClasses(order);
				bindEvents();
			}
			dragging = false;
			start = null;
		}

		function onClick() {
			order = [order[1], order[2], order[0]];
			setClasses(order);
			bindEvents();
		}

		function bindEvents() {
			imgs.forEach(img => {
				img.onmousedown = null;
				img.ontouchstart = null;
				img.onclick = null;
			});
			const main = carousel.querySelector('.carousel-img.main');
			if (main) {
				main.addEventListener('mousedown', onDragStart);
				main.addEventListener('touchstart', onDragStart);
				main.addEventListener('click', onClick);
			}
		}

		window.addEventListener('mousemove', onDragMove);
		window.addEventListener('mouseup', onDragEnd);
		window.addEventListener('touchmove', onDragMove);
		window.addEventListener('touchend', onDragEnd);

		bindEvents();
	});
}
