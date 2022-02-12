/**
 * Generar consulta para obtener el nombre completo de los usuarios
 */

db.users.aggregate(
  [
    {
      $match: {
        $and: [
          {
            name: {$exists: true}
          },
          {
            lastName: {$exists: true}
          }
        ]
      }
    },
    {
      $project: {
        _id:false, name:true, lastName:true
      }
    },
    {
      $project: {
        fullName: {
          $concat: ['$name', ' ', '$lastName']
        }
      }
    }
  ]
)