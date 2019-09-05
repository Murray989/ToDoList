import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <div>
                <div className="row content">
                <div className="col-md-3 ">
                        
                        </div>  
                    <div className="col-md-1 center-component">
    
                        <a className="navbar-brand" href="#">
                        <img src="/logomas.png" width="30" height="30" class="d-inline-block align-top btn-s" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-5 ">
                        <input   className="form-control mr-sm-2 btn-s" type="search" placeholder="Search" aria-label="Search"></input>
                        
                   </div>
                   <div className="col-md-3 ">
                        
                   </div>                  
                </div>
       
               
                <div className="row content">
                    <div className="col-md-2 ">
                        
                    </div>  
                   <div className="col-md-8 center-component">
                        <h3 className=" title" >Mis tareas en la empresa X </h3> 
                   </div>
                   <div className="col-md-2 ">
                        
                    </div>  
                </div>
            </div>
        )
    }
}

export default Menu;

