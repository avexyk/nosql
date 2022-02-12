/**
 * Expresiones regulares
 */

// Prepación de nueva colección
db.books.insertMany(
  [
    {title: 'Libro 1', sales: 100},
    {title: 'Libro 2', sales: 200},
    {title: 'Revista ed 1', sales: 300},
    {title: 'Revista ed 2', sales: 400},
    {title: 'Revista ed 3', sales: 500},
    {title: 'Comic 1', sales: 600},
    {title: 'Comic 2', sales: 700},
    {title: 'Comic 3', sales: 800}
  ]
)

// Simular cláusula like -> expresión regular
// Ej: Obtener libros que inicien con Comic
// Ej: Obtener libros que finalice con 3
// Ej: Obtener libros que tengan "ed"

db.books.find(
  {
    title: /^Comic/
  }
)

db.books.find(
  {
    title: /3$/
  }
)

db.books.find(
  {
    title: /ed/
  }
)

