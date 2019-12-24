import React, { useState, useEffect, useContext } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { Container, Row, Col} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import { ProviderCard } from "../components/providercard";
import axios from 'axios';
import apiConfig from '../utils';

class ServiceReview extends React.Component {

    constructor(props) {
	  super(props); 
		  this.state = {
              provider: [],
              index : this.props.match.params.index,
			  providerEndPoint : (apiConfig.apiUrl+'/provider'),
			  review : null,
			  error : '',
			  loading: false
		  }

    }

    componentDidMount() {
        console.log(this.props.match.params.index);
            const url = this.state.providerEndPoint+'?filter[meta_key]=providerid&filter[meta_value]='+this.state.index;

			const fetchProvider = fetch(`${url}`)
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

			Promise.all([fetchProvider])
			.then(data => {
				console.log(data[0])
				this.setState({provider : data[0]});
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

	
	handleSubmit = (e) => {
		var providerInfo = {
			companyName: this.state.companyName,
			companyPhone: this.state.companyPhone,
			companyWebsite: this.state.companyWebsite,
			//gbAuthKey : 'v3YCc$PT',
		};
		console.log(providerInfo);
		this.addNewProvider(providerInfo);
		e.preventDefault();
	}
	
	addNewProvider = providerInfo => {
		const siteUrl = apiConfig.apiUrl;
    	this.setState( { loading: true }, () => {
			axios.post( `${siteUrl}/provider`, providerInfo )
				.then( res => {
					if ( undefined === res.data.token ) {
                        this.setState( { error: res.data.message, loading: false } );
						return;
					}
                })
				.catch( err => {
							this.setState( { error: err.response.data.message, loading: false } );
							this.setState({ errorMessage: 'Invalid Username or Password!'}); 
          });
      });

	} 

	render() {
			const { provider } = this.state;
			if ( localStorage.getItem('token') === null	)
			{
				return <Redirect to='/login' />
			}

			return (
				<Container >
				<section className="contact-section my-5">
					<MDBCard>
						<MDBRow>
							<MDBCol lg="12" >

                            <MDBCardBody className="form">
									<h3 className="mt-4">
										<MDBIcon icon="user-alt" className="pr-2" />
										Provider Profile
									</h3>
								</MDBCardBody>
                            { provider && provider.map((provider, index) => {
									// <Jumbotron className="bg-cover">
									// 	<h1>{store.service[props.match.params.index].acf.serviceTitle}</h1>
									// </Jumbotron>;
									//console.log(getProviderName(provider.acf.userid))
									if (provider) {
										return (
											<div className="col-12 col-lg-4"  key={provider.acf.providerid}>
												<ProviderCard 
													index={provider.acf.providerid}
													providerCompanyName={provider.acf.providercompanyname}
													providerUserName={provider.acf.username}
													providerPhoneNumber={provider.acf.providerphonenumber}
													providerWebsite={provider.acf.providerwebsite}
													providerAvatar={provider.acf.avatar}
													providerRating={provider.acf.providerrating}
													providerUserID={provider.acf.userid}
													providerLink={'/user/'+ provider.acf.userid}
												/>
											</div>
										);
									} else {
										return <h5>Still Loading...</h5>;
									}
								})
							}

								{/* <MDBCardBody className="form">
									<h3 className="mt-4">
										<MDBIcon icon="user-alt" className="pr-2" />
										Provider Profile
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
								</MDBCardBody> */}
							</MDBCol>				
						</MDBRow>				
						<MDBRow>
							
							<MDBCol lg="12">
								<MDBCardBody className="form">
								<form id="classicformpage" onSubmit={this.handleSubmit}> 
									<h3 className="mt-4">
										<MDBIcon icon="tools" className="pr-2" />
										Write your review
									</h3>
									<MDBRow>
										<MDBCol md="8">
                                        <div className="md-form mb-0 ">
												<MDBInput 
													type="textarea" 
													id="form-contact-website" 
                                                    name="companyWebsite"
                                                    outline
													value={this.state.review}
													onChange={this.handleChange} 													
												/>
                                        </div>
										</MDBCol>
									</MDBRow>
									
									<MDBRow>    
										<MDBCol md="10 text-right">
											<MDBBtn color="secondary">Submit</MDBBtn>
										</MDBCol>
									</MDBRow>
									</form>	
								</MDBCardBody>
							</MDBCol>
			
						</MDBRow>
					</MDBCard>
				</section>
				</Container>	
			);
		};
}
export default ServiceReview;