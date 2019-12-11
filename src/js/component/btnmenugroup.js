import React from "react";
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";

export const BtnGroupPage = () => {
	return (
		<MDBRow>
			<MDBCol>
				<MDBBtnGroup size="lg" className="mb-4">
					<MDBBtn className="btn-success">MAIN MENU</MDBBtn>
					<MDBBtn className="btn-light">ABOUT US</MDBBtn>
					<MDBBtn className="btn-light">SERVICES</MDBBtn>
					<MDBBtn color="warning">LOGIN / SIGNUP</MDBBtn>
				</MDBBtnGroup>
			</MDBCol>
		</MDBRow>
	);
};
