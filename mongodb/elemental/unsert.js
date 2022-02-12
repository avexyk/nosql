/**
 * Unsert: Actualizar un nuevo documento del cual no estamos seguros si existe o no
 */

// Crear documento y luego actualizarlo
db.users.updateOne(
  {
    name: 'Luis'
  },
  {
    $set: {
      age: 31
    }
  },
  {
    upsert: true
  }
)

