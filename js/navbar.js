export default function navigation() {
  const navBar = document.createElement('nav');
  navBar.classList.add('navbar');
  document.getElementById('main_area').prepend(navBar);

  const navHome = document.createElement('button');
  navHome.textContent = 'Go Up';
  navHome.classList.add('navbar__item');
  const top = () => {
    document.body.scrollIntoView();
  };
  navHome.addEventListener('click', top);
  navBar.append(navHome);

  const navNext = document.createElement('button');
  navNext.textContent = 'Go Next';
  navNext.classList.add('navbar__item');

  navBar.append(navNext);
}
