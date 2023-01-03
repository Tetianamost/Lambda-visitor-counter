import boto3

def handler(event, context):
    # Connect to DynamoDB
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("my-resume-website-table")

    # Get the current visit count
    response = table.get_item(Key={"pk": "1", "sk": "1"})
    item = response.get("Item", {})
    visit_count = item.get("visit_count", 0)

    # Increment the visit count
    visit_count += 1

    # Update the visit count in DynamoDB
    table.put_item(Item={"pk": "1", "sk": "1", "visit_count": visit_count})

   # Return the updated visit count
    # Update the visit count in DynamoDB
    table.put_item(Item={"pk": "1", "sk": "1", "visit_count": visit_count})
  
   # Return the updated visit count
    return {"headers": {"Access-Control-Allow-Origin": "*"},"statusCode": 200, "body": str(visit_count)} or {"statusCode": 404, "body": "Item not found"}
