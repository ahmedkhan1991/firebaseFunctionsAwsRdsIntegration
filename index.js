const functions = require('firebase-functions');
const employee = require('./employee');

exports.employee = functions.https.onRequest(employee);

exports.ping = functions.https.onRequest(async (req, res) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","GET, POST");

	res.json({"SUCCESS": "200"});
});

