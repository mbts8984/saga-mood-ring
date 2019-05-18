import React, { Component } from 'react';
import { connect } from 'react-redux';
import './feeling.css';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
// import red from '@material-ui/core/colors/red';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import SingleImage from '../SingleImage/singleImage.jsx';
import Tags from '../Tags/Tags.jsx';



// const styles = theme => ({
//     card: {
//         maxWidth: 600,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     actions: {
//         display: 'flex',
//     }
// });


class Feeling extends Component {

    state = {
        index: 0
    }


    handleSubmit = (event) => {
        console.log('in handleSubmit');
        
    }

    handleIncrease = (event) => {
        console.log('in handleIncrease');
        
    }

    handleDecrease = (event) => {
        console.log('in handleDecrease')
    }

    render(){
        console.log('LOOK HERE FOR TAGS STUFF: ', this.props.reduxState.tags);
        let index= this.state.index
      return(
          <div>
          <h2>Images Here:</h2>
              <Button onClick={this.handleDecrease} variant="contained" color="primary">Previous Image</Button>
              {this.props.reduxState.images.map((image, i) => {
                  if(image.id-1 === index){
                  return (
                      <SingleImage key={i} image={image}/>
                  )}}
              )}
             
              <Tags/>
              <>
              <Button onClick={this.handleIncrease} variant="contained" color="primary">Forward</Button>
              </>
          </div>  
           
      )}
    }        

          
      
      

{/* <img key={image.id} src={image.path} alt={image.title} className="feelingImg" /> */ }


{/* //         {this.props.reduxState.images.map(image => { */}
{/* //         return (
//             <div>
//             <Card className="image"> */}
  {/* <CardMedia */}
{/* //                     image="Image path"
//                     title="IMAGE PATH"
//                 />
//                 <Input placeholder="Test"></Input>
//                 <CardActions disableActionSpacing>
//                     <IconButton aria-label="Arrow Back">
//                         <ArrowBackIcon />
//                     </IconButton>
//                     <IconButton aria-label="Arrow Forward">
//                         <ArrowForwardIcon />
//                     </IconButton>
//                 </CardActions>
//             </Card>
//             </div>
//         ));
        
//     })
//   }} */}







const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);