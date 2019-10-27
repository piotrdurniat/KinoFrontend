import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default props => {
  const { paymentDetails, setPaymentDetails } = props;

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metoda płatności
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            value={paymentDetails.cardName}
            onChange={handleChange}
            label="Imie posiadacza karty"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            label="Numer karty"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            value={paymentDetails.expDate}
            onChange={handleChange}
            label="Data wygaśnięcia"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            label="CVV"
            helperText="Ostatnie trzy cyfry na pasku podpisu"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label="Zapamiętaj dane karty kredytowej"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
