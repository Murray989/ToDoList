import React from 'react';

const DeviceItem = (props) => {
    return (
        <li key={ props.key } className="list-group-item">{ props.name }</li>
    );
};

export default DeviceItem;