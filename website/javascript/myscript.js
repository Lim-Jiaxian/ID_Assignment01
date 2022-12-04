//JavaScript for Ellipsis Button that appears when screen size is small
const ellipsisButton = document.getElementsByClassName('ellipsis-button')[0]
const navBarLinks = document.getElementsByClassName('nav-link-pages')[0]

//On click, shows the ellipsis button and vice versa
ellipsisButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

//On click, checks if the textbox class emailSub contains any words. If so, submission notification pops up
function myFunction1() {
    var popup = document.getElementById("myPopup");
    if(document.getElementsByClassName('emailSub' !== null)){
        popup.classList.toggle("show");   
    }
}
//On click, checks webForm if the textbox, number and email classes in redeem form contains any words. If so, submission notification pops up
function myFunction() {
    var popup = document.getElementById("myPopup2");
    if(document.getElementsByClassName(('ERN' & 'BT' & 'emailSub2') !== null)){
        popup.classList.toggle("show");
    }
}

//On click, this clears the user inputs which works once web form is submitted
const form = document.getElementById('web_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  //Reset form
  form.reset();
});