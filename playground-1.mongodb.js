use("nodeTest");

db.postts.find(
  { _id: ObjectId("67e8a6a149b3156c3ae92f68") },
  {
    author: 1,
  },
  {
    returnOriginal: false,
  }
);
