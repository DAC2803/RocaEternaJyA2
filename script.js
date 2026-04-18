// 1. Base de datos estática de Eventos
// Aquí es donde agregarás los cumpleaños y salidas
const baseDeEventos = [
    {
        titulo: "Cumpleaños de Martín",
        fecha: "25 de Abril",
        tipo: "Cumpleaños 🎉",
        descripcion: "Nos juntamos a celebrar a las 21:00 hs. Confirmar asistencia para calcular la comida."
    },
    {
        titulo: "Salida al Cerro",
        fecha: "02 de Mayo",
        tipo: "Salida al aire libre ⛰️",
        descripcion: "Caminata nivel intermedio. Llevar agua, buen calzado y el mate."
    },
    {
        titulo: "Reunión de Organización",
        fecha: "10 de Mayo",
        tipo: "Reunión 📅",
        descripcion: "Junta mensual para definir las actividades del próximo trimestre."
    }
];

// 2. Función para dibujar los eventos en el HTML
function cargarEventos() {
    const contenedorEventos = document.getElementById('lista-eventos');
    
    // Limpiamos el contenedor por si acaso
    contenedorEventos.innerHTML = '';

    // Recorremos la lista de eventos y creamos una tarjeta para cada uno
    baseDeEventos.forEach(evento => {
        // Creamos un elemento <article>
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta');

        // Llenamos el HTML interno de la tarjeta
        tarjeta.innerHTML = `
            <h3>${evento.titulo}</h3>
            <p class="fecha">${evento.fecha} | ${evento.tipo}</p>
            <p>${evento.descripcion}</p>
        `;

        // Agregamos la tarjeta al contenedor principal
        contenedorEventos.appendChild(tarjeta);
    });
}

// 3. Ejecutar la función cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', cargarEventos);

// 4. (Opcional) Navegación suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

