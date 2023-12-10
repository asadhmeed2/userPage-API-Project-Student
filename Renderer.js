


class Renderer {

    #headerView = $('.user-container');
    #usersSelectView = $('.users-select-container');
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
    #userSelectTemplate = Handlebars.compile($("#user-select-template").html())
    #userSelectOptionTemplate = Handlebars.compile($("#user-select-option-template").html())

    render(current){
        if(!current.user){
            return;
        }

        this.renderUser(current)
    }

    renderUser(data){
        this.#renderElement(this.#headerView,data.user,this.#headerTemplate)
        this.#renderElement(this.#quateView,{quote : data.quote},this.#quoteTemplate)
        this.#renderElement(this.#pokemonView,data.pokemon,this.#pokemonTemplate)
        this.#renderElement(this.#aboutMeView,{aboutMe : data.aboutMe},this.#aboutMeTemplate)

        const frindsList = this.#renderElementWithSelector(this.#friendsView,{},this.#frindsListTemplate,'ul')
        this.#renderElements(frindsList,data.friends.map(friend=>friend.name),this.#frindsItemTemplate);
    }

    renderUsersSelect(data){
        
        const selectId = "usersSelect"
        const usersSelect = this.#renderElementWithSelector(this.#usersSelectView,{selectId},this.#userSelectTemplate,`#${selectId}`)
        
        this.#renderElements(usersSelect,data,this.#userSelectOptionTemplate);
    }


    #renderElement(element,data,handlerTemplate){
        element.empty();
        const newHtml = handlerTemplate(data)
        element.append(newHtml)
    }

    #renderElementWithSelector(element,data,handlerTemplate,selector){

        if(!selector){
                console.warn(`renderElementWithSelector :: selector string is needed`);
                return
        }

        if(!element){
                console.warn(`renderElementWithSelector :: element is needed`);
                return
        }

        if(!handlerTemplate){
            if(!element){
                console.warn(`renderElementWithSelector :: handlerTemplate is needed`);
                return
            }
        }

        element.empty();
        const listUlHtml = handlerTemplate(data)
        element.append(listUlHtml);
        const newElement = element.find(selector);

        return newElement
    }

    #renderElements(element,data,handlerTemplate){
        if(!element){
            console.warn(`renderElements :: element is not defined`);
            return
        }

        if(!data){
            console.warn(`renderElements :: ther is no data`);
            return
        }
        
        element.empty();
        data.forEach(item =>{
            const newHtml = handlerTemplate(item)
            element.append(newHtml)
         })
    }

}