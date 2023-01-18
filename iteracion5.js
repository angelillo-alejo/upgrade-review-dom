const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const div$$ = document.createElement('div');
document.body.appendChild(div$$);
for (const countrie of countries) {
    const list$$ = document.createElement ('li');
    list$$.innerHTML = `<div>
    <h4>${countrie.title}</h4> <img src ='${countrie.imgUrl}' alts ='${countrie.title}'></div>`
    div$$.appendChild (list$$);
}
/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
 elemento de la lista.*/
 const buttom$$ = document.createElement('button');
 buttom$$.innerText = 'Borrar';
 document.body.appendChild (buttom$$);

 buttom$$.addEventListener ('click', function () {
    const list$$ = document.querySelectorAll ('li');
    list$$ [list$$.length -1].remove();

 });

 
 
