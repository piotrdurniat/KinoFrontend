import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dane osobowe
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Imie"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nazwisko"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="email"
            required
            id="email"
            name="email"
            label="Adres e-mail"
            fullWidth
            autoComplete="email"
          />
          <TextField
            type="tel"
            required
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            autoComplete="tel"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
