import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from '../Components/menu';
import Content from '../Components/content';
import Home from './Home';
/*<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>;*/

class Main extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <Content>
                    <Route path="/" exact component={ Home } />
                    
                </Content>
                
            </Router>
        );
    }
}

export default Main;