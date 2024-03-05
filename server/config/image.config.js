const path = require('path');

  const multer = require('multer');
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      return cb(null, '../client/public/images')
    },
  
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });
  const uploadMiddleware = (req, res, next) => {
    // Use multer upload instance
    upload.array('files', 5)(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
  
      // Retrieve uploaded files
      const files = req.files;
      const errors = [];
  
      // Validate file types and sizes
      files.forEach((file) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5MB
  
        if (!allowedTypes.includes(file.mimetype)) {
          errors.push(`Invalid file type: ${file.originalname}`);
        }
  
        if (file.size > maxSize) {
          errors.push(`File too large: ${file.originalname}`);
        }
      });
  
      // Handle validation errors
      if (errors.length > 0) {
        // Remove uploaded files
        files.forEach((file) => {
          fs.unlinkSync(file.path);
        });
  
        return res.status(400).json({ errors });
      }
  
      // Attach files to the request object
      req.files = files;
  
      // Proceed to the next middleware or route handler
      next();
    });
  };
  
  module.exports =upload