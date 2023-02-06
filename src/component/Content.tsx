import React, { Component } from 'react'
import Loading from './template/Loading';
import { Link }  from 'react-router-dom';
import { Helmet }  from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
export default class Content extends Component<any,any> {
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
        this.getPost()
        .then((data)=>{
           return this.setState({
              isLoading : false, 
              posts : data
           })
        })
      }
  
      getPost()
      {
          let slug = this.props.match.params.slug;
          let url = process.env.REACT_APP_API_URL+'posts/?_embed&slug='+slug;
          return fetch(url, {
            method: 'GET'
          })
          .then((res)=> res.json())
          .then((data)=> data)
          .catch((error)=>error);
      }
  

    render() {
        if(this.state.isLoading === true) return <Loading/>
        let post = this.state.posts[0];
        let category = (post._embedded['wp:term'][0].length > 0) ? post._embedded['wp:term'][0] : [];
        return(
            <React.Fragment>
             <Helmet>
                <title>{post.title.rendered}</title>
                  </Helmet>
        <div className="main-post-area-holder">
           <article className="single-page-details-holder wow fadeInUp">
              <div className="post-image"> <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="...."/> </div>
              <div className="single-page-other-information-holder">
                 <div className="posted-category">
                    <div className="post-meta-category"> 
                    {
                     
                     category.length > 0 && category.map((value:any,key:any)=>
                        <span key={key}><Link to="#">{value.name}</Link></span> 
                     )
                    }
                    
                    
                    </div>
                 </div>
                 <div className="post-title">
        <h2>{post.title.rendered}</h2>
                 </div>
                 <div className="post-extra-meta">
                    <div className="row">
                       <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="post-author"> <img src="assets/dist/img/author4242.png" alt="...."/> <span><Link to="#">{post._embedded.author[0].name}</Link></span> </div>
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div className="posted-date"> <span><Link to="#">{post.date}</Link></span> </div>
                       </div>
                    </div>
                 </div>
                 <div className="post-the-content">
        <p>{ReactHtmlParser(post.content.rendered)}</p>
                 </div>
                 <div className="post-share">
                    <div className="share"></div>
                 </div>
                 <div className="tags-meta-and-others clearfix">
                    <div className="post-tags"> <span><Link to="#">lifestyle</Link></span> <span><Link to="#">Trending</Link></span> </div>
                    <div className="view-count"> <span className="display-view-count"><i className="fa fa-eye" aria-hidden="true"></i> 568 Views</span> </div>
                 </div>
              </div>
           </article>
        </div>
     
</React.Fragment>
        )
      }
}
