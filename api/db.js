import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react-node-fullstack-web-blog"
})
