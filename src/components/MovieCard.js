import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//custom components
import TimeButtons from "./TimeButtons";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
    maxWidth: 345
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Solvro"
            height="140"
            image={require("../static/images/cards/solvro.png")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Akcja, Dramat, Sci-Fi | 120 min
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <TimeButtons showTimes={props.showTimes} />
        </CardActions>
      </Card>
    </>
  );
};
