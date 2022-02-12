/**
 * Cursores
 */

for(i=0; i<100; i++) {
  db.demo.insert(
    {
      name: 'user' + i
    }
  )
}

// El método find retorna un cursor con capacidad max de 20 elementos

// Cantidad de documentos en la colección
db.demo.find().count()

// Ej. Contar cuantos tienen determinado dominio en correo
db.users.find(
  {
    email: /gmail.com$/
  }
).count()

// Limitar cantidad de documentos que queremos obtener
// Ej. Obener primeros 2 usuarios de la colección users
db.users.find().limit(2)

// Salta documentos
db.users.find().skip(2).limit(1)

// Ordenar documentos
db.users.find(
  {}, // Sin criterios de búsqueda
  {
    _id:false, name:true
  }
).sort(
  {
    name: 1 // Ordenar por nombre de forma ascedente
  }
)

db.users.find(
  {}, // Sin criterios de búsqueda
  {
    _id:false, name:true
  }
).sort(
  {
    name: -1 // Ordenar por nombre de forma descendente
  }
)

// Combinar cursores
// Ej. Obtener el 3er usuario ordenado de forma descendente
db.users.find().sort(
  {name: -1}
).skip(2).limit(1)