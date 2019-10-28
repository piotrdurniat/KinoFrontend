import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import MobileStepper from "@material-ui/core/MobileStepper";

// icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// Forms
import ContactDetailsForm from "../components/ContactDetailsForm";
import PaymentForm from "../components/PaymentForm";
import Review from "../components/Review";
import ChooseSeat from "../components/ChooseSeat";
import OrderConfirmation from "../components/OrderConfirmation";

// custom omponents
import HandleApiCall from "../components/HandleApiCall";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="localhost:3000">
        Kino Solvro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem"
    }
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600 + 230 + theme.spacing(2) * 2)]: {
      minWidth: 600,
      maxWidth: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + 230 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  mobileStepper: {}
}));

const steps = [
  "Wybór miejsca",
  "Dane kontaktowe",
  "Szczegóły płatności",
  "Podsumowanie"
];

export default ({ match }) => {
  const time = match.params.time;

  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  const [contactDetails, setContactDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [paymentDetails, setPaymentDetails] = React.useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: ""
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (selectedSeats.length > 0) handleNext();
  };

  const StepperButtonsDesktop = props => (
    <div className={classes.buttons}>
      {activeStep !== 0 && (
        <Button onClick={handleBack} className={classes.button}>
          Powrót
        </Button>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        {activeStep === steps.length - 1 ? "Złóż zamówienie" : "Dalej"}
      </Button>
    </div>
  );

  const StepperButtonsMobile = props => (
    <div className={classes.mobileStepper}>
      <MobileStepper
        variant="dots"
        steps={steps.length}
        position="bottom"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" type="submit">
            {activeStep === steps.length - 1 ? "Złóż zamówienie" : "Dalej"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Powrót
          </Button>
        }
      />
    </div>
  );

  const renderFunction = result => {
    const getStepContent = step => {
      switch (step) {
        case 0:
          return (
            <ChooseSeat
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              movieData={result}
              time={time}
            />
          );
        case 1:
          return (
            <ContactDetailsForm
              contactDetails={contactDetails}
              setContactDetails={setContactDetails}
            />
          );
        case 2:
          return (
            <PaymentForm
              paymentDetails={paymentDetails}
              setPaymentDetails={setPaymentDetails}
            />
          );
        case 3:
          return (
            <Review
              selectedSeats={selectedSeats}
              contactDetails={contactDetails}
              paymentDetails={paymentDetails}
              movieData={result}
              time={time}
            />
          );
        default:
          throw new Error("Unknown step");
      }
    };

    return (
      <>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.title}
            >
              Rezerwacja miejsc
            </Typography>

            {/*  Visible for desktop */}
            <Hidden xsDown implementation="js">
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Hidden>

            {activeStep === steps.length ? (
              <OrderConfirmation />
            ) : (
              <form onSubmit={handleSubmit}>
                {getStepContent(activeStep)}

                {/*  Visible for desktop */}
                <Hidden xsDown implementation="js">
                  <StepperButtonsDesktop />
                </Hidden>

                {/* Visible for mobile devices */}
                <Hidden smUp implementation="js">
                  <StepperButtonsMobile />
                </Hidden>
              </form>
            )}
          </Paper>
          <Copyright />
        </main>
      </>
    );
  };

  return (
    <HandleApiCall
      data={{
        movie: "78483421"
      }}
      url="http://localhost:5000/movie"
      renderFunction={renderFunction}
    />
  );
};
