const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const url = `mongodb+srv://blessedonekobo_db_user:${process.env.DB_PASSWORD}@cluster0.tnl9dyg.mongodb.net/?appName=Cluster0`;

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
