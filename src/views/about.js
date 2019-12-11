import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBIcon } from "mdbreact";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/about.css";

const About = () => {
  return (
    <MDBContainer fluid className="px-md-3 px-sm-0" >
        <MDBRow className="bg" fluid>
          <MDBCol md="12" className="mb-4 black-text text-center">
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
              Service Advisors{" "}
            </h3>
            <hr className="hr-light my-4 w-75" />
            <h2 className="subtext-header mt-2 mb-4">
              Here to help you find the right person for the job.
            </h2>
            <Button variant="light" as={Link} to="/signup">
            Join Us
            </Button>
          </MDBCol>
        </MDBRow>
      
    <section className="text-center my-5">
    <br/>
    <p className="font-weight-bold w-responsive mx-auto mb-5 subtext-header" gradient="purple">
    More than just an incredibly, 
    <p>credible source of information.</p></p>
    
    <MDBRow>
      <MDBCol md="4">
        <MDBIcon icon="brush"size="3x" className="red-text" />
        <h5 className="font-weight-bold my-4">Tired of lousy service?</h5>
        <p className="grey-text mb-md-0 mb-5">
          Get reliable reviews of your local plumbers, contractors, renovators and more. Service Advisors has details about pricing and professionalism, so you hire the right person the first time.
        </p>
      </MDBCol>
      <MDBCol md="4">
        <MDBIcon icon="award" size="3x" className="cyan-text" />
        <h5 className="font-weight-bold my-4">We are on your team.</h5>
        <p className="grey-text mb-md-0 mb-5">
          Our members get exclusive discounts on major home projects like roofing and remodeling. And if something goes wrong, we personally intercede.
        </p>
      </MDBCol>
      <MDBCol md="4">
        <MDBIcon far icon="thumbs-up" size="3x" className="orange-text" />
        <h5 className="font-weight-bold my-4">Hire with confidence</h5>
        <p className="grey-text mb-md-0 mb-5">
          It feels good to know you are getting the best service at the best price. Browse through our category and choose the best provider for your budget.
        </p>
      </MDBCol>
    </MDBRow>
  </section>
  </MDBContainer>
  ); 
};
export default About;
