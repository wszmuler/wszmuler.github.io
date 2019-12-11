import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

export const JumbotronPage = () => {
	return (
		<MDBContainer fluid style={{ padding: 0 }}>
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
								<MDBBtn outline color="white" className="mb-5 btn-dark mymdbtn">
									<MDBIcon icon="home" size="2x" className="mr-2" /> POPULAR SERVICES
								</MDBBtn>
								<MDBBtn outline color="white" className="mb-5 btn-warning mymdbtn">
									<MDBIcon icon="address-card" size="2x" className="mr-2" /> FIND PROS
								</MDBBtn>
							</MDBCol>
						</MDBCol>
					</MDBJumbotron>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
