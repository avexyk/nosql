/**
 * Búsqueda por atributos
 */

// Preparación
var user5 = {
  name: 'Yuri',
  email: 'yuri@gmail.com',
  support: true,
  createdAt: new Date()
}

db.users.insertOne(user5)

// Obtener usuarios que tengan el atributo apellido
db.users.find(
  {
    last_name:{
      $exists: true
    }
  }
)

// Obtener usuarios que tengan el atributo createdAt como tipo date
db.users.find(
  {
    createdAt: {
      $type: 'date'
    }
  }
)