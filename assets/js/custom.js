/* Dark & Light Mode */
function setColorScheme(scheme) {
  let root = document.getElementsByTagName('html')[0];
  switch (scheme) {
    case 'dark':
      // console.log(‘dark’);
      root.classList.add('dark-mode');
      document.getElementById('header-logo').src = '../assets/img/logo-dark.svg';
      document.getElementById('footer-logo').src = '../assets/img/logo-dark.svg';
      break;
    case 'light':
      // console.log(‘light’);
      root.classList.remove('dark-mode');
      document.getElementById('header-logo').src = '../assets/img/logo.svg';
      document.getElementById('footer-logo').src = '../assets/img/logo.svg';
      break;
    default:
      console.log('default');
      break;
  }
}
function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}
function updateColorScheme() {
  setColorScheme(getPreferredColorScheme());
}
if (window.matchMedia) {
  var colorSchemeQuery = window.matchMedia('(prefers-color-scheme:dark)');
  colorSchemeQuery.addEventListener('change', updateColorScheme);
}
updateColorScheme();