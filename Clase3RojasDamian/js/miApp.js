function comprar() {
    const birras = document.querySelectorAll(".birras");
    let total = 0;
  
    for (const growler of birras) {
      const checkbox = growler.querySelector("input");
      if (checkbox && checkbox.checked) {
        total = total + parseInt(growler.getAttribute("value"),);
      }
    }

    let respuesta = "Debe abonar un total de $" + total + " pesos (Arg)";

    if (total === 0) {
      respuesta = "Debe seleccionar un producto para realizar su pedido";
    }

    alert(respuesta);
  }
  