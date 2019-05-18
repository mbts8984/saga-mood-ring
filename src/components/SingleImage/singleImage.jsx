import React, { Component } from 'react';
import { connect } from 'react-redux';
import './singleImage.css';


class SingleImage extends Component {
    render(){
        return (
            <>
            <img src={this.props.image.path} className="singleImage" alt=""/>
            </>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(SingleImage);