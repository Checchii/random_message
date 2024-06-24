/// Generate random Pokemon from Gen 1 with a random type and special move

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const randomPokemon = {
    _pokemon: ['Bulbasaur', 'Ivysaur', 'Venusaur', 
            'Charmander', 'Charmeleon', 'Charizard', 
            'Squirtle', 'Wartortle', 'Blastoise', 
            'Caterpie', 'Metapod', 'Butterfree', 
            'Weedle', 'Kakuna', 'Beedrill', 
            'Pidgey', 'Pidgeotto', 'Pidgeot', 
            'Ratatta', 'Raticate', 'Spearow', 
            'Fearow', 'Ekans', 'Arbok', 
            'Pikachu', 'Raichu', 'Sandshrew', 
            'Sandslash', 'Nidoran (f)', 'Nidorina',
            'Nidoqueen', 'Nidoran (m)', 'Nidorino',
            'Nidoking', 'Clefairy', 'Clefable',
            'Vulpix', 'Ninetails', 'Jigglypuff',
            'Wigglytuff', 'Zubat', 'Golbat',
            'Oddish', 'Gloom', 'Vileplume',
            'Paras', 'Parasect', 'Venonat',
            'Venomoth', 'Diglett', 'Dugtrio',
            'Meowth', 'Persian', 'Psyduck',
            'Golduck', 'Mankey', 'Primeape',
            'Growlith', 'Arcainine', 'Poliwag',
            'Poliswirl', 'Poliwrath', 'Abra',
            'Kadabra', 'Alakazam', 'Machop',
            'Machoke', 'Machamp', 'Bellsprout',
            'Weepinbell', 'Victreebell', 'Tentacool',
            'Tentacruel', 'Geodude', 'Graveller',
            'Golem', 'Ponyta', 'Rapidash',
            'Slowpoke', 'Slowbro', 'Magnemite',
            'Magneton', 'Farfetch\'d', 'Doduo',
            'Dodrio', 'Seel', 'Dewgong', 
            'Grimer', 'Muk', 'Shellder',
            'Cloyster', 'Ghastly', 'Haunter',
            'Gengar', 'Onix', 'Drowzee',
            'Hypno', 'Krabby', 'Kingler', 
            'Voltorb', 'Electrode', 'Exeggcute', 
            'Exeggutor', 'Cubone', 'Marowak', 
            'Hitmonlee', 'Hitmonchan', 'Lickatung', 
            'Koffing', 'Weezing', 'Rhyhorn', 
            'Rhydon', 'Chansey', 'Tangela', 
            'Kangaskhan', 'Horsea', 'Seadra', 
            'Goldeen', 'Seaking', 'Staryu', 
            'Starmie', 'Mr.Mime', 'Scyther', 
            'Jinx', 'Electrabuzz', 'Magmar', 
            'Pinsir', 'Tauros', 'Magikarp', 
            'Gyarados', 'Lapras', 'Ditto', 
            'Eevee', 'Vaporeon', 'Jolteon', 
            'Flareon', 'Porygon', 'Omanyte', 
            'Omastar', 'Kabuto', 'Kabutops', 
            'Aerodactyl', 'Snorlax', 'Articuno', 
            'Zaptos', 'Moltres', 'Dratini', 
            'Dragonair', 'Dragonite', 'Mewtwo', 
            'Mew'
        ],

    _typeInfo: ['Water', 'Fire', 'Grass', 'Rock', 'Poison', 'Ghost', 'Dark', 'Ice', 
                'Psychic', 'Electric', 'Normal', 'Fairy', 'Bug', 'Dragon', 'Fighting',
                'Flying', 'Ground'],

   _specialMove: ['Claw', 'Beam', 'Blast', 'Breath', 'Wrath', 'Cannon']
  }
  
  // Store the Pokemon info
  let Pokemon = []
  let moveType = []
  
  // Iterate over the object
  for(let prop in randomPokemon) {
    let optionIdx = generateRandomNumber(randomPokemon[prop].length)
  
    // use the object's properties to customize the message being added to Pokemon array  
    switch(prop) {
     
      case '_pokemon':
        Pokemon.push(`You are a: "${randomPokemon[prop][optionIdx]}".`)
        break
      case '_typeInfo':
        Pokemon.push(`That knows a special move with type: "${randomPokemon[prop][optionIdx]}".`)
        moveType.push(randomPokemon[prop][optionIdx]);
        break
      case '_specialMove':
        Pokemon.push(`Your special move is: "${moveType[0]} ${randomPokemon[prop][optionIdx]}".`)
        break
      default:
        Pokemon.push('There is not enough info.')
    }
  }
  
  // format the output in new lines
  function formatPokemon(poke) {
    const formatted = Pokemon.join('\n')
    console.log(formatted)
  }
  
  formatPokemon(Pokemon);