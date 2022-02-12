/**
 * Actualizar documentos (Forma actual)
 */

// updateOne - upateMany

// Establecer varios documentos agregandole un nuevo atributo a quienes no lo tengan

db.users.updateMany(
  {
    support: {
      $exists: false
    }
  },
  {
    $set: {
      // Genera nuevo atributo
      support: false
    }
  }
)

// Actualizar solo un documento
db.users.updateOne(
  {
    name: 'Elaine'
  },
  {
    $set: {
      support: true
    }
  }
)