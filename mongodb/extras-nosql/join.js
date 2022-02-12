/**
 * Unión de colecciones
 */

// Obtener autores con su listado de libros
db.autores.aggregate(
  [
    {
      $lookup: {
        from: 'libros',
        localField: '_id',
        foreignField: 'autor_id',
        as: 'listadoLibros'
      }
    }
  ]
).pretty()

// Obtener autores que posean al menos un libro
db.autores.aggregate(
  [
    {
      $lookup: {
        from: 'libros',
        localField: '_id',
        foreignField: 'autor_id',
        as: 'listadoLibros'
      }
    },
    {
      $match: {
        listadoLibros: {
          $ne: []
        }
      }
    },
    {
      $project: {
        _id:false, nombre: true
      }
    }
  ]
).pretty()