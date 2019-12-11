import React from "react";
import { AppContext } from "../store/appcontext.js";
import { ServiceCardMain } from "../components/servicecardmain";

export const Services = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<AppContext.Consumer>
						{({ store }) => {
							return store.service.map((service, index) => {
								if (service) {
									return (
										<div className="col-12 col-sm-6 col-lg-4 all-service-card" key={index}>
											<ServiceCardMain
												index={index}
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
				</div>
			</div>
		</div>
	);
};
