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
import axios from 'axios';
import { Button } from "react-bootstrap";
import "../styles/signup.css";


import apiConfig from '../utils';


import FormError from '../components/formerror';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
      username: '',
      password: '',
      errorMessage: null,
      userIsLoggedIn : false,
      error : '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  logUser (loginInfo){
		const siteUrl = apiConfig.apiJWt;
    this.setState( { loading: true }, () => {
			axios.post( `${siteUrl}/token`, loginInfo )
				.then( res => {
					if ( undefined === res.data.token ) {
                        this.setState( { error: res.data.message, loading: false } );
						return;
					}
					const { token, userID, user_nicename, user_display_name, user_email } = res.data;

					localStorage.setItem( 'token', token );
                    localStorage.setItem( 'userName', user_nicename );
                    localStorage.setItem( 'userID', userID);
                    localStorage.setItem( 'userFullName', user_display_name );
                    localStorage.setItem( 'userEmail', user_email );
                    this.setState({ errorMessage: null});

                    this.setState( {
            						loading: false,
                        token: token,
                        userID: userID,
                        userNiceName: user_display_name,
                        userEmail: user_email,
                        userIsLoggedIn: true
                    });

                })
          .catch( err => {
                      this.setState( { error: err.response.data.message, loading: false } );
                      this.setState({ errorMessage: 'Invalid Username or Password!'}); 
          });
      });
	}

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));


    handleChange = (e) => {
      const itemName = e.target.name;
      const itemValue = e.target.value;
      this.setState({ [itemName]: itemValue });
    }

    validateField = () => {
      let result = false;
      if ((this.errorMessage == null) && ((this.state.displayName.length < 4))) {
        this.setState({ errorMessage: 'Username is less than 4 characters' });
        result = false;
        return result;
      } else {
        this.setState({ errorMessage: null });
        result = true;
      }

      if ((this.errorMessage == null) &&((this.state.passOne) !== (this.state.passTwo))) {
        this.setState({ errorMessage: 'Passwords no not match' });
        result = false;
        return result;
      } else {
        this.setState({ errorMessage: null });
        result = true;
      }
      return result;
    }
    
    handleSubmit = (e) => {
        var loginInfo = {
            username: this.state.username,
            password: this.state.password
          };
        this.logUser(loginInfo);
      e.preventDefault();
      };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );

    if (this.state.userIsLoggedIn === true) {
      return <Redirect to='/profile' />;
    }

    if (!(localStorage.getItem('token') === null)	)
    {
      return <Redirect to='/profile' />
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
                          <MDBIcon icon="user" /> LOGIN:
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your Username"
                          icon="user"
                          name='username'
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          name='password'
                          value={this.state.password}
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
                          <MDBBtn outline color="white" type = 'submit'>Submit</MDBBtn>
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

export default Login;