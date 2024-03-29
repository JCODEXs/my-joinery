export default function handler(req, res) {
  //console.log(imagePaths); // array of all image file paths

  res.status(200).json({ images: "rcyts" });
}
