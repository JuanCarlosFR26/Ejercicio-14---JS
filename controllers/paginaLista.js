

const obtenerNombres = function() {
    const listaNombres = ['Juan', 'Ana', 'Ramón', 'Lorenzo', 'Susana', 'Nora', 'Óscar', 'María'];
    listaNombres.forEach( nombre => console.log(nombre));
}

const mostrarNombres = function() {
    const div = document.querySelector('.nombres');
    div.textContent = listaNombres.forEach( nombres => console.log(nombres))
}

const paginaInicio = ( req, res) => {
    res.sendFile("../public/index.html");
}

export {
    obtenerNombres,
    mostrarNombres,
    paginaInicio
}
