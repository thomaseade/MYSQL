const { pool } =  require('../database');








async function getAlumnoMedia(req, res) {
    const alumnoId = req.query.id;
  
    let sql = `SELECT AVG(mark) AS average_mark FROM marks WHERE id_student = ?`;
  
    try {
      const [result] = await pool.query(sql, [alumnoId]);
      res.send(result);
    } catch (error) {
      res.send(error);
    } 
  }




  async function getAsignaturasApuntadas(req, res) {
    const alumnoId = req.query.id;
  
    let sql = `SELECT subjects.title
               FROM students
               JOIN grupos ON students.id_group = grupos.id_group
               JOIN subject_teacher ON grupos.id_group = subject_teacher.group_id
               JOIN subjects ON subject_teacher.subject_id = subjects.subject_id
               WHERE students.student_id = ?`;
  
    try {
      const [result] = await pool.query(sql, [alumnoId]);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }
  



async function getAlumnosApuntadas(req, res) {
  let sql = `SELECT students.first_name, students.last_name, subjects.title
             FROM students
             JOIN grupos ON students.id_group = grupos.id_group
             JOIN subject_teacher ON grupos.id_group = subject_teacher.group_id
             JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`;

  try {
    const [result] = await pool.query(sql);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
}

async function getAsignaturasImpartidas(req, res) {
    const profesorId = req.query.id;
  
    let sql = `SELECT s.title
               FROM subjects s
               INNER JOIN subject_teacher st ON s.subject_id = st.subject_id
               WHERE st.teacher_id = ? `;
  
    try {
      const [result] = await pool.query(sql, [profesorId]);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }


async function getProfesoresYAsignaturasImpartidas(req, res) {
    let sql = `SELECT t.first_name, t.last_name, s.title
               FROM teachers t
               INNER JOIN subject_teacher st ON t.teacher_id = st.teacher_id
               INNER JOIN subjects s ON st.subject_id = s.subject_id`;
  
    try {
      const [result] = await pool.query(sql);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }





  module.exports = {
    getAlumnoMedia,
    getAsignaturasApuntadas,
    getAlumnosApuntadas,
    getAsignaturasImpartidas,
    getProfesoresYAsignaturasImpartidas,
  };   