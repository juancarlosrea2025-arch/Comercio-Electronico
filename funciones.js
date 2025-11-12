// ==== CAMBIO ENTRE SECCIONES ====
const enlaces = document.querySelectorAll('.nav-link');
const secciones = document.querySelectorAll('section');

enlaces.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const destino = link.dataset.seccion;

        secciones.forEach(sec => sec.classList.remove('activo'));
        document.getElementById(destino).classList.add('activo');
    });
});

// ==== ACTIVIDADES SIMPLES POR UNIDAD ====
const botones = document.querySelectorAll('.boton-actividad');
const divActividad = document.getElementById('actividad');
const pregunta = document.getElementById('pregunta');
const opcionesDiv = document.getElementById('opciones');
const cerrarBtn = document.getElementById('cerrar');

const actividades = {
    1: {
        pregunta: "¿Qué es el comercio electrónico?",
        opciones: [
            "Transacciones bancarias en cajeros automáticos",
            "Publicidad en televisión",
            "Venta por Internet de bienes y servicios"
        ],
        correcta: 2
    },
    2: {
        pregunta: "¿Qué elemento es parte de la infraestructura del e-commerce?",
        opciones: ["Servidores y redes", "Tiendas físicas", "Pósters publicitarios"],
        correcta: 0
    },
    3: {
        pregunta: "¿Cuál es un ejemplo de comercio electrónico B2C?",
        opciones: ["Amazon vendiendo a consumidores", "Dos empresas haciendo negocios", "Usuarios intercambiando productos"],
        correcta: 0
    }
};

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const unidad = boton.dataset.unidad;
        mostrarActividad(unidad);
    });
});

function mostrarActividad(unidad) {
    const act = actividades[unidad];
    pregunta.textContent = act.pregunta;
    opcionesDiv.innerHTML = "";

    act.opciones.forEach((opcion, i) => {
        const btn = document.createElement('button');
        btn.textContent = opcion;
        btn.addEventListener('click', () => {
            if (i === act.correcta) {
                alert("✅ ¡Correcto!");
            } else {
                alert("❌ Intenta otra vez.");
            }
        });
        opcionesDiv.appendChild(btn);
    });

    divActividad.classList.remove('oculto');
}

cerrarBtn.addEventListener('click', () => {
    divActividad.classList.add('oculto');
});