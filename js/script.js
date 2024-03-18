
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Define a function to load Typed.js
function loadTypedJs(callback) {
    var script = document.createElement('script');
    script.onload = callback;
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js';
    document.head.appendChild(script);
}

// Function to initialize Typed.js once it's loaded
function initializeTypedJs() {
    const element = document.querySelector('#element');
    const typed = new Typed(element, {
        strings: ['Full Stack Developer', 'Data Analyst', 'Web Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// Load Typed.js and initialize it
loadTypedJs(initializeTypedJs);


const scriptURL = 'https://script.google.com/macros/s/AKfycbz-l0SdoJKfdgGqiWz513RSu6fWMuA58bhmJQ-w2IeRH7AtXAOxwrUC-FKbMbpsgX0A/exec'
			const form = document.forms['ContactForm']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})