/**
 * Actualizar documentos dentro de listas
 */

db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $set: {
      'coursers.0.progress': 100,
      'coursers.0.completed': true,
      'coursers.1.progress': 100
    }
  }
)

db.users.updateOne(
  {
    name: 'Yeon',
    'coursers.title':'Mongo'
  },
  {
    $set: {
      'coursers.$.title': 'MongoDB',
      'coursers.$.progress': 100,
      'coursers.$.completed': true
    }
  }
)

db.users.updateOne(
  {
    name: 'Yeon',
    'coursers.title':'MongoDB'
  },
  {
    $set: {
      'coursers.$.progress': 100,
      'coursers.$.completed': true,
      'coursers.$.tutor': {
        'name': 'Uriel'
      }
    }
  }
)

db.users.updateOne(
  {
    name: 'Yeon',
    'coursers.title':'MongoDB'
  },
  { // Cambios a aplicar
    $set: {
      'coursers.$.tutor.name': 'Marines'
    }
  }
)