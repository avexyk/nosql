/**
 * Agregar campos
 */

db.users.aggregate(
  [
    {
      $match: { // Definición de filtro
        age: {$gt: 25} // Filtro
      }
    },
    {
      $match: {
        coursers: { $exists: true } // Filtro sobre el filtro
      }
    },
    {
      $project: { // Define que atributos se van a mostrar
        _id:false,
        name: true,
        coursers: true
      }
    },
    {
      $project: { // Se pueden definir nuevos atributos
        name: true,
        firstCourses: {
          $slice: ['$coursers', 2]
        }
      }
    },
    {
      $project: {
        name: true,
        coursers: {
          $arrayElemAt: ['$firstCourses',0]
        }
      }
    },
    {
      $addFields: {
        currentDate: new Date()
      }
    }
  ]
).pretty()