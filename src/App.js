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
  }
  getPassword(event){
    this.setState({ password: event.target.value });
  }

  handleClick(event){
    event.preventDefault();
    this.setState({ alert_msg:""})
    this.setState({ img_react:"logo-react-spin" });
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
      console.log("No Successes")
    })
}

  render() {
    return (
      <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <div className="account-wall">
                <img className={this.state.img_react} src={logo} alt=""/>
                <form className="form-signin">
                <label>E-mail (admin@admin)</label>
                <input type="text" onChange={this.getEmail.bind(this)} className="form-control" placeholder="youremail@example" required autoFocus/>
                <label>Password (1234)</label>
                <input type="password" onChange={this.getPassword.bind(this)} className="form-control" placeholder="password..." required/>
                <label className="alert-msg">{this.state.alert_msg}</label>
                <button className="button-signin" onClick={this.handleClick.bind(this)}>SIGN IN</button>      
                <span className="pull-left forgot-password">Forgot password?</span>
                <span className="pull-right new-account">Create a new account</span>
                <span className="clearfix"></span>
                </form>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default App;
