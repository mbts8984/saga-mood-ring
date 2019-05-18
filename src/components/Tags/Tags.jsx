import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';


class Tags extends Component {
    render() {
        return (
            <>
            <select name="tag" id="">
                <option selected disabled>How Does This Image Make You Feel?</option>

                {this.props.reduxState.tags.map(oneEmotion => {
                    return (
                        <option value={oneEmotion.id}>{oneEmotion.name}</option>
                    )
                })}
            </select>
            <Button onClick={this.handleSubmit} variant="contained" color="secondary"> Add My Feeling </Button>
            </>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Tags);