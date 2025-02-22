//This is the class that will manage all your APIs

const USERS_RESULT_COUNT = 7;
const POKEMON_NUMBER = 949;
const POKEMON_MIN_ID =1;

class APIManager {
    
    constructor() {
        this.data = {};
    }

    generateUser(){
    return Promise.all([
        this.#_getUsersPromise(),
        this.#_getPokemonsPromise(),
        this.#_getQuotePromise(),
        this.#_getAboutMePromise()
        ]).then((dataArray)=>{
            const [usersData,pokemonData,quoteData,aboutMeData] = dataArray;

            const users = this.#_mappUsers(usersData);
            const pokemon = this.#_mappPokemon(pokemonData);
            const quote = quoteData.quote;
            const aboutMe = aboutMeData[0];

            const friends = users.splice(1);
            const user = users[VIEW_USER_IDX];

            this.data = {user,pokemon,quote,aboutMe,friends}

            return this.data
        })
    }

    getUser(){
        return this.data
    }

    #_getUsersPromise() {
        return $.get(`${RANDOM_USER_API}?results=${USERS_RESULT_COUNT}`)
    }

    #_getPokemonsPromise() {
        const randomNumber = Math.floor(Math.random() * POKEMON_NUMBER) + POKEMON_MIN_ID
        return $.get(`${POKEMON_API}${randomNumber}`)
    }

    #_getQuotePromise() {
        return $.get(`${QUOTE_API}`)
    }

    #_getAboutMePromise(){
        return $.get(LORAM_API)
    }

    #_mappUsers(data){
        const users = data.results;
        const results = users.map(user =>({
            id:user.login.uuid,
            name:user.name,
            city:user.location.city,
            country:user.location.country,
            img:user.picture.medium
        }))
        return results;
    }

    #_mappPokemon(pokemon){
        const result = {
            name: pokemon.name,
            img:pokemon.sprites.front_default
        }
        return result;
    }

}
