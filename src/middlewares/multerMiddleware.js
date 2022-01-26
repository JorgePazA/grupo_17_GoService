const path = require('path')
const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let folder = "public/userimg"
      cb(null, folder)
    },
    
    filename: (req, file, cb) => {
      let imageName = file.fieldname + "_" + Date.now() + path.extname(file.originalname) 
       cb(null, imageName)
    }
  })
  
let upload = multer({storage: storage})

module.exports = upload