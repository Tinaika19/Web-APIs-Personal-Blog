document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeButton = document.getElementById('toggle-theme');
  const isDarkMode = localStorage.getItem('theme') === 'dark';

  if (isDarkMode) {
    document.body.classList.add('dark');
  }

  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
});
