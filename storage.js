class LocalStorageModule{

    get(key){
       const result =  localStorage.getItem(key); 
       return JSON.parse( result);
    }

    set(key, value){
        if(key && value){
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    remove(key){
        localStorage.removeItem(key);
    }

    clear(){
        localStorage.clear()
    }
}