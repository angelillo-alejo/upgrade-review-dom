const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const div$$ = document.createElement("div");
document.body.appendChild(divPadre1$$);

const remove = (elemento) => {
  console.log(elemento);
  elemento.remove();
};

for (const countrie of countries2) {
  const myDivH1$$ = document.createElement("div");
  const myH41$$ = document.createElement("h4");
  const myImg1$$ = document.createElement("img");
  const myBtn1$$ = document.createElement("button");

  
  myBtn1$$.innerText = "Eliminar";
  myBtn1$$.addEventListener("click", () => remove(myDivH1$$))

  myH41$$.innerText = countrie.title;
  myImg1$$.setAttribute("src", countrie.imgUrl);

  
  divPadre1$$.appendChild(myDivH1$$);
  myDivH1$$.appendChild(myH41$$);
  myDivH1$$.appendChild(myBtn1$$);
  myDivH1$$.appendChild(myImg1$$);
}