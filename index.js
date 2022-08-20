fetch('https://rickandmortyapi.com/api/character/')
  .then(results => results.json())
  .then(data => {
    data.results.map(character => {
      console.log(data);

      let section = document.createElement('section')
      section.classList.add('single-character')
      section.innerHTML = `<img src=${character.image} alt=${character.name} />
           <h3>${character.name}</h3>
           <h4>gender</h4> ${character.gender} 
           <h4>species</h4> ${character.species}
           <h4>origin</h4> ${character.origin.name}`
      document.getElementById('characters').append(section)

    })
  })
  .catch(error => console.log(error));
main.append(section);

section.createElement(button);
function character(characterSkills) {
  button.toggle.classList(hidden)
};