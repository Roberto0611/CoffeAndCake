//Script Efecto Slider, Por: Roberto Ochoa Cuevas

//Funcion de proteccion del codigo
(function()
{
    
//Objeto con las Propiedades del Slider
var propSlider = 
{
    slider: document.getElementById('slider'),
    primerSlide: null,
}

//Metodos del Slider
var metSlider =
{
    //Ejecutar la funcion MoverSlide, cada 3 segundos
    inicio: function()
    {
        setInterval(metSlider.moverSlide, 3000);
    },

    //Funcion MoverSlide
    moverSlide: function()
    {

        //Transicion Slider
        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-100%'; 

        //Movimiento del slider, cada 1 segundo
        setTimeout(function()
        {

            //Seleccionar primer hijo del Slider
            propSlider.primerSlide = propSlider.slider.firstElementChild;

            //Agregar primer hijo al final 
            propSlider.slider.appendChild(propSlider.primerSlide);

            //Quitar la animacion (con el fin de que se pueda volver a repetir)
            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = '0';
        
        }, 1000)      
    }
}

//Funcion principal
metSlider.inicio();
}())
//<3
