const api_url =
  "https://<API_GATEWAY_ID>.execute-api.<REGION>.amazonaws.com/<STAGE>/<RESOURCE_NAME>";
fetch(api_url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Update the page with the visitor count from DynamoDB
    document.getElementById("read-more").innerHTML = data;
  })
  .catch(function (error) {
    // Handle any errors that occur during the request
    console.log(error);
  });
