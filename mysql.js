const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'Add Your Value',
    user: 'Add Your Value',
    password: 'Add Your Value',
    database: 'Tutorial_Schema'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
  
module.exports = connection;  