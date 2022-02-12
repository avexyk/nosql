/**
 * Operadores relacionales
 */

// Obtener usuarios con edad mayor a 25
db.users.find(
  {
    age: {
      $gt: 25 // >
    }
  }
)

// Obtener usuarios con edad mayor o igual 25
db.users.find(
  {
    age: {
      $gte: 25 // >=
    }
  }
)

// Obtener usuarios con edad menor a 25
db.users.find(
  {
    age: {
      $lt: 25 // <
    }
  }
)

// Obtener usuarios con edad menor o igual a 25
db.users.find(
  {
    age: {
      $lte: 25 // <=
    }
  }
)

// Obtener usuarios con edad igual a 25
db.users.find(
  {
    age: {
      $eq: 25 // ==
    }
  }
)

// Obtener usuarios con edad no igual a 25
db.users.find(
  {
    age: {
      $ne: 25 // !=
    }
  }
)