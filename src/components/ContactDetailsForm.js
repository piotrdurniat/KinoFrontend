import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default props => {
  const { contactDetails, setContactDetails } = props;

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setContactDetails({
      ...contactDetails,
      [name]: value
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dane kontaktowe
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Imie"
            value={contactDetails.firstName}
            onChange={handleChange}
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
            value={contactDetails.lastName}
            onChange={handleChange}
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
            value={contactDetails.email}
            onChange={handleChange}
            fullWidth
            autoComplete="email"
          />
          <TextField
            type="tel"
            required
            id="phone"
            name="phone"
            label="Phone number"
            value={contactDetails.phone}
            onChange={handleChange}
            fullWidth
            autoComplete="tel"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
