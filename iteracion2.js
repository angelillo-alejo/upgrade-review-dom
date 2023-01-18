// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const deletes = document.querySelectorAll(".fn-remove-me");

// for (let i = 0; i<deletes.length; i++) {
//     deletes[i].remove();
// }

//Practicando con forEach!!
deletes.forEach(function(element) {
    element.remove();
  });
  