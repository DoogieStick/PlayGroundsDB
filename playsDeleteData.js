var AWS = require("aws-sdk");

AWS.config.update({
  region: "sa-east-1",
  endpoint: "https://dynamodb.sa-east-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "Movies";

var year = 2017;
var title = "Titulo1";

// Update the item, unconditionally,

var params = {
    TableName:table,
    Key:{
        "year": year,
        "title": title
    },
    UpdateExpression: "set dados.codigo = :r, dados.nome = :a, dados.nome2 = :p, info = :p",
    ExpressionAttributeValues:{
        ":r":"test",
        ":p":"Other Info 1",
        ":a":"Other Info 2"
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});
