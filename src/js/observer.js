export const observerEl = (element,classAdd)=>{

    // Función que se ejecutará cuando el elemento sea observado
    function callback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classAdd); // Añadir clase cuando el elemento está visible en el viewport
            observer.unobserve(entry.target); // Dejar de observar el elemento una vez que se ha añadido la clase
          }
        });
      }
      
      // Opciones de configuración para el IntersectionObserver
      const opciones = {
        root: null, // Elemento raíz para el viewport (null indica el viewport)
        rootMargin: '0px', // Margen adicional alrededor del viewport
        threshold: 0 // Porcentaje del elemento que debe estar visible para activar el callback
      };

    // Crear una instancia de IntersectionObserver con la función de callback y opciones de configuración
     const observer = new IntersectionObserver(callback, opciones);
    // Empezar a observar el elemento
    observer.observe(element);
}

  
  
  

 
  