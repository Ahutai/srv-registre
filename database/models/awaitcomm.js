const mongoose = require("mongoose");
const schema = mongoose.Schema;

const awaitcommSchema = schema({
  title: { type: Array, required: [true, "renseigner les champs"] },
  result: { type: Array, required: true },
  quantiter: { type: Array, required: true },
  format: { type: Array, required: true },
  exp: { type: String, required: true },
  // pay: { type: String, required: true },
  ile: { type: String, required: true },
  nom: { type: String, required: true },
  avion: { type: String },
  bateau: { type: String },
  date: { type: String, required: true },
  username: { type: String, required: true },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
  authors: { type: String, required: true },
  commandename: { type: String, required: true },
  total: { type: String, required: true },
  quant: { type: String, required: true },
  datered: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true },
  status: { type: String, required: true },
  // threes: { type: String, required: true },
  // one: { type: String },
  // three: { type: String },
});

const awaitcomm = mongoose.model("awaitcomm", awaitcommSchema);

module.exports = awaitcomm;
