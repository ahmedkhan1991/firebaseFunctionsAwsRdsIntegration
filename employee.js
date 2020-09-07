const express = require('express');
const cors = require('cors');
const connection = require('./mysql');
const employee = express();

// Automatically allow cross-origin requests
employee.use(cors({ origin: true }));

employee.get('/', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","GET, POST");

	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","GET, POST");
  
	var sqlStr = "select * from Tutorial_Schema.Employee;";
	
	connection.query( sqlStr , (err, result, fields) => {
		if (err) throw err;
		var finalResult = [];
		for (var item of result) {
			finalResult.push({
				"ID": item.idEmployee,
				"Name": item.employeeName,
				"Salary": item.employeeSalary,
				"Age": item.employeeAge
			});
		}
		console.log(finalResult);
		res.json(finalResult);
	});
});

employee.post('/', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","GET, POST");

    var dataRecieved = req.body;
	console.log(dataRecieved);
	var employeeName = dataRecieved.employeeName;
	var employeeSalary = dataRecieved.employeeSalary;
	var employeeAge = dataRecieved.employeeAge;
	var sql = "INSERT INTO Tutorial_Schema.Employee( employeeName, employeeSalary, employeeAge ) " +
		" VALUES (' " + employeeName + " ', " + employeeSalary + ", " + employeeAge + " );";
			
	console.log("Employee SQL: " + sql );
	connection.query(sql, (err, result) => {
		if (err) res.json({ "Message": "Error", "Message Description": "SQL Error" });
		console.log("1 Employee record inserted");
		res.json({ "Message":"Record Inserted", "Values" : { "Name": employeeName, "Salary":employeeSalary, "Age":employeeAge }});
	});
});

module.exports = employee; 