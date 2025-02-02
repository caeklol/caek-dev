function sync(t) {
	const elements = document.querySelectorAll('*');
	if (t) {
		elements.forEach(e => e.classList.add('dark'));
	} else {
		elements.forEach(e => e.classList.remove('dark'));
	}

	window.theme = t;
	localStorage.setItem("theme", t);
}

document.addEventListener("theme", (e) => sync(e.detail));

document.addEventListener("DOMContentLoaded", () => {
	const toggle = document.getElementById("toggle");
	let triggerEvent = () => {
		document.dispatchEvent(new CustomEvent("theme", {
			detail: toggle.checked
		}));
	};

	toggle.checked = localStorage.getItem("theme") == 'true' ?? true;

	toggle.addEventListener('change', triggerEvent);

	triggerEvent();
});
