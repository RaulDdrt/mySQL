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

        // TABLA DIRECCION

        // let nuevaColumna = "ALTER TABLE academia.direccion ADD COLUMN piso VARCHAR(45) NULL AFTER numero;";
        // let [result] = await connection.execute(nuevaColumna);
        // console.log("Columna lista");
        
        // let borrarColumna = "ALTER TABLE academia.direccion DROP COLUMN piso;";
        // let [result] = await connection.execute(borrarColumna);
        // console.log("Columna borrada");

        // let borrarTabla = "DROP TABLE direccion;";
        // let [result] = await connection.execute(borrarTabla);
        // console.log("Tabla borrada");
        // console.log(result)

        // SUSPENDER A TODOS 

        // let supenderaTots = "UPDATE academia.marks SET mark = '0'";
        // let [result] = await connection.execute(supenderaTots);
        // console.log("Todos suspendidos");
        // console.log(result)

        // let logEstudiantes = "SELECT first_name,last_name FROM academia.student;";
        // let [result] = await connection.execute(logEstudiantes);
        // console.log("Cuanta gente");
        // console.log(result)

        // let logProfesores = "SELECT * FROM academia.teachers;";
        // let [result] = await connection.execute(logProfesores);
        // console.log("Cuanto profesor");
        // console.log(result)

        // RETO 2

        // let borraNotas = "DELETE FROM academia.marks WHERE YEAR(DATE) < 2013;"
        // let [result] = await connection.execute(borraNotas);
        // console.log(result)

        let actualizaNotas = "UPDATE academia.marks SET mark='5' WHERE mark < '5';"
        let [result] = await connection.execute(actualizaNotas);
        console.log(result)



    }

    catch(err){
        console.log(err)
        await connection.end();

    }

}

main()