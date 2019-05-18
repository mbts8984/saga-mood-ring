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


state = {
    image_id: '',
    tag_id: ''
}
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
    render(){
      return(
          <div>
          <h2>Images Here:</h2>
          
              <h2>How's THIS Make You Feel?!</h2>
              {this.props.reduxState.images.map(image => {
                  return (
                      <div className="imageDiv">
                      <Button variant="contained" color="primary">Backward</Button>
                      <img key={image.id} src={image.path} alt={image.title} className="feelingImg" />
                      <select name="tag" id="">
                          <option selected disabled>How Does This Image Make You Feel?</option>

                          {this.props.fetchTags}
                     </select>
                      <Button variant="contained" color="primary">Forward</Button>
                      </div>
                      )
              })}
          </div>
      )}
    }  
//         {this.props.reduxState.images.map(image => {
//         return (
//             <div>
//             <Card className="image">

//                 <CardMedia
//                     image="Image path"
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
//   }}







const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);