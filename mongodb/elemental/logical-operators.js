/**
 * Operadores lógicos AND y OR
 */

// Obtener usuarios con edad mayor que 25 y menor a 30
db.users.find(
  {
    $and: [
      {
        age: {$gt: 25}
      },
      {
        age: {$lt: 30}
      }
    ]
  }
).pretty()

// Obtener usuarios con nombre Endorsi o Elaine
db.users.find(
  {
    $or: [
      {
        name: 'Endorsi'
      },
      {
        name: 'Elaine'
      }
    ]
  }
).pretty()

// Combinado
db.users.find(
  {
    $or: [
      {
        name: 'Yuri'
      },
      {
        name: 'Elaine'
      },
      {
        $and: [
          {
            age: {$gt: 22}
          },
          {
            age: {$lt: 25}
          }
        ]
      }
    ]
  }
).pretty()
