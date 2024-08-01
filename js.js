const characters = [
    {
        name: 'Jin Kazama',
        fightingStyle: 'Karate',
        origin: 'Japan',
        species: 'Human, Devil Gene Carrier',
        gender: 'Male',
        status: 'Alive',
        height: '181 cm',
        weight: '83 kg',
        firstAppearance: 'Tekken 3',
        imageUrl: 'https://i.pinimg.com/736x/c9/d3/b1/c9d3b164c7d010b4ed2c516e30d5c607.jpg'
    },
    {
        name: 'Kazuya Mishima',
        fightingStyle: 'Mishima Style Fighting Karate',
        origin: 'Japan',
        species: 'Human, Devil Gene Carrier',
        gender: 'Male',
        status: 'Alive',
        height: '181 cm',
        weight: '76 kg',
        firstAppearance: 'Tekken 1',
        imageUrl: 'https://i.pinimg.com/736x/d1/67/63/d167637bcadb1c31378361758640a70b.jpg'
    },
    {
        name: 'Lars Alexandersson',
        fightingStyle: 'Martial Arts',
        origin: 'Sweden',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '183 cm',
        weight: '92 kg',
        firstAppearance: 'Tekken 6',
        imageUrl: 'https://i.pinimg.com/236x/af/52/65/af52650444e2425dfe205df4c1b615fd.jpg'
    },
    {
        name: 'Heihachi Mishima',
        fightingStyle: 'Mishima Style Fighting Karate',
        origin: 'Japan',
        species: 'Human',
        gender: 'Male',
        status: 'Alive 😯😯😯😯',
        height: '179 cm',
        weight: '80 kg',
        firstAppearance: 'Tekken 1',
        imageUrl: 'https://preview.redd.it/omr6z7j0k0sa1.jpg?auto=webp&s=48802c972eae0b0e8cb9e683a7bd5425ec4b6638'
    },
    {
        name: 'Reina',
        fightingStyle: 'Unknown',
        origin: 'Unknown',
        species: 'Human, Devil Gene Carrier',
        gender: 'Female',
        status: 'Alive',
        height: '162 cm',
        weight: '51 kg',
        firstAppearance: 'Tekken 8',
        imageUrl: 'https://tekkendocs.com/t8/avatars/reina-512.png'
    },
    {
        name: 'Jun Kazama',
        fightingStyle: 'Kazama Style Traditional Martial Arts',
        origin: 'Japan',
        species: 'Human',
        gender: 'Female',
        status: 'Missing',
        height: '170 cm',
        weight: '57 kg',
        firstAppearance: 'Tekken 2',
        imageUrl: 'https://assetsio.gnwcdn.com/Tekken8_jun_SS.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp'
    },
    {
        name: 'Lee Chaolan',
        fightingStyle: 'Martial Arts',
        origin: 'Japan',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '178 cm',
        weight: '72 kg',
        firstAppearance: 'Tekken 1',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAGYddUeCvBb3tPpzWvIvZCsN50t4JlV2Tg&s'
    },
    {
        name: 'King II',
        fightingStyle: 'Pro Wrestling',
        origin: 'Mexico',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '200 cm',
        weight: '147 kg',
        firstAppearance: 'Tekken 3',
        imageUrl: 'https://i1.sndcdn.com/artworks-000102427351-63sjlm-t500x500.jpg'
    },
    {
        name: 'Kunimitsu II',
        fightingStyle: 'Manji Ninja Arts',
        origin: 'Japan',
        species: 'Human',
        gender: 'Female',
        status: 'Alive',
        height: '153 cm',
        weight: '0 kg',
        firstAppearance: 'Tekken 7',
        imageUrl: 'https://assets.mycast.io/actor_images/actor-kunimitsu-ii-578534_large.jpg?1666975793'
    },
    {
        name: 'Kuma II',
        fightingStyle: 'Heihachi-style Improved Kuma Shinken',
        origin: 'Japan',
        species: 'Bear',
        gender: 'Male',
        status: 'Alive',
        height: '280 cm',
        weight: '360 kg',
        firstAppearance: 'Tekken 3',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlFJDBpwPWOd6pqQW_-Dz54LYWdF4IJ7i4w&s'
    },
    {
        name: 'Kazumi Mishima',
        fightingStyle: 'Hachijo Style Karate',
        origin: 'Japan',
        species: 'Human, Devil Gene Carrier',
        gender: 'Female',
        status: 'Deceased',
        height: '170 cm',
        weight: '0 kg',
        firstAppearance: 'Tekken 7',
        imageUrl: 'https://tekken7combo.kagewebsite.com/tpl/img/char/kazumi.jpg'
    },
    {
        name: 'Hwoarang',
        fightingStyle: 'Taekwondo',
        origin: 'South Korea',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '184 cm',
        weight: '80 kg',
        firstAppearance: 'Tekken 3',
        imageUrl: 'https://tekken8combo.kagewebsite.com/tpl/img/char/hwoarang.jpg'
    },
    {
        name: 'Baek Doo San',
        fightingStyle: 'Taekwondo',
        origin: 'South Korea',
        species: 'Human',
        gender: 'Male',
        status: 'Unknown',
        height: '180 cm',
        weight: '70 kg',
        firstAppearance: 'Tekken 2',
        imageUrl: 'https://eng.tekkenpedia.com/images/thumb/5/5a/1Baek-png/250px-1Baek.png'
    },
    {
        name: 'Miguel',
        fightingStyle: 'None',
        origin: 'Spain',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '198 cm',
        weight: '0 kg',
        firstAppearance: 'Tekken 6',
        imageUrl: 'https://tekken7combo.kagewebsite.com/tpl/img/char/miguel.jpg'
    },
    {
        name: 'Noctis',
        fightingStyle: 'Weapon Summoning',
        origin: 'Kingdom of Lucis, Insomnia',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '176 cm',
        weight: '0 kg',
        firstAppearance: 'Tekken 7',
        imageUrl: 'https://i1.sndcdn.com/artworks-000326182737-25anm8-t500x500.jpg'
    },
    {
        name: 'Eddy Gordo',
        fightingStyle: 'Capoeira',
        origin: 'Brazil',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '188 cm',
        weight: '89 kg',
        firstAppearance: 'Tekken 3',
        imageUrl: 'https://tekken7combo.kagewebsite.com/tpl/img/char/eddy.jpg'
    },
    {
        name: 'Alisa Bosconovitch',
        fightingStyle: 'High-Mobility Fighting Style',
        origin: 'Russia',
        species: 'Android',
        gender: 'Female',
        status: 'Alive',
        height: '165 cm',
        weight: '60 kg',
        firstAppearance: 'Tekken 6',
        imageUrl: 'https://tekken8combo.kagewebsite.com/tpl/img/char/alisa.jpg'
    },
    {
        name: 'Asuka Kazama',
        fightingStyle: 'Kazama Style Traditional Martial Arts',
        origin: 'Japan',
        species: 'Human',
        gender: 'Female',
        status: 'Alive',
        height: '167 cm',
        weight: '57 kg',
        firstAppearance: 'Tekken 5',
        imageUrl: 'https://tekken7combo.kagewebsite.com/tpl/img/char/asuka.jpg'
    },
    {
        name: 'Nina Williams',
        fightingStyle: 'Assassination Arts',
        origin: 'Ireland',
        species: 'Human',
        gender: 'Female',
        status: 'Alive',
        height: '168 cm',
        weight: '56 kg',
        firstAppearance: 'Tekken 1',
        imageUrl: 'https://tekken8combo.kagewebsite.com/tpl/img/char/nina.jpg'
    },
    {
        name: 'Victor Chevalier',
        fightingStyle: 'Super Spy CQB',
        origin: 'France',
        species: 'Human',
        gender: 'Male',
        status: 'Alive',
        height: '188 cm',
        weight: '82 kg',
        firstAppearance: 'Tekken 8',
        imageUrl: 'https://preview.redd.it/i-think-id-like-victor-more-if-they-dropped-the-sword-and-v0-uutfztoxf5yb1.png?width=623&format=png&auto=webp&s=9e0c23b7f80afdae6211da8467af5c99105bad2f'
    },


    
    
    
];

