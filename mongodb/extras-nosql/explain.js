/**
 * Plan de ejecución
 */

db.autores.find(
  {
    nombre: 'Stephen King'
  }
).explain()

db.autores.find(
  {
    nombre: 'Stephen King'
  }
).explain('executionStats')

