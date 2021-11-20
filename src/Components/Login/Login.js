import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import {FormGroup, Label, Input, Form, FormText, Button} from 'reactstrap';
import axios from 'axios'
//import DatePicker from 'react-datepicker';
import "./Login.css";
import MyNavbar from './../MyNavbar/MyNavbar';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeFullname = this.onChangeFullname.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullname: 'Ash'
      
    }
  }

  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const login = {
      fullname: this.state.fullname
    }

    console.log(login);

    axios.post('http://localhost:5000/login/login', login)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
        <>
      <MyNavbar />
        <div className="register_background">
            
            <Form className="register_us" onSubmit={this.onSubmit}>
            <h3 className="text-center">FARMER REGISTRATION</h3>
               
            <FormGroup>
                <Label for="name">
                Full Name
                </Label>
                <Input
                    id="name"
                    name="fullname"
                    placeholder=""
                    type="text"
                    value={this.state.fullname}
                    onChange={this.onChangeFullname}
                />
            </FormGroup>    
            
        
        <input type="submit" value="Register" className="btn btn-primary" />

        </Form>
        </div>
    </>
    )
  }
}







// import React, { Component } from 'react';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
// import {FormGroup, Label, Input, Form, FormText, Button} from 'reactstrap'
// import '../ContactUs/ContactUs.css'
// import axios from 'axios';

// export default class logincheck extends Component{
//     constructor (props){
//         super(props);

//         this.onChangeEmail=this.onChangeEmail.bind(this);
//         this.onChangePassword=this.onChangePassword.bind(this);
//         this.onChangeRegistrationType=this.onChangeRegistrationType.bind(this);
//         this.onSubmit=this.onSubmit.bind(this);




//         this.state={
//             email:'',
//             password:'',
//             registrationType:"Farmer"

//         }
//     }

//     //loaded before page, react lifecyle method
//     //componentDidMount(){this.setState({user:['test'],username:'test'})}
//     onChangeEmail(e){
//         this.setState({
//             email: e.target.value
//         });
//     }
//     onChangePassword(e){
//         this.setState({
//             password: e.target.value
//         });
//     }
//     onChangeRegistrationType(e){
//         this.setState({
//             registrationType: e.target.value
//         });
//     }
//     onSubmit(e){
//         e.preventDefault();
//         const login={
//             email: this.state.email,
//             password: this.state.password,
//             registrationType: this.state.registrationType
//         }
//         console.log(login)
//         axios.post('https://localhost:5000/login/login', login)
//             .then(res=>console.log(res.data));
//         //axios.get('url')
//         //.then(response=>{if (response.data.length >0){
//         // this.setstate({response.data.map(user =>user.username,)})        }})

//         window.location='/home'
//     }

// render(){
//     return(
//         < >
//             <div className="contact_background">
//                 <Form className="login" onSubmit={this.onSubmit}>
//                 <h3 className="text-center">LOGIN</h3>
//                     <FormGroup>
//                     <Label for="exampleEmail">
//                     Email
//                     </Label>
//                     <Input
//                         id="exampleEmail"
//                         name="email"
//                         placeholder=""
//                         type="email"
//                         value={this.state.email}
//                         onChange={this.onChangeEmail}
//                     />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="examplePassword">
//                     Password
//                 </Label>
//                 <Input
//                     id="examplePassword"
//                     name="password"
//                     placeholder=""
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.onChangePassword}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="exampleSelect">
//                     Registration type   
//                 </Label>
//                 <Input
//                     id="exampleSelect"
//                     name="registrationType"
//                     type="select"
//                     value={this.state.registrationType}
//                     onChange={this.onChangeRegistrationType}
//                 >
//                     <option>
//                         Farmer
//                     </option>
//                     <option>
//                         Lessor
//                     </option>
//                 </Input>
//             </FormGroup>
  
//             <Button type="submit" value="login">
//                 Login
//             </Button>
//             </Form>
//             </div>
//         </>
        
//     );
// }
// }
