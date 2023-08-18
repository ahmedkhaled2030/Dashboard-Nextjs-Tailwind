import multiparty from "multiparty";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const form = new multiparty.Form();

  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) throw err;
      resolve({ fields, files });
    });
  });

  const links = [];

  for (const file of files.file) {
    console.log("file:", file.originalFilename);
    const result = await cloudinary.uploader.upload(file.path);
    console.log(`Successfully uploaded ${file.originalFilename}`);
    console.log(`> Result: ${result.secure_url}`);
    links.push(result.secure_url);
  }

  res.json({ links });
}

export const config = {
  api: { bodyParser: false },
};
