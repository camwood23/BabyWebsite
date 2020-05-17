import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient("babyregistry-wjeuo");
const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("RegistryDB");

client.auth.loginWithCredential(new AnonymousCredential());

let collection = db.collection("CollectedItems");

const mongoService = {
  createItem(name, link, section) {
    return collection.insertOne({
      name,
      collected: false,
      link,
      section: section,
    });
  },
  findItems() {
    return collection.find().toArray();
  },
  updateItem(name) {
    return collection.updateOne(
      { name },
      {
        $set: {
          collected: true,
        },
      }
    );
  },
};

export default mongoService;
