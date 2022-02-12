/**
 * Crear índices
 */

db.users.createIndex(
  {autor_id: 1}
)

db.users.getIndexes()