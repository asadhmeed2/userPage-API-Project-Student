const apiManager = new APIManager();
const renderer = new Renderer();


const generateUser = function(){
    apiManager.generateUser().then(function(data){
        renderer.render(data);
    })
}