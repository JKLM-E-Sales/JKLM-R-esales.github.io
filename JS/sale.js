
async function getPokemonData(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data1 = await res.json();
        return data1;
    } catch (e) {
        console.error(e);
    }
}

function createCard(pokemon) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.addEventListener('click', function () {
        loadDetails(this.firstChild.nextSibling.innerHTML);
    });

    let img = document.createElement('img');
    let name = document.createElement('h2');
    let price = document.createElement('p');
    price.classList.add('sale');

    img.src = pokemon.sprites.front_default;
    name.innerHTML = pokemon.name;
    price.innerHTML = '$' + pokemon.weight;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    return card;
}

async function loadCard(i) {
    let main = document.querySelector('main');
    let pkmn = await getPokemonData(i);
    let card = createCard(pkmn);
    main.appendChild(card);
}

async function makePage() {
    for (let i = 13; i <= 312; i+=13) {
        loadCard(i);
    }
}

function deletePage() {
    let main = document.querySelector('main');
    main.innerHTML = '';
}

makePage();

function createDetails(pokemon) {
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    let details = document.createElement('div');
    details.classList.add('details');

    let exitButton = document.createElement('a');
    exitButton.innerHTML = '&#215;';
    exitButton.classList.add('exitButton');
    exitButton.addEventListener('click', function () {
        overlay.remove();
    });

    let titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');

    let img = document.createElement('img');
    let name = document.createElement('span');
    name.classList.add('title');
    let price = document.createElement('span');
    price.classList.add('sale');

    img.src = pokemon.sprites.front_default;
    name.innerHTML = pokemon.name;
    price.innerHTML = '$' + pokemon.weight;

    details.appendChild(exitButton);
    details.appendChild(img);

    titleContainer.appendChild(name);
    titleContainer.appendChild(price);
    details.appendChild(titleContainer);

    let infoContainer = document.createElement('div');
    infoContainer.classList.add('infoContainer');

    let hr = document.createElement('hr');
    let type = document.createElement('p');
    let height = document.createElement('p');
    let hp = document.createElement('p');
    let attack = document.createElement('p');
    let defense = document.createElement('p');
    let spattk = document.createElement('p');
    let spdef = document.createElement('p');
    let speed = document.createElement('p');

    let typeVal = '';
    for (let i = 0; i < pokemon.types.length; i++) {
        typeVal += pokemon.types[i].type.name.toUpperCase() + '  ';
    }

    type.innerHTML = 'Type: ' + typeVal;
    height.innerHTML = 'Height: ' + pokemon.height;
    hp.innerHTML = 'HP: ' + pokemon.stats[0].base_stat;
    attack.innerHTML = 'Attack: ' + pokemon.stats[1].base_stat;
    defense.innerHTML = 'Defense: ' + pokemon.stats[2].base_stat;
    spattk.innerHTML = 'Special Attack: ' + pokemon.stats[3].base_stat;
    spdef.innerHTML = 'Special Defense: ' + pokemon.stats[4].base_stat;
    speed.innerHTML = 'Speed: ' + pokemon.stats[5].base_stat;

    details.appendChild(hr);

    infoContainer.appendChild(type);
    infoContainer.appendChild(height);
    infoContainer.appendChild(hp);
    infoContainer.appendChild(attack);
    infoContainer.appendChild(defense);
    infoContainer.appendChild(spattk);
    infoContainer.appendChild(spdef);
    infoContainer.appendChild(speed);

    details.appendChild(infoContainer);
    overlay.appendChild(details);

    return overlay;
}

async function loadDetails(pokemon) {
    let main = document.querySelector('main');
    let pkmn = await getPokemonData(pokemon);
    let card = createDetails(pkmn);
    main.appendChild(card);
}
