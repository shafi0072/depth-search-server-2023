const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const contactRoute = require("./route/contactRoute");
const postRoute = require("./route/postRoute");
const PORT = 5050;
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use("/contact", contactRoute);
app.use("/replay", postRoute);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db connection error:", err));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
