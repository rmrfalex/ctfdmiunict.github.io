/**
 * @description This function will show the navbar logo when the user scrolls down the page.
 * 
 * @returns {void}
 */
const showNavbarLogoOnScroll = () => {
  const navbarLogo = document.getElementsByClassName("navbar__logo")[0];
  if ( navbarLogo === undefined || navbarLogo === null){
    return;
  }

  if (window.scrollY > 150){
    navbarLogo.style.display = "block";
    return;
  }

  navbarLogo.style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", showNavbarLogoOnScroll);
});