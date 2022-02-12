/**
 * Renombrar atributos en documentos
 */

// Cambiar last_name to lastName
db.users.updateMany(
  {}, // Se deja vacío para aplicarse a toda la colección
  {
    $rename: {
      last_name: 'lastName'
    }
  }
)