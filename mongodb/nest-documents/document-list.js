/**
 * Almacenar documentos dentro de listas
 */

db.users.updateMany(
  {
    coursers: { $exists: true }
  },
  {
    $unset: {
      coursers: true
    }
  }
)

db.users.updateOne(
  {
    name: 'Yeon'
  },
  {
    $set: {
      coursers: [
        {
          title: 'Mongo',
          progress: 50,
          completed: false
        },
        {
          title: 'Python',
          progress: 190,
          completed: true
        },
        {
          title: 'Ruby',
          progress: 80,
          completed: false
        }
      ]
    }
  }
)