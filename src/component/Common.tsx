import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Approute from './Approute';
import Header from './template/Header';
import Nav from './template/Nav';
import Footer from './template/Footer';
// import Banner from './template/Banner';
export default class Common extends Component<any,any> {
    render() {
      
        return (
            <React.Fragment>
              <Router>
              <Header/>
              
              <main id="main" className="site-main clr" role="main">
               <div id="content-wrap" className="container clr">
                  <div id="primary" className="content-area clr">
                  <div className="container">
                  <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <Approute/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <Nav/>
                  </div>
                  </div>
                   </div>
                  </div>
                </div>
              </main>
              <Footer/>
              </Router>
            </React.Fragment>
        )
    }

    
}
