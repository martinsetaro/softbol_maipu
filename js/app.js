let btn = document.querySelector('#btn_enviar');

btn.addEventListener('click',enviarCorreo);

function enviarCorreo(){
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}
