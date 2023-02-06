import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Header extends Component<any,any> {
  render() {
   return (
      <React.Fragment>
        <div className="nav_custom">
<div className="container">
<div className="row d-flex align-items-center">
<div className="col-md-4">
<div className="social-menu-inner clr"><ul><li className="oceanwp-twitter"><a href="https://twitter.com/Harshad92469763" ><span className="fa fa-twitter"></span></a></li><li className="oceanwp-facebook"><a href="https://www.facebook.com/Steamdaily2019/" ><span className="fa fa-facebook"></span></a></li><li className="oceanwp-linkedin"><a href="https://www.linkedin.com/in/harshada-desai-61806118b/" ><span className="fa fa-linkedin"></span></a></li><li className="oceanwp-youtube"><a href="https://www.youtube.com/channel/UCUwR_GxHh8FDwb-kazMjf2w" ><span className="fa fa-youtube"></span></a></li></ul></div>
</div>
<div className="col-md-4">
  <h1><Link to="/">Demo Logo </Link></h1>
  {/* <p style={{marginTop: '-23px'}} className="text-center">Logo Slogan</p> */}
  </div>
<div className="col-md-4">
<div id="medium-searchform" className="header-searchform-wrap clr"> 
<p>
  <Link to="/about">About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
  <Link to="/contact">Contact Us</Link>
</p>
<div className="search-bg"></div></div>
</div>
</div>
 </div>
 </div>
</React.Fragment>
    )
  }
}
