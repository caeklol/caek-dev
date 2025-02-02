const active_dark = window.getComputedStyle(document.documentElement).getPropertyValue('--progress-active-dark');
const bg_dark = window.getComputedStyle(document.documentElement).getPropertyValue('--progress-bg-dark');
const active = window.getComputedStyle(document.documentElement).getPropertyValue('--progress-active');
const bg = window.getComputedStyle(document.documentElement).getPropertyValue('--progress-bg');

document.addEventListener("theme", (e) => {
	let root = document.documentElement;
	let state = e.detail;
	if (state) {
		document.documentElement.style.setProperty('--pa', active_dark);
		document.documentElement.style.setProperty('--pbg', bg_dark);
	} else {
		document.documentElement.style.setProperty('--pa', active);
		document.documentElement.style.setProperty('--pbg', bg);
	}
});
