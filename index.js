const express = require("express");
const app = express();
const PORT = 9090;

app.use(express.json());

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
app.get("/clientes", (request, response) => {
  response.status(200).send({
    id: 1,
    usuario: "Xavier",
  });
});
