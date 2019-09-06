import React, { Component } from 'react';
/*<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>*/

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
                    <div className="col-md-5 container-1">
                        <span src="/lupa.png" alt="buscar" height="25" width="25"></span>
                        <input   className="form-control mr-sm-2 btn-margin" type="search" placeholder="Search..." aria-label="Search..."></input> 
                     { /*   <span  className="icon"><i className="fa fa-search"></i></span>
                        <input type="search" id="search" placeholder="search..." /> */}
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

