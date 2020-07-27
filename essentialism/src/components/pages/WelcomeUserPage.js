import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const WelcomeUserPage = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/choose-values')
    }

    return(
        <div className="welcomePage">
            <div style={{color: "white", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", height: "92vh"}}>
                <h2>Welcome to Essentialism</h2>
                <br />
                <p>Let's add some values that are important to you.</p>
            <Button style={{color: "white"}} color="primary" onClick={submit} variant='outlined'>Continue</Button>
            </div>
        </div>
    )
}

export default WelcomeUserPage;