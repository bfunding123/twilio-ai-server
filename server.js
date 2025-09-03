import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/incoming-call", (req, res) => {
res.type("text/xml");
res.send(`
<Response>
<Say voice="alice">Hello, you’ve reached your AI assistant. This is a test response from your server.</Say>
</Response>
`);
});

app.get("/", (req, res) => res.send("OK"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on " + PORT))
