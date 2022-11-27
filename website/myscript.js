//JavaScript for Ellipsis Button that appears when screen size is small
const ellipsisButton = document.getElementsByClassName('ellipsis-button')[0]
const navBarLinks = document.getElementsByClassName('nav-link-pages')[0]

//On click, shows the ellipsis button and vice versa
ellipsisButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

//On click, checks if the textbox class emailSub contains any words. If so, submission notification pops up
function myFunction() {
    var popup = document.getElementById("myPopup");
    if(document.getElementsByClassName('emailSub' !== null)){
        popup.classList.toggle("show");   
    }
}