const connection = require('./server'); 

class DB {
    constructor(connection) {
        this.connection = connection; 
    }
    findAllProjects(){
        return this.connection.promise().query(
            "SELECT * FROM project"
        )
    }
}

module.exports = new DB(connection); 