const mysql = require("mysql2/promise")
async function main(){
    try{
        let connection = await mysql.createConnection(
            {
                host:"localhost" , 
                user: "root",
                password: "38001644Hh",
                database: "academia"

            }
        );
        
        console.log("Todo bien");

        // let sql ="SELECT student.first_name, student.last_name, subjects.title FROM ((student INNER JOIN subject_teacher ON student.groups_id = subject_teacher.group_id) INNER JOIN subjects ON subject_teacher.subject_id = subjects.subjects_id) ORDER BY first_name DESC;"
        // let [result] = await connection.execute(sql);
        // console.log(result);

        // let sql2 ="SELECT t.first_name, t.last_name, su.title FROM ((teachers as t INNER JOIN subject_teacher as s ON t.teacher_id = s.teacher_id) INNER JOIN subjects as su  ON s.subject_id = su.subjects_id)"
        // let [result] = await connection.execute(sql2);
        // console.log(result);

        let sql3 = "SELECT s.title, t.first_name, t.last_name, COUNT(*) AS total FROM subjects AS s JOIN subject_teacher AS st ON s.subjects_id = st.subject_id JOIN teachers AS t ON st.teacher_id = t.teacher_id JOIN `groups` ON st.group_id = `groups`.id_groups JOIN student AS stu ON `groups`.id_groups = stu.groups_id GROUP BY s.title, t.first_name, t.last_name;";
        let [result] = await connection.execute(sql3);
        console.log(result);
        
    }

    catch(err){
        console.log(err)
        await connection.end();

    }

}

main()