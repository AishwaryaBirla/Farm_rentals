const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  pname: { type: String, required: true },
  ptype: { type: String, required: true  },
  brand: { type: String, required: false},
  modelNo:{type: String, required: true},
  purchaseDate:{type:Date, required: true},
  price:{type: Number, required: true},
  vin:{type: String, required: true, length: 12},
  //images:{type: String, required: true},
  // reciept:{type: String, required: true},
  // insurace:{type: String, required: true},
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports =Vehicle;