const { pool } =  require('../database');

async function getUser(req, res) { 
    let sql ='SELECT * FROM students;'

    if(req.query.usuario_id){
        sql= `SELECT * FROM students WHERE student_id = ${req.query.student_id};`
    }

    try {
        const [result] = await pool.query(sql)
        res.send(result);

    } catch (error) {
        res.send(error);
    }
};


async function getUserParams(req, res){
    let sql=`SELECT * FROM students WHERE student_id = ${req.params.student_id};`

    try{
        const [result] = await pool.query(sql)
        res.send(result);
    } catch (error) { 
        res.send(error);
    }
};

  

  
  module.exports = {
    getUser,
    getUserParams,
  };