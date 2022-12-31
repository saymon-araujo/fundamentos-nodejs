const express = require("express");

const app = express();

app.use(express.json());

/*
  Route Params => Servem para identificar um recurso: editar/deletar/buscar
  Query Params => Servem para paginar / filtrar um recurso
  Body Params => São os objetos de inserçao/alteração (JSON)
*/

app.get("/courses", (req, res) => {
  const query = req.query;

  console.log(query);
  return res.json({ cursos: ["Curso 1", "Curso 2", "Curso 3"] });
});

app.post("/courses", (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({ cursos: ["Curso 1", "Curso 2", "Curso 3"] });
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);
  return res.json({ cursos: ["Curso 6", "Curso 2", "Curso 3"] });
});

app.patch("/courses/:id", (req, res) => {
  return res.json({ cursos: ["Curso 6", "Curso 2", "Curso 3"] });
});

app.delete("/courses/:id", (req, res) => {
  return res.json({ cursos: ["Curso 6", "Curso 2"] });
});

app.listen(3030);
