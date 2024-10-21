const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('discountForm');
    const resultElement = document.getElementById('result');
  
    // Listen for form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from reloading the page
  
      // Get values from the form fields
      const originalPrice = parseFloat(document.getElementById('originalPrice').value);
      const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
  
      // Validate that inputs are positive numbers
      if (isNaN(originalPrice) || isNaN(discountPercentage) || originalPrice <= 0 || discountPercentage < 0) {
        resultElement.textContent = 'Invalid input!';
        return;
      }
  
      // Calculate the discounted price
      const discountAmount = (originalPrice * discountPercentage) / 100;
      const discountedPrice = originalPrice - discountAmount;
  
      // Update the result element
      resultElement.textContent = discountedPrice.toFixed(2);
    });
  });





const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})