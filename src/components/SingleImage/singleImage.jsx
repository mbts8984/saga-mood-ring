import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import './singleImage.css';


class SingleImage extends Component {


    state = {
        tagId: this.props.image.id,
        imageId: ''
    }

    componentDidMount() {
        this.setState({
            imageId: this.props.image.id
        })
        //this.getTheThing();
    }

    // getTheThing = (event) => {
    //     this.props.dispatch({ type: 'SET_TAG_FOR_DISPLAY', payload: this.state.imageId });
    // }

    handleTagChange = (event) => {

        this.setState({
            ...this.state,
            tagId: event.target.value,
            imageId: this.props.image.id
        })
       // console.log('in handleTagChange with ID:', event.target.value);
    }

    handleSubmit = (event) => {
        console.log('in handleSubmit with tagID: ', this.state.tagId, this.props.image.id);
        this.setState({
            ...this.state,
            tagId: event.target.value,
            imageId: this.props.image.id
        })
        this.props.dispatch({ type: 'ADD_TAG', payload: this.state })
        //let url = `/api/imagetag/${this.state.imageId}`
        this.props.dispatch({ type: 'SET_TAG_FOR_DISPLAY', payload: this.state });
    }

    render(){
        console.log('CHASE PROPS: ', this.props)
        console.log('LOOK HERE FOR RENDERING BUSINESS: ', this.state.imageId)
        console.log('IMAGE ID', this.state.imageId)
        return (
            <>
            <img src={this.props.image.path} className="singleImage" alt={this.props.image.title}/>
            <select value={this.state.tagId} onChange={this.handleTagChange}>
                <option disabled value="0">This Image Makes Me Feel: </option>
                {/* <option>Select</option> */}
                {this.props.reduxState.tags.map(tag => {
                    return (
                        <option key={tag.id} value={tag.id}>{tag.name}</option>
                    )
                })}
            </select>
            <Button onClick={this.handleSubmit} variant="contained" color="secondary"> Add My Feeling </Button>
            <ul>
                    {this.props.reduxState.newTagToShow.map(picId => {
                        if(picId.id === this.state.imageId){
                            return(
                                <li>{JSON.stringify(this.props.reduxState.picId.name)}</li>
                            )
                        }
                    })}
            </ul>
            
            
            <li>{this.props.image.tags}</li>
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