const express = require('express');
const mongoose = require('mongoose');

require('./course');
require('./video');

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/mongoose-course", ()=> {
  console.log("Conectado a MongoDB");
});

const app = express();

const Course = mongoose.model('Course');
const Video = mongoose.model('Video');

// app.get("/", (req, res)=>{
//   res.send("El despertar...");
// });

// Contar: .countDocuments(FILTROS)
// Contar: .countDocuments(numberOfTopics: 2)
// Contar(RAPIDO): .estimatedDocumentCount(SinFiltro)

// Skip & Limit: {limit:2, skip:1, sort:'title'}
// Paginación:
// const page=1;
// const perPage=2;
// limit: perPage,
// skip: page*perPage,

app.get("/",(req,res)=>{
  Course.find({}
    // title: {
    //   $regex: /Ruby/,
    //   $options: "i"
    // }
  // },null,{
  //   sort: {
  //     title: -1
  //   }
  /*},['title']*/)
  .populate('videos')
  .then(collection=>{
    res.json(collection);
  }).catch(err=>{
    res.json(err);
  })
});

app.get("/cursos",(req,res)=>{
  Course.find({}).then(docs=>{
    res.json(docs);
  }).catch(err=> {
    res.json(err);
  })
});

app.post('/cursos', (req, res)=> {
  Course.create({
    title: 'Ruby',
    description: 'Esta es una descripción para cumplir un número determinado de carácteres en un petición POST'
  }).then(doc=> {
    res.json(doc);
  }).catch(err=> {
    console.log(err);
    res.json(err);
  });
});

app.get("/cursos/:id",(req,res)=>{
  Course.findById(req.params.id).then(doc => {
    res.json(doc);
  }).catch(err=>{
    res.json(err);
  })
});

app.put("/cursos/:id",(req,res)=>{
  // 1. Actualización múltiple 0 a N
  // Course.update({numberOfTopics:0},{publishedAt:new Date()}, {multi: true}).then(r=>{
  //   res.json(r);
  // }).catch(err => res.json(err));

  // 2. findOneAndUpdate
  // Course.findByIdAndUpdate(req.params.id,{
  //   publishedAt: new Date()
  // },{new: true}).then(doc => res.json(doc))
  // .catch(err=>res.json(err));

  // 3. Encontrar el documento y luego guardarlo
  Course.findById(req.params.id).then(course => {
    course.publishedAt = new Date();
    return course.save();
  }).then(saveResponse => res.json(saveResponse))
  .catch(err=>res.json(err));
});

app.delete("/cursos/:id",(req,res)=>{
  // 1. Eliminar múltiple 0 a N
  // Course.deleteMany({numberOfTopics:0}).then(r=>{
  //   res.json(r);
  // }).catch(err => res.json(err));

  // 2. findOneAndDelete
  // Course.findByIdAndDelete(req.params.id).then(doc => res.json(doc))
  // .catch(err=>res.json(err));

  // 3. Encontrar el documento y luego guardarlo
  Course.findById(req.params.id).then(course => {
    // course.publishedAt = new Date();
    return course.delete();
  }).then(deleteResponse => res.json(deleteResponse))
  .catch(err=>res.json(err));
});

app.post('/videos',(req,res)=>{
  Video.create({
    title: 'Primer video',
    course: '5ed524f1174dc314a4535bfa'
  }).then(video=> {
    res.json(video);
    Course.findById('5ed524f1174dc314a4535bfa').then(course=>{
      course.videos.push(video.id);
      return course.save();
    })
  }).then(response=>{
    res.json(response);
  }).catch(err=>{
    console.log(err);
    res.json(err);
  })
});

app.get('/videos', (req, res)=>{
  Video.find().populate('course')
  .then(videos=>res.json(videos)).catch(err=>{
    console.log(err);
    res.json(err);
  })
});

app.listen(8080, ()=> console.log("Servidor iniciado"));