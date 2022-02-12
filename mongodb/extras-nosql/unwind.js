/**
 * Unwind: Desenvolver la unión de documentos
 */

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
      $unwind: '$listadoLibros'
    },
    {
      $project: {
        _id: false,
        nombre: true,
        libro: '$listadoLibros'
      }
    }
  ]
).pretty()