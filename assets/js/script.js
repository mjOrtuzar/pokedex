$(function() {
    //toma de elementos de busqueda
     $form = $("#searchForm") // form de busqueda
     $param = $("#pkmnInput") // input
     $btn = $("#searchInput") // boton de busqueda
     $pokeContent=$("#pokemon") //contenedor scroll
     $showPoke = $("#screenPkmn") //pantalla
     $dataPoke = $("#dataPkmn-show") //pantalla que mostrara los datos.
     
    let pkmn
    
    //evento submit

    $form.submit(function (e) {
        e.preventDefault();
        $pokeContent.html('');
        pkmn = $param.val();
        getPkmn();
    });

    


    //peticiones y llamada al JSON 
    function getPkmn() {
        //obj configuracion
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/'+pkmn+'/' // se entra al JSON de las caracteristicas de los pokemons
        }).done(addPoke)
        .fail(handleError);
    }

    function handleError() {
        console.log('Se ha presentado un error la página');
    }

    //var pokeUrl='https://pokeapi.co/api/v2/pokemon/'+ param ; 

    
    /* en proceso construccion  btn c/data */
   
    function addPoke(pkm) {
        console.log(pkm);
        const namePkmn = pkm.name;
        const typePkmn = pkm.types;
        $.each(typePkmn,function(index,type) {
            const nameType= type.name;
        });
        const pokeHeight = (pkm.height)/10;
        const pokeWeight = (pkm.weight)/10;
        

        //attk.
        console.log(namePkmn);
        console.log(typePkmn);
        console.log(pokeHeight + 'M');
        console.log(pokeWeight + 'kg');
        console.log(pkm.abilities[0].ability.name);

        let $pokeimagen = $('<img class="pokeimg">').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pkm.id+ '.png').addClass('imgPoke');
        $showPoke.append($pokeimagen);
        $dataPoke.append('name: '+namePkmn+' ');
        $dataPoke.append('height: '+pokeHeight +'M ');
        $dataPoke.append('Weight: '+pokeWeight+ 'kg ');
        $dataPoke.append(' attk: '+pkm.abilities[0].ability.name);
        /*errores a arreglar
        $dataPoke.append('type');

        */

    }


    var pokeapiPokedex='https://pokeapi.co/api/v2/pokedex/1/';
    console.log(pokeapiPokedex);
    
//se llama al json para obtener la lista
    $.getJSON(pokeapiPokedex).done(function(data) {
        //console.log(data); //carga la data de la pokedex
        // each busca en pokemon_entries para sacar el indice y su pokemon correspondiente.
        $.each(data.pokemon_entries,function(index,pokemon) {
            var getName = pokemon.pokemon_species.name.toUpperCase(); // se obtiene el nombre del pokemon
            var par = $("<p class='list'>").html("pkm no. "+ (index+1) + " <span>"+ getName+"</span>"); //se crean parrafos de prueba que contienen el nombre del pokemon y su numero
            par.appendTo("#pokemon");
        })
    });

    //todos los pkmns.
   




    /*obtener JSON  para datos del pokemon
    $.getJSON(pokeUrl, function(data) {
        var next= data.next;
        var prev= data.previous;
        //console.log(data); //carga la data de las especies
        $.each(data.results, function(index,pkmn) {
            var getData = pkmn.url;
            console.log(getData);
        });
    });*/

    
})
