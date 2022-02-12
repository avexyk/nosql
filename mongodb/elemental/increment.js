/**
 * Incrementar atributo
 */

// Incrementar
db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $inc: {age: 10}
  }
)

// Decrementar
db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $inc: {age: -3}
  }
)