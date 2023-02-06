import React, { Component } from 'react';
// import ReactHtmlParser from 'react-html-parser';
//import { Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
       return (
           <React.Fragment>
              
        <aside className="sidebar">
           <div className="sidebar-inner">
              <div className="widget widget-about-me wow fadeInUp">
                 <div className="widget-content">
                    <div className="widget-about-me-profile"> <img src="assets/dist/img/profile.jpg" alt="..."/> </div>
                    <div className="widget-extra-info-holder">
                       <div className="widget-author-name">
                          <h3>John Doe</h3>
                          <span className="author-profession">The Blogger</span> 
                       </div>
                       <div className="widget-author-bio">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                       </div>
                    
                       <div className="widget-author-signature"> <img src="assets/dist/img/post/man/signature-one.jpg" alt="..."/> </div>
                    </div>
                    
                 </div>
              </div>
             
           </div>
        </aside>
           </React.Fragment>
        )
    }
}
