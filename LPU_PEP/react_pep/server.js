
import express from "express";

import superhero1 from "./src/superheroes/superhero1.js";
import superhero2 from "./src/superheroes/superhero2.js";
import superhero3 from "./src/superheroes/superhero3.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get("/superheroes", (req, res) => {
    const superheroes = [superhero1, superhero2, superhero3];
    res.json({
        success: true,
        count: superheroes.length,
        data: superheroes
    });
});

app.get("/superheroes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const superheroes = [superhero1, superhero2, superhero3];

    if (id < 1 || id > 3 || isNaN(id)) {
        return res.status(404).json({ success: false, message: "Superhero not found" });
    }

    res.json({
        success: true,
        data: superheroes[id - 1]
    });
});

app.get("/", (req, res) => {
    res.send("<h1>Superheroes API</h1><p>Visit <a href='/superheroes'>/superheroes</a> to see all heroes.</p>");
});

app.listen(PORT, () => {
    console.log(`Superheroes Express server running at http://localhost:${PORT}`);
});
