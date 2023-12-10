const localStorageModal = new LocalStorageModal()
const localStorageManager =new LocalstorageManager(localStorageModal)
const apiManager = new APIManager();
const renderer = new Renderer();


localStorageManager.initStorageUsers();


const renderUserFromLocalStorage = function(){
    renderer.render(localStorageManager.selectedUser);
}

renderUserFromLocalStorage();

const renderSelect=()=>{
    renderer.renderUsersSelect(Object.values(localStorageManager.savedLocalUsers))
}

renderSelect()

const generateUser = function(){
    apiManager.generateUser().then(function(data){
        renderer.renderUser(data);
    })
}

const getUserFromStorag= ()=>{
    const viewData = localStorageManager.selectedUser;
    if(viewData){
        renderer.render(viewData);
    } 
}

const saveUserToStorage = function(){
    const user = apiManager.getUser();

    localStorageManager.saveUserToStorage(user);
    renderSelect()
}

const onSelectUser=function(e){
    localStorageManager.selectedUser = e.target.value;
    renderUserFromLocalStorage();
}