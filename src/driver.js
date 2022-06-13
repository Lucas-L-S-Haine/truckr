const { MongoClient: mongoClient } = require('mongodb');

// const db = {};

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 27017;
const url = `mongodb://${host}:${port}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = (dbName) => (
  mongoClient
    .connect(url, options)
    .then((connection) => connection.db(dbName))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    })
);

module.exports = connect;
