/**
 * Operadores racionales para trabajar listas
 */

// Agregar atributo numérico
db.users.updateOne(
  {
    name: 'Yeon'
  },
  {
    $set: {
      scores: [9,8,9,6,7,8,10]
    }
  }
)

db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $set: {
      scores: [10,7,8,10,10,10]
    }
  }
)

// Obtener usuarios con al menos un 10
// Obtener usuarios con al menos un valor >7

db.users.find(
  {
    scores: 10
  }
).pretty()

db.users.find(
  {
    scores: {
      $lt: 7
    }
  }
).pretty()

