
function makeMadLib () {
    
    // var noun1Input = document.getElementById('noun-1');

    var noun1 = document.getElementById('noun-1').value;
    var noun2 = document.getElementById('noun-2').value;
    var verb = document.getElementById('verb').value;
    var adjective = document.getElementById('adjective').value;
    var pluralNoun = document.getElementById('plural-noun').value;

    var madText = 'The other day I rode my ' + noun1 + ' to the ' 
        + noun2 + ' to ' + (verb) + ' some ' + adjective + ' ' + pluralNoun + ' .'

    var madDisplay = document.getElementById('mad-lib');
    madDisplay.textContent = madText;
}


makeMadLib();