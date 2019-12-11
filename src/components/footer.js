import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Nav from "react-bootstrap/Nav";

export const Footer = () => {
	return (
		<MDBFooter className="font-small pt-4 mt-4 mdbfooter text-light">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="3">
						<h5 className="title">SERVICE ADVISOR</h5>
						<p>
							Check user-based reviews to find the best local service providers, like roofers, plumbers,
							handymen, and more.
						</p>
					</MDBCol>
					<MDBCol md="3" />
					<MDBCol md="3">
						<h5 className="title">HOMEOWNER SERVICES</h5>
						<Nav className="flex-column">
							<Nav.Link as={Link} to="/services" className="text-light">
								SERVICES
							</Nav.Link>
							<Nav.Link as={Link} to="/providersmain" className="text-light">
								PROVIDERS
							</Nav.Link>
						</Nav>
					</MDBCol>
					<MDBCol md="3">
						<h5 className="title">ABOUT SERVICE ADVISOR</h5>
						<Nav className="flex-column">
							<Nav.Link as={Link} to="/" className="text-light">
								HOME
							</Nav.Link>
							<Nav.Link as={Link} to="/about" className="text-light">
								ABOUT US
							</Nav.Link>
							<Nav.Link as={Link} to="/contactus" className="text-light">
								CONTACT US
							</Nav.Link>
						</Nav>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="#" className="text-light">
						{" "}
						serviceadvisor.student{" "}
					</a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};
