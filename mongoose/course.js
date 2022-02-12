const mongoose = require('mongoose');
const isEmail = require('validator').isEmail;
const slugify = require('slugify');

// 1. Definir el esquema
let courseSchema = new mongoose.Schema({
  // _id: ObjectId: Identificador único de tu documento
  title: {
    type: String,
    require: true
    // validate: [isEmail, 'El email es inválido']
    // validate: {
    //   validator: function(value) {
    //     // return true // Válidación pasa con true y no con false
    //     return new Promise((res, rej)=> {
    //       res(false);
    //     });
    //   },
    //   message: (props)=> `El valor ${props.value} no es válido`
    // }
  },
  description: {
    type: String,
    // enum: ['Bien', 'Mal'],
    minlength: [50, 'No se cumple la longitud mínima'],
    maxlength: 300,
    select: false
    // match: -> Expresión regular
  },
  numberOfTopics: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  publishedAt: Date,
  slug: {
    type: String,
    require: true
  },
  videos:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video'
    }
  ]
});

courseSchema.virtual('info')
  .get(function(){
    // this=>documento
    return `${this.description}. Temas: ${this.numberOfTopics}. Fecha de lanzamiento`
  });

// Middlewares
/**
 * validate
 * save
 * remove
 * updateOne
 * deleteOne
 * init=>sync
 */
courseSchema.pre('validate', function(next) {
  this.slug = slugify(this.title);
  next();
});
// courseSchema.post('save');

// 2. Definir el modelo
mongoose.model('Course', courseSchema);

console.log(":)");