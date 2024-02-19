const multer = require('multer');
const path = require('path') ;
const PostModel = require('../model/postModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

exports.addPost = upload.single('photo'), async (req, res) => {
  try {
    const { quote, device, commentCount} = req.body;
    const photoPath = req.file.path;
    const userID = req.body.userID ;
    const post = await PostModel.create({
      quote,
      photo: photoPath,
      device,
      commentCount,
      userID 
    });
    await post.save() ;
    res.status(201).json({ message: 'Post added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
