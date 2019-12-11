import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { Container, Row, Col} from 'react-bootstrap';

export const ContactUs = () => {
	return (
		<Container >
		<section className="contact-section my-5">
			<MDBCard>
				<MDBRow>
					<MDBCol lg="8">
						<MDBCardBody className="form">
							<h3 className="mt-4">
								<MDBIcon icon="envelope" className="pr-2" />
								Contact Us:
							</h3>
							<MDBRow>
								<MDBCol md="6">
									<div className="md-form mb-0">
										<MDBInput type="text" id="form-contact-name" label="Name" name="name" />
									</div>
								</MDBCol>
								<MDBCol md="6">
									<div className="md-form mb-0">
										<MDBInput type="text" id="form-contact-email" label="Email" name="email" />
									</div>
								</MDBCol>
							</MDBRow>
							<MDBRow>
								<MDBCol md="6">
									<div className="md-form mb-0">
										<MDBInput type="text" id="form-contact-phone" label="Phone" name="phone"/>
									</div>
								</MDBCol>
								<MDBCol md="6">
									<div className="md-form mb-0">
										<MDBInput type="text" id="form-contact-company" label="Company Name" name="companyName"/>
									</div>
								</MDBCol>
							</MDBRow>
							<MDBRow>
								<MDBCol md="12">
									<div className="md-form mb-0">
										<MDBInput type="textarea" id="form-contact-message" label="Message" name="message"/>
										{/* <MDBBtn rounded color="blue">
											<MDBIcon icon="paper-plane" />
										</MDBBtn>
										 */}
										<MDBBtn color="secondary">Send</MDBBtn> 
									</div>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
					</MDBCol>
					<MDBCol lg="4">
						<MDBCardBody className="contact text-center h-100 white-text">
							<h3 className="my-4 pb-2">Contact information</h3>
							<ul className="text-lg-left list-unstyled ml-4">
								<li>
									<p>
										<MDBIcon icon="map-marker-alt" className="pr-2" />
										Miami, FL 33135
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="phone" className="pr-2" />+ 01 382 810 90
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="envelope" className="pr-2" />
										contact@serviceadvisor.com
									</p>
								</li>
							</ul>
							<hr className="hr-light my-4" />
							<ul className="list-inline text-center list-unstyled">
								<li className="list-inline-item">
									<a href="#!" className="p-2 fa-lg w-ic">
										<MDBIcon fab icon="twitter" />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="#!" className="p-2 fa-lg w-ic">
										<MDBIcon fab icon="linkedin-in" color="secondary" />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="#!" className="p-2 fa-lg w-ic">
										<MDBIcon fab icon="instagram" />
									</a>
								</li>
							</ul>
						</MDBCardBody>
					</MDBCol>
				</MDBRow>
			</MDBCard>
		</section>
		</Container>	
	);
};
