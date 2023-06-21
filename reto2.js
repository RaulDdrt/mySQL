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
        
        // let sql = "SELECT AVG(mark) AS media FROM academia.marks WHERE id_subjects=1;"
        // let [result] = await connection.execute(sql);
        // console.log(result)

        // let sql2 = "SELECT COUNT(*) AS total FROM academia.student"
        // let [result] = await connection.execute(sql2)
        // console.log(result)

        // let sql3 = "SELECT * FROM academia.groups"
        // let [result] = await connection.execute(sql3)
        // console.log(result)

        // let sql4 = "DELETE FROM academia.marks WHERE mark > 5 AND YEAR(date) = 2022;"
        // let [result] = await connection.execute(sql4)
        // console.log(result)

        // let sql5 = "SELECT * FROM academia.student WHERE ingreso = 2023;"
        // let [result] = await connection.execute(sql5)
        // console.log(result)

        // let sql6 = "SELECT subject_id, COUNT(teacher_id) FROM academia.subject_teacher GROUP BY subject_id;"
        // let [result] = await connection.execute(sql6)
        // console.log(result)

        // let sql7 = "SELECT student_id, mark FROM academia.marks WHERE(student_id BETWEEN 1 AND 20) OR mark > 8 AND YEAR(date) = 2022"
        // let [result] = await connection.execute(sql7)
        // console.log(result)

        // let sql8 = "SELECT AVG(mark) AS media FROM academia.marks WHERE date BETWEEN '2022-05-01' AND '2023-05-01' GROUP BY id_subjects"
        // let [result] = await connection.execute(sql8)
        // console.log(result)

        let sql9 = "SELECT AVG(mark) FROM academia.marks WHERE date BETWEEN '2022-05-01' AND '2023-05-01' GROUP BY student_id"
        let [result] = await connection.execute(sql9)
        console.log(result)

    }

        catch(err){
            console.log(err)
            await connection.end();
    
        }
    
    }
    
main()