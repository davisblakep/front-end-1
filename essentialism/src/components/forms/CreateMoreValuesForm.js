import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { addValue } from "../../state/actions";
// import axios from 'axios';
// import jwt from 'jsonwebtoken';

const formSchema = yup.object().shape({
  value: yup.string().required("Title is a required field"),
  description: yup.string().required("A description is a required field"),
  date: yup.string().required("A goal date is a required field"),
  img: yup.string().required("An Image HTML Link is required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const CreateMoreValuesForm = (props) => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    value: "",
    description: "",
    img: "",
    id: Date.now(),
    isSelected: false,
  });

  const [errorState, setErrorState] = useState({
    value: "",
    description: "",
    img: "",
  });

  const inputChange = (e) => {
    e.persist();
    validate(e);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log("errors", err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  let history = useHistory();

  const submitButton = () => {
    return history.goBack();
  };

  const cancelButton = (e) => {
    return history.goBack();
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addValue(formState);
    setFormState({ value: "", description: "", img: "" });
    // axios
    //     .post("https://vr-direct1.herokuapp.com/api/backer/login", formState)
    //     .then(response => {
    //       const decoded = jwt.decode(response.data.token);
    //       console.log("Axios response from Backer Login submit", response, decoded);
    //       console.log("Axios response from Backer Login userID", decoded.userId);
    //       localStorage.setItem("token", response.data.token);
    //       setTimeout(()=>{history.push(`/backer-dashboard/${decoded.userId}`)},1000);
    //       {props.BackerDisplayName.BackerDisplayName(response, decoded)};
    //       ;})
    //     .catch(err => {console.log("Axios error", err)});
    submitButton();
  };

  return (
    <div style={{ paddingTop: "4%" }}>
      <Card
        className={classes.root}
        style={{ opacity: "0.9", marginLeft: "10%" }}
      >
        <CardContent>
          <Typography style={{ marginLeft: "4%" }} variant="h5" component="h2">
            Create Your Value
          </Typography>
          <br />
          <form
            onSubmit={submitForm}
            className={classes.form}
            autoComplete="off"
          >
            <FormControl required>
              <TextField
                autoFocus
                id="value"
                name="value"
                label="Value"
                value={formState.value}
                onChange={inputChange}
                variant="filled"
                isRequired="true"
              />
              <Typography style={{ color: "red", fontSize: "10px" }}>
                {errorState.value}
              </Typography>
            </FormControl>
            <FormControl required>
              <TextField
                id="description"
                name="description"
                label="Description"
                value={formState.description}
                onChange={inputChange}
                variant="filled"
                type="text"
                required={true}
                isRequired="true"
              />
              <Typography style={{ color: "red", fontSize: "10px" }}>
                {errorState.description}
              </Typography>
            </FormControl>
            <FormControl required>
              <TextField
                id="img"
                name="img"
                label="Image (HTML LINK)"
                value={formState.img}
                onChange={inputChange}
                variant="filled"
                type="text"
                required={true}
                isRequired="true"
              />
              <Typography style={{ color: "red", fontSize: "10px" }}>
                {errorState.img}
              </Typography>
            </FormControl>
            <CardActions>
              <Button type="submit" size="small">
                Submit
              </Button>
              <Button onClick={cancelButton} size="small">
                Cancel
              </Button>
              <a
                style={{ marginBottom: "2%", marginLeft: "6%", font: "1.8rem" }}
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pexels
              </a>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default connect(null, { addValue })(CreateMoreValuesForm);
