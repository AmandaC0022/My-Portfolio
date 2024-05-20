const db = require('./server/server'); 
const connection = require('./server'); 
// This is where you will need to write out all of your database logic (queries)

//Seed Database 
const seedAll = async () => {
    await connection.sync(); 
    console.log('Connected to Database'); 

    await seedProjects(); 
    console.log('Data was added to database'); 

    process.exit(0); 
}; 

seedAll(); 