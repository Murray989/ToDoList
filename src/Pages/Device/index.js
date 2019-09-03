import React, { Component } from 'react';

class Device extends Component {

    state = {
        name: 'TRE-4523',
        serial: '',
        description: '',
        category: '1',
        deviceState: true,
    }

    render() {
        return (
            <div>
                <h1>Add Device</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameText">Name</label>
                        <input onChange={ e => this.setState({ name: e.target.value }) } 
                            value={ this.state.name } type="text" className="form-control" 
                            id="nameText" placeholder="Device name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serialText">Serial</label>
                        <input onChange={ e => this.setState({ serial: e.target.value }) }  value={ this.state.serial } type="text" className="form-control" id="serialText" placeholder="Serial number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Category</label>
                        <select onChange={ e => this.setState({ category: e.target.value }) }
                         value={ this.state.category } className="form-control" id="exampleFormControlSelect1">
                            <option value="1">Ganado Homested</option>
                            <option value="2">Ganado Seguro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionText">Description</label>
                        <textarea onChange={ e => this.setState({ description: e.target.value }) } 
                         value={ this.state.description } className="form-control" id="descriptionText" rows="3"></textarea>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Enable
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Desable
                    </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Device;