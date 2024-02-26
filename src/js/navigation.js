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


var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            console.log("added dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            console.log("added light");
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
