/**
 * Consultas de documentos FIND
 */

db.users.find(
  {age: 29} // Criterios -> Where
)

db.users.find(
  {age: 29} // Criterios -> Where
).pretty() // Mejor formato

db.users.find(
  {age: 29}, // Criterios de búsqueda o condiciones -> Where
  {name:true, email:true, _id:false} // Criterios  o atributos que se desean obtener -> Select
).pretty() // Mejor formato