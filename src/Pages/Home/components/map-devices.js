import React, { Component } from 'react';
import  GoogleMapReact  from  'google-map-react' ;
import  Marker from './marker';


//const  AnyReactComponent  = ({text}) =>  < div > {text} < / div > ;

class MapDevices extends Component {
    static  defaultProps={
        center: {
            lat: 6.2091014,
            long:-75.5772983
        },
        zoom:15
    }

    render() {
        return (
            < div style = {{height :  ' 80vh ' , width :  ' 100% ' }} > 
            
                <GoogleMapReact 
                 bootstrapURLKeys ={{ key: 'AIzaSyA9eGtClV8k_pX5N9LT_eMHpA0RgTCsy6c' }}
                 defaultCenter={this.props.center} 
                 defaultZoom = {this.props.zoom}
                >
                    <Marker
                        lat={6.2091014}
                        lng={-75.5772983}
                        text="My Marker"
                    />

                </GoogleMapReact> 
                
            </div>
       );
    }
}

export default MapDevices;