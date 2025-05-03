const mongoose = require("mongoose");
const schema = mongoose.Schema;

const spostSchema = schema({
  name: { type: String, require: [true, "renseigner les champs"] },
  addfile: { type: String, require: [true, "renseigner les champs"] },
  size: { type: String, require: [true, "renseigner les champs"] },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
});

const spost = mongoose.model("spost", spostSchema);

module.exports = spost;
