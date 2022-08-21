export default function navigation() {
  const navBar = document.createElement('nav');
  navBar.classList.add('nav__bar');
  document.getElementById('characters').prepend(navBar);

  const navHome = document.createElement('button');
  navHome.textContent = "Go Up";
  navHome.classList.add('nav__bar--item');
  navBar.append(navHome);

  const navNext = document.createElement('button');
  navNext.textContent = "Go Next";
  navNext.classList.add('nav__bar--item');
  navBar.append(navNext);
};