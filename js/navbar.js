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

  const navBack = document.createElement('a');
  navBack.textContent = 'Go Back';
  navBack.classList.add('navbar__item');
  navBack.href = '#1';

  const navNext = document.createElement('a');
  navNext.textContent = 'Go Next';
  navNext.classList.add('navbar__item');
  navNext.href = '#1';

  let id = 1;
  navNext.addEventListener('click', () => {
    navNext.href = '#' + id++;
  })

  navBack.addEventListener('click', () => {
    navBack.href = '#' + id--;
  })
  navBar.append(navBack, navNext);
}