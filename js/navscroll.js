// JavaScript Document
window.onload = window.onscroll = () => {scrollNavbar()};

const scrollNavbar = () => {
    const navBar = document.getElementById("navBar");

  if (document.documentElement.scrollTop > 1) {
    navBar.classList.add("nav-bar-scroll");
  } else {
    navBar.classList.remove("nav-bar-scroll");
  }
}