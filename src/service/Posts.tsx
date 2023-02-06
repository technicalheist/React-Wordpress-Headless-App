import React, { Component } from 'react'

export default class Posts extends Component {

    getAllPosts()
    {
        return fetch(process.env.REACT_APP_API_URL+'/get_posts/')
        .then((res)=> res.json())
        .then((data)=> data)
        .catch((error)=>error);
    }
    
    render() {
        return (
            <div>
                Welcome to Service Component
            </div>
        )
    }
}
