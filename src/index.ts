
import express from "express";
import path from "node:path";

const app = express();

const clientBuildPath = path.join(__dirname, 'app');

app.use(express.static(clientBuildPath));
app.use("/favicon.svg", (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'favicon.svg'));
});
app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on port " + PORT));
