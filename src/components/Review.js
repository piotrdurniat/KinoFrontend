import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

// custom components
import { ticketPrices } from "./tickets";

const payments = [
  { name: "cardName", label: "Posiadacz karty" },
  { name: "cardNumber", label: "Numer karty" },
  { name: "expDate", label: "Data wygaśnięcia" }
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default props => {
  const classes = useStyles();

  const {movieData, time} = props;
  const timeFormatted = new Intl.DateTimeFormat("pl", {
    timeZone: "Europe/Warsaw",
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(time * 1000);
  const { selectedSeats, contactDetails, paymentDetails } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Podsumowanie zamówienia
      </Typography>
      <Typography variant="body1">
        {movieData.title}
      </Typography>
      <Typography variant="body2">
        {timeFormatted}, sala 4
      </Typography>
      <List disablePadding>
        {selectedSeats.map(product => (
          <ListItem
            className={classes.listItem}
            key={product.row + product.num}
          >
            <ListItemText
              primary={product.row + product.num}
              secondary={product.type}
            />
            <Typography variant="body2">
              {ticketPrices[product.type]}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Suma" />
          <Typography variant="subtitle1" className={classes.total}>
            {selectedSeats.reduce(
              (previous, current) => previous + ticketPrices[current.type],
              0
            )}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dane kontaktowe
          </Typography>
          <Typography gutterBottom>
            {contactDetails.firstName} {contactDetails.lastName}
          </Typography>
          <Typography gutterBottom>{contactDetails.email}</Typography>
          <Typography gutterBottom>{contactDetails.phone}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Szczegóły płatności
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.label}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    {paymentDetails[payment.name]}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
