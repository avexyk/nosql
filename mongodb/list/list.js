/**
 * Manejo de listas en MongoDB
 */

// Agregar a 2 usuarios nombre de cursos

db.users.updateOne(
  {
    name: 'Elaine'
  },
  {
    $set: {
      coursers: ['Python', 'MongoDB', 'SQL','Java']
    }
  }
)

db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $set: {
      coursers: ['Git', 'Escritura', 'Redes']
    }
  }
)

// Obtener usuario que posea ciertos curso
db.users.findOne(
  {
    coursers: ["Git", "Escritura", "Redes"]
  }
)

// Otra forma
db.users.findOne(
  {
    coursers: {
      $eq: ["Git", "Escritura", "Redes"]
    }
  }
)