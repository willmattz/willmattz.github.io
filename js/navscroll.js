// JavaScript Document
// Toggle the .nav-bar-scroll class when the user 
// scroll 100px 
window.onscroll = () => {scrollNavbar()};

const scrollNavbar = () => {
    const navBar = document.getElementById("navBar");

  if (document.documentElement.scrollTop > 25) {
    navBar.classList.add("nav-bar-scroll");
  } else {
    navBar.classList.remove("nav-bar-scroll");
  }
}
