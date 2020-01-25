const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://192.168.99.100:27017';

let db = null;

const initializeDb = async () => {
  const client = await MongoClient.connect(url, {
    auth: { user: 'rebi', password: 'duma' },
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('pictureGal');
};

const getPictures = () => {
  return db
    .collection('pictures')
    .find()
    .toArray();
};

initializeDb();

module.exports = {
  getPictures,
};
