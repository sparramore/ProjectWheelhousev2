import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CPlusPlus from '../../media/c++2.png'
import Java from '../../media/java.png'
import JavaScript from '../../media/javascript.png'
import CSharp from '../../media/c#.png'
import PHP from '../../media/php.png'
import Python from '../../media/python.png'
import C from '../../media/c.png'
import SQL from '../../media/sql.png'



const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140
  },
};



function MediaCard(props) {
  const { classes } = props;
  function HandleClick()
  {
    console.log("clicked")
    props.ObjectClick(props.id);
  }
  const BKColor = props.backgroundColor == "red" ? {background: 'red'} : {background: 'white'};
  let Image;
  //this is hacky, but I don't have time to integrate webpack and I'm not sure my files are structured properly.yarn
  switch(props.imageLink)
  {
    case 0:
    {
      Image = CPlusPlus;
      break;
    }
    case 1:
    {
      Image = Java;
      break;
    }
    case 2:
    {
      Image = JavaScript;
      break;
    }
    case 3:
    {
      Image = CSharp;
      break;
    }
    case 4:
    {
      Image = PHP;
      break;
    }
    case 5:
    {
      Image = Python;
      break;
    }
    case 6:
    {
      Image = C;
      break;
    }
    case 7:
    {
      Image = SQL;
      break;
    }

  }
  return (
    <Card className={classes.card} onClick={HandleClick} style={BKColor}>
      <CardActionArea>
        <CardMedia 
          component="img"
          style={styles.media}
          image={Image}
          title={props.skill}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.skill}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
