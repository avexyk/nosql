/**
 * Método aggregate
 */

// Obtener usuarios con una edad determina

// CASO SIN FRAMEWORK
db.users.find(
  {
    age: {$gt: 25}
  }
)
  
// CASO CON FRAMEWORK (Tareas secuenciales)
db.users.aggregate(
  [
    {
      $match: { // Definición de filtro
        age: {$gt: 25} // Filtro
      }
    },
    {
      $match: {
        coursers: { $exists: true } // Filtro sobre el filtro
      }
    },
    {
      $match: {
        email: 'yuri@gmail.com' // Filtro sobre filtro sobre filtro
      }
    }

  ]
).pretty()

// CASO PROYECCION PT1
db.users.aggregate(
  [
    {
      $match: { // Definición de filtro
        age: {$gt: 25} // Filtro
      }
    },
    {
      $match: {
        coursers: { $exists: true } // Filtro sobre el filtro
      }
    },
    {
      $project: { // Define que atributos se van a mostrar
        _id:false,
        name: true,
        coursers: true
      }
    }

  ]
).pretty()

// CASO PROYECCIÓN PT2
db.users.aggregate(
  [
    {
      $match: { // Definición de filtro
        age: {$gt: 25} // Filtro
      }
    },
    {
      $match: {
        coursers: { $exists: true } // Filtro sobre el filtro
      }
    },
    {
      $project: { // Define que atributos se van a mostrar
        _id:false,
        name: true,
        coursers: true
      }
    },
    {
      $project: { // Se pueden definir nuevos atributos
        name: true,
        firstCourses: {
          $slice: ['$coursers', 2]
        }
      }
    },
    {
      $project: {
        name: true,
        coursers: {
          $arrayElemAt: ['$firstCourses',0]
        }
      }
    }
  ]
).pretty()