const multer = require('multer');
const path = require('path');

module.exports = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file);
      cb(null, './src/controllers/public/images/users');
    },
    filename: function (req, file, cb) {
      cb(
        null,
        Date.now().toString() + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    const extensionImg = ['image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype);

    if (extensionImg) {
      return cb(null, true);
    } else {
      return cb(null, false);
    }
  }
});
