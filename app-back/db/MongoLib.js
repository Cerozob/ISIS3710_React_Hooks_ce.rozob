const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.MONGO_URI;

const dbName = 'isis3710jobsdb';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equals(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        callback(db, client);
    });
}

const findDocuments = function (db, callback) {
    const collection = db.collection('isis3710jobscollection');
    collection.find({}).toArray(function (err, docs) {
        assert.equals(err, null);
        callback(docs);
    });
}

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;