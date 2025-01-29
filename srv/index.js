window.onload = () => {
	const checkbox = document.getElementsByTagName('input')[0];
	const elements = document.querySelectorAll('*');

	checkbox.addEventListener('change', () => {
		if (checkbox.checked) {
			elements.forEach(e => e.classList.add('dark'));
		} else {
			elements.forEach(e => e.classList.remove('dark'));
		}
	});

	elements.forEach(e => e.classList.add('dark'));
};
