import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "../store/appcontext";
import { Providers } from "../views/providers";
import { ProvidersMain } from "../views/providersmain";
import { Services } from "../views/services";
import { ContactUs } from "../views/contactus";
import About from "../views/about";
import Signup from "../views/signup";

import Testmd from "../components/testmd"


import ScrollToTop from "../components/scrolltotop";

import NavbarMain from '../components/navbarmain'

import Home from '../views/home';
// import Home from '../views/signin';
// import Home from '../views/profile';

import { Footer } from '.././components/footer'


export const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<NavbarMain />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
                        {/* <Route path="/signin" component={Signin} />*/}
						<Route path="/providersmain" component={ProvidersMain} />
						<Route path="/services" component={Services} />
						<Route path="/providers/:index" component={Providers} />
						<Route path="/testmd/:index" component={Testmd} />
						<Route path="/contactus" component={ContactUs} />
						<Route path="/about" component={About} />
						<Route path="/signup" component={Signup} />
						{/*<Route path="/profile" component={Profile} /> */}
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer /> 
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);