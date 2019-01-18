
function makeMadLib () {
    
    // var noun1Input = document.getElementById('noun-1');

    var noun1 = document.getElementById('noun-1').value;
    var noun2 = document.getElementById('noun-2').value;
    var verb = document.getElementById('verb').value;
    var adjective = document.getElementById('adjective').value;
    var pluralNoun = document.getElementById('plural-noun').value;

    var madText = 'The other day I rode my <strong>' +  noun1 + ' </strong> to the <strong>' 
        + noun2 + ' </strong>to <strong>' + verb + '</strong> some </strong>' + adjective + ' <strong>' + pluralNoun + '</strong> .'

    var madDisplay = document.getElementById('mad-lib');
    madDisplay.innerHTML = madText;
}


makeMadLib();