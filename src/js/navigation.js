document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('[data-te-collapse-init]');
  const closeBtn = document.querySelector('[data-te-collapse-init]');
  const mobileMenu = document.getElementById('navbarSupportedContent5');
  const sidebar = document.getElementById('navbarSupportedContent5');


  openBtn.addEventListener('click', function () {
      // sidebar.style.left = '0';
      mobileMenu.style.display = 'block';
      setTimeout(() => mobileMenu.classList.add('fade-in'), 10);
  });

  closeBtn.addEventListener('click', function () {
      // sidebar.style.left = '-250px';
      mobileMenu.classList.remove('fade-in');
      setTimeout(() => mobileMenu.style.display = 'none', 300);
  });

  mobileMenu.addEventListener('click', function () {
      closeBtn.click();
  });
});