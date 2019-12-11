import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { AppContext } from "../store/appcontext.js";
import axios from 'axios';

import apiConfig from '../utils';
import "./providercard.css"


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
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});

			Promise.all([fetchUserrs])
			.then(data => {
				//return data.name
				console.log(data)
				//usrlist = [...usrlist, data];
				//console.log(usrlist)
			})
			.catch(function(err) {
				console.log("Error with resolving promises.", err);
			});
}


export function ProviderCard(props) {

	
	return (
		<AppContext.Consumer>
			{({ store }) => {
				return (
					<div className="">
						<div className="card profile-card-3">
							<div className="background-block">
								<img
									// src={
									// 	store.service[props.index] &&
									// 	store.service[props.index].acf.serviceBackgroundImg
									// }

									src="http://gbsoftinc.com/wpgb/wp-content/uploads/2019/12/provider_bkg_image-1.png"
									//alt="profile-sample1"
									className="background"
								/>
							</div>
							<div className="profile-thumb-block">
								<img
									src={props.providerAvatar.url}
									//src="http://gbsoftinc.com/wpgb/wp-content/uploads/2019/11/22.jpg"
									alt="profile-image"
									className="profile"
								/>
							</div>
							<div className="card-content">
								
								<h2>
									{props.providerCompanyName}
									{/* <small>{store.user[props.providerUserID].name}</small> */}
									<a className="card-link" href={props.providerLink}><small>{props.providerUserName}</small></a>
									{/* <small>Name: {props.providerUserID}</small> */}
									<small>Phone: {props.providerPhoneNumber}</small>
									<small>Email: </small>
									<small>Website: {props.providerWebsite}</small>
									<small>
										<span className="d-flex align-items-center justify-content-center">
											Rating:
											<StarRatingComponent
												name="rate1"
												editing={false}
												starCount={5}
												value={props.providerRating}
												starColor="#feb400"
											/>
										</span>
									</small>
									<small>
										<Link to={"#"} className="servicelink">
											<span>Leave a review</span>
										</Link>
									</small>
								</h2>
							</div>
						</div>
					</div>
				);
			}}
		</AppContext.Consumer>
	);
}

ProviderCard.propTypes = {
	providerCompanyName: PropTypes.string,
	providerUserName: PropTypes.string,
	providerPhoneNumber: PropTypes.string,
	providerWebsite: PropTypes.string,
	providerAvatar: PropTypes.string,
	providerRating: PropTypes.number,
	providerUserID: PropTypes.number,
	index: PropTypes.number
};
