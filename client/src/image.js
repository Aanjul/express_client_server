import React, { Component} from 'react';

class Image extends Component {
    render(){
        return(
            <img src={this.props.source} alt={this.props.text}/>
        )
    }
}

export default Image;