$(function() {
    //toma de elementos de busqueda
    var param = document.getElementById("pkmnInput").value; //valor del input
    var btn = document.getElementById("searchInput"); //boton de busqueda
    
    

    //llamada al JSON 
    var pokeUrl='https://pokeapi.co/api/v2/pokemon/'+ param ;
    var pokeapiPokedex='https://pokeapi.co/api/v2/pokedex/1/';
    
    $.getJSON(pokeapiPokedex).done(function(data) {
        //console.log(data); //carga la data de la pokedex
        // each busca en pokemon_entries para sacar el indice y su pokemon correspondiente.
        $.each(data.pokemon_entries,function(index,pokemon) {
            var getName = pokemon.pokemon_species.name.toUpperCase(); // se obtiene el nombre del pokemon
            var par = $("<p class='list'>").html("pkm no. "+ (index+1) + " <span class='btn btn-outline-primary pkmnBtn' type='submit'>"+ getName+"</span>"); //se crean parrafos de prueba que contienen el nombre del pokemon y su numero
            par.appendTo("#pokemon");
        })
    });
    //obtener JSON  para datos del pokemon
    $.getJSON(pokeUrl, function(data) {
        //console.log(data); //carga la data de las especies
        console.log(JSON.stringify(data, null, " "));
        var pokeID = data.national_id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].name;
        }
        else var pokeType2 = null;

        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
    });

    var clickPkmn= $(btn).click(function(){ //evento click busqueda
        param =  document.getElementById("pkmnInput").value;
        var pokeUrl='https://pokeapi.co/api/v2/pokemon/'+ param +'/';
    });
})
