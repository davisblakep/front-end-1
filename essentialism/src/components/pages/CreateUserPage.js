import React from "react";
// import { useHistory } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import SignupForm from "../forms/SignupForm";

const CreateUserPage = () => {
  // const history = useHistory();

  // const submit = () => {
  //     history.push('/login')
  // }

  return (
    <div className="createUserPage">
      <SignupForm />
    </div>
  );
};

export default CreateUserPage;
