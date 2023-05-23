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

const createCountdown = () => {
  const countdown = document.getElementById("countdown");
  if (countdown === undefined || countdown === null){
    return;
  }

  const eventDate = new Date("June 12, 2023 00:00:00").getTime();

  setInterval(() => {
    let currentDate = new Date().getTime();
    let distance = eventDate - currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
    "Mancano <b>" + days + "GG " + hours + "H "
    + minutes + "M " + seconds + "S </b> all'evento";

    if (distance < 0) {
      clearInterval(x);
      countdown.innerHTML = "Affrettati!Stiamo iniziando!";
    }
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", showNavbarLogoOnScroll);
  createCountdown();
});