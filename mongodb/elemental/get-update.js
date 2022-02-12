/**
 * Obtener y actualizar elementos
 */

// Obtener y actualizar un elemento
var yuri = db.users.findOne(
  {name: 'Yuri'}
)

// Actualizar el objeto
yuri.name='Yeon'

// Persistir el dato
db.users.save(yuri)

// Si el documento tiene id -> se actualiza y si no tiene id -> se crea

// Agregar un nuevo atributo al documento-objeto
yuri.age=27

db.users.save(yuri)
