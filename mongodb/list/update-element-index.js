/**
 * Actualizar por índice
 */

// Actualizar elementos por indice

// CASO1: Cuando sabemos el índice
db.users.updateMany(
  {
    scores: { $exists: true }
  },
  {
    $set: {
      'scores.0': 7
    }
  }
)

// CASO2: Cuando no sabemos el índice
db.users.updateMany(
  {
    scores: { $exists: true },
    scores: 9 // Valor a buscar
  },
  {
    $set: {
      'scores.$': 6
    }
  }
)