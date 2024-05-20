const connection = require('./server'); 

class DB {
    constructor(connection) {
        this.connection = connection; 
    }
    findAllProjects(){
        return this.connection.promise().query(
            "SELECT * FROM project ORDER BY sortorder"
        )
    }
}

module.exports = new DB(connection); 