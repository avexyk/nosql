/**
 * Consultas de documentos FIND
 * para obtener el primer documento
 */

db.users.findOne(
  {
    age:{
      $eq: 29
    }
  }
)

// Retornar sin argumentos el primer documento de la colección
db.users.findOne()