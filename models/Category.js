const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Категорын нэрийг заавал оруулах ёстой"],
    unique: true,
    trim: true,
    maxlength: [5, "Категорын нэрны урт дээд тал нь 50 тэмдэгт байх ёстой"],
  },
  description: {
    type: String,
    required: [true, "Категорын Тайлбарыг заавал оруулна уу"],
    maxlength: [
      50,
      "Категорын Тайлбарын  урт дээд тал нь 100 тэмдэгт байх ёстой",
    ],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  averageRating: {
    type: Number,
    min: [1, " Рэйтинг хамгийн багадаа 1 байх ёстой"],
    min: [10, " Рэйтинг хамгийн ихдээ 10 байх ёстой"],
  },
  averagePrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
