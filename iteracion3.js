/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
for (const car of cars) {
    const ul$$ = document.createElement("ul");
    const li$$ = document.createElement("li");
    li$$.innerText = car;
    li$$.setAttribute('data-function', 'printhere');
    document.body.appendChild(ul$$);
    ul$$.appendChild(li$$);
}


