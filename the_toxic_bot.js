let pregunta_numeros = prompt(
  "Por favor, coloca un número del 1 al 3000. Y rápido, que no tengo todo el día. Uff..."
);

if (parseInt(pregunta_numeros) < 1500) {
  alert(
    "El número que elegiste es menor a 1500, se ve que no te arriesgas a mucho en la vida."
  );
} else if (parseInt(pregunta_numeros) == 1500) {
  alert(
    "Elegiste el 1500... Cuanta imaginación la tuya. A ver si le ponés un poco mas de ganas"
  );
} else if (parseInt(pregunta_numeros) < 3000) {
  alert(
    "El número que elegiste está entre 1500 y 3000. Parece que elegís números altos para disimular tu falta de carácter."
  );
} else if (pregunta_numeros == "") {
  alert("No completaste nada ¿Seguro que sabés usar el teclado?");
} else if (pregunta_numeros == " ") {
  alert(
    "Dejaste un espacio en blanco nada más ¿Seguro que sabés usar el teclado?"
  );
} else if (pregunta_numeros == 3000) {
  alert(
    "El señor elige 3000... Cuidado con apuntar siempre a lo mas alto, te podés caer."
  );
} else if (pregunta_numeros > 3000) {
  alert("Te dije del 1 al 3000... te equivocaste, como siempre.");
} else {
  alert(
    "No estás poniendo números... Parece que ni vos entendés lo que estás haciendo."
  );
}

let decihola = prompt("Bueno, a ver, te la hago mas fácil... Escribí hola");

if (decihola == "hola") {
  alert(
    "¿No fuiste al colegio? La primera palabra de una oración siempre va con mayúscula."
  );
} else if (decihola == "Hola") {
  alert(
    "Otra vez... No estás prestando atención, yo puse hola con minúscula, no con mayúscula."
  );
} else {
  alert(
    "No podés ni escribir hola, me cansé de hablar con vos. Que te vaya bien."
  );
}
