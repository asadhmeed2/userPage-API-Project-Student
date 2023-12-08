const localStorageModal = new LocalStorageModal()
const apiManager = new APIManager(localStorageModal);
const renderer = new Renderer();


const generateUser = function(){
    apiManager.generateUser().then(function(data){
        renderer.render(data);
    })
}

const getUserFromStorag= ()=>{
    const viewData = apiManager.getUserFromStorage();
    if(viewData){
        renderer.render(viewData);
    } 
}

const updateUserToStorage = function(){
    apiManager.updateDataToStorage();
}