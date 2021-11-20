const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');

router.route('/add').post((req, res) => {
  
  const newVehicle = new Vehicle({
    pname: req.body.pname,
    ptype: req.body.ptype,  
    brand: req.body.brand,
    modelNo:req.body.modelNo,
    purchaseDate: req.body.purchaseDate ,
    price:req.body.price ,
    vin:req.body.vin ,
    images:req.body.images ,
    reciept:req.body.reciept,
    insurace:req.body.insurace,
    });
  
  newVehicle.save()
    .then(() => console.log('Vehicle added!'))
    .catch(err => console.log(err));
});

module.exports = router;