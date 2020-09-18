(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

/*function myFuncttion() {
  var logo = document.getElementsByClassName("logo-img")[0];
  var logoWhite = document.getElementsByClassName("logo-img-white")[0];

  if (logoWhite.style.display === "none") {
    
  }
  logo.style.display = "none"
}*/
