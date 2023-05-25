const menu = document.getElementById('maxe');
const fecha = document.getElementById('fecha');



const abraMenu = () => {

    const hin = document.getElementById('hin');
    hin.style.display = 'block';

if(menu === menu){
    fecha.style.visibility = 'visible';
    menu.style.display = 'none';
  
}
   
}

menu.addEventListener('click', abraMenu);



const fecharMenu = () => {
    
   

    if(fecha === fecha){

        fecha.style.visibility = 'hidden';
        menu.style.display = 'inline';
    }
    const hin = document.getElementById('hin');
    hin.style.display = 'none';
}

fecha.addEventListener('click', fecharMenu);