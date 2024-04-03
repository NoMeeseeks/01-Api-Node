import { pool } from "./Database/conexcionPostgre.js";

export const getClientes = async () => {
  try {
    const result = await pool.query("select * from cliente c ;");
    console.log(result.rows);
  } catch (err) {
    console.error(err);
  }
};

const insertClientes = async () => {
  try {
    const result = await pool.query("");
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

getClientes();
