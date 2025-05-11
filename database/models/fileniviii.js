const mongoose = require("mongoose");
const schema = mongoose.Schema;

const fileniviiiSchema = schema({
  name: { type: String, required: [true, "renseigner le champ name"] },
  addfiless: { type: String, required: [true, "choisir un fichier"] },
  size: { type: String, required: [true, "choisir un fichier"] },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
  date: { type: String, required: true },
  type: { type: String, required: true },
  sort: { type: String, required: true },
  niv: { type: String, required: true },
});

const fileniviii = mongoose.model("fileniviii", fileniviiiSchema);

module.exports = fileniviii;
