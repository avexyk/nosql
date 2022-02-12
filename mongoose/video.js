const mongoose = require('mongoose');

let videoSchema = new mongoose.Schema({
  title: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }
});

mongoose.model('Video', videoSchema);