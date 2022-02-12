/**
 * Ordenar elementos
 */

db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $push: {
      scores: {
        $each: [10, 10],
        $sort: 1
      }
    }
  }
)

db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $push: {
      scores: {
        $each: [10, 10],
        $sort: -1
      }
    }
  }
)