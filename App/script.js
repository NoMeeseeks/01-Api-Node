import { pool } from "./Database/conexcionPostgre";

const getClientes=async()=>{
    try{
       const result = await pool.query("select * from cliente c ;");
       console.log(result)
    }catch(err){
        console.error(err)
    }
}

getClientes();