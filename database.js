const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://delaneybaker8:Ranger%231@cluster0.khq6dge.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('An error occurred connecting to MongoDB: ', err);
  } else {
    console.log('Connected to MongoDB');
  }
});

module.exports = client;