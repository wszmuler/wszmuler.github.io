import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Nav from "react-bootstrap/Nav";

export const Footer = () => {
	return (
		<MDBFooter color="teal" className="font-small pt-4 mt-4 mdbfooter">
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
							<Nav.Link as={Link} to="/">
								SERVICES
							</Nav.Link>
							<Nav.Link as={Link} to="/">
								PROVIDERS
							</Nav.Link>
						</Nav>
					</MDBCol>
					<MDBCol md="3">
						<h5 className="title">ABOUT SERVICE ADVISOR</h5>
						<Nav className="flex-column">
							<Nav.Link as={Link} to="/">
								HOME
							</Nav.Link>
							<Nav.Link as={Link} to="/">
								ABOUT US
							</Nav.Link>
							<Nav.Link as={Link} to="/">
								CONTACT US
							</Nav.Link>
						</Nav>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright: <a href="#"> serviceadvisor.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};
