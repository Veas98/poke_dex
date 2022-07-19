let data;
let names = [];
let i = 0;
let j = 1;
const doFetchPokeNames = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(d => {
            console.warn(d);
            data = d;
            names = []; //clear table
            data.results.forEach(i => { //push all new (20) names to table
            names.push(i);
            })
        })
}
doFetchPokeNames('https://pokeapi.co/api/v2/pokemon')
const start = () =>{
    document.getElementById("pokedex-name").innerHTML = names[i].name; //get first poke name
    img(); //generate first poke img
}
const doNext = () =>{
    if (i === 19 && data.next !== null){
        i = 0; //reset counter
        j++;
        doFetchPokeNames(data.next); //push new names to table
    }
    else {
        i++;
        j++;
    }
}
const next = () =>{
    doNext();
    document.getElementById("pokedex-name").innerHTML = names[i].name;
    img();
}
const doPrev = () =>{
    if (i === 0 && data.previous !== null){
        i = 19;
        j--;
        doFetchPokeNames(data.previous);
    }
    else if (i > 0 && j > 1){
        i--;
        j--;
    }
}
const previous = () => {
    doPrev();
    document.getElementById("pokedex-name").innerHTML = names[i].name;
    img();
   /* if (i === 0 && data.previous !== null){
        document.getElementById("pokedex-name").innerHTML = names[i].name;
        img();
        i = 20;
        names = [];
        doFetchPokeNames(data.previous);
    }
    i > 0 ? i-- : null;
    j > 1 ? j-- : null;
   if (i >= 0 && j > 0){
       document.getElementById("pokedex-name").innerHTML = names[i].name;
       img();
   }*/

}
const img = () => {
    if (j < 10){
        document.getElementById("pokedex-image_space").innerHTML = `<img src="imagesHQ/00${j}.png" alt="Pokemon">`
    } else if (10 <= j  && j < 100){
        document.getElementById("pokedex-image_space").innerHTML = `<img src="imagesHQ/0${j}.png" alt="Pokemon">`
    } else {
        document.getElementById("pokedex-image_space").innerHTML = `<img src="imagesHQ/${j}.png" alt="Pokemon">`
    }
}