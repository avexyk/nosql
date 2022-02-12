/**
 * Obtener documentos a partir de atributos de documentos los cuales se encuentren dentro de listas
 */

// Obtener usuarios que tengan al menos un curso completado
db.users.find(
  {
    coursers: {
      $elemMatch: {
        completed: true
      }
    }
  }
).pretty()

// Obtener todos los usuarios con un progreso mayor a 80
db.users.find(
  {
    coursers: {
      $elemMatch: {
        progress: {$gte: 80}
      }
    }
  }
)