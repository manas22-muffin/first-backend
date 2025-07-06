import multer from "multer";



// suppose koi url se kuch request kiya toh usko resposne bhejne se phle hum check krenge ki wo valid user hai(user logged in hai ki nai) ki nhi like credentials dekhenge ,toh uss beeche ki checking ko hi middleware bolte hain
// middleware ka use hum request ko process karne se pehle kuch aur karne ke liye karte hain(next use krke)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})