/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let numdays = 0;
let rate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.querySelectorAll('.day-selector .blue-hover').forEach(el => {
    el.addEventListener('click', e => {
        const listItem = e.target;
        listItem.classList.toggle('clicked');
        numdays += listItem.classList.contains('clicked') ? 1 : -1;
        calculate();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.querySelector('#clear-button').addEventListener('click', () => {
	document.querySelectorAll('.day-selector .blue-hover').forEach(el => el.classList.remove('clicked'));
	numdays = 0;
	calculate();
});
	

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


const setRate = (newRate, clickedElement, otherElement) => {
    rate = newRate;
    clickedElement.classList.add('clicked');
    otherElement.classList.remove('clicked');
    calculate();
};

document.querySelector('#half').addEventListener('click', e => {
    setRate(20, e.target, document.querySelector('#full'));
});

document.querySelector('#full').addEventListener('click', e => {
    setRate(35, e.target, document.querySelector('#half'));
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate() {
    document.querySelector('#calculated-cost').innerHTML = numdays * rate;
}
