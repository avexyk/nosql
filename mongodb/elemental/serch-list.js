/**
 * Búsqueda en listas
 */

// Obtener usuarios con nombre Endorsi, Elaine
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
)

// Método más optimizado
db.users.find(
  {
    name: {
      $in: ['Endorsi', 'Elaine']
    }
  }
)

// Not in - Inverso
db.users.find(
  {
    name: {
      $nin: ['Endorsi', 'Elaine']
    }
  }
)