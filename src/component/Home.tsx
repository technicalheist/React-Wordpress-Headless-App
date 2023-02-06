import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import Loading from './template/Loading';
import ReactHtmlParser from 'react-html-parser';
class Home extends Component<any,any>{

   constructor(props:any)
   {
      super(props);
      this.state = {
         posts : [],
         isLoading : true
     }
   }
   componentDidMount() {
      window.scrollTo(0, 0)
      this.getRecentPosts()
      .then((data)=>{
         return this.setState({
            isLoading : false, 
            posts : data
         })
      })
    }

    getRecentPosts()
    {
        return fetch(process.env.REACT_APP_API_URL+'posts/?_embed')
        .then((res)=> res.json())
        .then((data)=> data)
        .catch((error)=>error);
    }


    render(){
      if (this.state.isLoading === true) return <Loading/>
      const posts = this.state.posts;
    return (
            <React.Fragment>
                  
               <div className="main-post-area-holder">
               <div className="card">   
               {
                posts &&
                posts.length > 0 && 
                posts.map(
                    (post:any,index:any) => 
                    <div key={index} className="card bg-light">
                  <div className="card-body text-center">
                    <article  className="post-details-holder wow fadeInUp">
                    <div className="post-image"> <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="...."/> </div>
                    <div className="post-title">
                <h2><Link to={post.slug}>{post.title.rendered}</Link></h2>
                    </div>
                    <div className="post-the-content clearfix layout-one-first-letter">
               {ReactHtmlParser(post.excerpt.rendered)}
                    </div>
                    <div className="post-permalink"> 
                    <button className="btn btn-default text-center"><Link to={post.slug}>Continue Reading</Link></button> </div>
                    {/* <div className="post-meta-and-share">
                       <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                             <div className="post-author"> <span className="post-author"><Link to="#">Sparkle Themes</Link></span> </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                             <div className="post-share">
                                <div className="share"></div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                             <div className="post-comment-count"> <span className="post-comment-count"><Link to="#">0 Comment</Link></span> </div>
                          </div>
                       </div>
                    </div> */}
                     <br/>
                 </article>
                   </div>
                   </div>
                    )
               }
               </div>
               </div>
           
         <div className="pagination_holder">
            <ul className="pagination">
               <li className="disabled"><Link to="#">«</Link></li>
               <li className="active"><Link to="#">1 <span className="sr-only">(current)</span></Link></li>
               <li><Link to="#">2</Link></li>
               <li><Link to="#">3</Link></li>
               <li><Link to="#">4</Link></li>
               <li><Link to="#">5</Link></li>
               <li><Link to="#">»</Link></li>
            </ul>
         </div>
     
            </React.Fragment>
        );
    }

     
}

export default Home; 