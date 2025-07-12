document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = dropdown?.querySelector('.dropbtn');
  const dropdownContent = dropdown?.querySelector('.dropdown-content');

  // Function to switch nav style based on screen width
  function handleNavDisplay() {
    if (window.innerWidth <= 900) {
      navLinks?.classList.add('hide');
      dropdown?.classList.remove('hide');
      dropdownContent?.classList.add('hide');
      dropdown?.classList.remove('active');
    } else {
      navLinks?.classList.remove('hide');
      dropdown?.classList.add('hide');
      dropdownContent?.classList.add('hide');
      dropdown?.classList.remove('active');
    }
  }

  // Call once and on resize
  handleNavDisplay();
  window.addEventListener('resize', handleNavDisplay);

  // Toggle dropdown on mobile
  if (dropdown && dropbtn && dropdownContent) {
    dropbtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.innerWidth <= 900) {
        dropdown.classList.toggle('active');
        dropdownContent.classList.toggle('hide');
        dropdownContent.style.flexDirection = 'column';
      }
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 900 && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
        dropdownContent.classList.add('hide');
      }
    });

    // Close dropdown after selecting a link
    const links = dropdownContent.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          dropdown.classList.remove('active');
          dropdownContent.classList.add('hide');
        }
      });
    });
  }

  // Language toggle sync (if you use it)
  const langToggleDesktop = document.getElementById('lang-toggle');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');
  function syncLangToggles(value) {
    if (langToggleDesktop) langToggleDesktop.value = value;
    if (langToggleMobile) langToggleMobile.value = value;
  }
  function setLanguage(selectedLang) {
    syncLangToggles(selectedLang);
    // TODO: insert translation logic if needed
  }
  langToggleDesktop?.addEventListener('change', (e) => setLanguage(e.target.value));
  langToggleMobile?.addEventListener('change', (e) => setLanguage(e.target.value));
});
