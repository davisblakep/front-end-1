import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'


const Dashboard = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/')
    }

    const addValues = () => {
        history.push('/dashboard/values')
    }

    return(
        <div className="dashboard">
            <Button onClick={submit} variant='outlined'>User Logs Out</Button>
            <Button onClick={addValues} variant='outlined'>User Chooses Yes to Add Values</Button>
        </div>
    )
}

export default Dashboard;