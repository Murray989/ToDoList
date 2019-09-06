import React, { Component } from 'react';
import Devices from './components/devices';

class Home extends Component {

    state = {
        listDevices: []
    }

    /*
    constructor(props){
        super(props);
    }*/

    componentDidMount(){
        console.log('El componente fue montado');
        let deviceList = [
            {
                id: 1,
                name: 'Primera actividad',
                detail:'                '
            },
            {
                id: 2,
                name: 'Segunda  actividad',
                detail:'                '
            },
            {
                id: 3,
                name: 'tercera actividad',
                detail:'                '
            },
            {
                id: 4,
                name: 'Cuarta actividad',
                detail:'                '
            },
            {
                id: 5,
                name: 'Ejercicio uno',
                detail:'                '
            }
        ];
        //this.listDevices = deviceList
        this.setState({ listDevices: deviceList }); 
    }

    clickHandler(){
        console.log('agregaré un nuevo item de dices');
        let newDevice = {
            id: 6,
            name: 'Ultima Actividad-999',
            detail:'                '
        };
        let newListDevices = [...this.state.listDevices, newDevice];
        this.setState({ listDevices: newListDevices });
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        
                    </div>
                    <div className="col-md-8 ">
                    { /* <button onClick={ this.clickHandler.bind(this) } type="button" 
                        className="btn btn-success">Evento botón</button> */}
                     <Devices eventAddDev={ this.clickHandler.bind(this) } list={ this.state.listDevices } />  
                     <Devices eventAddDev={ this.clickHandler.bind(this) } list={ this.state.listDevices } />  
                
                    </div>
                    <div className="col-md-2 ">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;