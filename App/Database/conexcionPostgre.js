import pg from "pg";

//
export const pool = new pg.pool({
    host:'localhost',
    port:'5432',
    database:'desarrolloMarket',
    user:'postgres',
    password:'xavi-postgre'
})