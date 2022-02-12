/**
 * Uno a muchos
 */

// CASO1: Lista
var autor = {
  nombre: 'Stephen King',
  nacionalidad: 'Estadounidense',
  libros: [
    {
      titulo: 'it',
      fechaLanzamiento: 1986
    },
    {
      titulo: 'El resplandor',
      fechaLanzamiento: 1977
    },
    {
      titulo: 'Misery',
      fechaLanzamiento: 1987
    }
  ]
}

// CASO2: Llaves foráneas
var autor = {
  nombre: 'Stephen King',
  nacionalidad: 'Estadounidense'
}

db.autores.insertOne(autor)

var libro1 = {
  titulo: 'It',
  fechaLanzamiento: 1986,
  autor_id: ObjectId("5ed45eccfbf110b9464bfb5b")
}

var libro2 = {
  titulo: 'El resplandor',
  fechaLanzamiento: 1977,
  autor_id: ObjectId("5ed45eccfbf110b9464bfb5b")
}

var libro3 = {
  titulo: 'Misery',
  fechaLanzamiento: 1987,
  autor_id: ObjectId("5ed45eccfbf110b9464bfb5b")
}

db.libros.insertMany(
  [
    libro1, libro2, libro3
  ]
)
