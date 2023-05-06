const express = require("express");
const cors = require("cors");
const controller = require("./controller");

const { getCompliment, getFortune, receipt, contact } = controller

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//ADD THE ABILITY TO DELETE A FORTUNE

app.get("/api/compliment", getCompliment);
app.get("/api/getfortune", getFortune)
app.delete("/api/receipt", receipt)
app.post("/api/contact", contact)


app.listen(4000, () => console.log("Server running on 4000"));
