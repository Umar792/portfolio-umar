const BlogModel = require("../Model/BlogModel");
const cloudinary = require("cloudinary");

module.exports = {
  createBlog: async (req, res) => {
    try {
      const { title, description, category } = req.body;
      if (!title || !description || !category) {
        return res.status(401).json({
          status: false,
          message: "Please enter title and description and category",
        });
      }
      const mycloud = await cloudinary.v2.uploader.upload(req.body.BlogImage, {
        folder: "sample",
        width: 150,
        crop: "scale",
      });
      await BlogModel.create({
        title,
        description,
        category,
        BlogImage: {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        },
        owner: req.user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
