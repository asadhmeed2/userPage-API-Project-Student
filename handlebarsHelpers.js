const formatTextFirstLetterToUpperCase = (name)=>{    
    return name.replace(name[0],name[0].toUpperCase());
}


Handlebars.registerHelper('firstLetterUpereCase',function(text){
    return new Handlebars.SafeString(formatTextFirstLetterToUpperCase(text))
})