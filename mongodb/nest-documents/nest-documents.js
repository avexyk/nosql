/**
 * Documentos aninados - Documentos dentro de documentos
 */

db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $set: {
      address: {
        state: 'CDMX',
        city: 'CDMX',
        postalCode: 90901
      }
    }
  }
)

db.users.updateOne(
  {
    name: 'Yeon'
  },
  {
    $set: {
      address: {
        state: 'CDMX',
        city: 'CDMX',
        number: 43,
        street: 'Calle #12',
        postalCode: 90901,
        references: ['Casa color azul', 'Puerta madera']
      }
    }
  }
)
