function Item(codigoProd, cant){
  for(let i = 0; i<productosJson.length ;i++){
    if(productosJson[i].codigo==codigoProd){
          this.marca = productosJson[i].marca
          this.nombre=productosJson[i].nombre
          this.tamanio=productosJson[i].tamanio// hay varios tamaños :( )
          this.precio=productosJson[i].precio
          this.precioTotal = parseInt(productosJson[i].precio) * parseInt(cant)
          this.codigo=parseInt(productosJson[i].codigo)
          this.stock=productosJson[i].stock 
          this.cantidad = cant
        break
    }
  }
}

function Cliente (nombre,apellido,mail,contrasenia){
  this.nombre = nombre
  this.apellido = apellido
  this.mail= mail
  this.contrasenia = contrasenia
}