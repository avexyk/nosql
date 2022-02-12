/**
 * Respaldo con mongodump & mongorestore
 */

// mongodump --db tuDBMongoDB
// - bson -> binario
// db.dropDatabase()
// mongorestore --db tuDBMongoDB dump/tuDBMongoDB

// CASO1: Respaldo de colecciones
// mongodump --collection autores --db tuDBMongoDB
// Eliminar coleccion de autores
// mongorestore --collection autores --db tuDBMongoDB dumo/tuDBMongoDB/autores.bson