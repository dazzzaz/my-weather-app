import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import logo from '../img/logo.gif'
import Home from '../pages/Home'
/* import Blog from '../pages/Blog' */
import Weather from '../pages/WeatherAPI'

class Header extends Component {
        state={
          ZeroY: true,
          PageAbout: false,
          
      }

    componentDidMount() {
        document.addEventListener('scroll', (event) => {
            
            if (window.pageYOffset > 0 ){
                this.setState({ZeroY:false})
            }
            else {
                this.setState({ZeroY:true})
            }
        });
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className="max">
                <Router>

                    <Navbar collapseOnSelect fixed="top" expand="md" bg="blue" className={this.state.ZeroY ? "navba1" : "navba2"} >
                        <Container>
                           {/*  <Link to="/" className="mr-2">
                                <img
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="logoo"
                                    alt="Logo"
                                />
                            </Link> */}
                            <h2 className="mr-5">Weather Site</h2>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto links justify-content-around w-100"  >
                                    <Link to="/"> Home </Link>
                                   {/*  <Link to="/blog"> Blog </Link> */}
                                    <Link to="/weather"> Weather </Link>
                                </Nav>
                                
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/blog" component={Blog} /> */}
                        <Route exact path="/weather" component={Weather} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Header;
