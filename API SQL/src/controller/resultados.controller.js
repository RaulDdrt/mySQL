const { pool } = require("../database")

const getMedia = async(req, res) =>{
    const params = [req.query.student_id]
    let sql;

    if (req.query.student_id != undefined){
        sql= "SELECT AVG(mark) FROM marks WHERE student_id = ?"
    }else{
        sql="SELECT AVG(mark) FROM marks GROUP BY student_id"
    }
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}

const getAsignaturas = async(req, res) =>{
    const params = [req.query.student_id]
    let sql;

    if (req.query.student_id != undefined){
        sql= "SELECT first_name, last_name, title FROM student INNER JOIN subjects ON (student.groups_id = subjects.subjects_id) WHERE student_id = ?"
    }else{
        sql="SELECT first_name, last_name, title FROM student INNER JOIN subjects ON (student.groups_id = subjects.subjects_id)"
    }
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}

const getProfes = async(req, res) =>{
    const params = [req.query.teacher_id]
    let sql;

    if (req.query.teacher_id != undefined){
        sql= "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id JOIN subjects ON subject_teacher.subject_id = subjects.subjects_id WHERE teachers.teacher_id = ? GROUP BY first_name, last_name, title"
    }else{
        sql= "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id JOIN subjects ON subject_teacher.subject_id = subjects.subjects_id GROUP BY first_name, last_name, title"
    }
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}



module.exports = { getMedia, getAsignaturas, getProfes }