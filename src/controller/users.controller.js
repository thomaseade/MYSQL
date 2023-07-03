const { pool } =  require('../database');



//obtener lista alumnos , id alumno


async function getUser(req, res) {
    let sql = 'SELECT * FROM students';
  
    if (req.query.id) {
      const studentId = req.query.id;
      sql = `SELECT * FROM students WHERE student_id = ${studentId}`;
    }
  
    try {
      const [result] = await pool.query(sql);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }






// añadir alumno a la lista


async function postUser(req, res) {
    const sql = `INSERT INTO students
                 (first_name, last_name, id_group, año_ingreso)
                  VALUES (?, ?, ?, ?);`

    const {first_name, last_name, id_group, año_ingreso} = req.body
    const params = [first_name, last_name, id_group, año_ingreso]

    try {
        const [result] = await pool.query(sql,params)
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};

// editar alumno

async function putUser(req, res) {
    const sql = `UPDATE students
                 SET first_name = COALESCE(?,first_name),
                 last_name = COALESCE(?,last_name),
                 id_group = COALESCE(?, id_group),
                 año_ingreso = COALESCE(?, año_ingreso) 
                 WHERE student_id = ?;`

const {student_id, first_name, last_name, id_group, año_ingreso } = req.body
const params = [
    first_name? first_name:     null,
    last_name? last_name:       null,
    id_group? id_group:         null,
    año_ingreso? año_ingreso:   null,
    student_id
] 
  
try {
    console.log(sql);
    const [result] = await pool.query(sql,params)
    res.send(result);
} catch (error) {
    res.send(error); 
}
}; 





//borrar alumno

async function deleteUser(req, res) {
    let sql ='DELETE FROM students WHERE student_id = ?;'

    const {student_id} = req.body
    const params = [student_id]


    try {
        console.log(sql);
        const [result] = await pool.query(sql,params)
        res.send(result);
    } catch (error) {
        res.send(error); 
    }
}
 

  
  module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
  };