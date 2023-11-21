const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bistroDB = client.db("bistroDB");
const menuColl = bistroDB.collection("menuColl");

module.exports = { menuColl };
