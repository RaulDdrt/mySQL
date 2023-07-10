const { pool } = require("../database")


const getAlumnos = async (req, res) =>
{
    try
    {
        let sql;
        if(req.query.student_id == null)    
            sql = "SELECT * FROM student";
        else
            sql = "SELECT * FROM student WHERE student_id =" + req.query.student_id;
        let [result] = await pool.query(sql);
        res.send(result)
    }

    catch(err)
    {
        console.log(err)
    }

}

const postAlumnos = async (req, res) => { 

    const {student_id, first_name, last_name, groups_id, ingreso} = req.body
    const params = [student_id, first_name, last_name, groups_id, ingreso]
    let sql = "INSERT INTO student (student_id, first_name, last_name, groups_id, ingreso) VALUES (?, ?, ?, ?, ?)"
    
    try{
        console.log(req.body)
        
        // let sql = "INSERT INTO student (student_id,first_name,last_name,groups_id,ingreso)" + "VALUES ('" + req.body.student_id + "' , '" + req.body.first_name + "' , '" + req.body.last_name + "' , '" + req.body.ingreso + "')";
        console.log(sql);
        let [result] = await pool.query(sql, params);
        console.log(result);
    }
    catch(err){
        console.log(err)
    }
}

const editarAlumno = async (req,res) => {
    const{student_id,first_name,last_name,groups_id,ingreso} = req.body;
    const params = [ first_name? first_name: null, last_name? last_name: null, groups_id? groups_id: null, ingreso? ingreso:null,student_id];
    let sql = `UPDATE student SET first_name = COALESCE(?,first_name), last_name = COALESCE(?,last_name), groups_id = COALESCE(?,groups_id), ingreso = COALESCE(?,ingreso) WHERE student_id = ?;`;

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}

const eliminarAlumno = async (req, res) =>{
    
    let sql = "DELETE FROM student WHERE student_id = ?;"
    const {student_id} = req.body
    const params = [student_id]

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }
    

}


module.exports = { getAlumnos, postAlumnos, editarAlumno, eliminarAlumno }