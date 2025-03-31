const mongoose = require("mongoose");
const schema = mongoose.Schema;

const posttSchema = schema({
  name: { type: String, require: [true, "renseigner les champs"] },
  adresseip: { type: String, require: [true, "renseigner les champs"] },
  redirect: { type: String, require: [true, "renseigner les champs"] },
  updown: { type: String, require: [true, "renseigner les champs"] },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
});

const postt = mongoose.model("postt", posttSchema);

module.exports = postt;
