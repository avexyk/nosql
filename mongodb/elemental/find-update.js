/**
 * Encontrar y modificar
 */

// Retorna el objeto antes de la actualización
db.users.findAndModify(
  {
    // Criterios
    query: {
      name: 'Yuri'
    },
    // Cambios
    update: {
      $inc: {
        age: 10
      }
    }
  }
)

// Obtener el documento después de actualizarse
db.users.findAndModify(
  {
    // Criterios
    query: {
      name: 'Yuri'
    },
    // Cambios
    update: {
      $inc: {
        age: 10
      }
    },
    new: true
  }
)

// Pueden usarse el sort, remove, upsert