var AWS = require("aws-sdk");
var fs = require('fs');


AWS.config.update({
  region: "sa-east-1",
  endpoint: "https://dynamodb.sa-east-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing Playgrounds into DynamoDB. Please wait.");



    var params = {
        TableName: "Playgrounds",
        Item: {
            "id":  1,
            "name": "name1",
            "description":  "description1",
            "place": { "address": "addressTest", "locality": "lacalityTeste", "state" : "stateTest", "country" : "countryTest" }
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie", "Erro", ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", "Sucesso");
       }

});
