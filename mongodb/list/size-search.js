/**
 * Búsqueda por tamaño
 */

// Obtener documentos que tenga un tamaño de 5 en cursos
db.users.find(
  {
    coursers: {
      $size: 6
    }
  }
)

//Obtener documentos que tengan por lo menos 3 cursos
db.users.find(
  {
    $and: [
      {
        coursers: {$exists: true}
      },
      {
        $where: 'this.coursers.length >= 3'
      }
    ]
  }
).pretty()