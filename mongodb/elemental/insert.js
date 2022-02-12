/**
 * Creación de documentos INSERT
 */

// insertOne
var user2 = {
  name: 'Gil',
  last_name: 'Bautista',
  age: 29,
  email: 'email@outlook.com'
}

db.users.insertOne(user2)
db.users.find();

// inserMany
var user3 = {
  name: 'Endorsi',
  last_name: 'Jahad',
  age: 21,
  email: 'endorsi@outlook.com'
}

var user4 = {
  name: 'Elaine',
  last_name: 'Po',
  age: 24,
  email: 'elaine@outlook.com'
}

db.users.insertMany([user3, user4])