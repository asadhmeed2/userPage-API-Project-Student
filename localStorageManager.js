class LocalstorageManager {
    #storageModal
    #storageUsers
    #selectedUser
    constructor(storageModal) {
        this.#storageUsers={};
        this.#storageModal = storageModal;
        this.#selectedUser={};
    }

    initStorageUsers(){
        const users = this.#getUsersFromStorage();
        if(users){
            this.#storageUsers = users
            this.#selectedUser=Object.values(users)[0];
        }
    }

    get savedLocalUsers(){
        return this.#storageUsers
    }

    get selectedUser(){
        return this.#selectedUser
    }

    set selectedUser(id){
        this.#selectedUser = this.#storageUsers[id];
    }
    
    saveUserToStorage(data){
        if(!data.user){
            console.warn(`saveUserToStorage :: user data is empty`);
            return
        }
        const localUsers = this.#getUsersFromStorage();
        
        const newLocalUsers = {...localUsers ?  localUsers :[],[data.user.id]:data};
        
        this.#storageModal.set(USERS_STORAGE_DATA_KEY,newLocalUsers);

        this.#storageUsers = newLocalUsers;
    }
    
    #getUsersFromStorage(){
        const data = this.#storageModal.get(USERS_STORAGE_DATA_KEY)
        if(data){
            return data
        }
        return null;
    }
    

}
