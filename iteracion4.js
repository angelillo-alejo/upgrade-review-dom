/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
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