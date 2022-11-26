let page = 1;

document.querySelector('.prevPage').addEventListener('click', () => {
    if (page > 1) {
        page--;
        deletePage();
        makePage();
    }
});
document.querySelector('.nextPage').addEventListener('click', () => {
    if (page < 50) {
        page++;
        deletePage();
        makePage();
    }
});
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
    const card = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const price = document.createElement('p');

    card.addEventListener('click', function () {
        loadDetails(this.firstChild.nextSibling.innerHTML);
    });

    card.classList.add('card');
    if (pokemon.id % 13 === 0) {
        price.classList.add('sale');
    }

    img.src = pokemon.sprites.front_default;
    name.innerHTML = pokemon.name;
    price.innerHTML = '$' + pokemon.weight;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    return card;
}

async function loadCard(i) {
    const main = document.querySelector('main');
    const pkmn = await getPokemonData(i);
    const card = createCard(pkmn);
    main.appendChild(card);
}

async function makePage() {
    const end = page * 12;
    for (let i = end - 11; i <= end; i++) {
        loadCard(i);
    }
}

function deletePage() {
    const main = document.querySelector('main');
    main.innerHTML = '';
}

function createDetails(pokemon) {

    const overlay = document.createElement('div');
    const hr = document.createElement('hr');
    const type = document.createElement('p');
    const height = document.createElement('p');
    const hp = document.createElement('p');
    const attack = document.createElement('p');
    const defense = document.createElement('p');
    const spattk = document.createElement('p');
    const spdef = document.createElement('p');
    const speed = document.createElement('p');
    const exitButton = document.createElement('a');
    const img = document.createElement('img');
    const name = document.createElement('span');
    const price = document.createElement('span');
    const details = document.createElement('div');
    const titleContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    let typeVal = '';

    exitButton.addEventListener('click', () => {
        overlay.remove();
    });

    overlay.classList.add('overlay');
    details.classList.add('details');
    exitButton.classList.add('exitButton');
    titleContainer.classList.add('titleContainer');
    name.classList.add('title');
    infoContainer.classList.add('infoContainer');
    if (pokemon.id % 13 === 0) {
        price.classList.add('sale');
    }

    for (let i = 0; i < pokemon.types.length; i++) {
        typeVal += pokemon.types[i].type.name.toUpperCase() + '  ';
    }

    img.src = pokemon.sprites.front_default;
    name.innerHTML = pokemon.name;
    price.innerHTML = '$' + pokemon.weight;
    exitButton.innerHTML = '&#215;';
    type.innerHTML = 'Type: ' + typeVal;
    height.innerHTML = 'Height: ' + pokemon.height;
    hp.innerHTML = 'HP: ' + pokemon.stats[0].base_stat;
    attack.innerHTML = 'Attack: ' + pokemon.stats[1].base_stat;
    defense.innerHTML = 'Defense: ' + pokemon.stats[2].base_stat;
    spattk.innerHTML = 'Special Attack: ' + pokemon.stats[3].base_stat;
    spdef.innerHTML = 'Special Defense: ' + pokemon.stats[4].base_stat;
    speed.innerHTML = 'Speed: ' + pokemon.stats[5].base_stat;

    details.appendChild(exitButton);
    details.appendChild(img);
    titleContainer.appendChild(name);
    titleContainer.appendChild(price);
    details.appendChild(titleContainer);
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
    const main = document.querySelector('main');
    const pkmn = await getPokemonData(pokemon);
    const card = createDetails(pkmn);
    main.appendChild(card);
}

makePage();