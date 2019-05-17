import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {





    render(){
        return (
            <div>
            <h2>How's THIS Make You Feel?!</h2>
                {this.props.reduxState.images.map(image => {
                    return (
                        <img key={image.id} src={image.path} alt={image.title} className="image" />
                    )
                })}
            
            </div>
        )
    }
}









const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);