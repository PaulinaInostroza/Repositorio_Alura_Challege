

function encriptar(){
    var palabraIngresada=document.getElementById('palabraUsuario').value;
    console.log(palabraIngresada);
    const textoEncriptado = btoa(palabraIngresada);
    localStorage.setItem('palabraIngresada', palabraIngresada);
    localStorage.setItem('palabraEncriptada', textoEncriptado);
    window.location.href = 'encriptador.html';
}

window.onload = function() {
    var palabraIngresada = localStorage.getItem('palabraIngresada');
    var palabraEncriptada = localStorage.getItem('palabraEncriptada');

    if (palabraIngresada, palabraEncriptada) {
        document.getElementById('encriptador_contenido_encriptada').textContent = palabraIngresada;
        document.getElementById('encriptador_contenido_copiar').textContent = palabraEncriptada;

    }
}

function desencriptar(){
    const palabraEncriptada=document.getElementById('encriptador_contenido_copiar').textContent; 
    const palabraDesecriptada = atob(palabraEncriptada);
    document.getElementById('encriptador_contenido_copiar').textContent = palabraDesecriptada;


}
function copiar(){
    const textoCopia = document.getElementById('encriptador_contenido_copiar').textContent;
    console.log(textoCopia);
    navigator.clipboard.writeText(textoCopia).then(() => {
        alertify.confirm("Texto copiado correctamente en portapapeles:)",
            function() {
              alertify.success('Ok');
              window.location.href = 'index.html';
            }
          );
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}