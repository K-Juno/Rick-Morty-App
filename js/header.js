export default function characterData() {
  const header = document.createElement('header');
  header.classList.add('head_title');
  document.body.prepend(header);
  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'The World of';
  header.append(mainTitle);
  const titleImage = document.createElement('img');
  titleImage.src = './assets/Rick_and_Morty.webp';
  header.append(titleImage);
}