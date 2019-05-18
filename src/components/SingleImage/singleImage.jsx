import React, { Component } from 'react';
import { connect } from 'react-redux';


class SingleImage extends Component {
    render(){
        return (
            <>
            <img src={this.props.image.path} />
            <p>TEST HERE</p>
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