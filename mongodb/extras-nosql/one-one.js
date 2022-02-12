/**
 * Relación uno a uno
 */

var usuario = {
  nombre: 'Raquel',
  apellido: 'Dominguez',
  edad: 27,
  correo: 'raquel@example.com',
  direccionPostal: {
    calle: 'calle',
    ciudad: 'ciudad',
    estado: 'estado',
    codigoPostal: 11111,
    numeroExt: 10
  }
}

db.users.insertOne(usuario)

