let btn = document.querySelector('#btn_enviar');

btn.addEventListener('click',enviarCorreo);

function enviarCorreo(){
Swal.fire(
  'Correo enviado!',
  'Correctamente!',
  'Nos comunicaremos en la brevedad gracias!'
)
};
