import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Form, Button, FormControl, FormGroup, Label, In } from 'react-bootstrap'
import * as firebase from 'firebase'
// import {} from Boots
// import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import firebase from 'firebase'

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.SendMSg = this.SendMSg.bind(this);

    this.state = {
        value: '',
        name: "",
        phonenumber: "",
        email: "",
        company: "",
        message: ""
    };
    var config = {
      apiKey: "AIzaSyAwWKfJzZCyxtKZ-y1Nww0OgrDsTB6qZhk",
      authDomain: "amirrajput-412d2.firebaseapp.com",
      databaseURL: "https://amirrajput-412d2.firebaseio.com",
      projectId: "amirrajput-412d2",
      storageBucket: "amirrajput-412d2.appspot.com",
      messagingSenderId: "539969251887"
    };
    firebase.initializeApp(config);
}
handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}
SendMSg() {
  // alert('abc');
    // let name1 = this.state.name;
    // let ph = this.state.phonenumber;
    // let email1 = this.state.email;
    // let company1 = this.state.company;
    // let msg1 = this.state.message;
    firebase.database().ref(`HighTea/HighTea 03`).set(
        {
            menuName:"HighTea 03",
            items:["Chicken Wonton","Chicken Nuggets","Patato Croquetee","Cheese Samosa","Tomato Ketchup","Tea/Coffee","Gulab Jaman Hot"],
            price: 550
        }).then(()=>{
          alert("Thanks , Will Respond you Soon");
        })
}
  render() {
    return (
      <div className="App">
        <h1>Add Data</h1>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            style={{ width: "80%", marginTop: "3%", height: "45px" }}
            type="text"
            name="name"
            // value={this.state.name}
            required
            placeholder="Name"
            onChange={this.handleChange}
          />
          <FormControl
            style={{ width: "80%", marginTop: "3%", height: "45px" }}
            type="text"
            name="phonenumber"
            // value={this.state.phonenumber}
            required
            placeholder="phone number"
            onChange={this.handleChange}
          />
          <FormControl
            style={{ width: "80%", marginTop: "3%", height: "45px" }}
            type="text"
            name="email"
            // value={this.state.email}
            required
            placeholder="email"
            onChange={this.handleChange}
          />
          <FormControl
            style={{ width: "80%", marginTop: "3%", height: "45px" }}
            type="text"
            name="company"
            // value={this.state.company}
            required
            placeholder="company"
            onChange={this.handleChange}
          />
          <FormControl
            componentClass="textarea"
            style={{ width: "80%", marginTop: "3%", height: "100px" }}
            type="text"
            name="message"
            // value={this.state.message}
            required
            placeholder="message"
            onChange={this.handleChange}
          />
          <Button onClick={this.SendMSg} style={{ marginTop: "3%", width: "130px", height: "40px", color: "#ffff", fontWeight: "bold", background: "#01a2ca" }}>Send Message</Button>
        </FormGroup>
      </div>
    );
  }
}

export default App;
