/**
 * Remove: Eliminar documentos
 */

// Remueve uno o más documentos que cumple con un criterio
db.users.remove(
  {
    name: 'Luis'
  }
)

// Remueve todos los documentos de la colección
db.books.remove({})

// Eliminar una base de datos
db.getName() // Saber en que base de datos estoy
db.dropDatabase()

// Eliminar una colección
db.books.drop