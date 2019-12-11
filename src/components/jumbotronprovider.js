import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import { Jumbotron, Container, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard} from '@fortawesome/free-solid-svg-icons' 
import { Link } from "react-router-dom";
import '../index.css'


export const JumbotronProvidersPage = () => {
	return (
		<React.Fragment>

			 <Jumbotron fluid className='jumbotronprovimg'>
				<Container fluid className="text-white text-center bkgtxtimg p-5 ">
					<h1>CONNECT WITH NEW SERVICE PROVIDER NOW.</h1>
					
					<p className="P-5 mx-5 mb-5">
										Check user-based reviews to find the best local service providers, like roofers,
										plumbers, handymen, and more
					</p>
				</Container>
				<Container fluid className="text-white text-center ">
						<Button outline color="white" className=" m-3 p-2 btn-dark "  as={Link} to="/services">
							<FontAwesomeIcon icon={faHome} size='2x'/> POPULAR SERVICES
						</Button>	
						<Button outline color="white" className=" m-3 p-2 btn-warning " as={Link} to="/providersmain">
							<FontAwesomeIcon icon={faAddressCard} size='2x' /> FIND PROS
						</Button>	
						
				</Container>
			</Jumbotron> 
		{/* <MDBContainer fluid style={{ padding: 0 }}>
			<MDBRow>
				<MDBCol>
					<MDBJumbotron style={{ padding: 0 }}>
						<MDBCol
							className="text-white text-center "
							style={{
								margin: 0,
								backgroundImage: `url(https://www.coreremodeling.com/wp-content/uploads/2017/09/tools.jpeg)`
							}}>
							<MDBCol className="py-5">
								<div className="bkgtxtimg">
									<MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
										FIND TOP-RATED, CERTIFIED PROS FOR YOUR PROJECT
									</MDBCardTitle>
									<p className="mx-5 mb-5">
										Check user-based reviews to find the best local service providers, like roofers,
										plumbers, handymen, and more
									</p>
								</div>
								<MDBBtn outline color="white" className="mb-5 btn-dark ">
									<MDBIcon icon="home" size="2x" className="mr-2" /> POPULAR SERVICES
								</MDBBtn>
								<MDBBtn outline color="white" className="mb-5 btn-warning ">
									<MDBIcon icon="address-card" size="2x" className="mr-2" /> FIND PROS
								</MDBBtn>
							</MDBCol>
						</MDBCol>
					</MDBJumbotron>
				</MDBCol>
			</MDBRow>
		</MDBContainer> */}

		</React.Fragment>
	);
};
