const muconn = require("../lib/mongoUtils");

const getJobs = () => {
  return muconn.conn().then((client) => {
    return client.db('isis3710jobsdb').collection('isis3710jobscollection').find({}).toArray();
  });
}
const addJob = async (job) => {
  const client = await muconn.conn();
  return await client.db("isis3710jobsdb").collection("isis3710jobscollection").insertOne(job);
};

const job = { getJobs, addJob };

module.exports = job;