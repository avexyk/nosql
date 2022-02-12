/**
 * Actualizar elementos
 */

db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $set: { // Si el atributo no existe lo crea en caso contrario lo actualiza
      'address.number':20,
      'address.references': [
        'Hay unas escaleras en la entrada',
        'Hay macetas en la acera'
      ]
    }
  }
)

db.users.updateOne(
  {
    name: 'Yeon'
  },
  {
    $push: {
      'address.references': {
        $each: [
          'Fuera de la casa hay un río',
          'En la esquina hay un puente'
        ]
      }
    }
  }
)

// Modificar referencias
db.users.updateOne(
  {
    name: 'Yeon',
    'address.references':"Fuera de la casa hay un río"
  },
  {
    $set: {
      'address.references.$':'Enfrente hay una cancha de basketball'
    }
  }
)