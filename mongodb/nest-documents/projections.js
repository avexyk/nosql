/**
 * CASO: Obtener nombre de usuario con titulo de cada uno de sus cursos
 */

db.users.find(
  {
    coursers: {$exists: true}
  },
  {
    _id: false,
    name: true,
    'coursers.title': true
  }
).pretty()