export default function characterData() {
  const header = document.createElement('header');
  header.classList.add('header');
  document.body.prepend(header);
  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('header_title');
  mainTitle.textContent = 'The World of';
  header.append(mainTitle);
  const titleImage = document.createElement('img');
  titleImage.src = './assets/Rick_and_Morty.webp';
  titleImage.classList.add('header_image');
  header.append(titleImage);
}
