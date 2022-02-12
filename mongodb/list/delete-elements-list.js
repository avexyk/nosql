/**
 * Eliminar elementos en listas
 */

// $pull
db.users.updateMany(
  {
    coursers: { $exists: true }
  },
  {
    $pull: {
      coursers: 'Python'
    }
  }
)

// $pull $in
db.users.updateMany(
  {
    coursers: { $exists: true }
  },
  {
    $pull: {
      coursers: {
        $in: ['Django', 'Rust']
      }
    }
  }
)