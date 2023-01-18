/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement("ul")
document.body.appendChild(ul$$)


for (const countrie of countries) {
    const li$$ = document.createElement("li");
    li$$.innerText = countrie
    ul$$.appendChild(li$$); 
}