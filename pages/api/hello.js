// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const fs = require("fs");
  const path = require("path");

  const imageDirectory = "public/resources"; // replace with your directory path
  const imageExtensions = [".png", ".jpg", ".jpeg", ".gif"]; // add any other extensions you want to include

  const imageFiles = fs.readdirSync(imageDirectory).filter((file) => {
    return imageExtensions.includes(path.extname(file).toLowerCase());
  });

  const imagePaths = imageFiles.map((file) => {
    return path.join(imageDirectory, file);
  });

  //console.log(imagePaths); // array of all image file paths

  res
    .status(200)
    .json({ images: imagePaths.map((p) => `/resources/${path.basename(p)}`) });
}
