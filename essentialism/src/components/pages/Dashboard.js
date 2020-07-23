import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'


const Dashboard = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/')
    }

    return(
        <div className="dashboard">
            <Button onClick={submit} variant='outlined'>User Logs Out</Button>
        </div>
    )
}

export default Dashboard;