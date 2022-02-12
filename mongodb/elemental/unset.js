/**
 * Unset - Eliminar atributos de documentos
 */

// Eliminar un atributo usando unset en un documento
db.users.updateOne(
  {
    createdAt: {$exists: true}
  },
  {
    $unset: {createdAt: true}
  }
)
