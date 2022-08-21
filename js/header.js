export default function characterData() {
  const header = document.createElement('header');
  header.classList.add('head__title');
  document.body.prepend(header);
  const title1 = document.createElement('h1');
  title1.textContent = 'The World of';
  header.append(title1);
  const titleImage = document.createElement('img');
  titleImage.src = './assets/Rick_and_Morty.webp';
  header.append(titleImage);
}