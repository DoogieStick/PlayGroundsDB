exports.handler = (event, context, callback) => {
    var AWS = require("aws-sdk");
    
    AWS.config.update({
		  region: "sa-east-1",
		  endpoint: "dynamodb.sa-east-1.amazonaws.com"
		});
    
    var docClient = new AWS.DynamoDB.DocumentClient();
		
		var tableName = "Playgrounds";
	    docClient.scan({
	        TableName : tableName,
	        Limit : 500
	    }, function(err, data) {
	        if (err) {
	            context.done('error','reading dynamodb failed: '+err);
	        }
	        callback(null , data);
	    }); 
    
};