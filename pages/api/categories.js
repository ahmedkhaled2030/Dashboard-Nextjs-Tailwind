import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function handler(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Category.find().populate("parent"));
  }

  if (method === "POST") {
    console.log(req.body,'req.body')
    const { name, parentCategory,properties } = req.body;

    const categoryDoc = await Category.create({ name, parent: parentCategory || undefined ,properties});

    res.json(categoryDoc);
  }

  if (method === "PUT") {
    console.log(req.body);
    const { _id, name, parentCategory ,properties} = req.body;
    const categoryDoc = await Category.updateOne(
      { _id },
      { name, parent: parentCategory || undefined,properties }
    );
    res.json(categoryDoc);
  }
  if (method === "DELETE") {
    console.log(req.query);
    const { _id } = req.query;
    await Category.deleteOne({ _id });
    res.json("OK");
  }
}