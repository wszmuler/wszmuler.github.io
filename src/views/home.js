import React, { useState, useEffect, useContext } from "react";
import injectContext, { AppContext } from "../store/appcontext";
import { Button} from 'react-bootstrap';
import {JumbotronPage} from "../components/jumbotronpage";
import { ServiceCard } from "../components/servicecard";
import { Container, Row, Col} from 'react-bootstrap';




const Home =() => {
    
	const { store, actions } = useContext(AppContext);
	
	useEffect(() => {
		document.title = 'Service Advisor Home';
		
      });


          return (
              <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col> <JumbotronPage /> </Col>
                    </Row>
                </Container>
                    <Container>
                    <Row>
                        <AppContext.Consumer>
						{({ store }) => {
							return store.service.map(service => {
								if (service) {
									return (
										<div
											className="col-12 col-sm-6 col-lg-4 all-service-card"
											key={service.acf.serviceID}>
											<ServiceCard
												index={service.acf.serviceID}
												serviceID={service.acf.serviceID}
												serviceBackgroundImg={service.acf.serviceBackgroundImg}
												serviceTitle={service.acf.serviceTitle}
												serviceDescription={service.acf.serviceDescription}

											/>
										</div>
									);
								} else {
									return <h5>Still Loading...</h5>;
								}
							});
						}}
					</AppContext.Consumer>
                        </Row>
                    </Container>
                </React.Fragment>

          );
};

export default injectContext(Home)