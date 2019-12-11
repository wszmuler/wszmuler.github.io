import React, { Component } from 'react';
import apiConfig from '../utils';


const endPoint = apiConfig.apiUrl+'/provider?filter[meta_key]=serviceid&filter[meta_value]='

export default class Testmd extends Component {
   
    constructor(props) {
        super(props);
        
        this.state = {
          dataChild: [],
          isLoading: false,
          dataParent: [],
          parentLoaded : false,
          index : props.match.params.index,
        };
      }

      async componentDidMount() {
        this.setState({ isLoading: true});

        await fetch(`${endPoint+this.state.index}`)
          .then(response => response.json())
          .then(data => {
            this.setState({ dataChild : data })
            // console.log(data); 
            // console.log(this.state.dataChild) 
            this.getProviderName(data)  
          });
      }

      displayName = (id) => {
        console.log(this.state.dataParent[id], id)
         if (!(this.state.dataParent[id] === undefined)){
            return this.state.dataParent[id].name
         }
         else
         {
            return ''
         }

    }
      getProviderName = (list) => {
        list.map( item => {
                const url = apiConfig.apiUrl+'/users/'+item.acf.userid;
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
                            //console.log(data[0])
                            //tempdata.push([data])
                            this.setState({ dataParent : [...this.state.dataParent, ...data]});
                            //tempdata[data[0].id] =  data[0].name;
                            //console.log(tempdata)
                        })
                        .catch(function(err) {
                            console.log("Error with resolving promises.", err);
                        });
                    }

            );
            this.setState({ parentLoaded : true});
            // this.setState({ dataParent : tempdata, parentLoaded : true});
            // console.log(this.state.dataParent);
            // console.log(this.state.dataChild); 
        
        }
    

      render() {


          const { dataChild, isloading, dataParent, parentLoaded } = this.state;
          

          if (isloading) {
            return <p>Loading ...</p>
          }
          
          if (!dataChild) {
              return <p>No Child Data ...</p>
          }

          if ((dataParent ) && (parentLoaded)) {
            // console.log(dataChild);
            // console.log(dataParent)
            return (
            <div>
                <ul>
                    { parentLoaded && dataParent.map((item, index) =>
                        <li key= {item.id}>
                            {item.name}
                            {item.slug}
                            {/* {item.acf.userid} */}
                            {/* {this.displayName(item.acf.userid)} */}
                            now
                        </li>
                    )}
                </ul>

                <ul>
                    { parentLoaded && dataParent && dataChild.map((item, index) =>
                        <li key= {item.id}>
                            {item.acf.providerid}
                            {item.acf.providercompanyname}
                            {item.acf.userid}
                            {this.displayName(item.acf.userid)}
                            now
                        </li>
                    )}
                </ul>
            </div>
            )
        }

        //   if (dataParent && parentLoaded){
        //     //   console.log(dataChild);
        //     //   console.log(dataParent)
        //   return (
        //     <div>
        //         <ul>
        //             {dataParent.map((item, index) =>
        //                 <li key={index}> 
        //                     {index}
        //                     {' '}
        //                     {item.id}
        //                     {' '}
        //                     {item.name }

        //                 </li>
        //             )}
        //         </ul>
        //     </div>
        // )
        // }
        else
        {
            return <p>No Parent available ...</p>
        }
    }
}
