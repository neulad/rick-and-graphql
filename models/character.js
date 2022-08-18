const { Schema, model } = require('mongoose');

const characterSchema = new Schema({

  name: {
  
    type: String,
    required: true,
    trim: true,
    minLength: 1
  
  },
  
  status: {
  
    type: String,
    enum: [
    
      'Alive',
      'Dead',
      'uknown'
    
    ]
  
  },
  
  species: String,
  
  gender: {
  
    type: String,
    enum: [
    
      'Female',
      'Male',
      'Genderless',
      'unknown'
    
    ]
  
  }

}, { timestamps: true });

module.exports = model('Character', characterSchema);
