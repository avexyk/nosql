/**
 * Consultas de documentos FIND
 * con atributos diferentes o iguales
 */

// Obtener usuarios con edad diferente de 29 | Diferente a
db.users.find(
  {
    age:{
      $ne: 29
    }
  }
).pretty()

// Obtener usuarios con edad de 29 | Igual a
db.users.find(
  {
    age:{
      $eq: 29
    }
  }
).pretty()