import React from 'react';

const DeviceItem = (props) => {
    return (
        <div clasName="col-md-4">
        <p align="left"></p>
        <li key={ props.key } className="list-group-item">{ props.name } 
        
        <p align="right">
        <button  className="btn btn-info btn-s">
        <img src="/edit.png" alt="Editar" height="20" width="20"/>
        </button>
        <button className="btn btn-danger btn-s">
        <img src="/delete.png" alt="Borrar" height="20" width="20"/>
        </button>
        </p>
        </li>
        </div>
    );
};

export default DeviceItem;