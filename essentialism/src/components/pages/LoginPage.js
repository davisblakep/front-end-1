import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'


const LoginPage = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/dashboard')
    }

    return(
        <div className="loginPage">
            <Button onClick={submit} variant='outlined'>User Logs In</Button>
        </div>
    )
}

export default LoginPage;