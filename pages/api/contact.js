import fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    // Assuming you're using JSON data in your form submission
    const formData = req.body;

    // Serialize the form data to JSON
    const jsonData = JSON.stringify(formData);

    // Write the data to a file on the server
    fs.writeFile("formData.json", jsonData, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error saving form data." });
        return;
      }
      console.log("Form data saved successfully.");
      res
        .status(200)
        .json({ data: jsonData, message: "Form data saved successfully." });
    });
  } else {
    // Handle other HTTP methods if necessary
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
