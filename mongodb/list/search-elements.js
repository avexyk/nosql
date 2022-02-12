/**
 * Búsqueda por elementos de listas
 */

// Obtener usuarios que posean un curso en sus lista
db.users.find(
  {
    coursers: {
      $all: ['MongoDB','SQL'] // and
    }
  }
)

// Condiciones múltiples
db.users.find(
  {
    coursers: 'SQL'
  }
).pretty()

db.users.find(
  {
    $and: [
      {
        coursers: 'SQL'
      },
      {
        coursers: 'MongoDB'
      }
    ]
  }
).pretty()

db.users.find(
  {
    $or: [
      {
        coursers: 'SQL'
      },
      {
        coursers: 'Git'
      }
    ]
  }
).pretty()
