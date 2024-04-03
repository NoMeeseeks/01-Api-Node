import { pool } from "./Database/conexcionPostgre.js";

const getClientes = async () => {
  try {
    const result = await pool.query("select * from cliente c ;");
    console.log(result.rows);
  } catch (err) {
    console.error(err);
  }
};

getClientes();
