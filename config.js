const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/rickAndMortyDB", {

  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
  
});

mongoose.connection.once('open',  () => { 

  console.log(`MongoDB is sucessfully connected!`)
  
});
