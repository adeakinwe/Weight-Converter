
document.getElementById('output').style.visibility = 'hidden';

let kgInput = document.getElementById('kgInput');
kgInput.addEventListener('input', converter);

function converter(e){
    document.getElementById('output').style.visibility = 'visible';
    
    let kg = e.target.value;

    let convertToGrams = document.getElementById('gramsOutput');
    convertToGrams.innerHTML = kg * 1000;

    let convertToTonnes = document.getElementById('tonnesOutput');
    convertToTonnes.innerHTML = kg / 1000;

    let convertToPounds = document.getElementById('poundsOutput');
    convertToPounds.innerHTML = kg * 2.2046;
}
