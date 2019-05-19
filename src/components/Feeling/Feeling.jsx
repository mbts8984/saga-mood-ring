import React, { Component } from 'react';
import { connect } from 'react-redux';
import './feeling.css';
import { Button } from '@material-ui/core';
import SingleImage from '../SingleImage/singleImage.jsx';
//import Tags from '../Tags/Tags.jsx';


class Feeling extends Component {

    state = {
        index: 0
    }

    //if the original index state is 0 and the original index in the images array -1 is 0, show the first image
    // if the the state's index is not 0, increase the index value by 1 for each click
    handleIncrease = (event) => {
        console.log('in handleIncrease');
        if(this.state.index === this.props.reduxState.images.length-1){
            this.setState({
                index: 0
            })
        }
        else{
            this.setState({
                index: this.state.index+1
            })
        }
        
    }

    //if the original index is set to 0, decrement through the images array backwards from the 'top' of the array ([5] I think)
    //if the image index is not set to zero, move through the array backwards.
    handleDecrease = (event) => {
        console.log('in handleDecrease')
        if(this.state.index === 0){
            this.setState({
                index: this.props.reduxState.images.length -1
            })
        }
        else{
            this.setState({
                index: this.state.index -1
            })
        }
    }

    render(){
       // console.log('Here is the image array you asked for: ', this.props.reduxState.images);
        
       // console.log('LOOK HERE FOR TAGS STUFF: ', this.props.reduxState.tags);
        let index= this.state.index
      return(
          <div className="imageDiv">
          <h2>How Does This Image Make You Feel?</h2>
              <Button onClick={this.handleDecrease} variant="contained" color="primary">Previous Image</Button>
              {this.props.reduxState.images.map((image, i) => {
                  if(image.id-1 === index){
                  return (
                      <SingleImage key={i} image={image}/>
                  )}}
              )}
             
              {/* <Tags/> */}
              <>
              <Button onClick={this.handleIncrease} variant="contained" color="primary">Forward</Button>
              </>
          </div>  
           
      )}
    }        

          
      
      

// {/* <img key={image.id} src={image.path} alt={image.title} className="feelingImg" /> */ }


// {/* //         {this.props.reduxState.images.map(image => { */}
// {/* //         return (
// //             <div>
// //             <Card className="image"> */}
//   {/* <CardMedia */}
// {/* //                     image="Image path"
// //                     title="IMAGE PATH"
// //                 />
// //                 <Input placeholder="Test"></Input>
// //                 <CardActions disableActionSpacing>
// //                     <IconButton aria-label="Arrow Back">
// //                         <ArrowBackIcon />
// //                     </IconButton>
// //                     <IconButton aria-label="Arrow Forward">
// //                         <ArrowForwardIcon />
// //                     </IconButton>
// //                 </CardActions>
// //             </Card>
// //             </div>
// //         ));
        
// //     })
// //   }} */}







const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);