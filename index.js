const AWS = require("aws-sdk");

// Set the region
AWS.config.update({ region: "us-east-1" });

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

// Set the table name
const tableName = "visitors";

// Set the attribute name for the counter
const attributeName = "visit_count";

function saveCounter(pkValue, skValue) {
  // Get the value of the counter element
  const counterValue = document.getElementById("read-more").innerHTML;

  // Create the update expression
  const updateExpression = "SET " + attributeName + " = :val";

  // Create the expression attribute values
  const expressionAttributeValues = {
    ":val": { N: counterValue },
  };

  // Update the item in DynamoDB
  const params = {
    TableName: tableName,
    Key: {
      pk: { S: pkValue },
      sk: { S: skValue },
    },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: "UPDATED_NEW",
  };

  ddb.updateItem(params, function (err, data) {
    if (err) {
      console.log("Error updating item in DynamoDB", err);
    } else {
      console.log("Successfully updated item in DynamoDB", data);
    }
  });
}
