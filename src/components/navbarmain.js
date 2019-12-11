import React, { Component } from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
import LoginDropDown from './logindropdown';


import "../index.css"


import logo from "../assets/img/Service_Advisor_logo.png";
import { thisExpression } from "@babel/types";

class NavbarMain extends Component {
  state = {
    loggedUserFullName: "",
    userloggedin : false,
  };


 checkLoggedin = () => {
    
    if ( this.state.userloggedin || localStorage.getItem( 'token' ) )
    {
      this.setState(
        {
          loggedUserFullName: localStorage.getItem('userFullName'),
          userloggedin: true,
        }
      )
    }
  }


componentDidMount()
{
  this.checkLoggedin();
}

render() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  )
  
  );


  const DisplayWelcomeMessage = () =>  {
    // return (
    //     this.state.userloggedin ? {'Welcome '+this.state.loggedUserFullName + '<i className="fa fa-user"></i>'} :
    //     {this.state.loggedUserFullName}+' Not you!' <i className="fa fa-user"></i>}


    // );

  }
  const DisplayLoginLogout = () => {
    return(
             this.state.userloggedin? 
               <LoginDropDown isLoggedIn = {this.state.userloggedin} />
            :  <LoginDropDown isLoggedIn = {this.state.userloggedin} />
            
       )
  }


  return (
    <Router>
          <Navbar bg="light" expand="lg" sticky = "fixed">
           
            <Navbar.Brand href="/">
               <img src={logo} className="img-fluid" width="260" alt="Service Advisor" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="ml-auto">
                 
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/services">SERVICES</Nav.Link>
                  <Nav.Link href="/providersmain">PROVIDERS</Nav.Link>
                 
                   <NavDropdown  title={ 
                        <span> {this.state.userloggedin? 'Welcome '+this.state.loggedUserFullName : ''} <i className="fa fa-user"></i></span> } id="basic-nav-dropdown" >
                               <DisplayLoginLogout />
                  </NavDropdown> 
              </Nav>
              <Form inline className="d-inline-flex">
                    <FormControl  type="text" placeholder="Find the best provider" className="mr-sm-2" />
                    <Nav.Link className="btn-flat" >Search</Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
    </Router>
    );
  }
}

export default NavbarMain;