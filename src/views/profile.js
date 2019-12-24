import React, { useState, useEffect, useContext } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { Container, Row, Col} from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import apiConfig from '../utils';

class Profile extends React.Component {

	constructor(props) {
	  super(props); 
		  this.state = {
			  services: [],
			  serviceEndPoint : (apiConfig.apiUrl+'/service'),
			  companyName : '',
			  companyPhone : '',
			  companyWebsite : ''
		  }

	}

	componentDidMount() {
			const fetchServices = fetch(`${this.state.serviceEndPoint}`)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Examine the text in the response
				return response.json();
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});

			Promise.all([fetchServices])
			.then(data => {
				console.log(data[0])
				this.setState({services : data[0]});
			})
			.catch(function(err) {
				console.log("Error with resolving promises.", err);
			});
	}

	handleChange = (e) => {
		const itemName = e.target.name;
		const itemValue = e.target.value;
		this.setState({ [itemName]: itemValue });
	  }

	render() {
			const { services } = this.state;
			if ( localStorage.getItem('token') === null	)
			{
				return <Redirect to='/login' />
			}

			return (
				<Container >
				<section className="contact-section my-5">
					<MDBCard>
						<MDBRow>
							<MDBCol lg="12">
								<MDBCardBody className="form">
									<h3 className="mt-4">
										<MDBIcon icon="user-alt" className="pr-2" />
										User Profile
									</h3>
									<MDBRow>
										<MDBCol md="4">
											<div className="md-form mb-0 ">
												<span className="labelprofile">Username: {localStorage.getItem('userName')}</span>
											</div>
										</MDBCol> 
										<MDBCol md="4">
											<div className="md-form mb-0">
											<span className="labelprofile">Name: {localStorage.getItem('userFullName')}</span>
											</div>
										</MDBCol>
										<MDBCol md="4">
											<div className="md-form mb-0">
											<span className="labelprofile">Email: {localStorage.getItem('userEmail')}</span>
											</div>
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
							</MDBCol>				
						</MDBRow>				
						<MDBRow>
							<MDBCol lg="12">
								<MDBCardBody className="form">
									<h3 className="mt-4">
										<MDBIcon icon="tools" className="pr-2" />
										Service Provider Information
									</h3>
									<MDBRow>
										<MDBCol md="8">
											<div className="md-form mb-0">
											<span className="labelprofile">What service do you offer? </span>
												<div className="col-4 align-self-start inputservices">
													<select className="browser-default custom-select"> 
														<option value= "0">Choose your service</option>
														{services && services.map (service => {
															return (
																<option key = {service.acf.serviceID} value={service.acf.serviceID}>{service.acf.serviceTitle}</option>
															);
															})
														}
													</select>
												</div>
											</div>                                   
										</MDBCol>
									</MDBRow>
									<MDBRow>
										<MDBCol md="6">
											<div className="md-form mb-0 labelprofile">
												<MDBInput 
													type="text" 
													id="form-contact-company" 
													label="Company Name" 
													name="companyName"
													value={this.state.companyName}
													onChange={this.handleChange}
												/>
											</div>
										</MDBCol>
										<MDBCol md="6">
											<div className="md-form mb-0 labelprofile">
											<MDBInput 
												type="text" 
												id="form-contact-phone" 
												label="Phone" 
												name="companyPhone"
												value={this.state.companyPhone}
												onChange={this.handleChange} 
											/>
											</div>
										</MDBCol>
									</MDBRow>
									<MDBRow>
										<MDBCol md="6">
											<div className="md-form mb-0 labelprofile">
												<MDBInput 
													type="text" 
													id="form-contact-website" 
													label="Website" 
													name="companyWebsite"
													value={this.state.companyWebsite}
													onChange={this.handleChange} 													
												/>
											</div>
										</MDBCol>
										<MDBCol md="6">
										<div className="md-form mb-0 labelprofile">
											<span className="labelprofile">Upload your Avatar/Logo </span>
										</div>
										<div className="file-upload-wrapper">
											<input type="file" id="input-file-now" className="file-upload" />
										</div>
										</MDBCol>
									</MDBRow>	
									<MDBRow>
										{/* <MDBCol md="6">
										<div className="md-form mb-0 labelprofile">
											<span className="labelprofile">What service do you offer? </span>
										</div>
										<div className="file-upload-wrapper">
											<input type="file" id="input-file-now" className="file-upload" />
										</div>
										</MDBCol> */}
									</MDBRow>
									<MDBRow>    
										<MDBCol md="10 text-right">
											<MDBBtn color="secondary">Submit</MDBBtn>
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
							</MDBCol>				
						</MDBRow>
					</MDBCard>
				</section>
				</Container>	
			);
		};
}
export default Profile;