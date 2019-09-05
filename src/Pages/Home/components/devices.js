import React from 'react';
import './styles.css';
import DeviceItem from './device-item';

const Devices = (props) => {
    return (
        <div className="devices-container">
            <h4 className="text-center">Lista de Actidades</h4>
            <div className="left-component">
                <button onClick={ props.eventAddDev } type="button" className="btn btn-primary btn-margin btn-s">Add</button>
                
            </div>
            <ul className="list-group">
                {
                    props.list.map( (item, key) => {
                        return (
                            <DeviceItem key={ key } name={ item.name  } />
                        ) 
                    })
                }
            </ul>

        </div>
    );
};

export default Devices;