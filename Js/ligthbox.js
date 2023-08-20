//Script Efecto Ligthbox, por: Roberto Ochoa Cuevas

//Funcion de proteccion del codigo
(function()
{

//Objeto con las propiedades del efecto ligthbox
var propLigthBox = 
{
    imgContainer: document.getElementsByClassName('ligthbox'),
    imagen: null,
    imagenSrc: null,
    cuerpoDOM: document.getElementsByTagName('body')[0],
    ligthbox_container: null,
    modal: null,
    cerrarModal: null,
    animacion: 'fade',
};

//Objeto con los metodos del efecto ligthbox
var metLigthBox  =
{
    //Evento click
    inicio: function()
    {
        for (let i = 0; i < propLigthBox.imgContainer.length; i++) 
        {
            propLigthBox.imgContainer[i].addEventListener('click', metLigthBox.capturaImagen)
        }
    },

    //Selccionar imagen
    capturaImagen: function()
    {
        propLigthBox.imagen = this;
        metLigthBox.ligthBox(propLigthBox.imagen);
    },

    ligthBox: function(imagen)
    {
        //Conseguir URL de la imagen
        propLigthBox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5,-2);
        
        //Crear el container
        propLigthBox.cuerpoDOM.appendChild(document.createElement('DIV')).setAttribute('id', 'ligthbox_container');
    
        //seleccionar el container
        propLigthBox.ligthbox_container = document.getElementById('ligthbox_container');

        //Estilos del container
        propLigthBox.ligthbox_container.style.width = '100%';
        propLigthBox.ligthbox_container.style.height = '100%';
        propLigthBox.ligthbox_container.style.position = 'fixed';
        propLigthBox.ligthbox_container.style.zIndex = '1000';
        propLigthBox.ligthbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLigthBox.ligthbox_container.style.top = '0';
        propLigthBox.ligthbox_container.style.left = '0';

        //Creacion del modal
        propLigthBox.ligthbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLigthBox.modal = document.getElementById('modal');

        //Estilos del modal
        propLigthBox.modal.style.height = '100%';

        //Creacion del IMG
        propLigthBox.modal.appendChild(document.createElement('IMG')).setAttribute('src',propLigthBox.imagenSrc)
        propLigthBox.modal.getElementsByTagName('img')[0].setAttribute('class','imagenModal');
    
        //Anmacion de la imagen
        if(propLigthBox.animacion == 'fade')
        {
            document.getElementsByClassName('imagenModal')[0].style.opacity = 0;
            
            //tiempo antes de que se ejecute
            setTimeout(function()
            {
                document.getElementsByClassName('imagenModal')[0].style.opacity = 1;  
            }, 50);
        }

        //Boton para cerrar el modal
        propLigthBox.modal.innerHTML += '<i id="cerrar_modal" class="fa-solid fa-xmark"></i>';    
        propLigthBox.cerrarModal = document.getElementById('cerrar_modal');
        propLigthBox.cerrarModal.addEventListener('click', metLigthBox.cerrarModal)

    },

    //Funcion para cerrar el modal
    cerrarModal: function()
    {
        propLigthBox.cuerpoDOM.removeChild(propLigthBox.ligthbox_container);
    }

}

//funcion principal
metLigthBox.inicio();
}())
//<3