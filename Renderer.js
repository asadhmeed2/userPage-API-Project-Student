


class Renderer {

    #headerView = $('.user-container');
    #quateView = $('.quote-container');
    #pokemonView = $('.pokemon-container');
    #aboutMeView = $('.meat-container');

    #headerTemplate = Handlebars.compile($("#user-header-template").html())
    #quoteTemplate = Handlebars.compile($("#quote-template").html())
    #pokemonTemplate = Handlebars.compile($("#pokemon-template").html())
    #aboutMeTemplate = Handlebars.compile($("#about-me-template").html())
    #usersListItemTemplate = Handlebars.compile($("#users-list-item-template").html())

    render(data){
        this.#renderElement(this.#headerView,data.users[VIEW_USER_DATA_IDX],this.#headerTemplate)
        this.#renderElement(this.#quateView,{quote : data.quote},this.#quoteTemplate)
        this.#renderElement(this.#pokemonView,data.pokemon,this.#pokemonTemplate)
        this.#renderElement(this.#aboutMeView,{aboutMe : data.aboutMe},this.#aboutMeTemplate)
    }


    #renderElement(element,data,handlerTemplate){
        element.empty();
        const newHtml = handlerTemplate(data)
        element.append(newHtml)
    }

   
    #renderUserOtherUsers(users){}


}