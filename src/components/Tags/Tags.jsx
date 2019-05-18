import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';


class Tags extends Component {

    state = {
        tagId: 0
    }

    handleTagChange = (event) => {
        
        this.setState({
            tagId: event.target.value
        })
        console.log('in handleTagChange with ID:', event.target.value);
    }

    handleSubmit = (event) => {
        console.log('in handleSubmit with tagID: ', this.state.tagId);
        this.setState({
            tagId: event.target.value
        })
    }

    render() {
        return (
            <>
            <select value={this.state.tagId} onChange={this.handleTagChange}>
                <option disabled value="0">How Does This Image Make You Feel?</option>
                {/* <option>Select</option> */}
                {this.props.reduxState.tags.map(tag => {
                    return (
                        <option key={tag.id} value={tag.id}>{tag.name}</option>
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