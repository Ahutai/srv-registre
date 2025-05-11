const mongoose = require("mongoose");
const schema = mongoose.Schema;

const folderrSchema = schema({
  name: { type: String, required: [true, "renseigner les champs"] },
  adresseip: { type: String },
  redirect: { type: String },
  updown: { type: String },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
  authors: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: String, required: true },
});

const folderniviii = mongoose.model("folderniviii", folderrSchema);

module.exports = folderniviii;
