import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/styles.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
      super(props)
          this.state={
            email:"",
            password:"",
            alert_msg:"",
            img_react:"logo-react"
    }
  }
  getEmail(event){
    this.setState({ email: event.target.value });
    // console.log(this.state.name)
  }
  getPassword(event){
    this.setState({ password: event.target.value });
    // console.log(this.state.name)
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({ alert_msg:""})
    this.setState({ img_react:"App-logo" });
    axios.post('http://localhost:3000/api/login',{
      "email" : this.state.email,
      "password" : this.state.password
    }).then(res => {
        console.log(res.data)
        alert("Login Successed")
        console.log(res.status)
        this.setState({ img_react:"logo-react" });
    }).catch(res =>{
      console.log(res.data)
      this.setState({ alert_msg:"E-mail or password is incorrect"})
      this.setState({ img_react:"logo-react" });
      console.log(res.status)
      console.log("errr")
    })
}

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <img src={logo} className={this.state.img_react}/>
      <p></p><p></p>
      <div className="div-login">
      <label>E-mail address</label>
      <br/>
      <input onChange={this.getEmail.bind(this)} placeholder="youremail@example.com" type="text"/>
      <br/>
      <label>Password</label>
      <br/>
      <input onChange={this.getPassword.bind(this)} placeholder="your password..." type="password"/>
      </div>
      <label className="alert-msg">{this.state.alert_msg}</label>
      <p></p>
      <button className="button-signin" type="submit">SIGN IN</button>
      <p></p>
      <div className="div-forgot-account">
      <span className="font-forgot">Forgot password?</span>
      <span className="font-new-account">Creacte a new account </span>
      </div><p></p><p></p>
      </form>
      </div>
    );
  }
}

export default App;
