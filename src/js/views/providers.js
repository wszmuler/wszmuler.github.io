import React from "react";
import { Context } from "../store/appContext.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import { ProviderCard } from "../component/providercard.js";
import PropTypes from "prop-types";

export const Providers = props => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<Context.Consumer>
						{({ store }) => {
							let i = props.match.params.index;
							// let newArr = store.provider.filter(e => )
							return store.provider.map((provider, index) => {
								{
									/* <h1>{store.service[i] && store.service[i].acf.serviceTitle}</h1> */
								}

								if (provider) {
									return (
										<div className="col-12 col-sm-6 col-lg-4" key={index}>
											<h1>Hello: {store.service[i] && store.service[i].acf.serviceTitle}</h1>
											<ProviderCard
												index={props.match.params.index}
												providerCompanyName={provider.acf.providercompanyname}
												//providerUserName={provider.acf.username}
												providerPhoneNumber={provider.acf.providerphonenumber}
												providerWebsite={provider.acf.providerwebsite}
												providerAvatar={provider.acf.avatar}
												providerRating={provider.acf.providerrating}
												providerUserID={provider.acf.userid}
											/>
										</div>
									);
								} else {
									return <h5>Still Loading...</h5>;
								}
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		</div>
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

<Context.Consumer>
	{({ store }) => {
		let i = props.match.params.index;
		return <h1>{store.service[i] && store.service[i].acf.serviceTitle}</h1>;
	}}
</Context.Consumer>;
