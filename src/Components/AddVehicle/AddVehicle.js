/** @format */

import React, { Component } from "react";
import MyNavbar from "./../MyNavbar/MyNavbar";
import { Form, FormGroup, Input, Label, Col, FormText } from "reactstrap";
import axios from "axios";
// import DatePicker from 'react-datepicker';
export default class AddVehicle extends Component {
  constructor(props) {
    super(props);

    this.onChangePname = this.onChangePname.bind(this);
    this.onChangePtype = this.onChangePtype.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeModelNo = this.onChangeModelNo.bind(this);
    this.onChangePurchaseDate = this.onChangePurchaseDate.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeVin = this.onChangeVin.bind(this);
    // this.onChangeImages = this.onChangeImages.bind(this);
    // this.onChangeReciept=this.onChangeReciept.bind(this);
    // this.onChangeInsurace=this.onChangeInsurance.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pname: "",
      ptype: "",
      brand: "",
      modelNo: "",
      purchaseDate: "",
      price: "",
      vin: "",
    //   images: "",
      //   reciept: '',
      //   insurance:'',

      msg: <span className="small"></span>,
    }
  }

  //   componentDidMount() {
  //     axios.get('http://localhost:5000/farmerRegistration/')
  //       .then(response => {
  //         if (response.data.length > 0) {
  //           this.setState({
  //             users: response.data.map(user => user.username),
  //             username: response.data[0].username
  //           })
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //       })
  //   }

  onChangePname(e) {
    this.setState({
      pname: e.target.value,
    });
  }
  onChangePtype(e) {
    this.setState({
      ptype: e.target.value,
    });
  }
  onChangeBrand(e) {
    this.setState({
      brand: e.target.value,
    });
  }
  onChangeModelNo(e) {
    this.setState({
      modelNo: e.target.value,
    });
  }
  onChangePurchaseDate(e) {
    this.setState({
      purchaseDate: e.target.value,
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  onChangeVin(e) {
    this.setState({
      vin: e.target.value,
    });
  }
//   onChangeImages(e) {
//     this.setState({
//       images: e.target.files[0],
//     });
//   }

  onSubmit(e) {
    e.preventDefault();
    const vehicle = {
      pname: this.state.pname,
      ptype: this.state.ptype,
      brand: this.state.brand,
      modelNo: this.state.modelNo,
      purchaseDate: this.state.purchaseDate,
      price: this.state.price,
      vin: this.state.vin
    //   images: this.state.images,
    //   reciept: this.state.reciept,
    //   insurance: this.state.insurance,
    }
    axios.post('http//localhost:5000/AddVehicle/add', vehicle)
    .then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <>
        <MyNavbar />
        <div className="register_background">
          <Form
            className="register_us"
            onSubmit={this.onSubmit}
            // encType="multipart/form-data"
          >
            <h3 className="text-center">Add Equipment</h3>

            <FormGroup>
              <Label for="name">Product Name</Label>
              <Input
                id="productname"
                name="pname"
                placeholder="Product Name"
                type="text"
                onChange={this.onChangePname}
              />
            </FormGroup>
            <FormGroup>
              <Label for="type">Product Type</Label>
              <Input
                id="producttype"
                name="ptype"
                placeholder="Product Type"
                type="text"
                onChange={this.onChangePtype}
              />
            </FormGroup>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input
                id="brand"
                name="brand"
                placeholder="Brand"
                type="text"
                onChange={this.onChangeBrand}
              />
            </FormGroup>
            <FormGroup>
              <Label for="model">Model Number</Label>
              <Input
                id="modelnumber"
                name="modelNo"
                placeholder="Model No."
                type="text"
                onChange={this.onChangeModelNo}
              />
            </FormGroup>
            <FormGroup>
              <Label for="purchasedate">Purchase Date</Label>
              <Input
                id="purchasedate"
                name="purchaseDate"
                placeholder="Purchase Date"
                type="date"
                onChange={this.onChangePurchaseDate}
              />
            </FormGroup>
            <FormGroup>
              <Label for="purchaseprice">Purchase Price</Label>
              <Input
                id="purchaseprice"
                name="price"
                placeholder=""
                type="number"
                onChange={this.onChangePrice}
              />
            </FormGroup>
            <FormGroup>
              <Label for="vin_no">VIN Number</Label>
              <Input
                id="vin_no"
                name="vin"
                placeholder=""
                type="Number"
                onChange={this.onChangeVin}
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="images" sm={2}>
                Images
              </Label>
              <Col sm={10}>
                <Input
                  type="file"
                  name="images"
                  id="images"
                  accept=".png, .jpg, .jpeg"
                  onChange={this.onChangeImages}
                /> */}
                {/* <Input type="file" name="images" id="images" />
                            <Input type="file" name="images" id="images" />
                            <FormText color="muted">
                            Upload atleast 3 images of the equipment in .jpg format
                            </FormText> 
              </Col>
            </FormGroup>
             <FormGroup>
                    <Label for="billpdf" sm={2}>Purchase Reciept</Label>
                        <Col sm={10}>
                            <Input type="file" name="reciept" id="billpdf" />
                            <FormText color="muted">
                             .pdf format only
                            </FormText>
                        </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="pdf" sm={2}>Insurance Papers</Label>
                        <Col sm={10}>
                            <Input type="file" name="insurance" id="pdf" />
                            <FormText color="muted">
                             .pdf format only
                            </FormText>
                        </Col>
                </FormGroup> */}

            <input
              type="submit"
              value="Add"
              className="btn btn-primary"
              // onSubmit={this.onSubmit}
            />
          </Form>
        </div>
      </>
    )
  }
}
