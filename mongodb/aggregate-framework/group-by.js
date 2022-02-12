/**
 * Permite agrupar documentos a partir de ciertos atributos
 */

db.items.insertMany(
  [
    {type: 'Camera', color: 'Red', price: 120},
    {type: 'Laptop', color: 'White', price: 400},
    {type: 'Laptop', color: 'Black', price: 600},
    {type: 'Camera', color: 'Silver', price: 200},
    {type: 'Microphone', color: 'Black', price: 200},
    {type: 'Mouse', color: 'White', price: 50},
    {type: 'Monitor', color: 'White', price: 50},
  ]
)

// Agrupar y contar respecto a su tipo
db.items.aggregate(
  [
    {
      $group: {
        _id:'$type',
        total: { $sum: 1 }
      }
    },
    { // HAVING
      $match: {
        total: {$gt: 1}
      }
    }
  ]
)