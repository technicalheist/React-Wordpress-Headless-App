import React, { Component } from 'react'
import Loader  from 'react-loader-spinner'

export default class Laoding extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="container">
                    <div className="mdl-layout__tab-panel is-active" id="overview">
                    <div className="container center" style={{textAlign:'center'}}>
                    <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={200}
                    width={200}
                    />
                    </div>
                    </div>
                    </div>
            </React.Fragment>
                
        )
    }
}
