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


document.getElementById("calculateBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the values from the input fields
    let originalPrice = parseFloat(document.getElementById("originalPrice").value);
    let bargainedPrice = parseFloat(document.getElementById("bargainedPrice").value);
    
    // Check if the values are valid
    if (!isNaN(originalPrice) && !isNaN(bargainedPrice) && originalPrice > bargainedPrice) {
        // Calculate the price deduction
        let priceDeduction = originalPrice - bargainedPrice;
        
        // Display the price deduction amount
        document.getElementById("result").textContent = priceDeduction.toFixed(0);
    } else {
        // Handle invalid input
        document.getElementById("result").textContent = "Please enter valid numbers, and make sure the original price is greater than the bargained price.";
    }
});




const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		searchButtonIcon.classList.replace('bx-search', 'bx-x');
		if(searchForm.classList.contains('show')) {
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