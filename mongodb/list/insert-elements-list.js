/**
 * Insertar elementos en listas
 */

// $push
db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $push: {
      coursers: 'Android'
    }
  }
)

db.users.updateOne(
  {
    name: 'Yeon'
  },
  {
    $push: {
      scores: 5
    }
  }
)

// Agregar más de un elemento a la lista
db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $push: {
      coursers: {
        $each: ['Django', 'Rails', 'Rust']
      }
    }
  }
)

// Insertar por posición
db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $push: {
      coursers: {
        $each: ['React'],
        $position: 0
      }
    }
  }
)

// Insertar por posición
db.users.updateOne(
  {
    name: 'Yuri'
  },
  {
    $push: {
      coursers: {
        $each: ['VueJS', 'Angular'],
        $position: 0
      }
    }
  }
)