exports.handler = (event, context, callback) => {
    var AWS = require("aws-sdk");
    
    AWS.config.update({
		  region: "sa-east-1",
		  endpoint: "dynamodb.sa-east-1.amazonaws.com"
		});
    
    var docClient = new AWS.DynamoDB.DocumentClient();
		
		var table = "Playgrounds";
		
		var params = {
		    TableName:table,
		    Item: event.data.item
		};
		
		console.log("Adding a new item...");
		docClient.put(params, function(err, data) {
		    if (err) {
		        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
		        callback(null , err);
		    } else {
		        console.log("Added item:", JSON.stringify(data, null, 2));
		        callback(null , "success");
		    }
		}); 
    
};