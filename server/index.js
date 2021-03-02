const express = require("express");
const app = express();
const uuid = require("uuid");
const cors = require("cors");

const mails = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("<h1>Hello World!</h1>");
});

app.get("/mails", (req, res) => {
	res.send(mails);
});

app.post("/mails/", (req, res) => {
	const newMail = req.body;
	mails.push({ id: uuid.v4(), ...newMail });
	console.log(newMail);
	res.send("success");
});

app.get("/mails/:referenceNumber", (req, res) => {
	const filMail = mails.filter(
		(m) => m.referenceNumber === req.params.referenceNumber,
	);
	res.send(filMail);
});

app.listen(5001, () => {
	console.log("server started on port 5001");
});
