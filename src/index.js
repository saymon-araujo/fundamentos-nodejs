const express = require("express");

const app = express();

app.get("/courses", (req, res) => {
  return res.json({ cursos: ["Curso 1", "Curso 2", "Curso 3"] });
});

app.post("/courses", (req, res) => {
  return res.json({ cursos: ["Curso 1", "Curso 2", "Curso 3"] });
});

app.put("/courses/:id", (req, res) => {
  return res.json({ cursos: ["Curso 6", "Curso 2", "Curso 3"] });
});

app.patch("/courses/:id", (req, res) => {
  return res.json({ cursos: ["Curso 6", "Curso 2", "Curso 3"] });
});

app.delete("/courses/:id", (req, res) => {
  return res.json({ cursos: ["Curso 6", "Curso 2"] });
});

app.listen(3030);
