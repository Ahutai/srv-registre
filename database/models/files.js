const mongoose = require("mongoose");
const schema = mongoose.Schema;

const posttSchema = schema({
  name: { type: String, required: [true, "renseigner les champs"] },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
  authors: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: String, required: true },
  niv: { type: String, required: true },
  access: { type: String, required: true },
});

const postt = mongoose.model("postt", posttSchema);

module.exports = postt;
