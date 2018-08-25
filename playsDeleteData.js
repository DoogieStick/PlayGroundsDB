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
		    Key:{
                "id": event.data.id
            }
		};
		
		console.log("Attempting a conditional delete...");
        docClient.delete(params, function(err, data) {
            if (err) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            }
        });
}        