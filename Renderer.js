


class Renderer {

    #headerView = $('.user-container');
    #quateView = $('.quote-container');
    #pokemonView = $('.pokemon-container');
    #aboutMeView = $('.meat-container');
    #friendsView = $('.friends-container');

    #headerTemplate = Handlebars.compile($("#user-header-template").html())
    #quoteTemplate = Handlebars.compile($("#quote-template").html())
    #pokemonTemplate = Handlebars.compile($("#pokemon-template").html())
    #aboutMeTemplate = Handlebars.compile($("#about-me-template").html())
    #frindsListTemplate = Handlebars.compile($("#frinds-list-template").html())
    #frindsItemTemplate = Handlebars.compile($("#frinds-item-template").html())

    render(data){
        this.#renderElement(this.#headerView,data.user,this.#headerTemplate)
        this.#renderElement(this.#quateView,{quote : data.quote},this.#quoteTemplate)
        this.#renderElement(this.#pokemonView,data.pokemon,this.#pokemonTemplate)
        this.#renderElement(this.#aboutMeView,{aboutMe : data.aboutMe},this.#aboutMeTemplate)
        this.#renderUserFrinds(data.friends)
    }


    #renderElement(element,data,handlerTemplate){
        element.empty();
        const newHtml = handlerTemplate(data)
        element.append(newHtml)
    }

   
    #renderUserFrinds(friends){
        this.#friendsView.empty();
        const listUlHtml = this.#frindsListTemplate()
        this.#friendsView.append(listUlHtml);
        const friendsUl = this.#friendsView.find('ul');

        friends.forEach(friend =>{
           const newHtml = this.#frindsItemTemplate(friend.name)
           friendsUl.append(newHtml)
        })
    }


}