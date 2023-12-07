//This is the class that will manage all your APIs

const USERS_RESULT_COUNT = 7;
const POKEMON_NUMBER = 949;
const POKEMON_MIN_ID =1;

class APIManager {
  constructor() {
    this.data = {};
    this.pending =false;
  }

  initData(){
    this.pending = true;
    Promise.all([this._getUsersPromise(),this._getPokemonsPromise(),this._getQuotePromise(),this._getLoremPromise()]).then((dataArray)=>{
        console.log(dataArray);
        const users = this._mappUsers(dataArray[0]);
        const pokemon = this._mappPokemon(dataArray[1]);
        const quote = dataArray[2].quote;
        const aboutMe = dataArray[3][0];

        this.data = {users,pokemon,quote,aboutMe}

        this.pending =false;
    })
  }

  isPending(){
    return this.pending;
  }

    _getUsersPromise() {
        return $.get(`https://randomuser.me/api/?results=${USERS_RESULT_COUNT}`)
    }

    _getPokemonsPromise() {
        const randomNumber = Math.floor(Math.random() * POKEMON_NUMBER) + POKEMON_MIN_ID
        return $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    }

    _getQuotePromise() {
        return $.get(`https://api.kanye.rest/`)
    }

    _getLoremPromise(){
        return $.get(`https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`)
    }

    _mappUsers(data){
        const users = data.results;
        const results = users.map(user =>({
            name:user.name,
            city:user.location.city,
            country:user.location.country
        }))
        return results;
    }

    _mappPokemon(pokemon){
        const result = {
            name:pokemon.name,
            img:pokemon.sprites.front_default
        }
        return result;
    }

}
