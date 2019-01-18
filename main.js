
function makeMadLib () {
    
    var noun1Input = document.getElementById('noun-1');
    var noun2Input = document.getElementById('noun-2');
    var verbInput = document.getElementById('verb');
    var adjectiveInput = document.getElementById('adjective');
    var pluralNounInput = document.getElementById('plural-noun');

    var noun1 = noun1Input.value;
    var noun2 = noun2Input.value;
    var verb = verbInput.value;
    var adjective = adjectiveInput.value;
    var pluralNoun = pluralNounInput.value;

    var madText = 'The other day I rode my ' + noun1 + ' to the ' + noun2 + ' to ' + (verb) + ' some ' + adjective + ' ' + pluralNoun + ' .'

    var madDisplay = document.getElementById('mad-lib');
    madDisplay.textContent = madText;
}


