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
  
    let sql = `SELECT subjects.title
               FROM subjects
               INNER JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
               WHERE subject_teacher.teacher_id = ? `;
  
    try {
      const [result] = await pool.query(sql, [profesorId]);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }


async function getProfesoresYAsignaturasImpartidas(req, res) {
    let sql = `  SELECT teachers.first_name, teachers.last_name, subjects.title
                 FROM teachers
                 INNER JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
                 INNER JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`;
  
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