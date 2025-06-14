const mongoose = require("mongoose");
const schema = mongoose.Schema;

const panierSchema = schema({
  title: { type: String, required: [true, "renseigner les champs"] },
  prix: { type: String, required: true },
  quantité: { type: String, required: true },
  format: { type: String, required: true },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
  authors: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: String, required: true },
  result: { type: String, required: true },
  total: { type: Number, required: true },
  quant: { type: Number, required: true },
  auth: { type: String, required: true },
});

const panier = mongoose.model("panier", panierSchema);

module.exports = panier;
