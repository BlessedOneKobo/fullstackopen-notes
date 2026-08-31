require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);

mongoose.connect(url, { family: 4 });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
  date: Date,
});

const Note = mongoose.model("Note", noteSchema);

Note.find({ important: true })
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    mongoose.connection.close();
  });
