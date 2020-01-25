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

const addPictures = async () => {
  try {
    const { result } = await db.collection('pictures').insertMany([
      {
        urlImg:
          'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      },
      {
        urlImg:
          'https://images.unsplash.com/photo-1554825123-84862ad084af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80',
      },
      {
        urlImg:
          'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80',
      },
    ]);
    return result;
  } catch (e) {
    console.error(e);
  }
};

const cleanDb = async () => {
  await db.dropDatabase();
};

const initDb = async () => {
  await initializeDb();
  await cleanDb();
  await addPictures();
};

initDb();
