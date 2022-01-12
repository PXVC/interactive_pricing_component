let pricing = document.getElementById('pricing'),
	slider = document.getElementById('input-slider'),
	sliderFill = document.getElementById('slider-fill'),
	toggleWrapper = document.getElementById('toggle-wrapper'),
	toggleBg = document.getElementById('toggle-bg '),
	toggleBtn = document.getElementById('toggle-btn'),
	/* 16 is half of maximum price. Then the maximum price is 32 and the minimum
value is 3.2 (32 / 10, 10 is slider step) */
	prices = [3.2, 3.2, 6.4, 9.6, 12.8, 16, 19.2, 22.4, 25.6, 28.8, 32],
	sliderValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

slider.addEventListener('input', () => {
	sliderValues.forEach((value, index) => {
		if (slider.value == value) {
			pricing.textContent = `$${prices[index].toFixed(2)}`;
		}
	});

	sliderFill.style.width = `${slider.value}%`;
	if (sliderFill.style.width === '100%') {
		sliderFill.style.width = '95%';
	}
});

toggleWrapper.addEventListener('click', () => {
	toggleBtn.classList.toggle('active');
	toggleBg.classList.toggle('active');
});
