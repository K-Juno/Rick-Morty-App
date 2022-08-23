export default function characterData() {
  const subTitle = document.createElement('h2');
  subTitle.classList.add('subtitle');
  subTitle.textContent = 'All those Characters';
  document.getElementById('main_area').append(subTitle);

  fetch('https://rickandmortyapi.com/api/character/')
    .then(results => results.json())
    .then(data => {
      data.results.map(character => {
        console.log(data);

        let sectionWrapper = document.getElementById('section_wrapper');
        sectionWrapper.classList.add('section_wrapper');
        document.getElementById('main_area').append(sectionWrapper);

        let section = document.createElement('section');
        section.classList.add('chara_cards');
        section.innerHTML = `<img id=${character.id} src=${character.image} alt=${character.name} class="portrait"/>
           <h3>${character.name}</h3>
           <p hidden>id: ${character.id}</p>
           <p hidden>status: ${character.status}</p>
           <p hidden>species: ${character.species}</p>
           <p hidden>gender: ${character.gender}</p>
           <p hidden>origin: ${character.origin.name}</p>`;
        sectionWrapper.append(section);
      });
    })
    .catch(error => console.log(error));
}