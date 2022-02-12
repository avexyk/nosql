/**
 * Obtener documentos a partir de atributos que se encuentrenen esos documentos
 */

// CASO1: Obtener usuarios que tengan postalCode
db.users.find(
  {
    address: { $exists: true}
  }
).pretty()

// CASO2A: Obtener usuarios que tengan postalCode 90901
db.users.find(
  {
    'address.postalCode': 90901
  }
).pretty()

// CASO2B: Obtener usuarios que tengan postalCode 90901 y number 43 (La dot nottation es muy flexible con operadores relacionales)
db.users.find(
  {
    $and: [
      {
        'address.postalCode': 90901
      },
      {
        'address.number': {$exists: true}
      },
      {
        'address.number': {$gte: 43}
      }
    ]
  }
).pretty()

// CASO3: Obtener primera referencia de usuarios con postalCode y references
db.users.find(
  {
    $and: [
      {
        address: {$exists: true}
      },
      {
        'address.references': {$exists: true}
      }
    ]
  },
  {
    _id: false,
    name: true,
    'address.references': {
      $slice: 1
    }
  }
).pretty()
