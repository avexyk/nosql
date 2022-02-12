/**
 * Ordenamiento
 */

// CASO: Obtener al usuario más joven
db.users.aggregate(
  [
    {
      $sort: {
        age: 1
      }
    },
    {
      $limit: 1
    },
    {
      $project: {
        _id:false, name:true, age:true
      }
    }
  ]
)