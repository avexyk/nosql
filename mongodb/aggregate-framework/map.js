/**
 * Aplicar una expresión para elementos dentro de una lista
 */

// $$ -> alias
// $$ -> output

db.users.aggregate(
  [
    {
      $match: {
        scores: { $exists: true }
      }
    },
    {
      $project: {
        _id:false, name:true, scores:true
      }
    },
    {
      $project: {
        name: true,
        scores: true,
        newListScores: {
          $map: {
            input: '$scores',
            as: 'calificacion',
            in: {
              $multiply: [
                '$$calificacion', 10
              ]
            }
          }
        }
      }
    }
  ]
)

db.users.aggregate(
  [
    {
      $match: {
        coursers: { $exists: true }
      }
    },
    {
      $project: {
        _id: false,
        name: true,
        coursers: true
      }
    },
    {
      $project: {
        newList: {
          $map: {
            input: '$coursers',
            as: 'course',
            in: {
              $multiply: ['$$course.progress', 10]              
            }
          }
        }
      }
    }
  ]
)