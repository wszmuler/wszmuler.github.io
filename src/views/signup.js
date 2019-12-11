import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBForm,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/signup.css";


import apiConfig from '../utils';


import FormError from '../components/formerror';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
      displayName: '',
      email: '',
      passOne: '',
      passTwo: '',
      errorMessage: null,
      rest_route : '/simple-jwt-login/v1/register',
      userRegistered : false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  addNewUser (registrationInfo){

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = apiConfig.apiSimpleJWT+
          '/?rest_route='+ `${registrationInfo.rest_route}`+
          '&email='+ registrationInfo.email+
          '&password='+registrationInfo.password+
          '&gbAuthKey='+registrationInfo.gbAuthKey;

    const fetchUsers = fetch(`${proxyUrl+url}`,
        {
            method : 'post',
             headers : { 
               'Content-Type': 'application/json',
               'Accept' : 'application/json',
            //     "Authorization" : "Bearer k|SIG^tf,*S/b9yrjJ`a#)T$|^liNbyW.j6mAQVUJ>@`oBk;#|miwC%4OT~X7AB",
            //      "Access-Control-Allow-Origin" : "*"
              },
            // body : JSON.stringify ({
            //     'rest_route' : `${registrationInfo.rest_route}`,
            //     //'token' : 'k|SIG^tf,*S/b9yrjJ`a#)T$|^liNbyW.j6mAQVUJ>@`oBk;#|miwC%4OT~X7AB',
            //     // 'username' : this.state.displayname,
            //     'email' : registrationInfo.email,
            //     'password': registrationInfo.password,
            //     'gbAuthKey' : registrationInfo.gbAuthKey,
            //  })

                // JSON.stringify(registrationInfo),
        }
        )
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Examine the text in the response
          return response.json();
          console.log(response)
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});

				Promise.all([fetchUsers])
				.then(data => {
          this.setState({userRegistered : true})
          return data[0];
          
				})
				.catch(function(err) {
					console.log("Error with resolving promises.", err);
				});
	}

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    handleChange = (e) => {
      const itemName = e.target.name;
      const itemValue = e.target.value;
  
      this.setState({ [itemName]: itemValue }, () => {
        if (this.state.passOne !== this.state.passTwo) {
          this.setState({ errorMessage: 'Passwords no not match' });
        } else {
          this.setState({ errorMessage: null });
        }
      });
    }


    handleSubmit = (e) => {
      var registrationInfo = {
        rest_route: '/simple-jwt-login/v1/register',
        //username: this.state.displayName,
        email: this.state.email,
        password: this.state.passOne,
        gbAuthKey : 'v3YCc$PT',
      };
      console.log(registrationInfo);
      this.addNewUser(registrationInfo);
      e.preventDefault();

    }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    if (this.state.userRegistered === true) {
      return <Redirect to='/' />
    }
    
    return (
      
        
      <form id="classicformpage" onSubmit={this.handleSubmit}>  
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>

              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h5 className="mb-4">
                  Check user-based reviews to find the best local service providers, like roofers, plumbers, handymen, and more.
                  </h5>
                  <Button variant="light" as={Link} to="/about">
                    About Us
                  </Button>
                </MDBAnimation>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Register:
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your name"
                          icon="user"
                          name='displayName'
                          value={this.state.displayName}
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          name='email'
                          value={this.state.email}
                          onChange={this.handleChange}
                          autoComplete = 'off'
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          name='passOne'
                          value={this.state.passOne}
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Re-type password"
                          icon="lock"
                          type="password"
                          name='passTwo'
                          value={this.state.passTwo}
                          onChange={this.handleChange}
                        />
                        <MDBRow fluid>
                              {this.state.errorMessage !== null ? (
                                <FormError
                                  theMessage={this.state.errorMessage}
                                />
                              ) : null}
                        </MDBRow>
                        <div className="text-center mt-4">
                          <MDBBtn outline color="white" type = 'submit'>Sign Up</MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="twitter"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="instagram"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>
      
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              
            </MDBContainer>
          </MDBMask>
        </MDBView>
        </form>
    );
  }
}

export default Signup;