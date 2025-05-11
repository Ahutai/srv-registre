const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = schema({
  content: {
    type: String,
    required: [true, "champ requis"],
  },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
  username: { type: String, required: true },
});

const post = mongoose.model("post", postSchema);

module.exports = post;
