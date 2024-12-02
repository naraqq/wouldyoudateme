// netlify/functions/submit-form.js
const fs = require("fs");
const path = require("path");

exports.handler = async function (event, context) {
  if (event.httpMethod === "POST") {
    // Get the form data from the request body
    const requestBody = JSON.parse(event.body);

    // Save data to a file (for demonstration purposes)
    const dataFilePath = path.join(__dirname, "data.json");
    let existingData = [];

    // Check if the file already exists, and read the existing data
    try {
      existingData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    } catch (error) {
      // If file doesn't exist, use an empty array
      console.log("No existing data found, starting fresh.");
    }

    // Add the new data to the existing data
    existingData.push(requestBody);

    // Save the updated data back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

    // Respond to the request
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Form submitted successfully!",
        data: existingData,
      }),
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }
};
