import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../store/appcontext";
import {JumbotronProvidersPage} from "../components/jumbotronprovider";
import { ProviderCard } from "../components/providercard";
import PropTypes from "prop-types";
import { match } from "minimatch";
import { Container, Row, Col} from 'react-bootstrap';

import apiConfig from '../utils';
import axios from 'axios';


//  const setData = (url) => {
// 	axios.get(`${url}`)
// 	.then(response => {
// 		return response.data;
// 	});
// }
let usrlist = [];

function getProviderName (userid){
		const url = apiConfig.apiUrl+'/users/'+userid;
		const fetchUserrs = fetch(`${url}`)
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Examine the text in the response
					return response.json();
				})
				// .then(data => {
				// 	console.log(data.name)
				// 	return data.name
				// })
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});

				Promise.all([fetchUserrs])
				.then(data => {
					return data[0]
					//console.log(data[0].name)
					//usrlist = [...usrlist, data];
					//console.log(usrlist)
				})
				.catch(function(err) {
					console.log("Error with resolving promises.", err);
				});
	}

export const Providers = props => {

    const { params: { index } } = props.match;

	const [providers, setProviders] = useState([]);
	
	const [userslist, setuserslist ] = useState(['']);

	const [dataLoaded, setdataLoaded] = useState(false);

	//const [endPoint, setendPoint] = useState('');

	const [collector, setCollector] = useState('');
		
	
	const endPoint = apiConfig.apiUrl+'/provider?filter[meta_key]=serviceid&filter[meta_value]='+index;

	useEffect(() => {
		//console.log('PROVIDERS', providers)
		//setendPoint(apiConfig.apiUrl+'/provider?filter[meta_key]=serviceid&filter[meta_value]='+index);
	},[])



	useEffect(() => {
			document.title = 'Providers';
			console.log(`${endPoint}`)

			const fetchProviders = fetch(`${endPoint}`)
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

				Promise.all([fetchProviders])
				.then(data => {
					setProviders(data[0])
				})
				.catch(function(err) {
					console.log("Error with resolving promises.", err);
				});

	},[endPoint]);

	useEffect(()=>{
		//console.log(providers)

		providers.map((provider, index) => {
			getProviderName(provider.acf.userid)
		});
		console.log(usrlist);
		setdataLoaded(true);
	},[providers])
	return (
        <React.Fragment>
           <Container fluid>
                    <Row>
                        <Col> <JumbotronProvidersPage /> </Col>
                    </Row>
           </Container>
           		<Container >
					<Row>
						{ !dataLoaded && <h5>No Providers found</h5> }
						{/* <AppContext.Consumer> */}
							{/* {({ store }) => { */}
								{ usrlist && providers && providers.map((provider, index) => {
									// <Jumbotron className="bg-cover">
									// 	<h1>{store.service[props.match.params.index].acf.serviceTitle}</h1>
									// </Jumbotron>;
									//console.log(getProviderName(provider.acf.userid))
									if (providers) {
										return (
											<div className="col-12 col-sm-6 col-lg-4" key={provider.acf.providerid}>
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
						{/* </AppContext.Consumer> */}
					</Row>
                </Container >
            </React.Fragment>
	);
};

Providers.propTypes = {
	providerCompanyName: PropTypes.string,
	providerUserName: PropTypes.string,
	providerPhoneNumber: PropTypes.string,
	providerWebsite: PropTypes.string,
	providerAvatar: PropTypes.string,
	providerRating: PropTypes.number,
	providerUserID: PropTypes.number,
	index: PropTypes.number,
	match: PropTypes.object
};
