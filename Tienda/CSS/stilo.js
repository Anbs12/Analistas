window.addEventListener("load", function() {
    // Obtiene el elemento del slider
    var slider = document.querySelector(".slider");
    
    // Obtiene el ancho total del slider
    var sliderWidth = slider.offsetWidth;
    
    // Calcula el tiempo de duración de la animación (5 segundos por imagen)
    var duration = sliderWidth / 100 * 5;
    
    // Aplica la duración de la animación al keyframe
    var keyframes = `deslizar ${duration}s infinite`;
    slider.style.animation = keyframes;
  });
  