const correctCharacter = characters.find(character => character.name === 'Lars Alexandersson');
const correctAppearance = parseInt(correctCharacter.firstAppearance.match(/\d+/)[0]); 
const correctHeight = parseInt(correctCharacter.height.match(/\d+/)[0]); 
const correctWeight = parseInt(correctCharacter.weight.match(/\d+/)[0]); 
const correctFightingStyle = correctCharacter.fightingStyle.toLowerCase();
const correctOrigin = correctCharacter.origin.toLowerCase();
const correctSpecies = correctCharacter.species.toLowerCase();
const correctGender = correctCharacter.gender.toLowerCase();
const correctStatus = correctCharacter.status.toLowerCase();

const inputBox = document.getElementById('inputBox');
const charactersList = document.getElementById('charactersList');

inputBox.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase().trim();
    charactersList.innerHTML = ''; 

    if (inputValue.length > 0) {
        const filteredCharacters = characters.filter(character =>
            character.name.toLowerCase().includes(inputValue)
        );

        filteredCharacters.forEach(character => {
            const option = document.createElement('option');
            option.value = character.name;
            charactersList.appendChild(option);
        });
    }
});

inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputChar = this.value.trim();
        const charactersTableBody = document.querySelector('#charactersTable tbody');
        const charactersTableHead = document.querySelector('#charactersTable thead');

        
        if (charactersTableHead.classList.contains('hidden')) {
            charactersTableHead.classList.remove('hidden');
        }

        
        const matchedCharacter = characters.find(character =>
            character.name.toLowerCase() === inputChar.toLowerCase()
        );

        if (matchedCharacter) {
            const firstAppearanceYearMatch = matchedCharacter.firstAppearance.match(/\d+/);
            const heightMatch = matchedCharacter.height.match(/\d+/);
            const weightMatch = matchedCharacter.weight.match(/\d+/);

            if (!firstAppearanceYearMatch || !heightMatch || !weightMatch) {
                console.error('Invalid data format for character:', matchedCharacter);
                return;
            }

            const matchedAppearance = parseInt(firstAppearanceYearMatch[0]); 
            const matchedHeight = parseInt(heightMatch[0]); 
            const matchedWeight = parseInt(weightMatch[0]); 

            const appearanceComparison = matchedAppearance < correctAppearance ? 'up' : matchedAppearance > correctAppearance ? 'down' : 'equal';
            const appearanceColor = matchedAppearance < correctAppearance ? 'red' : matchedAppearance > correctAppearance ? 'red' : 'green';

            const heightComparison = matchedHeight < correctHeight ? 'up' : matchedHeight > correctHeight ? 'down' : 'equal';
            const heightColor = matchedHeight < correctHeight ? 'red' : matchedHeight > correctHeight ? 'red' : 'green';

            const weightComparison = matchedWeight < correctWeight ? 'up' : matchedWeight > correctWeight ? 'down' : 'equal';
            const weightColor = matchedWeight < correctWeight ? 'red' : matchedWeight > correctWeight ? 'red' : 'green';

            const fightingStyleColor = matchedCharacter.fightingStyle.toLowerCase() === correctFightingStyle ? 'green' : 'red';
            const originColor = matchedCharacter.origin.toLowerCase() === correctOrigin ? 'green' : 'red';

            const speciesColor = matchedCharacter.species.toLowerCase() === correctSpecies ? 'green' : 'red';
            const genderColor = matchedCharacter.gender.toLowerCase() === correctGender ? 'green' : 'red';
            const statusColor = matchedCharacter.status.toLowerCase() === correctStatus ? 'green' : 'red';

            const row = document.createElement('tr');
            row.innerHTML = `
                 <td><img class="character-image" src="${matchedCharacter.imageUrl}" alt="${matchedCharacter.name}"></td>              
                <td><span class="highlight" style="background-color: ${fightingStyleColor};">${matchedCharacter.fightingStyle}</span></td>
                <td><span class="highlight" style="background-color: ${originColor};">${matchedCharacter.origin}</span></td>
                <td><span class="highlight" style="background-color: ${speciesColor};">${matchedCharacter.species}</span></td>
                <td><span class="highlight" style="background-color: ${genderColor};">${matchedCharacter.gender}</span></td>
                <td><span class="highlight" style="background-color: ${statusColor};">${matchedCharacter.status}</span></td>
                <td><span class="highlight" style="background-color: ${heightColor};">${matchedCharacter.height} ${heightComparison === 'up' ? '↑' : heightComparison === 'down' ? '↓' : ''}</span></td>
                <td><span class="highlight" style="background-color: ${weightColor};">${matchedCharacter.weight} ${weightComparison === 'up' ? '↑' : weightComparison === 'down' ? '↓' : ''}</span></td>
                <td><span class="highlight" style="background-color: ${appearanceColor};">${matchedCharacter.firstAppearance} ${appearanceComparison === 'up' ? '↑' : appearanceComparison === 'down' ? '↓' : ''}</span></td>
            `;
            charactersTableBody.appendChild(row);


            
            if (matchedCharacter.name.toLowerCase() === correctCharacter.name.toLowerCase()) {
                alert('Super, du hascht: ' + matchedCharacter.name);
            }
        } else {
            console.log('No character matched.');
        }
        
        
        this.value = '';
    }
});
