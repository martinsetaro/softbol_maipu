let btn = document.querySelector('#btn_enviar');

btn.addEventListener('click',enviarCorreo);

function enviarCorreo(){
    Swal.fire(
        'Correo enviado con exito!',
        'Nos comunicaremos a la brevedad gracias!',
        'success'
      )
}
