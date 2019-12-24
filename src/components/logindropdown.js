import React, { Component } from "react";
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import { NavDropdown  } from 'react-bootstrap';
import axios from 'axios';
import apiConfig from '../utils';
import './logindropdown.css';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, } from 'mdbreact';
import FormError from '../components/formerror';
import { Redirect } from "react-router-dom";


class LoginDropDown extends Component {
    constructor( props ) {
		super( props ); 
            this.state = {
                keepLoginOpen: false,
                userloggedin : false,
                userID: '',
                username: '',
                password: '',
                userNiceName: '',
                userEmail: '',
                loading: false,
                error: '',
                modal: false,
                errorMessage: null
          };
    }


      handleButtonClick = e => {
        this.setState(state => {
          return {
            keepLoginOpen: !state.keepLoginOpen,
          };
          
        });
        if (e.target.ref === "submitbutton")
        {
            this.setState(state => {
                let userloggedin = state.userloggedin;
                return {
                    userloggedin: !userloggedin
                }
                
            });
        }
    }

    handleOnChange = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } );
    };

    handleDropdownItemClick = (event) => {
        this.setState({
            loading: false,
            token: "",
            userID:"",
            userNiceName: "",
            userEmail: "",
            loggedIn: false,
        } )

        localStorage.removeItem( 'token');
        localStorage.removeItem( 'userName');
        localStorage.removeItem( 'userFullName');
        localStorage.removeItem( 'userEmail');
        localStorage.removeItem( 'userID');
        window.location.reload(false);
    }
    
    // renderRedirect = () => {
    //       return <Redirect to='/home' />
    //   }

	onFormSubmit = ( event ) => {

        event.preventDefault();

		const siteUrl = apiConfig.apiJWt;

		const loginData = {
			username: this.state.username,
			password: this.state.password
		};

		this.setState( { loading: true }, () => {
			axios.post( `${siteUrl}/token`, loginData )
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
						loggedIn: true
                    } );

                } 
                )
				.catch( err => {
                    this.setState( { error: err.response.data.message, loading: false } );
                    this.setState({ errorMessage: 'Invalid Username or Password!'}); 
				});
        });
	};

    componentDidUpdate (prevProps, prevState ){

        if (this.state.loggedIn)
        {
            // let path = '/profile' ;
            // this.props.history.push(path)
            window.location.reload(false);
        }
    }

    render() {

        const { username, password, userNiceName, userloggedin, error, loading } = this.state;
		const user = ( userNiceName ) ? userNiceName : localStorage.getItem( 'userName' );
        this.state.userloggedin = this.props.isLoggedIn

        let loggedInDropdown = [
            <NavDropdown.Item href="/profile" >View my profile</NavDropdown.Item>,
            // <NavDropdown.Item >Request a service</NavDropdown.Item>,
            <NavDropdown.Divider />,
            <NavDropdown.Item  eventKey = '99' onClick = {this.handleDropdownItemClick} >Log out</NavDropdown.Item>,
        ]


        if (!this.props.isLoggedIn) {
          return (
             <React.Fragment>
                          
                <Form onClick={this.handleButtonClick} onSubmit={ this.onFormSubmit } style={{ margin: 6, padding: 0 }}>

                <Form.Text><h6>Login via</h6></Form.Text>

                <Form.Group controlId="formSocialLogin">

                    <FacebookLoginButton  />

                    <GoogleLoginButton />

                    <GithubLoginButton />
                </Form.Group>

                <Form.Text><h6>or</h6></Form.Text>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                            type="text" 
                            name = "username" 
                            placeholder="Enter your User Name" 
                            value={ username }
                            onChange={ this.handleOnChange }
                    />
                   <Form.Text className="text-muted">
                            We will never share your info with anyone, even our Teachers.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                            type="password"
                            placeholder="and your Password"
                            name="password"
                            value={ password }
                            onChange={ this.handleOnChange } 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Remember me." inline/>
                    <Button id="submitbutton" variant="primary" type="submit" Right>Submit</Button>
                </Form.Group>
                <MDBRow fluid>
                            {this.state.errorMessage !== null ? (
                                <FormError theMessage={this.state.errorMessage} />
                            ) : null}
                </MDBRow>
                </Form>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/signup"> New here ? <b>Join Us</b> </NavDropdown.Item>


            </React.Fragment> 

            );
          } else {
            return (
                <div>
                    {loggedInDropdown.map(anItem => <div> {anItem} </div>)}
                </div>
            );
          }
        };
    };
    export default LoginDropDown;
