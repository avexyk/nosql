/**
 * Obtener elementos
 */

// $slice -> Posición o índice
db.users.findOne(
  {
    name: 'Yuri'
  },
  {
    _id: false,
    name: true,
    coursers:true
  }
)

db.users.findOne(
  {
    name: 'Yuri'
  },
  {
    _id: false,
    name: true,
    coursers: {
      $slice: 1 // int o [] - Un número entero hace referencia a la posición no índice
      // $slice: -1 último elemento
      // $slice: [0, 3] Tres primeros elementos de la lista de cursos de Yuri
    }
  }
)

