const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			service: [
				// {
				// 	serviceID: 1,
				// 	serviceTitle: "ROOFING",
				// 	serviceBackgroundImg:
				// 		"https://media.angieslist.com/s3fs-public/styles/widescreen_large/public/roofing-guide.jpg?itok=4S47FOXC",
				// 	serviceDescription:
				// 		"Roofing services for both commercial buildings and residential homes. From roof repairs to full roof replacements."
				// },
				// {
				// 	serviceID: 2,
				// 	serviceTitle: "PLUMBING",
				// 	serviceBackgroundImg: "https://bureshplumbing.com/files/2019/02/1551132948237_plumbdl1.jpg",
				// 	serviceDescription:
				// 		"Residential or commercial general plumbing repair, plumbing fixtures, faucets, sinks, showers, kitchen plumbing, bathroom plumbing, and more."
				// },
				// {
				// 	serviceID: 3,
				// 	serviceTitle: "REMODELING",
				// 	//"https://bureshplumbing.com/files/2019/02/1551132948237_plumbdl1.jpg",
				// 	serviceBackgroundImg: {DefaultImage},
				// 	serviceDescription:
				// 		"Whether your looking to renovate your kitchen or bathroom, trust us to provide the perfect contractor for your needs."
				// },
				// {
				// 	serviceID: 4,
				// 	serviceTitle: "MAINTENANCE",
				// 	//"https://bureshplumbing.com/files/2019/02/1551132948237_plumbdl1.jpg",
				// 	serviceBackgroundImg: "../assets/img/Service_Advisor_logo.png",
				// 	serviceDescription:
				// 		"Maintenance can be tough, find the best one in your area to do the job right the first time."
				// },
				// {
				// 	serviceID: 5,
				// 	serviceTitle: "PAINTING",
				// 	//"https://bureshplumbing.com/files/2019/02/1551132948237_plumbdl1.jpg",
				// 	serviceBackgroundImg: "../assets/img/Service_Advisor_logo.png",
				// 	serviceDescription:
				// 		"Finding the perfect combination of colors can be tough, let a professional help you with selections and getting the job done correctly."
				// },
				// {
				// 	serviceID: 6,
				// 	serviceTitle: "LANDSCAPE",
				// 	//"https://bureshplumbing.com/files/2019/02/1551132948237_plumbdl1.jpg",
				// 	serviceBackgroundImg: "../assets/img/Service_Advisor_logo.png",
				// 	serviceDescription:
				// 		"Landscape Technicians perform various gardening duties in order to turn outdoor spaces into attractive areas. Skim through our reviews to look for your perfect landscaper now."
				// }
			],
			provider: [
				{
                    providerID : "",
					serviceID: "",

                    providerBusinnessName : "",
                    providerServiceDescription : ""
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
