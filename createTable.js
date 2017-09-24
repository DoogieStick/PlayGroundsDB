var AWS = require("aws-sdk");

AWS.config.update({
  region: "sa-east-1",
  endpoint: "https://dynamodb.sa-east-1.amazonaws.com"
});

var dynamodb = new AWS.DynamoDB();


module.exports = {

		create :function (){
		
			var params = {
			    TableName : "Playgrounds",
			    KeySchema: [       
			        { AttributeName: "id", KeyType: "HASH"},  //Partition key
			        { AttributeName: "name", KeyType: "RANGE" },  //Sort key
			    ],
			    AttributeDefinitions: [       
			        { AttributeName: "id", AttributeType: "N" },
			        { AttributeName: "name", AttributeType: "S" }
			    ],
			    ProvisionedThroughput: {       
			        ReadCapacityUnits: 100, 
			        WriteCapacityUnits: 100
			    }
			};
		
			dynamodb.createTable(params, function(err, data) {
			    if (err) {
			        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
			    } else {
			        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
			    }
			});
		}
		
}		
