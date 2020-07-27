const Category = require("../models/Category");

// Get- select хийж бүх категориудыг  харна
exports.getCategories = (req, res, next) => {
  res.status(200).json({
    success: "true",
    data: "Бүх категориудыг энд өгнө өө ......",
    id: req.userId,
  });
};
//  id -аар нь  Select хийж харуулна аа.
exports.getCategory = (req, res, next) => {
  res.status(200).json({
    success: "true",
    data: `${req.params.ids} -тэй  Категор - ийн мэдээллийг өгнө өө `,
  });
};
// Post – insert хийнэ  шинээр мессэж нэмнэ.
exports.createCategory = async (req, res, next) => {
  //   console.log("data", req.body);
  try {
    const category = await Category.create(req.body);
    res.status(200).json({
      success: "true",
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      success: "false",
      data: err,
    });
  }
};
// Put  -  update  хийж  категороо   өөрчилнө өө
exports.updateCategory = (req, res, next) => {
  res.status(200).json({
    success: "true",
    data: `${req.params.ids} -тэй  Категор оо өөрчилнө өө Edit хийнэ`,
  });
};
//  Delete -  -id -аар нь  авч устгана аа.
exports.deleteCategory = (req, res, next) => {
  res.status(200).json({
    success: "true",
    data: `${req.params.ids} -тэй  Категор оо Устгана аа`,
  });
};
