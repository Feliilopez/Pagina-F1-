const tema = document.querySelector(".tema");
const perfil = document.querySelector(".perfil");
const config = document.querySelector(".config");
const header = document.querySelector(".header");
const aside = document.querySelector(".aside");
const hvr = document.querySelector(".hvr");
const flecha = document.querySelector(".flecha");
const desplegable = document.querySelector(".desplegable-temporadas");
const temporadas = document.querySelector(".temporadas");
const titulo = document.querySelector(".titulo");


let temaOscuro = false;
let asideDesplegado = false;

tema.addEventListener("click",(e)=>{
	if (temaOscuro) {
		document.body.style.backgroundColor = `#111`
		document.body.style.color = `#fff`;
		header.style.backgroundColor = `#111`;
		aside.style.backgroundColor = `#111`;
		titulo.style.color = "#fff";
		aside.style.color = `#fff`;
		if (asideDesplegado) {flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Blanca-Izq.png")`}
		else {flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Blanca-Der.png")`};
		tema.style.backgroundImage = `url("Imagenes/Logo-Sol.png")`;
		perfil.style.backgroundImage = `url("Imagenes/Logo-Casco-Blanco.png")`;
		config.style.backgroundImage = `url("Imagenes/Logo-Tuerca-Blanca.png")`;
	} else {
		document.body.style.backgroundColor = `#eee`;
		document.body.style.color = `#000`;
		header.style.backgroundColor = `#eee`;
		aside.style.backgroundColor = `#eee`;
		titulo.style.color = "#000"
		aside.style.color = `#000`;
		if (asideDesplegado) {flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Negra-Izq.png")`}
		else {flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Negra-Der.png")`};
		tema.style.backgroundImage = `url("Imagenes/Logo-Luna.png")`;
		perfil.style.backgroundImage = `url("Imagenes/Logo-Casco-Negro.png")`;
		config.style.backgroundImage = `url("Imagenes/Logo-Tuerca-Negra.png")`;

	}; temaOscuro = !temaOscuro;
});

hvr.addEventListener("mouseover",(e)=>{
	if (!asideDesplegado) {
		aside.style.left = 0; 
		if (temaOscuro) flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Negra-Izq.png")`
		else flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Blanca-Izq.png")`;
	}
	else {
		aside.style.left = "-185px";
		if (temaOscuro) flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Negra-Der.png")`
		else flecha.style.backgroundImage = `url("Imagenes/Logo-Flecha-Blanca-Der.png")`;
	}
	asideDesplegado = !asideDesplegado;
})

desplegable.addEventListener("click",(e)=>{
	if (temporadas.style.display == "flex") {
		temporadas.style.display = "none";
	} else {temporadas.style.display = "flex";}
});

