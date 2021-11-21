const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, 'images');
//   },
//   filename: function(req, file, cb) {   
//       cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   if(allowedFileTypes.includes(file.mimetype)) {
//       cb(null, true);
//   } else {
//       cb(null, false);
//   }
// }
// let upload = multer({ storage, fileFilter });
// router.route('/add').get((req,res)=>{
//   res.send('Hello');
// });


router.route('/add').post((req, res) => {
  
  const newVehicle = new Vehicle({
    pname: req.body.pname,
    ptype: req.body.ptype,  
    brand: req.body.brand,
    modelNo:req.body.modelNo,
    purchaseDate: req.body.purchaseDate ,
    price:req.body.price ,
    vin:req.body.vin ,
   // images:req.file.filename 
    // reciept:req.body.reciept,
    // insurace:req.body.insurace,
    });
  console.log('ok');
  newVehicle.save()
    .then(() => console.log('Vehicle added!'))
    .catch(err => console.log(err));
    res.sendStatus(200);
});

module.exports = router;